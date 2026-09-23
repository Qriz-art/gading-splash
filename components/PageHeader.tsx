"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PageHeaderProps = {
  badge: string;
  title: ReactNode;
  description: string;
  image?: string;
  /** Warna gelombang bawah, disesuaikan dengan background section berikutnya. */
  waveFill?: string;
};

export default function PageHeader({
  badge,
  title,
  description,
  image = "/images/waterpark.jpg",
  waveFill = "#ffffff",
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-aqua-800">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-aqua-900/85 via-aqua-800/85 to-aqua-700/85" />

      {/* Decorative elements */}
      <div className="absolute -top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-52 h-52 bg-tropical-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-tropical-400" />
          {badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-plus-jakarta)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>

      {/* Wave decoration bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill={waveFill}
          />
        </svg>
      </div>
    </section>
  );
}
