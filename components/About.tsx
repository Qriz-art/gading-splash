"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteData, highlights } from "@/lib/data";

export default function About() {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-aqua-500/10">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: "url(/images/pool.jpg)" }}
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-4 shadow-xl shadow-aqua-500/10 border border-aqua-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aqua-500 to-tropical-500 flex items-center justify-center text-white font-bold text-lg">
                  ★
                </div>
                <div>
                  <p className="font-bold text-gray-900">{siteData.rating}</p>
                  <p className="text-xs text-gray-500">
                    {siteData.totalReviews.toLocaleString("id-ID")} Ulasan
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-aqua-50 text-aqua-600 text-sm font-semibold mb-4">
              TENTANG GADING PARADISE
            </span>
            <h2 className="font-[var(--font-plus-jakarta)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Bukan Sekadar{" "}
              <span className="text-gradient">Water Park</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {siteData.fullName} merupakan destinasi wisata di {siteData.city},
              Kabupaten {siteData.regency} yang menawarkan pengalaman bermain air
              sekaligus menikmati area miniatur dan berbagai spot menarik untuk
              berfoto. Tempat ini cocok untuk menghabiskan waktu bersama keluarga,
              terutama bagi pengunjung yang ingin berenang, bermain, bersantai, dan
              menikmati suasana wisata.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-6 h-6 rounded-full bg-tropical-50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-tropical-600" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
