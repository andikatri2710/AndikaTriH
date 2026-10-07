import type { L10n, Stat } from '../types'

export const profile = {
  name: 'Andika Tri Handoyo',
  initials: 'AH',
  role: 'Full Stack Developer',
  location: 'Kemayoran, Jakarta Raya, Indonesia',
  email: 'andikatri2710@gmail.com',
  tagline: {
    id: 'Saya membangun aplikasi web, integrasi API, dan produk digital yang andal.',
    en: 'I build web applications, API integrations, and reliable digital products.',
  } satisfies L10n,
  availableForFreelance: true,
  availabilityLabel: {
    id: 'Tersedia untuk proyek freelance',
    en: 'Available for freelance work',
  } satisfies L10n,
  resumeUrl: 'cv/andika-tri-handoyo-cv.pdf',
  about: [
    {
      id: 'Saya memulai karier sebagai programmer di Rumah Sakit Metropolitan Medical Centre, mengembangkan sistem web dengan PHP native, JavaScript, dan jQuery. Dari sana saya berkembang ke stack modern: Laravel dan Vue.js.',
      en: 'I started my career as a programmer at Rumah Sakit Metropolitan Medical Centre, building web systems with native PHP, JavaScript, and jQuery. From there I moved to a modern stack: Laravel and Vue.js.',
    },
    {
      id: 'Sekarang saya fokus pada pengembangan platform omnichannel messaging, manajemen AI chatbot, dan integrasi API (WhatsApp, Telegram, Instagram, Facebook, TikTok, hingga marketplace) — dengan penekanan pada reliability, kejelasan kode, dan hasil bisnis yang terukur.',
      en: 'Today I focus on omnichannel messaging platforms, AI chatbot management, and API integrations (WhatsApp, Telegram, Instagram, Facebook, TikTok, and marketplaces) — with an emphasis on reliability, code clarity, and measurable business results.',
    },
    {
      id: 'Saya terbuka untuk kolaborasi, proyek freelance, dan diskusi seputar web development serta AI.',
      en: 'I am open to collaboration, freelance projects, and discussions about web development and AI.',
    },
  ] satisfies L10n[],
  stats: [
    { value: '5+', label: { id: 'Tahun pengalaman', en: 'Years of experience' } },
    { value: '6+', label: { id: 'Platform terintegrasi', en: 'Integrated platforms' } },
    { value: '3', label: { id: 'Perusahaan', en: 'Companies' } },
    { value: '2', label: { id: 'Fokus: Web & AI', en: 'Focus: Web & AI' } },
  ] satisfies Stat[],
}

export type Profile = typeof profile
