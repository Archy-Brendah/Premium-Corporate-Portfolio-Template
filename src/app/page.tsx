import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import TrustBar from "@/components/TrustBar";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Insights from "@/components/Insights";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Services />
        <CaseStudies />
        <TrustBar />
        <Testimonials />
        <About />
        <Insights />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
