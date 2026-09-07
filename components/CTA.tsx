"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";

const bubbles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 16 + 6,
  left: Math.random() * 100,
  delay: Math.random() * 4,
}));

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-aqua-700" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/images/waterpark.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-aqua-800/80 to-tropical-700/80" />

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/10 animate-bubble pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: "-5%",
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${8 + bubble.id * 2}s`,
          }}
        />
      ))}

      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Destinasi Wisata Kebumen
          </div>

          <h2 className="font-[var(--font-plus-jakarta)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Siap Liburan Bersama Keluarga?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Bermain air, berfoto, menjelajahi miniatur, dan nikmati hari yang
            menyenangkan di Gading Paradise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tiket"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-aqua-700 font-bold text-base shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Rencanakan Kunjungan
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white font-semibold text-base hover:bg-white/25 transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Lihat Lokasi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
