import { requireAdmin } from "../_lib/auth.js";
import { hasGraphConfig, listLeadItems, missingGraphConfig, updateLeadItem } from "../_lib/microsoftList.js";

export default async function handler(request, response) {
  if (!requireAdmin(request, response)) return;

  if (!hasGraphConfig()) {
    response.status(503).json({
      error: "Microsoft Lists is not configured.",
      missingEnv: missingGraphConfig(),
    });
    return;
  }

  try {
    if (request.method === "GET") {
      const leads = await listLeadItems();
      response.status(200).json({ leads });
      return;
    }

    if (request.method === "PATCH") {
      const { id, status, notes } = request.body || {};
      if (!id) {
        response.status(400).json({ error: "Lead id is required." });
        return;
      }

      const updated = await updateLeadItem(id, { status, notes });
      response.status(200).json({ updated });
      return;
    }

    response.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    response.status(502).json({
      error: "Microsoft Lists request failed.",
      detail: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
