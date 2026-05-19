import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const productLinks = [
  'DC Axial Fans', 'AC Axial Fans', 'EC Fans', 'Blower Fans', 'Server Fans', 'Waterproof Fans',
]
const productLinksZh = [
  '直流轴流风扇', '交流轴流风扇', 'EC风扇', '鼓风机', '服务器风扇', '防水风扇',
]
const appLinks = ['AI Server Cooling', 'Telecom', 'Medical Equipment', 'Industrial Automation', 'Power Supply', 'Automotive']
const appLinksZh = ['AI服务器散热', '通信设备', '医疗器械', '工业自动化', '电源设备', '汽车电子']

export default function Footer() {
  const { lang, t } = useLanguage()
  const pLinks = lang === 'en' ? productLinks : productLinksZh
  const aLinks = lang === 'en' ? appLinks : appLinksZh

  return (
    <footer className="bg-[#060A14] border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <span className="font-bold text-white tracking-widest text-sm">COOLFAN</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">{t.footer.tagline}</p>
          </div>
          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.products}</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              {pLinks.map(i => (
                <li key={i}><Link to="/products" className="hover:text-gray-300 transition-colors">{i}</Link></li>
              ))}
            </ul>
          </div>
          {/* Applications */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.applications}</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              {aLinks.map(i => (
                <li key={i}><Link to="/applications" className="hover:text-gray-300 transition-colors">{i}</Link></li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              {t.footer.companyLinks.map(i => (
                <li key={i}><a href="#" className="hover:text-gray-300 transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">{t.footer.copyright}</p>
          <p className="text-gray-600 text-xs">{t.footer.subtitle}</p>
        </div>
      </div>
    </footer>
  )
}
