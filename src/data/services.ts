import { Bot, Code2, LayoutDashboard, Link2, Workflow, Wrench } from 'lucide-react'
import type { Service } from '../types'

export const services: Service[] = [
  {
    title: 'Web Development',
    description: {
      id: 'Website dan aplikasi web custom — dari company profile hingga sistem internal — dengan kode yang rapi dan mudah dikembangkan.',
      en: 'Custom websites and web apps — from company profiles to internal systems — with clean, maintainable code.',
    },
    icon: Code2,
  },
  {
    title: 'API Integration',
    description: {
      id: 'Integrasi API WhatsApp, Telegram, Instagram, Facebook, TikTok, marketplace, payment, atau service custom lainnya.',
      en: 'Integrations with WhatsApp, Telegram, Instagram, Facebook, TikTok, marketplace, payment, or any custom service API.',
    },
    icon: Link2,
  },
  {
    title: 'Dashboard & Admin Panel',
    description: {
      id: 'Dashboard operasional dengan data real-time, role pengguna, dan laporan yang mudah dipahami tim bisnis.',
      en: 'Operational dashboards with real-time data, user roles, and reports the business team can actually read.',
    },
    icon: LayoutDashboard,
  },
  {
    title: 'AI Chatbot Integration',
    description: {
      id: 'Chatbot berbasis AI/LLM yang terhubung ke kanal pesan pelanggan, lengkap dengan alur percakapan dan handover ke manusia.',
      en: 'AI/LLM chatbots connected to customer messaging channels, with conversation flows and human handover.',
    },
    icon: Bot,
  },
  {
    title: 'Automation & Data Analysis',
    description: {
      id: 'Otomasi proses bisnis berulang dan analisis data agar tim Anda fokus pada pekerjaan yang lebih penting.',
      en: 'Automation of repetitive business processes and data analysis, so your team can focus on what matters.',
    },
    icon: Workflow,
  },
  {
    title: 'Maintenance & Optimization',
    description: {
      id: 'Perbaikan bug, peningkatan performa, dan pemeliharaan berkala untuk sistem yang sudah berjalan.',
      en: 'Bug fixing, performance improvements, and regular maintenance for systems in production.',
    },
    icon: Wrench,
  },
]
