import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-brand-dark/8 bg-white">
      {/* Top — main grid */}
      <div className="section-shell grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="text-2xl font-bold tracking-[-0.03em] text-brand-dark">
            JOIN<span className="text-brand-accent">TEC</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-brand-dark/64">
            {t("footer.description")}
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-brand-dark/45">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Machines column */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
            {t("footer.col_machines")}
          </p>
          <ul className="mt-5 space-y-3 text-sm text-brand-dark/72">
            <li><Link to="/machines/block-production-line" className="hover:text-brand-accent">Block Production Line</Link></li>
            <li><Link to="/machines/microdryer" className="hover:text-brand-accent">Microdryer</Link></li>
            <li><Link to="/machines/nonstop-topfoil-pallet" className="hover:text-brand-accent">Nonstop &amp; Topfoil Pallet</Link></li>
            <li><Link to="/cape" className="hover:text-brand-accent">{t("footer.cape_link")}</Link></li>
          </ul>
        </div>

        {/* Company column */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
            {t("footer.col_company")}
          </p>
          <ul className="mt-5 space-y-3 text-sm text-brand-dark/72">
            <li><Link to="/about" className="hover:text-brand-accent">{t("footer.about_link")}</Link></li>
            <li><a href="/home#services" className="hover:text-brand-accent">{t("footer.services_link")}</a></li>
            <li><a href="/about#machine-updates" className="hover:text-brand-accent">{t("footer.contact_link")}</a></li>
            <li>
              <a
                href="https://www.linkedin.com/company/108651152/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
            {t("footer.col_contact")}
          </p>
          <address className="mt-5 space-y-2 text-sm not-italic text-brand-dark/72">
            <div>Karl-Johan Berg</div>
            <div><a href="mailto:karl@jointec.se" className="hover:text-brand-accent">karl@jointec.se</a></div>
            <div><a href="tel:+46706339717" className="hover:text-brand-accent">+46 706 339 717</a></div>
            <div className="pt-3 text-[11px] uppercase tracking-[0.22em] text-brand-dark/45">
              {t("footer.demo_label")}
            </div>
            <div>{t("contact.demoLocation")}</div>
          </address>
        </div>

        {/* CAPE partner column */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Exclusive Agent for
          </p>
          <a
            href="https://cape.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-2xl border border-brand-dark/8 bg-brand-light p-4 transition hover:border-brand-accent/35"
          >
            <img src="/images/cape-logo.svg" alt="CAPE" className="w-full" />
          </a>
          <p className="mt-3 text-xs leading-6 text-brand-dark/58">
            Scandinavia · Switzerland · Austria
          </p>
        </div>
      </div>

      {/* Bottom — legal */}
      <div className="border-t border-brand-dark/8">
        <div className="section-shell flex flex-col gap-3 py-6 text-xs text-brand-dark/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Jointec AB. {t("footer.rights")}</div>
          <div className="flex items-center gap-3">
            <span>{t("footer.languages")}</span>
            <span className="text-brand-dark/30">·</span>
            <span>EN</span>
            <span>SV</span>
            <span>ES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
