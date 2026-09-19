# Ruang Tumbuh SiberMu

Prototipe landing page lomba Kemahasiswaan dan Al-Islam & Kemuhammadiyahan Universitas Siber Muhammadiyah. Konsep: **Terhubung. Bertumbuh. Berkontribusi.**

Halaman dibangun dengan Astro, TypeScript, dan Tailwind CSS. Hasil build berupa situs statis; tidak membutuhkan basis data. Filter kegiatan dan menu ponsel memakai JavaScript kecil, sedangkan FAQ memakai elemen `details` bawaan browser.

## Menjalankan

Gunakan Node.js **22.12 atau lebih baru** (pengujian menggunakan Node 24.19). Node 20 bawaan Laragon di komputer ini belum memenuhi kebutuhan Astro yang terpasang.

```sh
npm ci
npm run dev
```

Buka http://127.0.0.1:4321. Untuk pemeriksaan tipe dan build produksi:

```sh
npm run build
npm run preview
```

Hasil siap hosting statis berada di `dist/`. Perintah npm memanggil entrypoint Astro secara langsung untuk menghindari masalah shim Windows pada nama folder yang mengandung `&`.

## Mengubah konten

- `src/data/content.ts`: tautan sumber, komunitas, contoh kegiatan, dan FAQ.
- `src/components/StudentLife.astro`: bagian komunitas dan arsip prestasi yang bersumber.
- `src/components/Aik.astro`: pengenalan dan nilai AIK.
- `src/components/Services.astro`: layanan, FAQ, dan kredit.
- `src/pages/index.astro`: susunan halaman dan hero.
- `src/styles/global.css`: sistem visual dan aturan responsif.
- `PRODUCT.md` dan `DESIGN.md`: konteks produk dan panduan desain.

## Status konten

Ini pratinjau konsep, belum layanan resmi kampus. Organisasi, UKM, kegiatan, format partisipasi, jadwal, dan kontak pengelola masih menunggu konfirmasi. Contoh ditandai di halaman. Prestasi MIDBRAIN 2023 ditautkan ke berita resmi SiberMu. Nilai AIK diringkas dari Risalah Islam Berkemajuan.

Ilustrasi kolaborasi dibuat dengan AI dan diberi label; tokohnya fiktif. Tanda grafis prototipe bukan logo resmi universitas. Ganti dengan aset resmi yang sudah diizinkan sebelum pengumpulan. Lisensi font yang disertakan berada di `public/licenses/`.

Metadata masih `noindex, nofollow` untuk fase pratinjau. Belum ada integrasi pendaftaran atau pengiriman formulir. Checklist persiapan konten tersedia di `docs/checklist-konten.md`; folder `docs/` saat ini dikecualikan oleh aturan Git proyek.

## Pemeriksaan

Build Astro dan pemeriksaan tipe dijalankan. Interaksi menu, Escape, filter tiga kategori, FAQ, tautan fragmen, serta tata letak desktop/ponsel diperiksa di browser. Catatan cakupan dan keterbatasan berada di `docs/qa-prototype.md`. Pengujian tersebut belum merupakan sertifikasi aksesibilitas atau audit performa produksi.
