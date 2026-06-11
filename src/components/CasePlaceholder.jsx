export default function CasePlaceholder({ label }) {
  return (
    <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-brand-dark to-slate-700 p-5 text-center">
      {/* TODO: Replace with real customer site image. */}
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/62">
        Image coming soon · {label}
      </span>
    </div>
  );
}
