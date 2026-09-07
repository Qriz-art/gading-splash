"use client";

import { motion } from "framer-motion";
import { Baby, Users, User } from "lucide-react";
import { poolTypes, siteData } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Baby,
  Users,
  User,
};

export default function WaterPark() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-water-gradient" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/waterpark.jpg)" }}
        />
      </div>

      {/* Decorative bubbles */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-[var(--font-plus-jakarta)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Waktunya Bermain Air! 💦
          </h2>
          <p className="text-white/80 text-lg">
            Segarkan hari bersama keluarga dengan pengalaman bermain air di{" "}
            {siteData.name}.
          </p>
        </motion.div>

        {/* Pool Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {poolTypes.map((pool, i) => {
            const Icon = iconMap[pool.icon];
            return (
              <motion.div
                key={pool.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="group glass rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon className="w-8 h-8 text-white" />}
                </div>
                <h3 className="font-[var(--font-plus-jakarta)] font-bold text-xl text-white mb-3">
                  {pool.name}
                </h3>
                <p className="text-white/70 leading-relaxed">{pool.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/50 text-sm mt-8"
        >
          Berdasarkan informasi pengunjung, terdapat sekitar 3 jenis kolam dengan
          kedalaman bervariasi.
        </motion.p>
      </div>
    </section>
  );
}


