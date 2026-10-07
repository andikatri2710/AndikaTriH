import type { EducationItem, ExperienceItem } from '../types'

export const experiences: ExperienceItem[] = [
  {
    company: 'Kolink Network Solution',
    position: 'Full Stack Web Developer',
    period: { id: 'Nov 2025 – Sekarang', en: 'Nov 2025 – Present' },
    location: 'Jakarta, Indonesia',
    highlights: [
      {
        id: 'Mengembangkan fitur full stack untuk produk web perusahaan',
        en: 'Building full-stack features for the company web product',
      },
      {
        id: 'Merancang endpoint REST API dan integrasi layanan pihak ketiga',
        en: 'Designing REST API endpoints and third-party service integrations',
      },
      {
        id: 'Menjaga kualitas kode: review, perbaikan bug, dan optimasi performa',
        en: 'Maintaining code quality: reviews, bug fixes, and performance tuning',
      },
    ],
    technologies: ['Laravel', 'PHP', 'Vue.js', 'REST API', 'MySQL'],
  },
  {
    company: 'Barantum.com',
    position: 'Full Stack Web Developer',
    period: { id: 'Ags 2022 – Okt 2025', en: 'Aug 2022 – Oct 2025' },
    location: 'Jakarta, Indonesia',
    highlights: [
      {
        id: 'Membangun dan mengembangkan platform omnichannel messaging',
        en: 'Built and developed the omnichannel messaging platform',
      },
      {
        id: 'Mengintegrasikan AI chatbot serta API WhatsApp, Telegram, Instagram, Facebook, TikTok, dan marketplace',
        en: 'Integrated AI chatbots plus WhatsApp, Telegram, Instagram, Facebook, TikTok, and marketplace APIs',
      },
      {
        id: 'Mengotomasi proses bisnis dan analisis data untuk kebutuhan operasional',
        en: 'Automated business processes and data analysis for operations',
      },
    ],
    technologies: ['Laravel', 'Vue.js', 'JavaScript', 'REST API', 'Webhook', 'MySQL'],
  },
  {
    company: 'Rumah Sakit Metropolitan Medical Centre (RS MMC)',
    position: 'Program Technician',
    period: { id: 'Feb 2021 – Agu 2022', en: 'Feb 2021 – Aug 2022' },
    location: 'Jakarta, Indonesia',
    highlights: [
      {
        id: 'Mengembangkan dan memelihara sistem web internal rumah sakit',
        en: 'Developed and maintained the hospital internal web system',
      },
      {
        id: 'Menulis query SQL untuk kebutuhan laporan dan data',
        en: 'Wrote SQL queries for reporting and data needs',
      },
      {
        id: 'Menangani perbaikan bug dan penyesuaian fitur sesuai kebutuhan pengguna',
        en: 'Handled bug fixes and feature adjustments based on user needs',
      },
    ],
    technologies: ['PHP', 'JavaScript', 'jQuery', 'MySQL'],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'LP3I Kramat',
    degree: { id: 'Teknik Informatika', en: 'Informatics Engineering' },
    period: '2018 – 2021',
  },
]
