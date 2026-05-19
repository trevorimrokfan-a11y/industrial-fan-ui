import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const allProducts = [
  {
    id: 1, model: 'CF1202SH12D-PWM', nameEn: '120x120x25mm DC Fan', nameZh: '120x120x25mm 直流风扇',
    voltage: '12V DC', rpm: '2500 RPM', airflow: '68.5 CFM',
    bearing: 'PWM', type: 'Dual Ball Bearing', typeZh: '双滚珠轴承',
    badge: null,
    img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=280&h=220&fit=crop&auto=format',
  },
  {
    id: 2, model: 'CF12038H12D-PWM', nameEn: '120x120x38mm DC Fan', nameZh: '120x120x38mm 直流风扇',
    voltage: '12V DC', rpm: '6000 RPM', airflow: '182.5 CFM',
    bearing: 'PWM', type: 'Dual Ball Bearing', typeZh: '双滚珠轴承',
    badge: 'bestSeller',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=280&h=220&fit=crop&auto=format',
  },
  {
    id: 3, model: 'CF8025H12S', nameEn: '80x80x25mm DC Fan', nameZh: '80x80x25mm 直流风扇',
    voltage: '12V DC', rpm: '3000 RPM', airflow: '38.2 CFM',
    bearing: 'Sleeve', type: 'Silent Optimized', typeZh: '低噪优化',
    badge: null,
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=280&h=220&fit=crop&auto=format',
  },
  {
    id: 4, model: 'CF9225H24D', nameEn: '92x92x25mm DC Fan', nameZh: '92x92x25mm 直流风扇',
    voltage: '24V DC', rpm: '2800 RPM', airflow: '52.6 CFM',
    bearing: 'Dual Ball', type: 'FG (Tach)', typeZh: 'FG测速',
    badge: null,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=280&h=220&fit=crop&auto=format',
  },
  {
    id: 5, model: 'CF1751B11H', nameEn: '172x150x51mm AC Fan', nameZh: '172x150x51mm 交流风扇',
    voltage: '115VAC', rpm: '3200 RPM', airflow: '345.0 CFM',
    bearing: 'Ball', type: 'Metal Frame', typeZh: '金属机框',
    badge: null,
    img: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=280&h=220&fit=crop&auto=format',
  },
  {
    id: 6, model: 'CF9733B24E-PWM', nameEn: '97x97x33mm EC Fan', nameZh: '97x97x33mm EC风扇',
    voltage: '24V DC', rpm: '4000 RPM', airflow: '89.3 CFM',
    bearing: 'PWM', type: 'High Efficiency', typeZh: '高效节能',
    badge: null,
    img: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=280&h=220&fit=crop&auto=format',
  },
  {
    id: 7, model: 'CF4020H05S', nameEn: '40x40x20mm DC Fan', nameZh: '40x40x20mm 直流风扇',
    voltage: '5V DC', rpm: '10000 RPM', airflow: '6.2 CFM',
    bearing: 'Sleeve', type: 'Ultra Compact', typeZh: '超小型',
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=280&h=220&fit=crop&auto=format',
  },
  {
    id: 8, model: 'CF12025H24D-IP68', nameEn: '120x120x25mm DC Fan', nameZh: '120x120x25mm 防水风扇',
    voltage: '24V DC', rpm: '2800 RPM', airflow: '71.2 CFM',
    bearing: 'Dual Ball', type: 'IP68 Waterproof', typeZh: 'IP68防水',
    badge: null,
    img: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=280&h=220&fit=crop&auto=format',
  },
  {
    id: 9, model: 'CF12038H48D-PWM', nameEn: '120x120x38mm DC Fan', nameZh: '120x120x38mm 直流风扇',
    voltage: '24V DC', rpm: '5000 RPM', airflow: '155.0 CFM',
    bearing: 'Dual Ball', type: 'PWM', typeZh: 'PWM调速',
    badge: null,
    img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=280&h=220&fit=crop&auto=format',
  },
]

function FilterSection({ title, items, counts, selected, onToggle }) {
  return (
    <div className="mb-6">
      <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider mb-3">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item, i) => {
          const label = typeof item === 'object' ? item.label : item
          const count = typeof item === 'object' ? item.count : (counts ? counts[i] : null)
          const isChecked = selected.includes(label)
          return (
            <li key={label}>
              <label className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggle(label)}
                    className="w-3.5 h-3.5 rounded border-gray-600 bg-gray-800 text-blue-500 cursor-pointer"
                  />
                  <span className={`text-xs transition-colors ${isChecked ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-200'}`}>{label}</span>
                </div>
                {count !== null && <span className="text-[10px] text-gray-600">({count})</span>}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default function ProductsPage() {
  const { lang, t } = useLanguage()
  const p = t.products

  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedVoltages, setSelectedVoltages] = useState([])
  const [selectedBearings, setSelectedBearings] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  const toggle = (setter) => (val) =>
    setter(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val])

  const resetAll = () => {
    setSelectedTypes([])
    setSelectedVoltages([])
    setSelectedBearings([])
    setSelectedFeatures([])
  }

  return (
    <div className="pt-14">
      {/* Page Hero */}
      <section className="relative bg-[#0A0E1A] py-14 overflow-hidden border-b border-gray-800">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs text-gray-500 mb-3">{p.breadcrumb}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{p.pageTitle}</h1>
          <p className="text-gray-400 text-sm mt-3">{p.pageDesc}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-52 flex-shrink-0">
          <FilterSection title={p.filterProductType} items={p.productTypes} selected={selectedTypes} onToggle={toggle(setSelectedTypes)} />
          <div className="border-t border-gray-800 my-4" />
          <FilterSection title={p.filterSize} items={p.sizes} counts={p.sizeCount} selected={selectedVoltages} onToggle={toggle(setSelectedVoltages)} />
          <div className="border-t border-gray-800 my-4" />
          <FilterSection title={p.filterVoltage} items={p.voltages} counts={p.voltageCount} selected={selectedVoltages} onToggle={toggle(setSelectedVoltages)} />
          <div className="border-t border-gray-800 my-4" />
          <FilterSection title={p.filterBearing} items={p.bearings} selected={selectedBearings} onToggle={toggle(setSelectedBearings)} />
          <div className="border-t border-gray-800 my-4" />
          <FilterSection title={p.filterFeatures} items={p.features} selected={selectedFeatures} onToggle={toggle(setSelectedFeatures)} />
          <div className="border-t border-gray-800 my-4" />
          <button onClick={resetAll} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">{p.resetFilters}</button>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-xs text-gray-400">{p.showing}</p>
            <div className="flex items-center gap-3">
              <select className="bg-[#111827] border border-gray-700 text-gray-300 text-xs rounded px-3 py-1.5">
                {p.sortOptions.map(o => <option key={o}>{o}</option>)}
              </select>
              <div className="flex gap-1">
                <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                  </svg>
                </button>
                <button onClick={() => setViewMode('list')} className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="4" width="18" height="3"/><rect x="3" y="10.5" width="18" height="3"/><rect x="3" y="17" width="18" height="3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5' : 'flex flex-col gap-4'}>
            {allProducts.map((prod) => {
              const badgeText = prod.badge === 'new' ? p.badgeNew : prod.badge === 'bestSeller' ? p.badgeBestSeller : null
              return (
                <div
                  key={prod.id}
                  className={`group bg-[#111827] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-600/50 transition-all ${viewMode === 'list' ? 'flex gap-4' : ''}`}
                >
                  <div className={`relative bg-[#0F1624] flex items-center justify-center overflow-hidden ${viewMode === 'list' ? 'w-36 h-32 flex-shrink-0' : 'h-44 w-full'}`}>
                    <img
                      src={prod.img}
                      alt={prod.model}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    {badgeText && (
                      <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded ${prod.badge === 'bestSeller' ? 'bg-orange-500' : 'bg-green-500'} text-white`}>
                        {badgeText}
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <div className="text-blue-400 text-xs font-semibold">{prod.model}</div>
                    <div className="text-white text-sm font-medium">{lang === 'en' ? prod.nameEn : prod.nameZh}</div>
                    <ul className="text-gray-400 text-xs space-y-0.5 mt-1">
                      <li>· {prod.voltage} · {prod.rpm}</li>
                      <li>· {prod.airflow} · {prod.bearing}</li>
                      <li>· {lang === 'en' ? prod.type : prod.typeZh}</li>
                    </ul>
                    <button className="mt-3 text-blue-400 text-xs hover:text-blue-300 flex items-center gap-1 font-medium">
                      {p.viewDetails} <span>→</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-1 mt-10">
            {['1','2','3','...','11', p.paginationNext].map((pg) => (
              <button
                key={pg}
                onClick={() => !isNaN(pg) && setCurrentPage(Number(pg))}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  pg === String(currentPage) ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {pg}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
