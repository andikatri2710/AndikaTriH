import type { Project } from '../types'

/**
 * Draf project — ditulis dari pengalaman di resume.
 * Perbaiki deskripsi/fitur/tautan sesuai project asli Anda.
 */
export const projects: Project[] = [
  {
    id: 'usahaku',
    title: 'UsahaKu — StokKu + eNotaku',
    category: 'Web Application',
    description: {
      id: 'Platform untuk UMKM yang menggabungkan dua produk menjadi satu aplikasi: StokKu (stok & kasir) dan eNotaku (nota elektronik jasa), dinaungi satu paket berlangganan UsahaKu Pro.',
      en: 'A platform for MSMEs that combines two products into one application: StokKu (inventory & POS) and eNotaku (digital invoicing for services), under a single UsahaKu Pro subscription.',
    },
    problem: {
      id: 'Pedagang UMKM biasa memakai dua aplikasi terpisah — stok dan kasir di satu tempat, nota jasa di tempat lain — sehingga data pelanggan terpecah dan laporan tidak satu pintu.',
      en: 'MSMEs often run two separate apps — inventory and POS in one place, service invoices in another — so customer data is split and reporting has no single source of truth.',
    },
    solution: {
      id: 'Satu aplikasi Laravel dengan tiga merek (StokKu, eNotaku, UsahaKu Pro): daftar gratis per produk, upgrade Pro menyatukan kedua modul dalam satu panel — pelanggan bersama, nota bisa memotong stok, dan omzet gabungan dalam satu tagihan.',
      en: 'One Laravel application with three brands (StokKu, eNotaku, UsahaKu Pro): free signup per product, and a Pro upgrade unifies both modules in one panel — shared customers, invoices that deduct stock, and combined revenue in a single bill.',
    },
    role: 'Full Stack Developer',
    period: { id: '2026 – Sekarang', en: '2026 – Present' },
    technologies: ['Laravel', 'Tailwind CSS', 'Alpine.js', 'Midtrans', 'QR Code'],
    features: [
      {
        id: 'Stok realtime, kasir QR, kartu stok, arus kas, dan laporan laba rugi untuk UMKM',
        en: 'Real-time inventory, QR checkout, stock ledger, cash flow, and profit reports for MSMEs',
      },
      {
        id: 'Nota jasa kirim WhatsApp dengan tracking publik, QR lunas, dan ekspor PDF',
        en: 'Service invoices sent via WhatsApp with public tracking, QR payment checks, and PDF export',
      },
      {
        id: 'Langganan Pro: billing Midtrans, masa tenggang, downgrade otomatis, role Owner/Kasir/Staff',
        en: 'Pro subscription: Midtrans billing, grace period, automatic downgrade, Owner/Cashier/Staff roles',
      },
    ],
  },
  {
    id: 'omnichannel-messaging',
    title: 'Platform Omnichannel Messaging',
    category: 'Web Application',
    description: {
      id: 'Platform percakapan multi-kanal yang menyatukan pesan dari WhatsApp, Instagram, Facebook, dan TikTok ke dalam satu inbox untuk tim customer service.',
      en: 'A multi-channel conversation platform that unifies messages from WhatsApp, Instagram, Facebook, and TikTok into a single inbox for customer service teams.',
    },
    problem: {
      id: 'Pesan pelanggan tersebar di banyak kanal, sehingga respons lambat dan percakapan mudah terlewat.',
      en: 'Customer messages are scattered across many channels, causing slow responses and missed conversations.',
    },
    solution: {
      id: 'Satu dashboard terpadu dengan routing pesan ke agen, template balasan, dan statistik percakapan.',
      en: 'One unified dashboard with message routing to agents, reply templates, and conversation analytics.',
    },
    role: 'Full Stack Developer',
    period: '2022 – 2025',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    features: [
      {
        id: 'Inbox terpadu untuk WhatsApp, Instagram, Facebook, dan TikTok',
        en: 'Unified inbox for WhatsApp, Instagram, Facebook, and TikTok',
      },
      {
        id: 'Routing percakapan ke agen dengan riwayat lengkap',
        en: 'Conversation routing to agents with full history',
      },
      {
        id: 'Dashboard analitik: volume pesan, waktu respons, performa agen',
        en: 'Analytics dashboard: message volume, response time, agent performance',
      },
    ],
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Integration',
    category: 'AI & Automation',
    description: {
      id: 'Sistem manajemen AI chatbot yang menghubungkan model AI ke kanal pesan pelanggan dengan alur percakapan yang bisa dikonfigurasi.',
      en: 'An AI chatbot management system that connects AI models to customer messaging channels with configurable conversation flows.',
    },
    problem: {
      id: 'Tim support kembali menanyakan pertanyaan yang sama berulang kali dan tidak bisa melayani 24/7.',
      en: 'The support team keeps answering the same questions and cannot serve customers 24/7.',
    },
    solution: {
      id: 'Chatbot AI yang menjawab otomatis berdasarkan knowledge base, dengan handover ke manusia saat dibutuhkan.',
      en: 'An AI chatbot that answers automatically from a knowledge base, with handover to a human when needed.',
    },
    role: 'Full Stack Developer',
    period: '2024 – 2025',
    technologies: ['Laravel', 'PHP', 'AI/LLM API', 'Webhook'],
    features: [
      {
        id: 'Auto-reply berbasis AI untuk pertanyaan umum pelanggan',
        en: 'AI-based auto-replies for common customer questions',
      },
      {
        id: 'Handover mulus dari chatbot ke agen manusia',
        en: 'Seamless handover from chatbot to human agents',
      },
      {
        id: 'Konfigurasi percakapan dan knowledge base tanpa mengubah kode',
        en: 'Conversation and knowledge-base configuration without code changes',
      },
    ],
  },
  {
    id: 'integration-hub',
    title: 'Integration Hub: Marketplace & Social API',
    category: 'Integration',
    description: {
      id: 'Lapisan integrasi yang menghubungkan sistem internal dengan API marketplace dan media sosial, termasuk webhook event dan sinkronisasi data.',
      en: 'An integration layer connecting internal systems with marketplace and social media APIs, including event webhooks and data synchronization.',
    },
    problem: {
      id: 'Data pesanan dan notifikasi dari marketplace/media sosial harus diambil manual dari banyak dashboard.',
      en: 'Order data and notifications from marketplaces/social media had to be collected manually from many dashboards.',
    },
    solution: {
      id: 'Satu hub integrasi dengan webhook receiver, sinkronisasi terjadwal, dan penanganan error yang tercatat.',
      en: 'A single integration hub with a webhook receiver, scheduled synchronization, and logged error handling.',
    },
    role: 'Full Stack Developer',
    period: '2023 – 2025',
    technologies: ['Laravel', 'REST API', 'Webhook', 'MySQL'],
    features: [
      {
        id: 'Koneksi ke API marketplace dan media sosial dalam satu modul',
        en: 'Connections to marketplace and social media APIs in one module',
      },
      {
        id: 'Webhook receiver dengan validasi dan logging setiap event',
        en: 'Webhook receiver with validation and logging for every event',
      },
      {
        id: 'Sinkronisasi data terjadwal serta mekanisme retry saat gagal',
        en: 'Scheduled data sync with retry on failure',
      },
    ],
  },
  {
    id: 'hospital-web-system',
    title: { id: 'Sistem Web Rumah Sakit', en: 'Hospital Web System' },
    category: 'Dashboard',
    description: {
      id: 'Sistem web internal untuk Rumah Sakit Metropolitan Medical Centre — proyek pertama saya sebagai developer profesional.',
      en: 'An internal web system for Rumah Sakit Metropolitan Medical Centre — my first project as a professional developer.',
    },
    problem: {
      id: 'Proses administratif berjalan manual sehingga laporan lambat dibuat dan rawan salah data.',
      en: 'Administrative processes ran manually, making reports slow to produce and prone to data errors.',
    },
    solution: {
      id: 'Aplikasi web dengan form terstruktur, role pengguna, dan cetak laporan.',
      en: 'A web application with structured forms, user roles, and printable reports.',
    },
    role: 'Program Technician',
    period: '2021 – 2022',
    technologies: ['PHP', 'JavaScript', 'jQuery', 'MySQL'],
    features: [
      {
        id: 'Form input data terstruktur dengan validasi sisi server',
        en: 'Structured data-entry forms with server-side validation',
      },
      {
        id: 'Manajemen hak akses berdasarkan peran pengguna',
        en: 'Role-based access management for users',
      },
      {
        id: 'Generator laporan yang siap dicetak',
        en: 'Print-ready report generator',
      },
    ],
  },
]

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
] as const
