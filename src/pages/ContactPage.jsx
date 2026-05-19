import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const c = t.contact

  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    country: '', product: '', quantity: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls = "w-full bg-[#111827] border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
  const labelCls = "block text-xs text-gray-400 mb-1.5 font-medium"

  return (
    <div className="pt-14">
      {/* ── Hero ── */}
      <section className="relative bg-[#0A0E1A] py-16 border-b border-gray-800 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-900/15 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs text-gray-500 mb-4">{c.breadcrumb}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{c.pageTitle}</h1>
          <p className="text-gray-400 text-base max-w-xl">{c.pageDesc}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── Contact Info ── */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-xl font-bold text-white mb-6">{c.infoTitle}</h2>

            {/* Info Cards */}
            {c.infoCards.map((card, i) => (
              <div key={i} className="flex gap-4 bg-[#111827] border border-gray-800 rounded-xl p-5 hover:border-blue-600/30 transition-colors">
                <div className="w-10 h-10 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0 text-lg">
                  {card.icon}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold mb-1">{card.title}</div>
                  {card.lines.map((line, li) => (
                    <div key={li} className="text-gray-400 text-xs leading-relaxed">{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div className="bg-[#111827] border border-gray-800 rounded-xl p-5">
              <div className="text-white text-sm font-semibold mb-3">{c.hoursTitle}</div>
              {c.hours.map((row, i) => (
                <div key={i} className="flex justify-between text-xs py-1.5 border-b border-gray-800 last:border-0">
                  <span className="text-gray-400">{row.day}</span>
                  <span className={row.closed ? 'text-gray-600' : 'text-gray-200'}>{row.time}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">{c.followUs}</div>
              <div className="flex gap-3">
                {c.socials.map((soc, i) => (
                  <a key={i} href={soc.url} target="_blank" rel="noreferrer"
                    className="w-9 h-9 bg-[#111827] border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-400 transition-all text-xs font-bold">
                    {soc.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RFQ Form ── */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-white mb-2">{c.formTitle}</h2>
            <p className="text-gray-500 text-sm mb-6">{c.formDesc}</p>

            {submitted ? (
              <div className="bg-blue-900/20 border border-blue-600/40 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{c.successTitle}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">{c.successDesc}</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 btn-outline">{c.sendAnother}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{c.fname} *</label>
                    <input required className={inputCls} placeholder={c.fnamePh} value={form.name} onChange={set('name')} />
                  </div>
                  <div>
                    <label className={labelCls}>{c.femail} *</label>
                    <input required type="email" className={inputCls} placeholder={c.femailPh} value={form.email} onChange={set('email')} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{c.fcompany}</label>
                    <input className={inputCls} placeholder={c.fcompanyPh} value={form.company} onChange={set('company')} />
                  </div>
                  <div>
                    <label className={labelCls}>{c.fphone}</label>
                    <input className={inputCls} placeholder={c.fphonePh} value={form.phone} onChange={set('phone')} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>{c.fcountry}</label>
                    <select className={inputCls + ' text-gray-300'} value={form.country} onChange={set('country')}>
                      <option value="">{c.fcountryPh}</option>
                      {c.countries.map(co => <option key={co} value={co}>{co}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>{c.fquantity}</label>
                    <input className={inputCls} placeholder={c.fquantityPh} value={form.quantity} onChange={set('quantity')} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>{c.fproduct}</label>
                  <input className={inputCls} placeholder={c.fproductPh} value={form.product} onChange={set('product')} />
                </div>
                <div>
                  <label className={labelCls}>{c.fmessage} *</label>
                  <textarea required rows={5} className={inputCls + ' resize-none'}
                    placeholder={c.fmessagePh} value={form.message} onChange={set('message')} />
                </div>

                {/* Trade Assurance note */}
                <div className="flex items-start gap-3 bg-blue-900/10 border border-blue-800/30 rounded-lg p-4">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-gray-400 text-xs leading-relaxed">{c.tradeNote}</p>
                </div>

                <button type="submit" className="w-full btn-primary py-3.5 text-sm font-semibold">{c.fsubmit}</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Map placeholder ── */}
      <div className="bg-[#0F1624] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-lg font-bold text-white mb-6">{c.mapTitle}</h3>
          <div className="w-full h-64 bg-[#111827] border border-gray-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {[...Array(20)].map((_, i) => <line key={i} x1={i*40} y1="0" x2={i*40} y2="400" stroke="currentColor" strokeWidth="1"/>)}
                {[...Array(10)].map((_, i) => <line key={i} x1="0" y1={i*40} x2="800" y2={i*40} stroke="currentColor" strokeWidth="1"/>)}
              </svg>
            </div>
            <div className="text-center relative z-10">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-gray-400 text-sm">{c.mapPlaceholder}</div>
              <div className="text-gray-600 text-xs mt-1">{c.mapAddress}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
