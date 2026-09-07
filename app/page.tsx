import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import WaterPark from "@/components/WaterPark";
import MiniatureWorld from "@/components/MiniatureWorld";
import Gallery from "@/components/Gallery";
import TicketSection from "@/components/Ticket";
import Facilities from "@/components/Facilities";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickInfo />
      <About />
      <Experiences />
      <WaterPark />
      <MiniatureWorld />
      <Gallery />
      <TicketSection />
      <Facilities />
      <Reviews />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
