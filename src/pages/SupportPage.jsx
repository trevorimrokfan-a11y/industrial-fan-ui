import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

const docIcons = {
  pdf: (
    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 13h2v1H8v-1zm0 2h8v1H8v-1zm0-4h2v1H8v-1zm4 0h4v1h-4v-1z"/>
    </svg>
  ),
  zip: (
    <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  dwg: (
    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl transition-colors ${open ? 'border-blue-600/40 bg-[#111827]' : 'border-gray-800 bg-[#0F1624]'}`}>
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-sm font-medium transition-colors ${open ? 'text-white' : 'text-gray-300'}`}>{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${open ? 'border-blue-500 bg-blue-600/20 rotate-45' : 'border-gray-600'}`}>
          <svg className="w-3 h-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m-8-8h16" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function SupportPage() {
  const { t } = useLanguage()
  const s = t.support
  const [formData, setFormData] = useState({ name: '', email: '', company: '', product: '', issue: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-14">
      {/* ── Hero ── */}
      <section className="relative bg-[#0A0E1A] py-16 border-b border-gray-800 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-900/15 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs text-gray-500 mb-4">{s.breadcrumb}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{s.pageTitle}</h1>
          <p className="text-gray-400 text-base max-w-xl">{s.pageDesc}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* ── Quick Help Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {s.quickHelp.map((item, i) => (
            <div key={i} className="bg-[#111827] border border-gray-800 rounded-xl p-5 hover:border-blue-600/40 transition-all group text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400 mx-auto mb-3 text-lg">
                {item.icon}
              </div>
              <div className="text-white text-sm font-semibold mb-1">{item.title}</div>
              <div className="text-gray-500 text-xs">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* ── FAQ ── */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{s.faqTitle}</h2>
            <p className="text-gray-500 text-sm mb-6">{s.faqDesc}</p>
            <div className="space-y-3">
              {s.faqs.map((faq, i) => (
                <FaqItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

          {/* ── Support Request Form ── */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{s.formTitle}</h2>
            <p className="text-gray-500 text-sm mb-6">{s.formDesc}</p>

            {submitted ? (
              <div className="bg-green-900/20 border border-green-600/40 rounded-xl p-8 text-center">
                <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{s.submitSuccess}</h3>
                <p className="text-gray-400 text-sm">{s.submitSuccessDesc}</p>
                <button onClick={() => setSubmitted(false)} className="mt-5 btn-outline text-xs">{s.submitAnother}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">{s.formName} *</label>
                    <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#111827] border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder={s.formNamePh} />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5">{s.formEmail} *</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#111827] border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder={s.formEmailPh} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">{s.formCompany}</label>
                  <input value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={s.formCompanyPh} />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">{s.formProduct}</label>
                  <input value={formData.product} onChange={e => setFormData({...formData, product: e.target.value})}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={s.formProductPh} />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">{s.formIssue}</label>
                  <select value={formData.issue} onChange={e => setFormData({...formData, issue: e.target.value})}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-blue-500 transition-colors">
                    <option value="">{s.formIssuePh}</option>
                    {s.issueTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5">{s.formMessage} *</label>
                  <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#111827] border border-gray-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder={s.formMessagePh} />
                </div>
                <button type="submit" className="w-full btn-primary py-3 text-sm font-semibold">{s.formSubmit}</button>
              </form>
            )}
          </div>
        </div>

        {/* ── Downloads ── */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-2">{s.downloadsTitle}</h2>
          <p className="text-gray-500 text-sm mb-8">{s.downloadsDesc}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.downloads.map((doc, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#111827] border border-gray-800 rounded-xl p-4 hover:border-blue-600/40 transition-all group cursor-pointer">
                <div className="w-10 h-10 bg-[#0A0E1A] rounded-lg flex items-center justify-center flex-shrink-0">
                  {docIcons[doc.type] || docIcons.pdf}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-medium truncate group-hover:text-blue-300 transition-colors">{doc.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{doc.size} · {doc.type.toUpperCase()}</div>
                </div>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
