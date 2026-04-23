import { useTranslation } from "react-i18next";
import Logo from "./Logo";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-brand-dark/8 bg-white py-8">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Logo size="sm" className="opacity-90" />
          <p className="text-sm text-brand-dark/62">{t("footer.description")}</p>
        </div>
        <p className="text-sm text-brand-dark/52">{t("footer.tagline")}</p>
      </div>
    </footer>
  );
}

export default Footer;
