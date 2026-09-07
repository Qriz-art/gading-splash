"use client";

import { motion } from "framer-motion";
import { Star, Waves, Castle, Users } from "lucide-react";
import { quickInfoCards } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Star,
  Waves,
  Castle,
  Users,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function QuickInfo() {
  return (
    <section className="relative -mt-1 z-20 bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {quickInfoCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="card-hover group relative bg-white rounded-2xl p-5 lg:p-6 border border-gray-100 shadow-sm hover:border-aqua-200"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br from-aqua-50 to-tropical-50 flex items-center justify-center group-hover:from-aqua-100 group-hover:to-tropical-100 transition-all duration-300">
                    {Icon && (
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-aqua-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-[var(--font-plus-jakarta)] font-bold text-lg lg:text-xl text-gray-900">
                      {card.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
