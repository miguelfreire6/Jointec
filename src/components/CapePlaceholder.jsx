export default function CapePlaceholder({ label }) {
  return (
    <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-brand-dark to-slate-700 px-5 text-center">
      {/* TODO: Replace with official CAPE machine image once provided. */}
      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/62">
        {label}
      </span>
    </div>
  );
}
