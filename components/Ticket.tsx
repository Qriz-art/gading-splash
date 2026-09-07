"use client";

import { motion } from "framer-motion";
import { Ticket, Info } from "lucide-react";
import { siteData } from "@/lib/data";

export default function TicketSection() {
  return (
    <section id="tiket" className="py-20 lg:py-28 bg-white">
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
            Rencanakan <span className="text-gradient">Liburanmu</span>
          </h2>
        </motion.div>

        {/* Ticket Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="relative bg-gradient-to-br from-aqua-500 to-tropical-500 rounded-3xl overflow-hidden shadow-2xl shadow-aqua-500/20">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full" />

            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 font-medium text-sm">
                  Tiket Masuk
                </span>
              </div>

              <div className="mb-6">
                <p className="text-white/80 text-sm mb-1">Mulai dari</p>
                <p className="font-[var(--font-plus-jakarta)] text-5xl font-extrabold text-white">
                  {siteData.ticketPrice}
                </p>
                <p className="text-white/60 text-sm mt-1">/orang</p>
              </div>

              {/* Dashed line */}
              <div className="border-t-2 border-dashed border-white/30 my-6" />

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/90 text-sm">
                  <span className="w-2 h-2 rounded-full bg-sunshine-400" />
                  Akses Water Park & Miniatur World
                </div>
                <div className="flex items-center gap-3 text-white/90 text-sm">
                  <span className="w-2 h-2 rounded-full bg-sunshine-400" />
                  Spot Foto & Taman Bermain
                </div>
                <div className="flex items-center gap-3 text-white/90 text-sm">
                  <span className="w-2 h-2 rounded-full bg-sunshine-400" />
                  Cocok untuk Keluarga
                </div>
              </div>

              <button className="w-full py-4 rounded-2xl bg-white text-aqua-600 font-bold text-base hover:bg-white/90 transition-colors shadow-lg">
                Tanya Harga Tiket
              </button>
            </div>
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-3 mt-6 p-4 rounded-xl bg-aqua-50 border border-aqua-100"
          >
            <Info className="w-5 h-5 text-aqua-500 flex-shrink-0 mt-0.5" />
            <p className="text-aqua-700 text-sm leading-relaxed">
              {siteData.priceNote}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
