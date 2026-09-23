import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Kenali lebih dekat Gading Splash Water / Gading Paradise di Pejagoan, Kebumen: water park, kolam renang, area miniatur, taman bermain, dan spot foto keluarga.",
  alternates: { canonical: `${siteData.baseUrl}/tentang` },
};

export default function TentangPage() {
  return (
    <>
      <PageHeader
        badge="TENTANG KAMI"
        title={
          <>
            Bukan Sekadar <span className="text-gradient">Water Park</span>
          </>
        }
        description={`Mengenal ${siteData.fullName} sebagai destinasi wisata keluarga di ${siteData.city}, Kabupaten ${siteData.regency}.`}
        image="/images/pool.jpg"
      />
      <About />
      <Reviews />
    </>
  );
}
