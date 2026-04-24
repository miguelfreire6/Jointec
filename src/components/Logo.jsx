import logoSrc from "../assets/logo-source.svg";

function Logo({ size = "md", className = "" }) {
  const heightClass = size === "sm" ? "h-7" : "h-8 sm:h-10";

  return (
    <img
      src={logoSrc}
      alt="Jointec"
      className={`${heightClass} w-auto ${className}`}
    />
  );
}

export default Logo;
