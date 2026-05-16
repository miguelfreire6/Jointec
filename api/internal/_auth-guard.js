// Shared cookie check used by every protected endpoint under /api/internal/.

const COOKIE_NAME = "jt_internal";

function parseCookies(header) {
  if (!header) return {};
  return Object.fromEntries(
    header.split(";").map((p) => {
      const idx = p.indexOf("=");
      if (idx < 0) return [p.trim(), ""];
      return [p.slice(0, idx).trim(), decodeURIComponent(p.slice(idx + 1).trim())];
    }),
  );
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export function requireAuth(req, res) {
  const expected = process.env.INTERNAL_PASSWORD;
  if (!expected) {
    res.status(500).json({ error: "INTERNAL_PASSWORD env var not set" });
    return false;
  }
  const cookies = parseCookies(req.headers.cookie);
  const got = cookies[COOKIE_NAME] || "";
  if (!got || !timingSafeEqual(got, expected)) {
    res.status(401).json({ error: "unauthorized" });
    return false;
  }
  return true;
}
