import { createSessionCookie, hasAdminConfig } from "../_lib/auth.js";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!hasAdminConfig()) {
    response.status(503).json({
      error: "Admin authentication is not configured.",
      requiredEnv: ["ADMIN_PASSWORD", "ADMIN_SESSION_SECRET"],
    });
    return;
  }

  const { password } = request.body || {};

  if (String(password || "") !== process.env.ADMIN_PASSWORD) {
    response.status(401).json({ error: "Wrong admin password." });
    return;
  }

  response.setHeader("Set-Cookie", createSessionCookie());
  response.status(200).json({ ok: true });
}
