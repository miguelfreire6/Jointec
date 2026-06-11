const GRAPH_ROOT = "https://graph.microsoft.com/v1.0";

export const listFieldNames = [
  "Title",
  "Company",
  "Email",
  "Phone",
  "Country",
  "MachineInterest",
  "SourcePage",
  "LeadStatus",
  "Message",
  "Notes",
  "Consent",
  "CreatedDate",
];

export function hasGraphConfig() {
  return Boolean(
    process.env.MS_TENANT_ID &&
      process.env.MS_CLIENT_ID &&
      process.env.MS_CLIENT_SECRET &&
      process.env.MS_SITE_ID &&
      process.env.MS_LIST_ID,
  );
}

export function missingGraphConfig() {
  return ["MS_TENANT_ID", "MS_CLIENT_ID", "MS_CLIENT_SECRET", "MS_SITE_ID", "MS_LIST_ID"].filter(
    (name) => !process.env[name],
  );
}

export function toMicrosoftFields(record) {
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

export function fromMicrosoftItem(item) {
  const fields = item.fields || {};

  return {
    id: item.id,
    name: fields.Title || fields.Name || "",
    company: fields.Company || "",
    email: fields.Email || "",
    phone: fields.Phone || "",
    country: fields.Country || "",
    machineInterest: fields.MachineInterest || "",
    sourcePage: fields.SourcePage || "",
    status: fields.LeadStatus || "New lead",
    message: fields.Message || "",
    notes: fields.Notes || "",
    consent: fields.Consent === true || fields.Consent === "Yes",
    createdAt: fields.CreatedDate || item.createdDateTime || "",
  };
}

async function getAccessToken() {
  const tokenResponse = await fetch(`https://login.microsoftonline.com/${process.env.MS_TENANT_ID}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.MS_CLIENT_ID,
      client_secret: process.env.MS_CLIENT_SECRET,
      scope: "https://graph.microsoft.com/.default",
      grant_type: "client_credentials",
    }),
  });

  if (!tokenResponse.ok) {
    const text = await tokenResponse.text();
    throw new Error(`Microsoft token request failed with ${tokenResponse.status}: ${text}`);
  }

  const { access_token: accessToken } = await tokenResponse.json();
  return accessToken;
}

async function graphFetch(path, options = {}) {
  const accessToken = await getAccessToken();
  const result = await fetch(`${GRAPH_ROOT}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!result.ok) {
    const text = await result.text();
    throw new Error(`Microsoft Graph request failed with ${result.status}: ${text}`);
  }

  if (result.status === 204) return null;
  return result.json();
}

export async function createLeadItem(record) {
  const data = await graphFetch(`/sites/${process.env.MS_SITE_ID}/lists/${process.env.MS_LIST_ID}/items`, {
    method: "POST",
    body: JSON.stringify({ fields: toMicrosoftFields(record) }),
  });

  return fromMicrosoftItem(data);
}

export async function listLeadItems() {
  const select = listFieldNames.join(",");
  const data = await graphFetch(
    `/sites/${process.env.MS_SITE_ID}/lists/${process.env.MS_LIST_ID}/items?expand=fields(select=${select})&$top=200`,
  );

  return (data.value || []).map(fromMicrosoftItem);
}

export async function updateLeadItem(id, patch) {
  const fields = {};
  if (patch.status) fields.LeadStatus = patch.status;
  if (typeof patch.notes === "string") fields.Notes = patch.notes;

  await graphFetch(`/sites/${process.env.MS_SITE_ID}/lists/${process.env.MS_LIST_ID}/items/${id}/fields`, {
    method: "PATCH",
    body: JSON.stringify(fields),
  });

  return { id, ...patch };
}
