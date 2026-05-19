import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#060A14] border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <span className="font-bold text-white tracking-widest text-sm">COOLFAN</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              High-performance DC, AC, EC fans for industrial, telecom, medical, AI server and more.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              {['DC Axial Fans', 'AC Axial Fans', 'EC Fans', 'Blower Fans', 'Server Fans', 'Waterproof Fans'].map(i => (
                <li key={i}><Link to="/products" className="hover:text-gray-300 transition-colors">{i}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Applications</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              {['AI Server Cooling', 'Telecom', 'Medical Equipment', 'Industrial Automation', 'Power Supply', 'Automotive'].map(i => (
                <li key={i}><Link to="/applications" className="hover:text-gray-300 transition-colors">{i}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              {['About Us', 'Contact', 'Support', 'Download Center', 'OEM/ODM Services'].map(i => (
                <li key={i}><a href="#" className="hover:text-gray-300 transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 COOLFAN. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Industrial Cooling Fan Platform — SEO Optimized</p>
        </div>
      </div>
    </footer>
  )
}
