"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteData, reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section id="ulasan" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-[var(--font-plus-jakarta)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Apa Kata <span className="text-gradient">Pengunjung?</span>
          </h2>
        </motion.div>

        {/* Rating Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-gradient-to-br from-aqua-50 to-tropical-50 border border-aqua-100">
            <p className="font-[var(--font-plus-jakarta)] text-6xl lg:text-7xl font-extrabold text-gray-900 mb-2">
              {siteData.rating}
            </p>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(siteData.rating)
                      ? "fill-sunshine-400 text-sunshine-400"
                      : "fill-sunshine-200 text-sunshine-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 font-medium">
              {siteData.totalReviews.toLocaleString("id-ID")} Ulasan
            </p>
          </div>
        </motion.div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-aqua-100" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-sunshine-400 text-sunshine-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-gray-400 text-xs italic">{review.source}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Cuplikan ulasan pengunjung
        </p>
      </div>
    </section>
  );
}
