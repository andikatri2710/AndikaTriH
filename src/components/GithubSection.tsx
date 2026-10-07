import { useEffect, useState } from 'react'
import { AlertTriangle, ExternalLink, Star, Users } from 'lucide-react'
import { GithubIcon } from './brand/GithubIcon'
import { githubUsername } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

interface GithubProfile {
  login: string
  html_url: string
  public_repos: number
  followers: number
  name: string | null
  bio: string | null
}

interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  fork: boolean
}

type Status = 'loading' | 'ready' | 'error'

const API = 'https://api.github.com'

/** GitHub section using the public API (no token, no secrets in the bundle).
 *  Loading, error, and fallback states so the page stays usable if API fails. */
export function GithubSection() {
  const { s } = useLanguage()
  const [status, setStatus] = useState<Status>('loading')
  const [profile, setProfile] = useState<GithubProfile | null>(null)
  const [repos, setRepos] = useState<GithubRepo[]>([])

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setStatus('loading')
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`${API}/users/${githubUsername}`, { signal: controller.signal }),
          fetch(
            `${API}/users/${githubUsername}/repos?per_page=100&sort=updated`,
            { signal: controller.signal },
          ),
        ])

        if (!profileRes.ok || !reposRes.ok) {
          throw new Error(`GitHub API error: ${profileRes.status}/${reposRes.status}`)
        }

        const profileData = (await profileRes.json()) as GithubProfile
        const reposData = (await reposRes.json()) as GithubRepo[]

        const top = reposData
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || b.id - a.id)
          .slice(0, 3)

        setProfile(profileData)
        setRepos(top)
        setStatus('ready')
      } catch (err) {
        if ((err as Error).name === 'AbortError') return
        setStatus('error')
      }
    }

    load()
    return () => controller.abort()
  }, [])

  return (
    <section
      aria-labelledby="github-title"
      className="scroll-mt-24 border-y border-line bg-surface-2/30 py-20 md:py-28"
    >
      <div className="container-page">
        <SectionTitle
          id="github-title"
          eyebrow={s.githubEyebrow}
          title={s.githubTitle}
          description={s.githubDesc}
        />

        <Reveal>
          <div className="mx-auto max-w-3xl">
            {status === 'loading' ? (
              <div className="card animate-pulse p-6" role="status" aria-live="polite">
                <p className="text-sm text-muted">{s.githubLoading}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-16 rounded-lg bg-surface-2" />
                  ))}
                </div>
              </div>
            ) : null}

            {status === 'error' ? (
              <div
                className="card flex flex-wrap items-center gap-3 border-amber-400/50 p-6"
                role="alert"
              >
                <AlertTriangle aria-hidden="true" className="h-5 w-5 shrink-0 text-amber-500" />
                <p className="flex-1 text-sm text-muted">{s.githubError}</p>
                <a
                  href={`https://github.com/${githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-sm font-semibold hover:border-primary hover:text-primary"
                >
                  {s.githubOpen}
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
            ) : null}

            {status === 'ready' && profile ? (
              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold hover:text-primary"
                  >
                    <GithubIcon className="h-5 w-5" />
                    {profile.login}
                    <ExternalLink aria-hidden="true" className="h-3.5 w-3.5 text-muted" />
                  </a>

                  <div className="flex flex-wrap items-center gap-5 text-sm">
                    <span className="flex items-center gap-1.5">
                      <GithubIcon className="h-4 w-4 text-muted" />
                      <span className="font-semibold">{profile.public_repos}</span>
                      <span className="text-muted">{s.githubRepoLabel}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users aria-hidden="true" className="h-4 w-4 text-muted" />
                      <span className="font-semibold">{profile.followers}</span>
                      <span className="text-muted">{s.githubFollowersLabel}</span>
                    </span>
                  </div>
                </div>

                {repos.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {repos.map((repo) => (
                      <li key={repo.id}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-4 rounded-lg border border-line bg-surface p-3.5 transition-colors hover:border-primary"
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold group-hover:text-primary">
                              {repo.name}
                            </span>
                            {repo.description ? (
                              <span className="mt-0.5 block truncate text-xs text-muted">
                                {repo.description}
                              </span>
                            ) : null}
                          </span>
                          <span className="flex shrink-0 items-center gap-3 text-xs text-muted">
                            {repo.language ? <span>{repo.language}</span> : null}
                            <span className="inline-flex items-center gap-1">
                              <Star aria-hidden="true" className="h-3.5 w-3.5" />
                              {repo.stargazers_count}
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-5 text-sm text-muted">{s.githubEmpty}</p>
                )}
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
