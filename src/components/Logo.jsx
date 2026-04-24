function Logo({ size = "md", className = "" }) {
  const sizeClass =
    size === "sm"
      ? "text-[1.75rem]"
      : "text-[2rem] sm:text-[2.5rem]";

  return (
    <span
      className={`inline-flex items-baseline font-semibold leading-none tracking-[-0.08em] ${sizeClass} ${className}`}
      aria-hidden="true"
    >
      <span className="text-[#2f2f2f]">JOIN</span>
      <span className="text-[#ff7a00]">TEC</span>
    </span>
  );
}

export default Logo;
