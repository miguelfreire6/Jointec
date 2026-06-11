import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import MachineUpdatesSignup from "../../components/MachineUpdatesSignup";
import Navbar from "../../components/Navbar";
import { MACHINE_DETAILS, MACHINE_ORDER } from "../../data/machineDetails";

function PlaceholderVisual() {
  return (
    <div className="flex aspect-[16/10] items-center justify-center rounded-3xl bg-gradient-to-br from-brand-dark to-slate-700 px-8 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
        Machine visual coming soon
      </span>
    </div>
  );
}

function BenefitList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-brand-dark/74">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MachinePage() {
  const { slug } = useParams();
  const detail = MACHINE_DETAILS[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (detail) document.title = detail.pageTitle;
  }, [detail]);

  if (!detail) return <Navigate to="/machines" replace />;

  const idx = MACHINE_ORDER.indexOf(slug);
  const nextSlug = MACHINE_ORDER[(idx + 1) % MACHINE_ORDER.length];
  const nextMachine = MACHINE_DETAILS[nextSlug];

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />

      <section className="relative overflow-hidden bg-brand-dark text-white">
        {detail.image ? (
          <div className="absolute inset-0">
            <img src={detail.image} alt="" className="h-full w-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/35" />
          </div>
        ) : null}
        <div className="section-shell relative py-20 sm:py-28">
          <Link
            to="/machines"
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60 transition hover:text-brand-accent"
          >
            ← All machines
          </Link>
          <h1 className="mt-7 max-w-4xl text-5xl font-light leading-[1.03] tracking-[-0.035em] sm:text-6xl">
            {detail.name}
          </h1>
          {detail.headline ? (
            <h2 className="mt-6 max-w-4xl text-3xl font-light leading-tight tracking-[-0.025em] text-white sm:text-4xl">
              {detail.headline}
            </h2>
          ) : null}
          <p className="mt-6 max-w-3xl whitespace-pre-line text-lg leading-8 text-white/80">{detail.intro}</p>
          <a href={detail.inquiryMailto || "mailto:info@jointec.se"} className="primary-button mt-9">
            Request Machine Information
          </a>
        </div>
      </section>

      {detail.video ? (
        <section className="bg-brand-light py-20 sm:py-24">
          <div className="section-shell">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              Machine video
            </p>
            <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">
              See the machine in operation.
            </h2>
            <div className="mt-8 overflow-hidden rounded-3xl border border-brand-dark/10 bg-black shadow-panel">
              <video
                src={detail.video}
                poster={detail.videoPoster || detail.image || undefined}
                className="aspect-video w-full bg-black object-cover"
                controls
                preload="metadata"
                playsInline
              />
            </div>
          </div>
        </section>
      ) : null}

      {detail.value ? (
        <>
          <section className="bg-white py-20 sm:py-24">
            <div className="section-shell grid gap-12 lg:grid-cols-[0.38fr_0.62fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  Protective pallet production
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">What this solution does</h2>
              </div>
              <div className="whitespace-pre-line text-base leading-8 text-brand-dark/72">
                {detail.purpose}
              </div>
            </div>
          </section>

          <section className="bg-brand-light py-20 sm:py-24">
            <div className="section-shell">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                Added value
              </p>
              <h2 className="mt-5 text-4xl font-light tracking-[-0.03em]">Why It Matters</h2>
              <p className="mt-6 max-w-4xl whitespace-pre-line text-base leading-8 text-brand-dark/72">
                {detail.value}
              </p>
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                <article className="rounded-3xl border border-brand-dark/8 bg-white p-7">
                  <h3 className="text-2xl font-light tracking-[-0.02em]">For Pallet Producers</h3>
                  <BenefitList items={detail.producerBenefits} />
                </article>
                <article className="rounded-3xl border border-brand-dark/8 bg-white p-7">
                  <h3 className="text-2xl font-light tracking-[-0.02em]">For Pallet Users</h3>
                  <BenefitList items={detail.userBenefits} />
                </article>
              </div>
            </div>
          </section>

          <section className="bg-brand-dark py-16 text-white sm:py-20">
            <div className="section-shell">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                Automatic added value
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.025em] sm:text-4xl">
                From manual protection to automatic added value.
              </h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-white/72">{detail.salesBlock}</p>
            </div>
          </section>

          <section className="bg-white py-20 sm:py-24">
            <div className="section-shell grid gap-12 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  Flexible integration
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">
                  Adaptable to New and Existing Lines
                </h2>
              </div>
              <p className="whitespace-pre-line text-base leading-8 text-brand-dark/72">{detail.adaptability}</p>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="bg-white py-20 sm:py-24">
            <div className="section-shell grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  Who it is for
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">Designed for</h2>
                <BenefitList items={detail.designedFor} />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  Purpose
                </p>
                <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">What this machine does</h2>
                <p className="mt-6 text-base leading-8 text-brand-dark/72">{detail.purpose}</p>
                <p className="mt-5 text-base leading-8 text-brand-dark/72">{detail.process}</p>
              </div>
            </div>
          </section>

          <section className="bg-brand-light py-20 sm:py-24">
            <div className="section-shell">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
                Key advantages
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {detail.advantages.map(([title, body]) => (
                  <article key={title} className="rounded-2xl border border-brand-dark/8 bg-white p-6">
                    <h3 className="font-semibold tracking-[-0.01em]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-brand-dark/68">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="bg-white py-20 sm:py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent">
              Technical information
            </p>
            <h2 className="mt-5 text-3xl font-light tracking-[-0.02em]">
              Configured for your production.
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-dark/72">{detail.technical}</p>
          </div>
          <div>
            {detail.gallery.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {detail.gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="aspect-[16/10] w-full rounded-3xl object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            ) : (
              <PlaceholderVisual />
            )}
          </div>
        </div>
      </section>

      <MachineUpdatesSignup sourcePage={detail.name} />

      <section className="bg-brand-dark py-16 text-white sm:py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-light tracking-[-0.02em]">
              {detail.value ? "Interested in Adding More Value to Every Pallet?" : "Interested in this machine?"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
              {detail.value
                ? "Contact Jointec to discuss how Nonstop & Topfoil Pallet can be adapted to your pallet production line and customer needs."
                : "Contact Jointec to discuss your production needs, available space and suitable machine configuration."}
            </p>
          </div>
          <a href={detail.inquiryMailto || "mailto:info@jointec.se"} className="primary-button">
            {detail.value ? "Request Information" : "Request Machine Information"}
          </a>
        </div>
      </section>

      <section className="bg-brand-light py-12 sm:py-16">
        <div className="section-shell">
          <Link
            to={`/machines/${nextSlug}`}
            className="group flex items-center justify-between rounded-3xl border border-brand-dark/8 bg-white p-6 transition hover:border-brand-accent/30 hover:shadow-panel sm:p-8"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-dark/55">
                Next machine
              </p>
              <p className="mt-2 text-xl font-medium tracking-[-0.02em]">{nextMachine.name}</p>
            </div>
            <span className="text-3xl text-brand-accent transition group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
