import type { ProjectCategory } from '../types'

export type Lang = 'id' | 'en'

type CategoryLabels = Record<ProjectCategory, string>

/**
 * UI strings for both languages. `en` is typed as UiStrings so a missing or
 * extra key is a TypeScript error — the two languages can never drift apart.
 */
const id = {
  // Navigation / chrome
  navAria: 'Navigasi utama',
  skipLink: 'Lewati ke konten',
  menuOpen: 'Buka menu',
  menuClose: 'Tutup menu',
  logoAria: '{name} — kembali ke atas',
  navItems: [
    { id: 'tentang', label: 'Tentang' },
    { id: 'keahlian', label: 'Keahlian' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'kontak', label: 'Kontak' },
  ],
  ctaContact: 'Hubungi Saya',
  demoLabel: 'Live Demo',
  demoSuffix: '(opens in a new tab)',
  langAria: 'Ganti bahasa',
  langId: 'ID',
  langEn: 'EN',

  // Theme toggle
  themeSystem: 'Ikuti sistem',
  themeLight: 'Mode terang',
  themeAriaSystem: 'Tema: Ikuti sistem. Klik untuk mengganti.',
  themeAriaLight: 'Tema: Mode terang. Klik untuk mengganti.',
  themeDark: 'Mode gelap',
  themeAriaDark: 'Tema: Mode gelap. Klik untuk mengganti.',

  // Hero
  greeting: 'Halo, saya',
  viewWork: 'Lihat Proyek',
  downloadCv: 'Unduh CV',
  socialsAria: 'Tautan sosial',

  // About
  aboutEyebrow: 'Tentang',
  aboutTitle: 'Tentang Saya',
  aboutCv: 'Unduh CV (PDF)',

  // Skills
  skillsEyebrow: 'Keahlian',
  skillsTitle: 'Teknologi & Keahlian',
  skillsDesc:
    'Stack yang saya gunakan sehari-hari untuk membangun aplikasi web, integrasi, dan produk berbasis AI.',
  skillsGroupAria: 'Keahlian {group}',

  // Projects
  projectsEyebrow: 'Proyek',
  projectsTitle: 'Proyek Pilihan',
  projectsDesc:
    'Beberapa pekerjaan yang mewakili cara saya menyelesaikan masalah bisnis dengan software.',
  filterAria: 'Filter kategori proyek',
  filterAll: 'Semua',
  featuresTitle: 'Fitur utama',
  internalNote: 'Proyek internal — tautan tidak dipublikasikan',
  projectsEmpty: 'Belum ada proyek pada kategori ini.',
  githubSuffix: 'di GitHub (tab baru)',
  techAria: 'Teknologi {name}',
  categories: {
    'Web Application': 'Aplikasi Web',
    Integration: 'Integrasi',
    'AI & Automation': 'AI & Otomasi',
    Dashboard: 'Dasbor',
  } as CategoryLabels,

  // Experience
  expEyebrow: 'Pengalaman',
  expTitle: 'Perjalanan Karier',
  expDesc: 'Dari sistem web rumah sakit hingga platform omnichannel dan integrasi AI.',

  // Services
  servicesEyebrow: 'Layanan',
  servicesTitle: 'Yang Bisa Saya Bantu',
  servicesDesc: 'Layanan freelance yang bisa langsung dikerjakan dari jarak jauh.',

  // GitHub
  githubEyebrow: 'GitHub',
  githubTitle: 'Aktivitas di GitHub',
  githubDesc:
    'Kontribusi dan repository publik saya bisa dilihat langsung di GitHub.',
  githubLoading: 'Memuat data GitHub…',
  githubError:
    'Data GitHub tidak bisa dimuat sekarang (kemungkinan rate limit). Repository tetap bisa dilihat langsung di profil saya.',
  githubOpen: 'Buka GitHub',
  githubRepoLabel: 'repo',
  githubFollowersLabel: 'pengikut',
  githubEmpty:
    'Belum ada repository publik yang menonjol — tetap intip profil saya untuk aktivitas terbaru.',

  // Contact
  contactEyebrow: 'Kontak',
  contactTitle: 'Mari Bekerja Sama',
  contactDesc:
    'Punya proyek, butuh bantuan integrasi, atau ingin diskusi ide? Kirim pesan — saya biasanya membalas dalam 1×24 jam.',
  sendEmail: 'Kirim Email',
  copyEmail: 'Salin email',
  copied: 'Tersalin!',
  copyFailed: 'Gagal menyalin — salin manual',

  // Footer / misc
  builtNote: 'Dibuat dengan React & Tailwind CSS.',
  backToTopLink: 'Kembali ke atas ↑',
  backToTopAria: 'Kembali ke atas',
}

export type UiStrings = typeof id

const en: UiStrings = {
  // Navigation / chrome
  navAria: 'Main navigation',
  skipLink: 'Skip to content',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  logoAria: '{name} — back to top',
  navItems: [
    { id: 'tentang', label: 'About' },
    { id: 'keahlian', label: 'Skills' },
    { id: 'proyek', label: 'Projects' },
    { id: 'pengalaman', label: 'Experience' },
    { id: 'layanan', label: 'Services' },
    { id: 'kontak', label: 'Contact' },
  ],
  ctaContact: 'Contact Me',
  langAria: 'Switch language',
  langId: 'ID',
  langEn: 'EN',

  // Theme toggle
  themeSystem: 'System',
  themeLight: 'Light',
  themeAriaSystem: 'Theme: System. Click to change.',
  themeAriaLight: 'Theme: Light. Click to change.',
  themeDark: 'Dark',
  themeAriaDark: 'Theme: Dark. Click to change.',

  // Hero
  greeting: "Hi, I'm",
  viewWork: 'View My Work',
  demoLabel: 'Live Demo',
  downloadCv: 'Download CV',
  demoSuffix: '(opens in a new tab)',
  socialsAria: 'Social links',

  // About
  aboutEyebrow: 'About',
  aboutTitle: 'About Me',
  aboutCv: 'Download CV (PDF)',

  // Skills
  skillsEyebrow: 'Skills',
  skillsTitle: 'Technologies & Skills',
  skillsDesc:
    'The stack I use daily to build web applications, integrations, and AI-powered products.',
  skillsGroupAria: '{group} skills',

  // Projects
  projectsEyebrow: 'Projects',
  projectsTitle: 'Selected Projects',
  projectsDesc:
    'A selection of work that shows how I solve business problems with software.',
  filterAria: 'Filter project categories',
  filterAll: 'All',
  featuresTitle: 'Key features',
  internalNote: 'Internal project — links not published',
  projectsEmpty: 'No projects in this category yet.',
  githubSuffix: 'on GitHub (opens in a new tab)',
  techAria: '{name} technologies',
  categories: {
    'Web Application': 'Web Application',
    Integration: 'Integration',
    'AI & Automation': 'AI & Automation',
    Dashboard: 'Dashboard',
  } as CategoryLabels,

  // Experience
  expEyebrow: 'Experience',
  expTitle: 'Career Journey',
  expDesc:
    'From hospital web systems to omnichannel platforms and AI integrations.',

  // Services
  servicesEyebrow: 'Services',
  servicesTitle: 'How I Can Help',
  servicesDesc: 'Freelance services I can deliver remotely.',

  // GitHub
  githubEyebrow: 'GitHub',
  githubTitle: 'GitHub Activity',
  githubDesc:
    'My contributions and public repositories are available directly on GitHub.',
  githubLoading: 'Loading GitHub data…',
  githubError:
    "GitHub data can't be loaded right now (possibly rate-limited). You can still view repositories directly on my profile.",
  githubOpen: 'Open GitHub',
  githubRepoLabel: 'repo',
  githubFollowersLabel: 'followers',
  githubEmpty:
    'No prominent public repositories yet — check my profile for recent activity.',

  // Contact
  contactEyebrow: 'Contact',
  contactTitle: "Let's Work Together",
  contactDesc:
    'Got a project, need integration help, or want to brainstorm? Send a message — I usually reply within 24 hours.',
  sendEmail: 'Send Email',
  copyEmail: 'Copy email',
  copied: 'Copied!',
  copyFailed: 'Copy failed — copy manually',

  // Footer / misc
  builtNote: 'Built with React & Tailwind CSS.',
  backToTopLink: 'Back to top ↑',
  backToTopAria: 'Back to top',
}

export const ui: Record<Lang, UiStrings> = { id, en }

/** Fill `{placeholder}` tokens in a UI string. */
export function fmt(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (m, key: string) => vars[key] ?? m)
}
