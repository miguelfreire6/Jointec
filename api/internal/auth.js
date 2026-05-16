// POST /api/internal/auth  — set a long-lived cookie if the password matches
// DELETE /api/internal/auth — clear the cookie (logout)
//
// The cookie is httpOnly and value-equals the password (constant-time compared
// in /api/internal/data and /api/internal/ping). Low-stakes internal tool.

const COOKIE_NAME = "jt_internal";
const ONE_WEEK = 60 * 60 * 24 * 7;

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export default async function handler(req, res) {
  const expected = process.env.INTERNAL_PASSWORD;

  if (!expected) {
    res.status(500).json({ error: "INTERNAL_PASSWORD env var not set on Vercel" });
    return;
  }

  if (req.method === "POST") {
    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body); } catch { body = {}; }
    }
    const password = (body && body.password) || "";

    if (!timingSafeEqual(password, expected)) {
      // tiny delay to slow brute-force; not a real security boundary
      await new Promise((r) => setTimeout(r, 400));
      res.status(401).json({ error: "Incorrect password" });
      return;
    }

    res.setHeader(
      "Set-Cookie",
      `${COOKIE_NAME}=${encodeURIComponent(expected)}; Path=/; Max-Age=${ONE_WEEK}; HttpOnly; Secure; SameSite=Lax`,
    );
    res.status(200).json({ ok: true });
    return;
  }

  if (req.method === "DELETE") {
    res.setHeader(
      "Set-Cookie",
      `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
    );
    res.status(200).json({ ok: true });
    return;
  }

  res.setHeader("Allow", "POST, DELETE");
  res.status(405).json({ error: "Method not allowed" });
}
