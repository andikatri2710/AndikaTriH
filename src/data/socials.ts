import { Mail } from 'lucide-react'
import { GithubIcon } from '../components/brand/GithubIcon'
import { LinkedinIcon } from '../components/brand/LinkedinIcon'
import { profile } from './profile'
import type { SocialLink } from '../types'

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    handle: 'andikatri2710',
    url: 'https://github.com/andikatri2710',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    handle: 'andikatri-handoyo-13b61b1a3',
    url: 'https://www.linkedin.com/in/andikatri-handoyo-13b61b1a3',
    icon: LinkedinIcon,
  },
  {
    label: 'Email',
    handle: profile.email,
    url: `mailto:${profile.email}`,
    icon: Mail,
  },
]

/** GitHub username used by the GitHub section (no token needed, public API). */
export const githubUsername = 'andikatri2710'
