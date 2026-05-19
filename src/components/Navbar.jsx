import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme, THEMES } from '../context/ThemeContext'

// Mini palette icon (3 stacked circles)
function PaletteIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="5" cy="8" r="2.5" opacity="0.5"/>
      <circle cx="10" cy="5.5" r="2.5" opacity="0.75"/>
      <circle cx="10" cy="10.5" r="2.5"/>
    </svg>
  )
}

// Theme dot colors (visual only, not CSS-var-driven so they're always recognizable)
const THEME_COLORS = {
  dark:   { bg: '#0A0E1A', ring: '#2563eb', label: 'Dark'   },
  silver: { bg: '#1a1f2e', ring: '#4f7cdb', label: 'Silver' },
  white:  { bg: '#f0f2f7', ring: '#1d4ed8', label: 'Light'  },
}

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)

  const themeLabels = {
    dark:   { en: 'Dark',   zh: '深色' },
    silver: { en: 'Silver', zh: '银灰' },
    white:  { en: 'Light',  zh: '白灰' },
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        title="Switch theme"
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all text-xs font-medium"
        style={{
          borderColor: open ? 'var(--accent)' : 'var(--border-light)',
          color: 'var(--text-secondary)',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
        onMouseLeave={e => { if (!open) { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-light)' } }}
      >
        <PaletteIcon />
        <span className="hidden sm:inline w-10 text-center">
          {themeLabels[theme][lang]}
        </span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          {/* Dropdown */}
          <div
            className="absolute right-0 top-full mt-2 z-50 rounded-xl border shadow-xl overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-base)',
              minWidth: '140px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            }}
          >
            <div className="px-3 py-2 border-b" style={{ borderColor: 'var(--border-base)' }}>
              <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                {lang === 'en' ? 'Theme' : '主题'}
              </span>
            </div>
            {THEMES.map(th => {
              const active = theme === th.id
              const col = THEME_COLORS[th.id]
              return (
                <button
                  key={th.id}
                  onClick={() => { setTheme(th.id); setOpen(false) }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors"
                  style={{
                    backgroundColor: active ? 'var(--accent-subtle)' : 'transparent',
                    color: active ? 'var(--accent-text)' : 'var(--text-secondary)',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.backgroundColor = 'var(--bg-elevated)' }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  {/* Color swatch */}
                  <span
                    className="w-5 h-5 rounded-full flex-shrink-0 border-2"
                    style={{
                      backgroundColor: col.bg,
                      borderColor: active ? col.ring : 'transparent',
                      boxShadow: `0 0 0 1px ${col.ring}`,
                    }}
                  />
                  <span className="text-xs font-medium">
                    {themeLabels[th.id][lang]}
                  </span>
                  {active && (
                    <svg className="w-3.5 h-3.5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-text)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, toggle, t } = useLanguage()
  const { theme } = useTheme()

  const navItems = [
    { label: t.nav.home, to: '/' },
    { label: t.nav.products, to: '/products' },
    { label: t.nav.applications, to: '/applications' },
    { label: t.nav.solutions, to: '/solutions' },
    { label: t.nav.support, to: '/support' },
    { label: t.nav.aboutUs, to: '/about' },
    { label: t.nav.contact, to: '/contact' },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b"
      style={{ backgroundColor: 'var(--nav-bg)', borderColor: 'var(--border-base)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center" style={{ borderColor: 'var(--accent)' }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            </div>
            <span className="font-bold tracking-widest text-sm" style={{ color: 'var(--text-primary)' }}>COOLFAN</span>
          </div>
          <span className="text-[10px] hidden sm:block" style={{ color: 'var(--text-muted)' }}>Cooling the Future</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const active = location.pathname === item.to
            return (
              <Link
                key={item.to + item.label}
                to={item.to}
                className="text-sm transition-colors"
                style={{
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
                  fontWeight: active ? 500 : 400,
                  borderBottom: active ? '1px solid var(--accent)' : 'none',
                  paddingBottom: active ? '2px' : undefined,
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button
            className="transition-colors p-1"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Theme Switcher */}
          <ThemeSwitcher />

          {/* Language Toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-all text-xs font-medium"
            style={{ borderColor: 'var(--border-light)', color: 'var(--text-secondary)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
            title={lang === 'en' ? '切换到中文' : 'Switch to English'}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            </svg>
            <span className="w-7 text-center">{lang === 'en' ? 'EN' : '中文'}</span>
          </button>

          {/* Mobile menu btn */}
          <button
            className="lg:hidden transition-colors"
            style={{ color: 'var(--text-muted)' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className="lg:hidden border-t px-6 py-4 space-y-3"
          style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-base)' }}
        >
          {navItems.map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block text-sm py-1 transition-colors"
              style={{ color: location.pathname === item.to ? 'var(--accent-text)' : 'var(--text-secondary)' }}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-2 text-sm py-1 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            </svg>
            {lang === 'en' ? '切换到中文' : 'Switch to English'}
          </button>
        </div>
      )}
    </header>
  )
}
