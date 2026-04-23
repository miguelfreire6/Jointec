import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: t("navbar.services"), href: "#services" },
    { label: t("navbar.sustainability"), href: "#sustainability" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-nav backdrop-blur-xl"
          : "bg-white/88 backdrop-blur-lg"
      }`}
    >
      <div className="section-shell flex items-center justify-between py-4 sm:py-5">
        <a
          href="#top"
          className="logo mr-4 inline-flex shrink-0 items-center sm:mr-6"
          aria-label={t("navbar.homeLabel")}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher />
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="primary-button px-5 py-3">
            {t("navbar.cta")}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/10 text-brand-dark transition hover:border-brand-accent/40 hover:text-brand-accent lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={t("navbar.toggleNavigation")}
        >
          <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand-dark/8 bg-white lg:hidden">
          <div className="section-shell flex flex-col gap-4 py-4">
            <LanguageSwitcher />
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link w-fit"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="primary-button w-full" onClick={() => setOpen(false)}>
              {t("navbar.cta")}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
