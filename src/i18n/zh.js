const zh = {
  // Navbar
  nav: {
    products: '产品中心',
    applications: '应用方案',
    solutions: '解决方案',
    support: '技术支持',
    aboutUs: '关于我们',
    contact: '联系我们',
  },

  // Footer
  footer: {
    tagline: '高性能直流、交流、EC风扇，适用于工业、通信、医疗、AI服务器等领域。',
    products: '产品中心',
    applications: '应用方案',
    company: '公司信息',
    copyright: '© 2026 COOLFAN 版权所有',
    subtitle: '工业冷却风扇平台',
    companyLinks: ['关于我们', '联系我们', '技术支持', '下载中心', 'OEM/ODM服务'],
  },

  // HomePage
  home: {
    heroTitle1: '可靠的冷却解决方案',
    heroTitle2: '助力',
    heroTitle3: '智能未来',
    heroDesc: '高性能直流、交流、EC风扇，广泛应用于工业、通信、医疗、AI服务器等领域。',
    exploreProducts: '浏览产品',
    viewApplications: '查看应用',
    stats: [
      { label: '高可靠性', value: '寿命70,000+小时' },
      { label: '规格齐全', value: '25mm – 280mm' },
      { label: '定制服务', value: '支持OEM/ODM' },
      { label: '全球支持', value: '快速响应' },
    ],
    categoriesTitle: '产品分类',
    viewAllProducts: '查看全部产品',
    categories: [
      { name: '直流轴流风扇', sub: '25mm – 280mm' },
      { name: '交流轴流风扇', sub: '80mm – 254mm' },
      { name: 'EC风扇', sub: '高效节能' },
      { name: '鼓风机', sub: '离心式' },
      { name: '防水风扇', sub: 'IP68防护等级' },
      { name: '服务器风扇', sub: '高性能' },
    ],
    industriesTitle: '服务行业',
    viewApplications2: '查看应用方案',
    industries: [
      'AI服务器散热', '通信设备', '医疗器械',
      '工业自动化', '电源设备', '汽车电子',
    ],
    ctaTitle: '需要定制散热解决方案？',
    ctaDesc: '我们的工程团队随时准备为您的项目找到最合适的风扇。',
    contactUs: '立即咨询',
    trustedBy: '全球客户信赖之选',
  },

  // ProductsPage
  products: {
    breadcrumb: '首页 › 产品中心',
    pageTitle: '产品中心',
    pageDesc: '覆盖各类散热需求的高性能风扇，使用筛选器找到适合的产品。',
    showing: '共 128 个产品，显示第 1–12 个',
    sortLabel: '排序：推荐',
    sortOptions: ['排序：推荐', '价格从低到高', '最新上架'],
    filterProductType: '产品类型',
    filterSize: '尺寸 (mm)',
    filterVoltage: '电压',
    filterBearing: '轴承类型',
    filterFeatures: '特性',
    resetFilters: '重置筛选',
    viewDetails: '查看详情',
    badgeNew: '新品',
    badgeBestSeller: '热销',
    paginationNext: '下一页',
    productTypes: [
      { label: '直流轴流风扇', count: 68 },
      { label: '交流轴流风扇', count: 24 },
      { label: 'EC风扇', count: 19 },
      { label: '鼓风机', count: 12 },
      { label: '横流风扇', count: 8 },
    ],
    sizes: ['25mm','40mm','60mm','80mm','92mm','120mm','140mm','172mm','200mm+'],
    sizeCount: [4,12,18,19,22,26,12,8,8],
    voltages: ['5V','12V','24V','48V','115VAC','220VAC'],
    voltageCount: [6,68,34,10,14,14],
    bearings: [
      { label: '双滚珠轴承', count: 98 },
      { label: '含油轴承', count: 20 },
      { label: '液态动压轴承', count: 12 },
    ],
    features: [
      { label: 'PWM调速', count: 64 },
      { label: 'FG测速', count: 60 },
      { label: 'IP68防水', count: 22 },
      { label: '低噪音', count: 48 },
      { label: '高静压', count: 40 },
    ],
  },

  // ApplicationsPage
  applications: {
    breadcrumb: '首页 › 应用方案',
    pageTitle: '应用方案',
    pageDesc: '针对不同行业与使用环境提供定制化散热解决方案。',
    viewSolutions: '查看方案',
    ctaTitle: '找不到合适的解决方案？',
    ctaDesc: '我们的工程师可以帮您定制完美的散热风扇。',
    contactTeam: '联系我们的团队',
    items: [
      {
        title: 'AI服务器散热',
        desc: '适用于AI服务器、GPU及高密度计算的高性能风扇。',
      },
      {
        title: '通信设备散热',
        desc: '为基站、通信设备及网络设备提供可靠的散热方案。',
      },
      {
        title: '医疗器械散热',
        desc: '超静音、高可靠性风扇，适用于医疗设备及关键应用场景。',
      },
      {
        title: '工业自动化',
        desc: '适用于工业机械、自动化系统及控制柜的耐用型风扇。',
      },
      {
        title: '电源设备',
        desc: '为电源供应器、逆变器及储能系统提供高效散热。',
      },
      {
        title: '汽车电子',
        desc: '面向新能源汽车、充电桩及车载电子的热管理方案。',
      },
    ],
  },
}

export default zh
