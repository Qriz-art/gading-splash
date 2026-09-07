"use client";

import { motion } from "framer-motion";
import { miniatureItems } from "@/lib/data";

const miniImages = [
  { src: "/images/miniature.jpg", label: "Miniatur Bangunan" },
  { src: "/images/garden.jpg", label: "European Style" },
  { src: "/images/miniature.jpg", label: "Eiffel Tower" },
  { src: "/images/garden.jpg", label: "Garden" },
  { src: "/images/waterpark.jpg", label: "Photo Spot" },
];

export default function MiniatureWorld() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
            Jelajahi Dunia <span className="text-gradient">Mini</span> 🏰
          </h2>
          <p className="text-gray-600 text-lg">
            Selain bermain air, nikmati area miniatur dengan suasana yang unik dan
            menarik untuk berfoto.
          </p>
        </motion.div>

        {/* Horizontal Gallery */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {miniImages.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="snap-center flex-shrink-0 w-64 lg:w-auto group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.src})` }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white font-semibold text-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {miniatureItems.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full bg-aqua-50 text-aqua-700 text-sm font-medium border border-aqua-100"
            >
              {item}
            </span>
          ))}
        </motion.div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Pengunjung menyebut adanya miniatur bangunan seperti Menara Eiffel di
          area Gading Paradise.
        </p>
      </div>
    </section>
  );
}
