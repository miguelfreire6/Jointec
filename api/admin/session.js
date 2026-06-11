import { hasAdminConfig, isAuthenticated } from "../_lib/auth.js";
import { hasGraphConfig, missingGraphConfig } from "../_lib/microsoftList.js";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  response.status(200).json({
    authenticated: hasAdminConfig() && isAuthenticated(request),
    adminConfigured: hasAdminConfig(),
    microsoftConfigured: hasGraphConfig(),
    missingMicrosoftEnv: missingGraphConfig(),
  });
}
