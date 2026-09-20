export const sources = {
  university: 'https://sibermu.ac.id/',
  admissions: 'https://sibermu.ac.id/admisi/',
  achievement: 'https://sibermu.ac.id/artikel/mahasiswa-sibermu-berhasil-juarai-lomba-esai-ilmiah-tingkat-nasional-medical-scientific-competition-and-award-of-uin-malang-midbrain-2023/',
  values: 'https://khazanah.muhammadiyah.or.id/collections/risalah-islam-berkemajuan-keputusan-muktamar-ke-48-muhammadiyah-tahun-2022',
  spmi: 'https://spmi.sibermu.ac.id/dokumen-mutu/',
  studentReport: 'https://docs.google.com/document/d/1K-lkX_ycy16lEB2g3Pxk6pJJCOKBdPM9/edit?usp=sharing',
  rectorReport: 'https://sibermu.ac.id/wp-content/uploads/2023/08/CompressedLaporan-Rektor-2024-Three-Years.pdf',
  organization: 'https://fatikes.sibermu.ac.id/struktur-organisasi/',
  academicHelp: 'https://sibermu.ac.id/artikel/video-tutorial-krs/',
  studentPortal: 'https://student.sibermu.ac.id/',
  academicInfo: 'https://sibermu.ac.id/akademik/',
};

// Dokumentasi historis dari sumber resmi. Status dan tahun sengaja terlihat agar
// arsip 2023/2024 tidak terbaca sebagai agenda atau pendaftaran aktif 2026.
export const activities = [
  {
    category: 'mahasiswa',
    label: 'Kemahasiswaan · UKM',
    title: 'English Club',
    type: 'Pengembangan bahasa & public speaking',
    icon: 'people',
    status: 'Arsip resmi',
    timing: 'Dokumentasi 2023',
    description: 'Laporan Kemahasiswaan SiberMu mencatat English Club sebagai wadah pengembangan bahasa Inggris, budaya internasional, debat, dan public speaking. Status kegiatan serta rekrutmen 2026 masih perlu dikonfirmasi.',
    source: sources.studentReport,
    sourceLabel: 'Laporan Kemahasiswaan 2023',
  },
  {
    category: 'aik',
    label: 'AIK · Keagamaan',
    title: 'Subuh Berjamaah & Subuh Bergizi',
    type: 'Ibadah, ukhuwah & kesehatan komunitas',
    icon: 'heart',
    status: 'Program terdokumentasi',
    timing: 'Laporan Rektor 2024',
    description: 'Laporan Rektor 2024 menyebut Subuh Berjamaah untuk memperkuat ukhuwah Islamiyah dan Subuh Bergizi yang menghubungkan ibadah dengan kesehatan komunitas. Jadwal terbaru tidak dinyatakan dalam sumber.',
    source: sources.rectorReport,
    sourceLabel: 'Laporan Rektor 2024, hlm. 10',
  },
  {
    category: 'aik',
    label: 'AIK · Kajian',
    title: 'Kajian AIK, Hadis & Baca Tulis Al-Quran',
    type: 'Pembinaan pemahaman dan literasi keislaman',
    icon: 'book',
    status: 'Program terdokumentasi',
    timing: 'Laporan Rektor 2024',
    description: 'Agenda kajian AIK, Hadis, dan Baca Tulis Al-Quran dicatat sebagai pembinaan spiritual bagi pengamalan nilai Islam. Format partisipasi dan jadwal 2026 belum dipublikasikan pada sumber yang ditemukan.',
    source: sources.rectorReport,
    sourceLabel: 'Laporan Rektor 2024, hlm. 10',
  },
  {
    category: 'aik',
    label: 'AIK · Syiar',
    title: 'Masjid, syiar & kepedulian sosial',
    type: 'Pengabdian dan kegiatan sosial Islami',
    icon: 'spark',
    status: 'Program terdokumentasi',
    timing: 'Laporan Rektor 2024',
    description: 'SiberMu mendokumentasikan pengaktifan Masjid Amal Mulya sebagai pusat kegiatan spiritual dan sosial, pembentukan takmir bersama warga, serta kegiatan sosial Islami. Bentuk agenda terbaru tetap perlu dikonfirmasi.',
    source: sources.rectorReport,
    sourceLabel: 'Laporan Rektor 2024, hlm. 9–10',
  },
];

export const communities = [
  {
    title: 'Organisasi mahasiswa',
    description: 'Ruang kepemimpinan, aspirasi, dan kerja bersama mahasiswa.',
    detail: 'Struktur FATIKES menegaskan fungsi Subkoordinator AIK dan Kemahasiswaan untuk mengawasi kegiatan organisasi mahasiswa. Nama organisasi, kepengurusan, kontak, dan mekanisme bergabung yang aktif pada 2026 belum ditemukan dalam kanal resmi publik.',
    icon: 'people',
    source: sources.organization,
    sourceLabel: 'Struktur FATIKES SiberMu',
  },
  {
    title: 'UKM English Club',
    description: 'Bahasa Inggris, debat, public speaking, dan wawasan budaya internasional.',
    detail: 'Laporan Kemahasiswaan 2023 mencatat program workshop bahasa Inggris, kompetisi, pertukaran bahasa dan budaya, serta persiapan TOEFL. Tampilkan sebagai arsip sampai status aktif dan rekrutmen terbaru dikonfirmasi.',
    icon: 'book',
    source: sources.studentReport,
    sourceLabel: 'Laporan Kemahasiswaan 2023',
  },
  {
    title: 'UKM Bisnis Digital',
    description: 'Ruang untuk mengembangkan gagasan usaha berbasis teknologi.',
    detail: 'Nama UKM Bisnis Digital tercatat dalam laporan resmi Kemahasiswaan 2023. Kanal publik yang ditemukan belum memuat status, program, kontak pengurus, atau pendaftaran 2026.',
    icon: 'spark',
    source: sources.studentReport,
    sourceLabel: 'Laporan Kemahasiswaan 2023',
  },
  {
    title: 'UKM Digital Creator',
    description: 'Karya digital, desain grafis, video, fotografi, dan konten kreatif.',
    detail: 'Profil 2023 menyebut workshop, kompetisi konten digital, kolaborasi, pameran, seminar, dan diskusi. Status aktif serta cara bergabung pada 2026 masih perlu dikonfirmasi.',
    icon: 'heart',
    source: sources.studentReport,
    sourceLabel: 'Laporan Kemahasiswaan 2023',
  },
];

export const faqs = [
  {
    question: 'UKM apa yang tercatat dalam sumber resmi?',
    answer: 'Laporan Kemahasiswaan 2023 mencatat antara lain English Club, Bisnis Digital, Digital Creator, Multimedia, dan Mandarin Club. Halaman ini menampilkan tiga profil yang informasinya paling relevan. Status aktif, pengurus, dan rekrutmen 2026 tetap perlu dikonfirmasi.',
  },
  {
    question: 'Apa itu AIK dan kegiatan apa yang terdokumentasi?',
    answer: 'AIK adalah Al-Islam dan Kemuhammadiyahan. Laporan Rektor 2024 mendokumentasikan Masjid Amal Mulya, Subuh Berjamaah, Subuh Bergizi, kajian AIK dan Hadis, Baca Tulis Al-Quran, serta kegiatan sosial Islami.',
  },
  {
    question: 'Apa arti label arsip atau program terdokumentasi?',
    answer: 'Label tersebut menunjukkan bahwa kegiatan pernah dicatat dalam sumber resmi pada tahun yang disebutkan. Label itu bukan pengumuman jadwal, status pendaftaran, atau jaminan bahwa program masih berjalan dengan format yang sama pada 2026.',
  },
  {
    question: 'Di mana mahasiswa bisa mencari bantuan?',
    answer: 'Artikel bantuan akademik resmi memuat kontak untuk akademik, persuratan, reset akun, penmaru, call center, dan keuangan. Laman Admisi memuat jalur KIP Kuliah, sedangkan Portal Mahasiswa digunakan untuk layanan yang memerlukan akun.',
  },
];
