import { useCallback, useEffect, useState } from 'react'

export type ThemeChoice = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

function readChoice(): ThemeChoice {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function applyChoice(choice: ThemeChoice) {
  const root = document.documentElement
  if (choice === 'dark') root.dataset.theme = 'dark'
  else delete root.dataset.theme
}

/** Default is light sage. Dark is opt-in and stored locally. */
export function useTheme() {
  const [choice, setChoice] = useState<ThemeChoice>(readChoice)

  useEffect(() => {
    applyChoice(choice)
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      /* private mode */
    }
  }, [choice])

  const cycle = useCallback(() => {
    setChoice((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { choice, resolved: choice, cycle }
}
