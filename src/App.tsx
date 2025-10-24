import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Earnings from "./components/Earnings";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Earnings />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
