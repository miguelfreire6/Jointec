const requiredFields = ["name", "company", "email", "country", "machineInterest", "sourcePage"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const graphRoot = "https://graph.microsoft.com/v1.0";
const graphEnv = ["MS_TENANT_ID", "MS_CLIENT_ID", "MS_CLIENT_SECRET", "MS_SITE_ID", "MS_LIST_ID"];

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function missingGraphConfig(env) {
  return graphEnv.filter((name) => !env[name]);
}

function hasGraphConfig(env) {
  return missingGraphConfig(env).length === 0;
}

function toMicrosoftFields(record) {
  return {
    Title: record.name,
    Company: record.company,
    Email: record.email,
    Phone: record.phone || "",
    Country: record.country,
    MachineInterest: record.machineInterest,
    SourcePage: record.sourcePage,
    LeadStatus: record.status || "New lead",
    Message: record.message || "",
    Notes: record.notes || "",
    Consent: record.consent ? "Yes" : "No",
    CreatedDate: record.createdAt || new Date().toISOString(),
  };
}

async function getAccessToken(env) {
  const tokenResponse = await fetch(`https://login.microsoftonline.com/${env.MS_TENANT_ID}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.MS_CLIENT_ID,
      client_secret: env.MS_CLIENT_SECRET,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });

  if (!tokenResponse.ok) {
    const text = await tokenResponse.text();
    throw new Error(`Microsoft token request failed with ${tokenResponse.status}: ${text}`);
  }

  const data = await tokenResponse.json();
  return data.access_token;
}

async function createLeadItem(env, record) {
  const accessToken = await getAccessToken(env);
  const response = await fetch(`${graphRoot}/sites/${env.MS_SITE_ID}/lists/${env.MS_LIST_ID}/items`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields: toMicrosoftFields(record) }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Microsoft Graph request failed with ${response.status}: ${text}`);
  }
}

export async function onRequestPost({ request, env }) {
  let lead;

  try {
    lead = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const missing = requiredFields.filter((field) => !String(lead[field] || "").trim());
  if (missing.length || !emailPattern.test(String(lead.email || "")) || lead.consent !== true) {
    return json({ error: "Invalid lead submission" }, 400);
  }

  const record = {
    ...lead,
    createdAt: lead.createdAt || new Date().toISOString(),
    status: lead.status || "New lead",
    notes: lead.notes || "",
  };

  if (!hasGraphConfig(env)) {
    return json(
      {
        error: "Lead database is not configured in Cloudflare Pages.",
        missingMicrosoftEnv: missingGraphConfig(env),
      },
      501,
    );
  }

  try {
    await createLeadItem(env, record);
    return json({ ok: true }, 201);
  } catch (error) {
    return json(
      {
        error: "Lead integration failed.",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      502,
    );
  }
}

export function onRequestOptions() {
  return new Response(null, { status: 204 });
}

export function onRequestGet() {
  return json({ error: "Method not allowed" }, 405);
}

export function onRequestPut() {
  return json({ error: "Method not allowed" }, 405);
}

export function onRequestPatch() {
  return json({ error: "Method not allowed" }, 405);
}

export function onRequestDelete() {
  return json({ error: "Method not allowed" }, 405);
}
