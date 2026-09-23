# Gading Splash Water — Website

Website profil destinasi wisata **Gading Splash Water / Gading Paradise** di Pejagoan, Kabupaten Kebumen, Jawa Tengah.

Dibangun dengan [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS v4, Framer Motion, dan Lucide Icons.

## Struktur Halaman (Multi Page)

| Route      | Isi                                                          |
| ---------- | ------------------------------------------------------------ |
| `/`        | Beranda — hero, quick info, cuplikan wahana & galeri         |
| `/tentang` | Tentang destinasi + cuplikan ulasan pengunjung               |
| `/wahana`  | Wahana & atraksi (water park, kolam, miniature world)        |
| `/galeri`  | Galeri foto lengkap dengan lightbox                          |
| `/tiket`   | Harga tiket masuk + fasilitas                                |
| `/kontak`  | Lokasi, peta, jam operasional                                |

`Navbar` dan `Footer` dipasang sekali di `app/layout.tsx` sehingga dipakai oleh semua halaman. Navbar otomatis transparan saat berada di atas header halaman, lalu berubah menjadi solid ketika di-scroll.

## Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Skrip

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # menjalankan hasil build
npm run lint    # ESLint
```

## Konfigurasi Konten

Data utama situs (nama, alamat, jam operasional, harga tiket, daftar menu, fasilitas, ulasan) terpusat di `lib/data.ts`.

- `siteData.baseUrl` dipakai untuk metadata, canonical URL, sitemap, dan Open Graph.
- Ganti gambar di `public/images/`. Gambar Open Graph memakai `public/images/og-image.jpg` (1200×630).

## SEO

- Metadata per halaman (`app/*/page.tsx`) beserta canonical URL.
- JSON-LD `TouristAttraction` di `app/layout.tsx`.
- `app/sitemap.ts` dan `app/robots.ts` otomatis menghasilkan `/sitemap.xml` dan `/robots.txt`.
