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

Hasil build berada di `dist/`. Proyek menggunakan Astro, TypeScript, Tailwind CSS 4, serta font lokal dari Fontsource. Tampilan komponen, layout responsif, dan state interaksi ditulis dengan utility Tailwind. CSS kustom digunakan untuk fondasi global dan gradasi berlapis pada foto.

## Memperbarui konten

- `src/data/content.ts` menyimpan tautan sumber, komunitas, kegiatan, FAQ, media sosial, dan kontak.
- `src/data/achievements.ts` menyimpan lima cerita prestasi dan tautan dokumentasinya.
- `src/components/` berisi bagian halaman, termasuk komunitas, prestasi, AIK, kegiatan, dan layanan.
- `src/pages/index.astro` menyusun halaman; utility Tailwind berada langsung di halaman dan komponen Astro.
- `src/styles/global.css` menyimpan token tema, varian breakpoint, fondasi aksesibilitas, dan gradasi foto. Varian `compact` (≤1100px), `tablet` (≤900px), `stack` (≤700px), dan `mobile` (≤640px) mempertahankan batas ukuran desain. Varian `hero-tablet` (641–900px) mengatur hero tablet, sedangkan `tall-desktop` membatasi sticky komunitas pada layar yang cukup tinggi.

## Sumber dan batasan

Prestasi ditautkan ke unggahan Instagram @sibermu atau berita resmi kampus. Profil UKM mengacu pada Laporan Kemahasiswaan 2023 yang tercantum di direktori dokumen resmi SPMI SiberMu serta unggahan Instagram UKM Bisnis Digital dan akun resmi @sibermu pada 2024. Halaman tidak mengklaim kepengurusan atau pendaftaran UKM saat ini; pengunjung diarahkan ke kanal kampus untuk informasi terbaru. Bagian kegiatan memuat dokumentasi atau program yang telah tercatat, bukan pengumuman bahwa pendaftaran sedang dibuka. Rujukan setiap cerita tersedia pada halaman, bersama daftar sumber dan kredit aset di footer.

Lambang SiberMu pada header dan footer bersumber dari situs resmi universitas dan dipadukan dengan teks identitas halaman. Ilustrasi hero, AIK, komunitas, dan penutup dibuat dengan AI; tokoh serta bangunannya fiktif dan diberi label. Poster prestasi berasal dari dokumentasi kampus yang ditautkan. Lisensi font tersedia di `public/licenses/`.

Proyek lomba ini bukan portal layanan resmi Universitas Siber Muhammadiyah. Tautan layanan mengarah ke kanal kampus; situs ini tidak menerima formulir atau data mahasiswa.
