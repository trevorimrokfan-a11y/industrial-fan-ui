import { createContext, useContext, useState } from 'react'
import en from '../i18n/en'
import zh from '../i18n/zh'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const toggle = () => setLang(prev => prev === 'en' ? 'zh' : 'en')
  const t = lang === 'en' ? en : zh

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
