import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Experiences from "@/components/Experiences";
import WaterPark from "@/components/WaterPark";
import MiniatureWorld from "@/components/MiniatureWorld";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Wahana",
  description:
    "Jelajahi wahana Gading Splash Water: kolam anak, kolam keluarga, kolam dewasa, area miniatur bangunan, taman bermain, dan spot foto favorit keluarga.",
  alternates: { canonical: `${siteData.baseUrl}/wahana` },
};

export default function WahanaPage() {
  return (
    <>
      <PageHeader
        badge="WAHANA & ATRAKSI"
        title={
          <>
            Satu Tempat, Banyak <span className="text-gradient">Keseruan</span>
          </>
        }
        description="Dari bermain air sampai menjelajahi miniatur dunia, semua bisa dinikmati dalam satu kunjungan bersama keluarga."
        image="/images/waterpark.jpg"
        waveFill="#f9fafb"
      />
      <Experiences />
      <WaterPark />
      <MiniatureWorld />
    </>
  );
}
