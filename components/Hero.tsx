"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Star } from "lucide-react";
import { siteData } from "@/lib/data";

// Seeded pseudo-random to avoid hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const floatingBubbles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: seededRandom(i) * 20 + 8,
  left: seededRandom(i + 15) * 100,
  delay: seededRandom(i + 30) * 5,
  duration: seededRandom(i + 45) * 6 + 8,
}));

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero.jpg)" }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Floating Bubbles */}
      {floatingBubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/10 animate-bubble pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: "-10%",
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-aqua-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-tropical-400/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-sunshine-400/20 rounded-full blur-2xl animate-float" />

      {/* Wave decoration bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-tropical-400 animate-pulse" />
            WATER PARK • KEBUMEN
          </motion.div>

          {/* Title */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-[var(--font-plus-jakarta)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Liburan Seru
            <br />
            Dimulai dari{" "}
            <span className="text-gradient">Gading Splash</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed"
          >
            {siteData.name} merupakan destinasi wisata yang memiliki water park,
            kolam renang, miniatur bangunan, area foto, taman bermain, serta area
            yang cocok untuk keluarga.
          </motion.p>

          {/* Rating */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-sunshine-400 text-sunshine-400"
                />
              ))}
            </div>
            <span className="text-white font-semibold">
              {siteData.rating} / 5
            </span>
            <span className="text-white/60">•</span>
            <span className="text-white/80">
              {siteData.totalReviews.toLocaleString("id-ID")} Ulasan
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#tentang"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-aqua-500 to-tropical-500 text-white font-bold text-base shadow-xl shadow-aqua-500/30 hover:shadow-aqua-500/50 hover:scale-105 transition-all duration-300"
            >
              Jelajahi Gading Paradise
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white font-semibold text-base hover:bg-white/25 transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Lihat Lokasi
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-medium tracking-wider">
          Scroll untuk menjelajah
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
