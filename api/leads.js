import { createLeadItem, hasGraphConfig, missingGraphConfig } from "./_lib/microsoftList.js";

const requiredFields = ["name", "company", "email", "country", "machineInterest", "sourcePage"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Microsoft List columns should use these internal field names:
// Name, Company, Email, Phone, Country, Machine Interest, Source Page, Lead Status,
// Message, Notes, Consent, Created Date.
// TODO: Configure transactional email provider for internal lead notifications to info@jointec.se.
// Suggested providers: Microsoft 365 SMTP, Resend, SendGrid, Mailgun, HubSpot form notification,
// or Power Automate notification.
// TODO: Add automatic confirmation email once email provider is connected.
//
// Production connection options:
// Direct Microsoft Graph path: set MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET,
//    MS_SITE_ID and MS_LIST_ID for an Azure App Registration with Sites.ReadWrite.All
//    or the narrower site/list permissions approved by Jointec.

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const lead = request.body || {};
  const missing = requiredFields.filter((field) => !String(lead[field] || "").trim());

  if (missing.length || !emailPattern.test(String(lead.email || "")) || lead.consent !== true) {
    response.status(400).json({ error: "Invalid lead submission" });
    return;
  }

  const record = {
    ...lead,
    createdAt: lead.createdAt || new Date().toISOString(),
    status: lead.status || "New lead",
    notes: lead.notes || "",
  };

  try {
    if (hasGraphConfig()) {
      await createLeadItem(record);
      response.status(201).json({ ok: true });
      return;
    }

    response.status(501).json({
      error: "Production lead database is not configured yet.",
      missingMicrosoftEnv: missingGraphConfig(),
      leadPreview: record,
    });
  } catch (error) {
    response.status(502).json({
      error: "Lead integration failed.",
      detail: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
