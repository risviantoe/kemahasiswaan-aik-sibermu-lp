export const sources = {
  university: 'https://sibermu.ac.id/',
  profile: 'https://sibermu.ac.id/profil/',
  socialDirectory: 'https://linktr.ee/Sibermu',
  logo: 'https://sibermu.ac.id/wp-content/uploads/2022/09/New-Logo-SiberMu-Full-Color.png',
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
  kknLaunch: 'https://sibermu.ac.id/artikel/launching-program-kkn-pjj-melalui-webinar-projek-berbasis-masyarakat-universitas-siber-muhammadiyah/',
  healthCareerWebinar: 'https://sibermu.ac.id/pendidikan/persiapkan-lulusan-administrasi-kesehatan-di-era-transformasi-kesehatan-digital/',
};

// Akun ditautkan dari Linktree SiberMu; YouTube/TikTok juga tercantum di academicHelp.
export const socialLinks = [
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/sibermu/' },
  { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/@sibermu' },
  { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@sibermu' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/sibermu/' },
];

// Email dan alamat dari sources.profile; nomor WhatsApp dari brief lomba,
// dikonfirmasi pengguna pada 25 September 2026.
export const universityContact = {
  email: 'humas@sibermu.ac.id',
  phone: '+62 851-7994-6901',
  whatsapp: 'https://wa.me/6285179946901',
  address: 'Jl. HOS Cokroaminoto No. 17, RT 53/RW 12, Pakuncen, Wirobrajan, Kota Yogyakarta, DIY 55253',
  maps: 'https://www.google.com/maps/search/?api=1&query=Universitas%20Siber%20Muhammadiyah%20Jalan%20HOS%20Cokroaminoto%2017%20Yogyakarta',
};

// Tautan untuk meminta arahan kampus, bukan kontak pengurus/rekrutmen UKM.
export const communityInquiry = `${universityContact.whatsapp}?text=${encodeURIComponent('Assalamu’alaikum. Saya ingin mengetahui informasi UKM SiberMu dan cara bergabung. Mohon arahan ke bagian atau pengurus yang dapat saya hubungi. Terima kasih.')}`;

// Tanggal kegiatan mengikuti isi berita, bukan tanggal terbitnya.
// Program dalam laporan lama tetap diberi label tahun laporan, bukan tanggal acara.
export const activities = [
  {
    category: 'mahasiswa',
    label: 'Kemahasiswaan · Karier',
    title: 'Siber Sehat Talks #7',
    type: 'Kompetensi dan karier di bidang kesehatan digital',
    timing: '11 Mei 2026',
    description: 'Webinar nasional Prodi Administrasi Kesehatan bersama PIPAKI mempertemukan mahasiswa, dosen, dan praktisi untuk membahas kompetensi serta peluang karier di tengah transformasi sistem kesehatan. Tanggal kegiatan mengacu pada isi berita; artikel diterbitkan 17 Juli 2026.',
    source: sources.healthCareerWebinar,
    sourceLabel: 'Baca berita SiberMu',
  },
  {
    category: 'mahasiswa',
    label: 'Kemahasiswaan · Pengabdian',
    title: 'Peluncuran KKN PJJ melalui webinar PBMU',
    type: 'Belajar jarak jauh, berkontribusi di masyarakat',
    timing: '21 Februari 2026',
    description: 'Webinar peluncuran KKN PJJ diikuti mahasiswa, dosen, dan supervisor dari berbagai program studi. Program ini menghubungkan pembelajaran jarak jauh dengan proyek pengabdian berdasarkan kebutuhan masyarakat. Berita resminya juga memuat tautan rekaman webinar.',
    source: sources.kknLaunch,
    sourceLabel: 'Baca berita dan akses rekaman',
  },
  {
    category: 'aik',
    label: 'AIK · Keagamaan',
    title: 'Subuh Berjamaah & Subuh Bergizi',
    type: 'Ibadah, ukhuwah & kesehatan komunitas',
    icon: 'heart',
    status: 'Program terdokumentasi',
    timing: 'Laporan Rektor 2024',
    description: 'Laporan Rektor 2024 mencatat Subuh Berjamaah untuk memperkuat ukhuwah Islamiyah serta Subuh Bergizi yang menghubungkan ibadah dengan kesehatan komunitas.',
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
    description: 'Laporan Rektor 2024 mencatat kajian AIK, Hadis, dan Baca Tulis Al-Quran sebagai pembinaan spiritual untuk pengamalan nilai Islam.',
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
    description: 'Laporan Rektor 2024 mendokumentasikan pengaktifan Masjid Amal Mulya sebagai pusat kegiatan spiritual dan sosial, pembentukan takmir bersama warga, serta kegiatan sosial Islami.',
    source: sources.rectorReport,
    sourceLabel: 'Laporan Rektor 2024, hlm. 9–10',
  },
];

export const communities = [
  {
    title: 'Organisasi mahasiswa',
    description: 'Ruang kepemimpinan, aspirasi, dan kerja bersama mahasiswa.',
    focus: [],
    status: 'Data aktif perlu konfirmasi',
    detail: 'Struktur FATIKES mencantumkan pengawasan organisasi mahasiswa sebagai fungsi Subkoordinator AIK dan Kemahasiswaan. Nama organisasi aktif belum terverifikasi.',
    icon: 'people',
    source: sources.organization,
    sourceLabel: 'Struktur FATIKES SiberMu',
  },
  {
    title: 'UKM English Club',
    description: 'Bahasa Inggris, debat, public speaking, dan wawasan budaya internasional.',
    focus: ['Bahasa Inggris', 'Debat', 'Public speaking'],
    status: 'Arsip resmi · 2023',
    detail: 'Program yang tercatat pada 2023 meliputi workshop bahasa Inggris, kompetisi, pertukaran bahasa dan budaya, serta persiapan TOEFL.',
    icon: 'book',
    source: sources.studentReport,
    sourceLabel: 'Laporan Kemahasiswaan 2023',
  },
  {
    title: 'UKM Bisnis Digital',
    description: 'Ruang untuk mengembangkan gagasan usaha berbasis teknologi.',
    focus: ['Ide usaha', 'Teknologi'],
    status: 'Arsip resmi · 2023',
    detail: 'Nama UKM Bisnis Digital tercatat dalam Laporan Kemahasiswaan 2023. Rincian programnya belum tersedia pada sumber yang ditemukan.',
    icon: 'spark',
    source: sources.studentReport,
    sourceLabel: 'Laporan Kemahasiswaan 2023',
  },
  {
    title: 'UKM Digital Creator',
    description: 'Karya digital, desain grafis, video, fotografi, dan konten kreatif.',
    focus: ['Desain grafis', 'Video', 'Fotografi'],
    status: 'Arsip resmi · 2023',
    detail: 'Profil 2023 mencatat workshop, kompetisi konten digital, kolaborasi, pameran, seminar, dan diskusi.',
    icon: 'heart',
    source: sources.studentReport,
    sourceLabel: 'Laporan Kemahasiswaan 2023',
  },
];

export const faqs = [
  {
    question: 'Bagaimana mencari informasi bergabung dengan UKM?',
    answer: 'Sampaikan UKM yang kamu minati melalui WhatsApp kampus dan minta arahan ke pengurusnya. Profil UKM di halaman ini mengacu pada laporan 2023, sehingga status aktif dan jadwal rekrutmen perlu ditanyakan kembali.',
    href: communityInquiry,
    linkLabel: 'Tanyakan informasi UKM',
  },
  {
    question: 'Apakah kegiatan yang ditampilkan sedang dibuka?',
    answer: 'Halaman ini memuat dokumentasi kegiatan yang sudah berlangsung dan program dari laporan kampus. Untuk mencari kegiatan yang bisa diikuti, periksa pengumuman terbaru di kanal resmi SiberMu beserta jadwal dan ketentuan pendaftarannya.',
    href: sources.university,
    linkLabel: 'Lihat pengumuman kampus',
  },
];
