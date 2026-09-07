"use client";

import { motion } from "framer-motion";
import {
  Bath,
  UtensilsCrossed,
  TreePalm,
  Accessibility,
  DoorOpen,
  Car,
  Ear,
  CreditCard,
} from "lucide-react";
import { facilities } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Bath,
  UtensilsCrossed,
  TreePalm,
  Accessibility,
  DoorOpen,
  Car,
  Ear,
  CreditCard,
};

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-20 lg:py-28 bg-gray-50">
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
            Fasilitas untuk{" "}
            <span className="text-gradient">Kenyamananmu</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {facilities.map((facility, i) => {
            const Icon = iconMap[facility.icon];
            return (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="card-hover group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-aqua-50 flex items-center justify-center flex-shrink-0 group-hover:bg-aqua-100 transition-colors">
                  {Icon && <Icon className="w-5 h-5 text-aqua-600" />}
                </div>
                <span className="font-medium text-gray-800 text-sm">
                  {facility.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
