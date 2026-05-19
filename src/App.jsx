import { HashRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ApplicationsPage from './pages/ApplicationsPage'
import SolutionsPage from './pages/SolutionsPage'
import SupportPage from './pages/SupportPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function ThemedApp() {
  const { theme } = useTheme()
  return (
    <HashRouter>
      <div data-theme={theme} className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/applications" element={<ApplicationsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemedApp />
      </LanguageProvider>
    </ThemeProvider>
  )
}
