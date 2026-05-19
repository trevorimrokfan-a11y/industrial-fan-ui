import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const categoryImgs = [
  'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=200&h=200&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=200&h=200&fit=crop&auto=format',
]

const industryImgs = [
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=260&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=260&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=260&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=400&h=260&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=260&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=400&h=260&fit=crop&auto=format',
]

const statIcons = ['🛡', '📐', '⚙', '🌍']
const brands = ['HUAWEI', 'ZTE', 'SIEMENS', 'PHILIPS', 'DELTA', 'Schneider', 'ABB', 'BYD']

export default function HomePage() {
  const { t } = useLanguage()
  const h = t.home

  return (
    <div className="pt-14">
      {/* ── Hero ── */}
      <section className="relative bg-[#0A0E1A] overflow-hidden min-h-[520px] flex items-center">
        <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {h.heroTitle1}<br />
              {h.heroTitle2}<br />
              <span className="text-blue-400">{h.heroTitle3}</span>
            </h1>
            <p className="mt-5 text-gray-400 text-sm leading-relaxed max-w-md">{h.heroDesc}</p>
            <div className="flex gap-3 mt-8 flex-wrap">
              <Link to="/products" className="btn-primary">{h.exploreProducts}</Link>
              <Link to="/applications" className="btn-outline">{h.viewApplications}</Link>
            </div>
          </div>

          {/* Fan illustration */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-blue-400/20" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center shadow-2xl">
                {[0,60,120,180,240,300].map((deg) => (
                  <div
                    key={deg}
                    className="absolute w-[38%] h-[16%] bg-gradient-to-r from-gray-600 to-gray-700 rounded-full origin-right opacity-90"
                    style={{ transform: `rotate(${deg}deg) translateX(-50%)` }}
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-400 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-300" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.3)]" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#0F1624]/90 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {h.stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl">{statIcons[i]}</span>
                <div>
                  <div className="text-white text-xs font-semibold">{s.label}</div>
                  <div className="text-gray-500 text-xs">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fan Categories ── */}
      <section className="py-16 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white">{h.categoriesTitle}</h2>
            <Link to="/products" className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
              {h.viewAllProducts} <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {h.categories.map((cat, i) => (
              <Link to="/products" key={i} className="group flex flex-col items-center">
                <div className="w-full aspect-square rounded-xl bg-[#111827] border border-gray-800 group-hover:border-blue-600/50 transition-all overflow-hidden mb-3 flex items-center justify-center p-3">
                  <img
                    src={categoryImgs[i]}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="text-white text-xs font-semibold text-center">{cat.name}</div>
                <div className="text-gray-500 text-[10px] text-center mt-0.5">{cat.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="py-16 bg-[#0F1624]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white">{h.industriesTitle}</h2>
            <Link to="/applications" className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
              {h.viewApplications2} <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {h.industries.map((name, i) => (
              <Link to="/applications" key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={industryImgs[i]}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center text-white text-[10px] font-semibold px-1">{name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-14 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-r from-[#0F1A35] to-[#0A1428] border border-blue-900/40 rounded-2xl px-8 py-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute right-0 top-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-40 h-40 opacity-10 hidden md:block">
              <div className="w-full h-full rounded-full border-8 border-blue-400 flex items-center justify-center">
                <div className="w-1/2 h-1/2 rounded-full border-4 border-blue-300" />
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold text-white">{h.ctaTitle}</h2>
              <p className="text-gray-400 text-sm mt-2">{h.ctaDesc}</p>
            </div>
            <a href="#" className="relative z-10 btn-primary whitespace-nowrap">{h.contactUs}</a>
          </div>
        </div>
      </section>

      {/* ── Trusted Brands ── */}
      <section className="py-10 bg-[#060A14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 text-xs uppercase tracking-widest mb-8">{h.trustedBy}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {brands.map((b) => (
              <span key={b} className="text-gray-400 font-bold text-sm tracking-wider">{b}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
