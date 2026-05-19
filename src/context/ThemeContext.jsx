import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

export const THEMES = [
  {
    id: 'dark',
    label: 'Dark',
    labelZh: '深色',
    dot: '#1e40af',   // blue dot for picker
  },
  {
    id: 'silver',
    label: 'Silver',
    labelZh: '银灰',
    dot: '#64748b',
  },
  {
    id: 'white',
    label: 'Light',
    labelZh: '白灰',
    dot: '#e2e8f0',
  },
]

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const cycle = () =>
    setTheme(prev => {
      const idx = THEMES.findIndex(t => t.id === prev)
      return THEMES[(idx + 1) % THEMES.length].id
    })

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycle, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
