import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

const PING_URL = "/api/internal/ping";

export default function Internal() {
  const [authed, setAuthed] = useState(null); // null=checking, true/false

  useEffect(() => {
    fetch(PING_URL, { credentials: "include" })
      .then((r) => setAuthed(r.ok))
      .catch(() => setAuthed(false));
  }, []);

  if (authed === null) {
    return (
      <div className="grid min-h-screen place-items-center bg-brand-dark text-white">
        <span className="text-sm uppercase tracking-[0.32em] text-white/45">Checking…</span>
      </div>
    );
  }

  if (!authed) {
    return <Login onAuthed={() => setAuthed(true)} />;
  }

  return <Dashboard onLogout={() => setAuthed(false)} />;
}
