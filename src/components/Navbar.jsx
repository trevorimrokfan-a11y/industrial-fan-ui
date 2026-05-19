import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, toggle, t } = useLanguage()

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E1A]/95 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
            <span className="font-bold text-white tracking-widest text-sm">COOLFAN</span>
          </div>
          <span className="text-gray-500 text-[10px] hidden sm:block">Cooling the Future</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              className={`text-sm transition-colors ${
                location.pathname === item.to
                  ? 'text-white font-medium border-b border-blue-500 pb-0.5'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white transition-all text-xs font-medium"
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
            className="lg:hidden text-gray-400 hover:text-white"
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
        <div className="lg:hidden bg-[#0F1624] border-t border-gray-800 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-gray-300 hover:text-white py-1"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white py-1"
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
