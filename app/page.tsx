import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <Experiences />
      <Gallery preview />
      <CTA />
    </>
  );
}
