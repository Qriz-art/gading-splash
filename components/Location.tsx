"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import { siteData } from "@/lib/data";

export default function Location() {
  return (
    <section id="lokasi" className="py-20 lg:py-28 bg-gray-50">
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
            Temukan <span className="text-gradient">Gading Paradise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl shadow-aqua-500/10 border border-gray-100"
          >
            <div className="aspect-video bg-gray-200 relative">
              <iframe
                src={siteData.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Gading Splash Water"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-aqua-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-aqua-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Alamat</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {siteData.address}
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Plus Code: {siteData.plusCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Location tags */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aqua-50 text-aqua-700 text-sm font-medium border border-aqua-100">
                <Navigation className="w-4 h-4" />
                {siteData.city}, {siteData.regency}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tropical-50 text-tropical-700 text-sm font-medium border border-tropical-100">
                <MapPin className="w-4 h-4" />
                {siteData.province}
              </span>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sunshine-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-sunshine-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Jam Operasional</p>
                  <p className="text-gray-700 font-medium">{siteData.openingHours}</p>
                  <p className="text-gray-400 text-xs mt-2">{siteData.openingNote}</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <a
              href={siteData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-aqua-500 to-tropical-500 text-white font-bold text-base shadow-lg shadow-aqua-500/20 hover:shadow-aqua-500/40 hover:scale-105 transition-all duration-300"
            >
              <Navigation className="w-5 h-5" />
              Buka Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
