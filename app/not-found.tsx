import Link from "next/link";
import { Waves, Home, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 pt-28 pb-20">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-aqua-500 to-tropical-500 flex items-center justify-center mb-6">
          <Waves className="w-8 h-8 text-white" />
        </div>
        <p className="font-[var(--font-plus-jakarta)] text-6xl font-extrabold text-gradient mb-4">
          404
        </p>
        <h1 className="font-[var(--font-plus-jakarta)] text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          Halaman tidak ditemukan
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Sepertinya halaman yang kamu cari sudah dipindahkan atau tidak pernah
          ada. Yuk kembali menjelajahi Gading Splash Water.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-aqua-500 to-tropical-500 text-white font-bold text-base shadow-lg shadow-aqua-500/20 hover:shadow-aqua-500/40 hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold text-base hover:border-aqua-200 hover:text-aqua-600 transition-all duration-300"
          >
            <MapPin className="w-5 h-5" />
            Lihat Lokasi
          </Link>
        </div>
      </div>
    </section>
  );
}
