import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'Responsive UI'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'PHP', 'REST API', 'Webhook', 'Authentication'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'Query Optimization', 'Data Modeling'],
  },
  {
    title: 'AI & Data',
    items: ['AI/LLM Integration', 'AI Chatbot', 'Data Analysis', 'Otomasi Proses'],
  },
  {
    title: { id: 'Integrasi', en: 'Integrations' },
    items: [
      'WhatsApp API',
      'Telegram API',
      'Instagram API',
      'Facebook API',
      'TikTok API',
      'Marketplace API',
    ],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Postman', 'Linux'],
  },
]
