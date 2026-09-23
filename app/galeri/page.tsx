import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri foto Gading Splash Water / Gading Paradise Kebumen: area water park, kolam renang, miniatur bangunan, taman, dan area bermain keluarga.",
  alternates: { canonical: `${siteData.baseUrl}/galeri` },
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        badge="GALERI FOTO"
        title={
          <>
            Momen Seru di <span className="text-gradient">Gading Splash</span>
          </>
        }
        description="Intip keseruan dan keindahan destinasi wisata keluarga Gading Splash Water melalui foto-foto berikut."
        image="/images/garden.jpg"
        waveFill="#f9fafb"
      />
      <Gallery />
    </>
  );
}
