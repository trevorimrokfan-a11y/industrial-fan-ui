import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const factoryImgs = [
  'https://images.unsplash.com/photo-1581092335397-9fa341108e1e?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&auto=format',
]

const certLogos = ['ISO 9001', 'ISO 14001', 'CE', 'RoHS', 'UL', 'TÜV', 'REACH', 'FCC']

export default function AboutPage() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <div className="pt-14">
      {/* ── Hero ── */}
      <section className="relative bg-[#0A0E1A] py-20 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs text-gray-500 mb-4">{a.breadcrumb}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{a.heroTitle}</h1>
            <p className="mt-5 text-gray-400 text-base leading-relaxed">{a.heroDesc}</p>
            <div className="flex gap-3 mt-8 flex-wrap">
              <Link to="/contact" className="btn-primary">{a.contactUs}</Link>
              <Link to="/products" className="btn-outline">{a.viewProducts}</Link>
            </div>
          </div>
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {a.stats.map((s, i) => (
              <div key={i} className="bg-[#111827] border border-gray-800 rounded-xl p-6 text-center hover:border-blue-600/30 transition-colors">
                <div className="text-3xl font-bold text-blue-400 mb-1">{s.value}</div>
                <div className="text-white text-sm font-medium">{s.label}</div>
                <div className="text-gray-500 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 bg-[#0F1624]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-blue-400 text-xs uppercase tracking-widest font-semibold mb-3">{a.storyLabel}</p>
            <h2 className="text-3xl font-bold text-white mb-5">{a.storyTitle}</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              {a.storyParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {factoryImgs.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden aspect-[4/3] border border-gray-800">
                <img src={img} alt={`Factory ${i+1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-[#0A0E1A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs uppercase tracking-widest font-semibold mb-3">{a.timelineLabel}</p>
            <h2 className="text-3xl font-bold text-white">{a.timelineTitle}</h2>
          </div>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-800/50 to-transparent -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {a.timeline.map((item, i) => (
                <div key={i} className={`flex gap-6 md:gap-0 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <div className="bg-[#111827] border border-gray-800 rounded-xl p-5 hover:border-blue-600/30 transition-colors">
                      <div className="text-blue-400 font-bold text-lg mb-1">{item.year}</div>
                      <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-0 items-center justify-center relative">
                    <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-blue-400 absolute left-1/2 -translate-x-1/2 z-10" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 bg-[#0F1624]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-xs uppercase tracking-widest font-semibold mb-3">{a.valuesLabel}</p>
            <h2 className="text-3xl font-bold text-white">{a.valuesTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {a.values.map((v, i) => (
              <div key={i} className="bg-[#111827] border border-gray-800 rounded-xl p-6 hover:border-blue-600/40 transition-all text-center group">
                <div className="text-3xl mb-4">{v.icon}</div>
                <div className="text-white font-semibold text-base mb-2">{v.title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-14 bg-[#060A14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-8">{a.certTitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {certLogos.map(cert => (
              <div key={cert} className="px-5 py-2.5 bg-[#111827] border border-gray-700 rounded-lg text-gray-300 font-semibold text-sm tracking-wider hover:border-blue-500 transition-colors">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
