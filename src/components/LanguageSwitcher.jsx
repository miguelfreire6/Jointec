import { useTranslation } from "react-i18next";

const languages = ["en", "es", "sv"];

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  return (
    <div
      className="flex items-center rounded-full border border-brand-dark/10 bg-white/70 p-1"
      role="group"
      aria-label={t("navbar.languageLabel")}
    >
      {languages.map((language) => {
        const isActive = i18n.language === language;

        return (
          <button
            key={language}
            type="button"
            onClick={() => i18n.changeLanguage(language)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] transition ${
              isActive
                ? "bg-brand-dark text-white shadow-sm"
                : "text-brand-dark/70 hover:text-brand-accent"
            }`}
            aria-pressed={isActive}
            aria-label={`${t("navbar.languageLabel")}: ${language.toUpperCase()}`}
          >
            {t(`navbar.languages.${language}`)}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
