# Ruang Tumbuh SiberMu

Landing page Kemahasiswaan dan Al-Islam & Kemuhammadiyahan (AIK) Universitas Siber Muhammadiyah untuk lomba landing page 2026. Konsep **Ruang Tumbuh** menghubungkan kesempatan belajar, berkomunitas, berkarya, dan berkontribusi dalam satu halaman.

**Demo:** [kemahasiswaan-aik-sibermu-lp.vercel.app](https://kemahasiswaan-aik-sibermu-lp.vercel.app/)

Halaman ini memuat profil komunitas mahasiswa, lima cerita prestasi, pengenalan AIK, dokumentasi kegiatan, serta tautan layanan dan kontak kampus. Pengunjung dapat memilih cerita prestasi secara manual, memfilter dokumentasi kegiatan, dan membuka rincian melalui elemen `details`. Situs dibangun sebagai halaman statis tanpa basis data atau sistem pendaftaran.

## Menjalankan proyek

Gunakan Node.js **22.12 atau lebih baru** dan npm.

```sh
npm ci
npm run dev
```

Buka `http://127.0.0.1:4321/`. Untuk pemeriksaan tipe dan build produksi:

```sh
npm run build
npm run preview
```

Hasil build berada di `dist/`. Proyek menggunakan Astro, TypeScript, Tailwind CSS, serta font lokal dari Fontsource.

## Memperbarui konten

- `src/data/content.ts` menyimpan tautan sumber, komunitas, kegiatan, FAQ, media sosial, dan kontak.
- `src/data/achievements.ts` menyimpan lima cerita prestasi dan tautan dokumentasinya.
- `src/components/` berisi bagian halaman, termasuk komunitas, prestasi, AIK, kegiatan, dan layanan.
- `src/pages/index.astro` menyusun halaman; `src/styles/` menyimpan aturan visual dan responsif.

## Sumber dan batasan

Prestasi ditautkan ke unggahan Instagram @sibermu atau berita resmi kampus. Profil UKM mengacu pada Laporan Kemahasiswaan 2023; status aktif, pengurus, dan pendaftaran terbaru perlu dikonfirmasi ke kampus. Bagian kegiatan memuat dokumentasi atau program yang telah tercatat, bukan pengumuman bahwa pendaftaran sedang dibuka. Rujukan setiap cerita tersedia pada halaman, bersama daftar sumber dan kredit aset di footer.

Lambang SiberMu pada header dan footer bersumber dari situs resmi universitas dan dipadukan dengan teks identitas halaman. Ilustrasi hero, AIK, komunitas, dan penutup dibuat dengan AI; tokoh serta bangunannya fiktif dan diberi label. Poster prestasi berasal dari dokumentasi kampus yang ditautkan. Lisensi font tersedia di `public/licenses/`.

Proyek lomba ini bukan portal layanan resmi Universitas Siber Muhammadiyah. Tautan layanan mengarah ke kanal kampus; situs ini tidak menerima formulir atau data mahasiswa.
