import { useEffect, useState } from "react";

const TIERS = [
  { key: "A", label: "Tier A · Hot",  color: "bg-brand-accent" },
  { key: "B", label: "Tier B · Warm", color: "bg-orange-300" },
  { key: "C", label: "Tier C · Cold", color: "bg-stone-400" },
];

const CHECKLIST_BARS = [
  { key: "Done",        label: "Done",        color: "bg-emerald-500" },
  { key: "In progress", label: "In progress", color: "bg-brand-accent" },
  { key: "Blocked",     label: "Blocked",     color: "bg-red-500" },
  { key: "Not started", label: "Not started", color: "bg-stone-500" },
];

export default function Dashboard({ onLogout }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/internal/data", { credentials: "include" })
      .then(async (r) => {
        if (!r.ok) throw new Error("Couldn't load data");
        setData(await r.json());
      })
      .catch((e) => setError(e.message));
  }, []);

  const logout = async () => {
    await fetch("/api/internal/auth", { method: "DELETE", credentials: "include" });
    onLogout();
  };

  if (error) {
    return (
      <Shell onLogout={logout}>
        <p className="text-red-300">{error}</p>
      </Shell>
    );
  }

  if (!data) {
    return (
      <Shell onLogout={logout}>
        <p className="text-white/55">Loading…</p>
      </Shell>
    );
  }

  const leads = data.leads || {};
  const checklist = data.checklist || {};
  const risks = data.risks?.top_risks || [];
  const total = leads.total || 0;
  const tierA = leads.A || 0;
  const asljunga = leads.asljunga || 0;
  const checklistTotal = checklist.total || 0;
  const checklistDone = checklist.Done || 0;
  const checklistPct = checklistTotal
    ? Math.round((checklistDone / checklistTotal) * 100)
    : 0;

  const fefpebDate = new Date("2026-09-30");
  const today = new Date();
  const daysToFefpeb = Math.max(
    0,
    Math.ceil((fefpebDate - today) / (1000 * 60 * 60 * 24)),
  );

  return (
    <Shell onLogout={logout} asOf={data.as_of} daysToFefpeb={daysToFefpeb}>
      {/* Top stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Total leads" value={total} sub="Target 30 by FEFPEB" accent="emerald" />
        <Stat label="Tier A · Hot" value={tierA} sub="Decision-makers" accent="orange" />
        <Stat label="Åsljunga booked" value={asljunga} sub="Target 20" accent="white" />
        <Stat label="Checklist done"  value={`${checklistPct}%`} sub={`${checklistDone}/${checklistTotal}`} accent="red" />
      </div>

      {/* Headline */}
      {data.headline ? (
        <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {data.eyebrow || "This week"}
          </p>
          <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg">
            {data.headline}
          </p>
        </section>
      ) : null}

      {/* Lead funnel */}
      <Section title="Lead funnel">
        <div className="space-y-3">
          {TIERS.map((t) => {
            const v = leads[t.key] || 0;
            const max = Math.max(1, leads.A || 0, leads.B || 0, leads.C || 0);
            const pct = Math.round((v / max) * 100);
            return (
              <div key={t.key}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-white/72">{t.label}</span>
                  <span className="font-mono text-base font-semibold text-white">{v}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
                  <div className={`h-full ${t.color}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Machine interest */}
      <Section title="Machine interest">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            ["klotsproduktionslinje", "Klotsproduktionslinje"],
            ["plastning_nonstop",     "Plastning Nonstop"],
            ["topfoil_pallet",        "Topfoil Pallet"],
            ["cape_nailing",          "CAPE Nailing"],
            ["cape_cable_drums",      "CAPE Cable Drums"],
          ].map(([k, label]) => (
            <div key={k} className="flex items-baseline justify-between rounded-2xl bg-white/[0.04] px-4 py-3">
              <span className="text-sm text-white/72">{label}</span>
              <span className="font-mono text-lg font-semibold text-brand-accent">
                {leads[k] || 0}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Checklist progress */}
      <Section title="FEFPEB checklist">
        <div className="flex h-3 overflow-hidden rounded-full bg-white/8">
          {CHECKLIST_BARS.map((b) => {
            const v = checklist[b.key] || 0;
            const pct = checklistTotal ? (v / checklistTotal) * 100 : 0;
            if (pct === 0) return null;
            return (
              <div key={b.key} className={`h-full ${b.color}`} style={{ width: `${pct}%` }} />
            );
          })}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {CHECKLIST_BARS.map((b) => (
            <div key={b.key} className="flex items-center gap-2 rounded-xl bg-white/[0.04] px-3 py-2">
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${b.color}`} />
              <span className="text-xs text-white/72">{b.label}</span>
              <span className="ml-auto font-mono text-sm font-semibold text-white">
                {checklist[b.key] || 0}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Top open risks */}
      <Section title="Top open risks">
        {risks.length === 0 ? (
          <p className="text-sm text-white/55">No open risks recorded.</p>
        ) : (
          <ul className="space-y-2">
            {risks.slice(0, 6).map((r, idx) => {
              const score = r.score || 0;
              const cls =
                score >= 6 ? "bg-red-500"
                : score >= 3 ? "bg-brand-accent"
                : "bg-stone-500";
              return (
                <li key={idx} className="flex items-start gap-3 rounded-2xl bg-white/[0.04] px-4 py-3">
                  <span className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${cls} text-xs font-bold text-white`}>
                    {score}
                  </span>
                  <span className="text-sm leading-6 text-white/82">{r.risk}</span>
                </li>
              );
            })}
          </ul>
        )}
      </Section>

      {/* Asks */}
      {data.asks && data.asks.length > 0 ? (
        <Section title="This week's asks">
          <ol className="space-y-2">
            {data.asks.map((a, i) => (
              <li key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white/82">
                <span className="font-semibold text-brand-accent">{a.owner}</span> — {a.action}
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      {/* Budget summary */}
      {data.budget ? (
        <Section title="Budget (€)">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <KV k="Low band"  v={data.budget.low} />
            <KV k="High band" v={data.budget.high} />
            <KV k="Planned"   v={data.budget.planned} accent />
            <KV k="Actual"    v={data.budget.actual} />
          </div>
        </Section>
      ) : null}
    </Shell>
  );
}

function Shell({ children, onLogout, asOf, daysToFefpeb }) {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-brand-dark/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3">
          <div>
            <div className="text-xl font-bold tracking-[-0.03em]">
              JOIN<span className="text-brand-accent">TEC</span>{" "}
              <span className="ml-1 text-[10px] uppercase tracking-[0.32em] text-brand-accent">Internal</span>
            </div>
            {asOf ? (
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.28em] text-white/45">
                Snapshot · {asOf}
                {typeof daysToFefpeb === "number" ? (
                  <span className="ml-3 text-brand-accent">{daysToFefpeb} d → Båstad</span>
                ) : null}
              </div>
            ) : null}
          </div>
          <button
            onClick={onLogout}
            className="rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72 transition hover:border-brand-accent hover:text-brand-accent"
          >
            Log out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 pb-16 pt-6 sm:pt-8">
        {children}
      </main>
    </div>
  );
}

function Stat({ label, value, sub, accent }) {
  const ring = {
    emerald: "border-l-emerald-500",
    orange:  "border-l-brand-accent",
    red:     "border-l-red-500",
    white:   "border-l-white/30",
  }[accent || "white"];

  return (
    <div className={`rounded-2xl border-l-4 ${ring} bg-white/[0.04] px-4 py-4`}>
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
        {label}
      </div>
      <div className="mt-1 text-3xl font-light tracking-tight">{value}</div>
      <div className="mt-1 text-[11px] text-white/45">{sub}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
        {title}
      </h3>
      {children}
    </section>
  );
}

function KV({ k, v, accent }) {
  const fmt = (n) =>
    typeof n === "number"
      ? `€${n.toLocaleString("en-US").replace(/,/g, " ")}`
      : n || "—";
  return (
    <div className="rounded-2xl bg-white/[0.04] px-4 py-3">
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">{k}</div>
      <div className={`mt-1 text-lg font-semibold ${accent ? "text-brand-accent" : "text-white"}`}>
        {fmt(v)}
      </div>
    </div>
  );
}
