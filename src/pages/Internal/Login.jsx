import { useState } from "react";

export default function Login({ onAuthed }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/internal/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        credentials: "include",
      });

      if (res.ok) {
        onAuthed();
      } else {
        setError("Incorrect password");
      }
    } catch {
      setError("Couldn't reach the server");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grid min-h-screen place-items-center bg-brand-dark text-white px-5">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <div className="text-3xl font-bold tracking-[-0.03em]">
            JOIN<span className="text-brand-accent">TEC</span>
          </div>
          <div className="mt-3 text-[11px] uppercase tracking-[0.32em] text-brand-accent">
            Internal dashboard
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/12 bg-white/[0.04] p-6 sm:p-8"
        >
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/55">
              Team password
            </span>
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-brand-accent"
              placeholder="•••••••"
              required
            />
          </label>

          {error ? (
            <p className="mt-4 text-sm text-red-300">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={submitting || !password}
            className="mt-6 w-full rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:bg-white/12"
          >
            {submitting ? "Checking…" : "Enter"}
          </button>

          <p className="mt-6 text-center text-[11px] uppercase tracking-[0.22em] text-white/40">
            For Karl-Johan · Louise · Miguel only
          </p>
        </form>
      </div>
    </div>
  );
}
