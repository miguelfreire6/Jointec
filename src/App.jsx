import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProcessVideo from "./components/ProcessVideo";
import Services from "./components/Services";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <ProcessVideo />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
