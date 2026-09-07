"use client";

import { Waves, MapPin, Navigation } from "lucide-react";
import { siteData, navMenus } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-aqua-500 to-tropical-500">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-[var(--font-plus-jakarta)] font-extrabold text-sm leading-tight">
                  GADING SPLASH
                </p>
                <p className="text-[9px] text-gray-400 tracking-wider">
                  {siteData.tagline}
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Destinasi wisata keluarga di {siteData.city},{" "}
              {siteData.regency} yang menawarkan pengalaman bermain air, area
              miniatur, taman bermain, dan berbagai spot menarik.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white">Menu</h3>
            <ul className="space-y-2.5">
              {navMenus.map((menu) => (
                <li key={menu.href}>
                  <a
                    href={menu.href}
                    className="text-gray-400 text-sm hover:text-aqua-400 transition-colors"
                  >
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white">Alamat</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-aqua-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {siteData.address}
                </p>
              </div>
              <a
                href={siteData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-aqua-400 text-sm hover:text-aqua-300 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white">Info</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>📍 {siteData.city}, {siteData.regency}</li>
              <li>🗺️ {siteData.province}</li>
              <li>⏰ {siteData.openingHours}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">{siteData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
