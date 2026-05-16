import About from "./components/About";
import CapeAgent from "./components/CapeAgent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Machines from "./components/Machines";
import Navbar from "./components/Navbar";
import PhotoStrip from "./components/PhotoStrip";
import ProcessVideo from "./components/ProcessVideo";
import Services from "./components/Services";
import VideoSection from "./components/VideoSection";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PhotoStrip
          src="/images/onsite_line_cad.webp"
          alt="Jointec on-site processing line CAD render"
          eyebrow={t("strips.line.eyebrow")}
          headline={t("strips.line.headline")}
        />
        <Machines />
        <PhotoStrip
          src="/images/gyllsjo_hmi.webp"
          alt="Gyllsjö Träindustri — Jointec control interface"
          eyebrow={t("strips.gyllsjo.eyebrow")}
          headline={t("strips.gyllsjo.headline")}
          align="right"
        />
        <CapeAgent />
        <ProcessVideo />
        <VideoSection />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
