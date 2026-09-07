"use client";

import { motion } from "framer-motion";
import { Waves, Castle, Camera, Heart } from "lucide-react";
import { experiences } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Waves,
  Castle,
  Camera,
  Heart,
};

const images = [
  "/images/waterpark.jpg",
  "/images/miniature.jpg",
  "/images/garden.jpg",
  "/images/playground.jpg",
];

export default function Experiences() {
  return (
    <section id="wahana" className="py-20 lg:py-28 bg-gray-50">
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
            Satu Tempat, Banyak{" "}
            <span className="text-gradient">Keseruan</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Mulai dari bermain air hingga menjelajahi miniatur dunia, ada banyak hal
            yang bisa dinikmati bersama keluarga.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon];
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${images[i]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    {Icon && <Icon className="w-5 h-5 text-aqua-600" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-[var(--font-plus-jakarta)] font-bold text-lg text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
