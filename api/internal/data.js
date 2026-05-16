// GET /api/internal/data — returns the latest dashboard snapshot.
// Snapshot file is committed into the repo by the Jointec-ops workflow 7;
// in production this is updated daily by the Mac mini job.

import fs from "node:fs";
import path from "node:path";
import { requireAuth } from "./_auth-guard.js";

export default function handler(req, res) {
  if (!requireAuth(req, res)) return;

  try {
    const snapshotPath = path.join(process.cwd(), "api", "internal", "_snapshot.json");
    const raw = fs.readFileSync(snapshotPath, "utf-8");
    const data = JSON.parse(raw);
    res.setHeader("Cache-Control", "private, max-age=60");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({
      error: "snapshot unavailable",
      detail: String(e && e.message),
    });
  }
}
