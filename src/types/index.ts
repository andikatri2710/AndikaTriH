import type { LucideIcon } from 'lucide-react'

/** A plain string (same in every language) or per-language text. */
export type L10n = string | { id: string; en: string }

export interface Stat {
  value: string
  label: L10n
}

export interface SkillGroup {
  title: L10n
  items: L10n[]
}

export type ProjectCategory =
  | 'Web Application'
  | 'Integration'
  | 'AI & Automation'
  | 'Dashboard'

export interface Project {
  id: string
  title: L10n
  category: ProjectCategory
  description: L10n
  problem: L10n
  solution: L10n
  role: L10n
  period: L10n
  technologies: L10n[]
  features: L10n[]
  /** Optional path under public/, e.g. "images/projects/chatbot.png" */
  image?: string
  github?: string
  demo?: string
}

export interface ExperienceItem {
  company: string
  position: L10n
  period: L10n
  location: string
  highlights: L10n[]
  technologies: L10n[]
}

export interface EducationItem {
  institution: string
  degree: L10n
  period: L10n
}

export interface Service {
  title: L10n
  description: L10n
  icon: LucideIcon
}

export interface SocialLink {
  label: string
  handle?: string
  url: string
  icon: LucideIcon
}

export interface NavItem {
  id: string
  label: string
}
