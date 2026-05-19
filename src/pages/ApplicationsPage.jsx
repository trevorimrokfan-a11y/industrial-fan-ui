import { Link } from 'react-router-dom'

const applications = [
  {
    title: 'AI Server Cooling',
    desc: 'High performance fans for AI servers, GPU, and high-density computing.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    title: 'Telecom Cooling',
    desc: 'Reliable cooling for base stations, communication equipment and networking.',
    img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop&auto=format',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M1 6l11 6 11-6M1 12l11 6 11-6"/>
      </svg>
    ),
  },
  {
    title: 'Medical Equipment',
    desc: 'Ultra-quiet and reliable fans for medical devices and critical applications.',
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop&auto=format',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    ),
  },
  {
    title: 'Industrial Automation',
    desc: 'Durable fans for industrial machines, automation systems and control cabinets.',
    img: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=600&h=400&fit=crop&auto=format',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: 'Power Supply',
    desc: 'Efficient cooling for power supplies, inverters and energy systems.',
    img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600&h=400&fit=crop&auto=format',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: 'Automotive',
    desc: 'Advanced thermal management for EV, charging stations and automotive electronics.',
    img: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=600&h=400&fit=crop&auto=format',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v5"/><circle cx="16.5" cy="18.5" r="2.5"/><circle cx="8.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
]

export default function ApplicationsPage() {
  return (
    <div className="pt-14">
      {/* ── Page Hero ── */}
      <section className="relative bg-[#0A0E1A] py-14 overflow-hidden border-b border-gray-800">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
        {/* Fan wallpaper illustration top-right */}
        <div className="absolute right-8 top-4 opacity-10 hidden lg:flex gap-3">
          {[1,2,3].map(i => (
            <div key={i} className="w-20 h-20 rounded-full border-4 border-blue-400 flex items-center justify-center">
              <div className="w-7 h-7 rounded-full border-2 border-blue-300" />
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs text-gray-500 mb-3">Home › Applications</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Applications</h1>
          <p className="text-gray-400 text-sm mt-3">Tailored cooling solutions for diverse industries and environments.</p>
        </div>
      </section>

      {/* ── Application Cards ── */}
      <section className="py-14 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="group bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600/40 transition-all">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={app.img}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400">
                    {app.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-base mb-1">{app.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{app.desc}</p>
                    <button className="mt-3 text-blue-400 text-xs font-medium hover:text-blue-300 flex items-center gap-1 transition-colors">
                      View Solutions <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-10 bg-[#060A14] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-gradient-to-r from-[#0F1A35] to-[#0A1428] border border-blue-900/40 rounded-2xl px-8 py-8 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute right-0 top-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            {/* Fan decoration */}
            <div className="absolute right-16 top-1/2 -translate-y-1/2 w-32 h-32 opacity-10 hidden md:block">
              <div className="w-full h-full rounded-full border-8 border-blue-400 flex items-center justify-center">
                <div className="w-1/2 h-1/2 rounded-full border-4 border-blue-300" />
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-bold text-white">Can't find the right solution?</h2>
              <p className="text-gray-400 text-sm mt-2">Our engineers can help you customize the perfect fan.</p>
            </div>
            <Link to="/" className="relative z-10 btn-primary whitespace-nowrap">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
