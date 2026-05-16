import { useState } from "react";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    projectDetails: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = [
      `${t("contact.emailBody.company")}: ${formData.company}`,
      `${t("contact.emailBody.email")}: ${formData.email}`,
      `${t("contact.emailBody.projectDetails")}: ${formData.projectDetails}`,
    ].join("\n");
    const mailtoUrl = `mailto:karl@jointec.se?subject=${encodeURIComponent(
      t("contact.emailSubject"),
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
            {t("services.eyebrow")}
          </p>
          <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.025em] text-brand-dark sm:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-6 text-base leading-8 text-brand-dark/72">
            {t("services.description")}
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service, idx) => (
            <article
              key={service.title}
              className="rounded-[1.75rem] border border-brand-dark/8 bg-brand-light p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-accent/25 hover:shadow-panel"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent/12 text-xs font-semibold text-brand-accent">
                0{idx + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold leading-tight tracking-[-0.02em] text-brand-dark">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-dark/70">
                {service.description}
              </p>
              {service.bullets ? (
                <ul className="mt-5 space-y-2 border-t border-brand-dark/8 pt-5">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm leading-6 text-brand-dark/72"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        {/* Contact block */}
        <div
          id="contact"
          className="mt-20 overflow-hidden rounded-[2rem] bg-brand-dark text-white"
        >
          <div className="grid gap-px sm:grid-cols-[1.1fr_1fr]">
            {/* Left — narrative */}
            <div className="bg-brand-dark p-8 sm:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                {t("contact.eyebrow")}
              </p>
              <h3 className="mt-4 text-3xl font-light leading-[1.05] tracking-[-0.02em] sm:text-4xl">
                {t("contact.title")}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
                {t("contact.description")}
              </p>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-white/80">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
                    {t("contact.commercialLabel")}
                  </span>
                  <span className="mt-1 block font-medium">Karl-Johan Berg</span>
                  <span className="block text-white/72">
                    <a href="mailto:karl@jointec.se" className="hover:text-brand-accent">karl@jointec.se</a>
                    <span className="mx-2 text-white/30">·</span>
                    <a href="tel:+46706339717" className="hover:text-brand-accent">+46 706 339 717</a>
                  </span>
                </div>
                <div className="pt-3">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-accent">
                    {t("contact.demoLabel")}
                  </span>
                  <span className="mt-1 block text-white/82">Åsljunga · Skåne · Sweden</span>
                  <span className="block text-xs text-white/55">{t("contact.demoBlurb")}</span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 bg-white/[0.04] p-8 sm:p-10"
            >
              <label className="grid gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                  {t("contact.company")}
                </span>
                <input
                  name="company"
                  type="text"
                  placeholder={t("contact.companyPlaceholder")}
                  value={formData.company}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand-accent"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                  {t("contact.email")}
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t("contact.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand-accent"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                  {t("contact.projectDetails")}
                </span>
                <textarea
                  name="projectDetails"
                  rows="5"
                  placeholder={t("contact.projectDetailsPlaceholder")}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand-accent"
                />
              </label>
              <button type="submit" className="primary-button w-full">
                {t("contact.submit")}
              </button>
              <p className="text-center text-[10px] uppercase tracking-[0.22em] text-white/40">
                {t("contact.privacy")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
