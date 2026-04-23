import { useState } from "react";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    projectDetails: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = [
      `${t("contact.emailBody.company")}: ${formData.company}`,
      `${t("contact.emailBody.email")}: ${formData.email}`,
      `${t("contact.emailBody.projectDetails")}: ${formData.projectDetails}`,
    ].join("\n");

    const mailtoUrl = `mailto:info@jointec.se?subject=${encodeURIComponent(t("contact.emailSubject"))}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">
              {t("services.eyebrow")}
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-brand-dark sm:text-4xl">
              {t("services.title")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-brand-dark/68">
              {t("services.description")}
            </p>
          </div>

          <div className="grid gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-brand-dark/8 bg-brand-light p-8 transition duration-300 hover:-translate-y-1 hover:border-brand-accent/25 hover:shadow-panel"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-brand-dark">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-brand-dark/68">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-2xl text-brand-accent transition group-hover:bg-brand-accent group-hover:text-white">
                    +
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          id="contact"
          className="mt-20 rounded-[2rem] border border-brand-dark/8 bg-brand-dark px-6 py-8 text-white shadow-panel sm:px-10 sm:py-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">
                {t("contact.eyebrow")}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                {t("contact.title")}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                {t("contact.description")}
              </p>
            </div>

            <form
              className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              onSubmit={handleSubmit}
            >
              <label className="grid gap-2">
                <span className="text-sm font-medium text-white/78">{t("contact.company")}</span>
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
                <span className="text-sm font-medium text-white/78">{t("contact.email")}</span>
                <input
                  name="email"
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand-accent"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-white/78">
                  {t("contact.projectDetails")}
                </span>
                <textarea
                  name="projectDetails"
                  rows="4"
                  placeholder={t("contact.projectDetailsPlaceholder")}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-brand-accent"
                />
              </label>
              <button type="submit" className="primary-button w-full">
                {t("contact.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
