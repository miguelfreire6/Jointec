// GET /api/internal/ping — is the visitor authed?
import { requireAuth } from "./_auth-guard.js";

export default function handler(req, res) {
  if (!requireAuth(req, res)) return;
  res.status(200).json({ ok: true });
}
