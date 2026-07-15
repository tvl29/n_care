import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import Founder from "./components/Founder";
import Team from "./components/Team";
import Locations from "./components/Locations";
import Reviews from "./components/Reviews";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Founder />
      <Team />
      <Locations />
      <Reviews />
      <FinalCta />
      <Footer />
    </div>
  );
}
