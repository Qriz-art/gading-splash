import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lokasi & Kontak",
  description: `Lokasi Gading Splash Water / Gading Paradise: ${siteData.address}. Lengkap dengan peta, jam operasional, dan tautan Google Maps.`,
  alternates: { canonical: `${siteData.baseUrl}/kontak` },
};

export default function KontakPage() {
  return (
    <>
      <PageHeader
        badge="LOKASI & KONTAK"
        title={
          <>
            Temukan <span className="text-gradient">Gading Paradise</span>
          </>
        }
        description={`Kami berada di ${siteData.city}, Kabupaten ${siteData.regency}, ${siteData.province}.`}
        image="/images/playground.jpg"
        waveFill="#f9fafb"
      />
      <Location />
      <CTA />
    </>
  );
}
