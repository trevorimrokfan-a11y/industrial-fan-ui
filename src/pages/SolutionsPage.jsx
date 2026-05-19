import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const solutionImgs = [
  'https://images.unsplash.com/photo-1581092335397-9fa341108e1e?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format',
]

const caseImgs = [
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=320&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=320&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&h=320&fit=crop&auto=format',
]

const certLogos = ['ISO 9001', 'ISO 14001', 'CE', 'RoHS', 'UL', 'TÜV']

export default function SolutionsPage() {
  const { t } = useLanguage()
  const s = t.solutions

  return (
    <div className="pt-14">
      {/* ── Hero ── */}
      <section className="relative bg-[#0A0E1A] py-20 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-900/15 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs text-gray-500 mb-4">{s.breadcrumb}</div>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{s.heroTitle}</h1>
            <p className="mt-5 text-gray-400 text-base leading-relaxed">{s.heroDesc}</p>
            <div className="flex gap-3 mt-8 flex-wrap">
              <Link to="/contact" className="btn-primary">{s.getQuote}</Link>
              <Link to="/products" className="btn-outline">{s.viewProducts}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Solution Cards ── */}
      <section className="py-20 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs uppercase tracking-widest font-semibold mb-3">{s.sectionLabel}</p>
            <h2 className="text-3xl font-bold text-white">{s.sectionTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {s.cards.map((card, i) => (
              <div key={i} className="group bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={solutionImgs[i]} alt={card.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                    {card.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {card.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-blue-400 text-xs font-medium hover:text-blue-300 flex items-center gap-1">
                    {s.learnMore} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OEM/ODM Process ── */}
      <section className="py-20 bg-[#0F1624]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs uppercase tracking-widest font-semibold mb-3">{s.processLabel}</p>
            <h2 className="text-3xl font-bold text-white">{s.processTitle}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {s.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold text-lg mb-3 relative z-10">
                  {i + 1}
                </div>
                {i < s.steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-[-50%] h-0.5 bg-gradient-to-r from-blue-600/40 to-transparent" />
                )}
                <div className="text-white text-sm font-semibold mb-1">{step.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Cases ── */}
      <section className="py-20 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-blue-400 text-xs uppercase tracking-widest font-semibold mb-2">{s.casesLabel}</p>
              <h2 className="text-3xl font-bold text-white">{s.casesTitle}</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {s.cases.map((c, i) => (
              <div key={i} className="group bg-[#111827] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-600/40 transition-all">
                <div className="relative h-44 overflow-hidden">
                  <img src={caseImgs[i]} alt={c.industry}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {c.industry}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-white font-semibold text-sm mb-2">{c.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">{c.desc}</p>
                  <div className="flex items-center gap-4">
                    {c.metrics.map((m, mi) => (
                      <div key={mi} className="text-center">
                        <div className="text-blue-400 font-bold text-base">{m.value}</div>
                        <div className="text-gray-500 text-[10px]">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-14 bg-[#0F1624] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8">{s.certTitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {certLogos.map(cert => (
              <div key={cert} className="px-6 py-3 bg-[#111827] border border-gray-700 rounded-lg text-gray-300 font-semibold text-sm tracking-wider hover:border-blue-500 transition-colors">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-r from-blue-900/40 to-[#0A1428] border border-blue-700/30 rounded-2xl px-8 py-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />
            <h2 className="relative text-2xl md:text-3xl font-bold text-white mb-3">{s.ctaTitle}</h2>
            <p className="relative text-gray-400 text-sm mb-8 max-w-xl mx-auto">{s.ctaDesc}</p>
            <div className="relative flex gap-3 justify-center flex-wrap">
              <Link to="/contact" className="btn-primary">{s.ctaBtn1}</Link>
              <Link to="/products" className="btn-outline">{s.ctaBtn2}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
