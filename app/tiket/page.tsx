import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TicketSection from "@/components/Ticket";
import Facilities from "@/components/Facilities";
import { siteData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tiket & Fasilitas",
  description:
    "Informasi tiket masuk Gading Splash Water serta fasilitas yang tersedia, mulai dari toilet, restoran, taman bermain, hingga akses dan parkir kursi roda.",
  alternates: { canonical: `${siteData.baseUrl}/tiket` },
};

export default function TiketPage() {
  return (
    <>
      <PageHeader
        badge="TIKET & FASILITAS"
        title={
          <>
            Rencanakan <span className="text-gradient">Liburanmu</span>
          </>
        }
        description="Cek estimasi harga tiket masuk dan fasilitas yang tersedia sebelum berkunjung bersama keluarga."
        image="/images/hero.jpg"
      />
      <TicketSection />
      <Facilities />
    </>
  );
}
