import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Insights from "@/components/Insights";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import ScheduleCall from "@/components/ScheduleCall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Insights />
        <ContactForm />
        <ScheduleCall />
      </main>
      <Footer />
    </>
  );
}
