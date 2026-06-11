import crypto from "node:crypto";

const COOKIE_NAME = "jointec_admin_session";
const SESSION_SECONDS = 60 * 60 * 8;

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

export function hasAdminConfig() {
  return Boolean(process.env.ADMIN_PASSWORD && getSecret());
}

export function createSessionCookie() {
  const expiresAt = Date.now() + SESSION_SECONDS * 1000;
  const payload = base64url(JSON.stringify({ exp: expiresAt }));
  const signature = crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");

  return `${COOKIE_NAME}=${payload}.${signature}; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=${SESSION_SECONDS}`;
}

export function clearSessionCookie() {
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Strict; Secure; Max-Age=0`;
}

export function isAuthenticated(request) {
  const cookie = request.headers.cookie || "";
  const token = cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_NAME}=`))
    ?.slice(COOKIE_NAME.length + 1);

  if (!token || !getSecret()) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return false;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return Number(session.exp) > Date.now();
  } catch {
    return false;
  }
}

export function requireAdmin(request, response) {
  if (!hasAdminConfig()) {
    response.status(503).json({
      error: "Admin authentication is not configured.",
      requiredEnv: ["ADMIN_PASSWORD", "ADMIN_SESSION_SECRET"],
    });
    return false;
  }

  if (!isAuthenticated(request)) {
    response.status(401).json({ error: "Admin login required." });
    return false;
  }

  return true;
}
