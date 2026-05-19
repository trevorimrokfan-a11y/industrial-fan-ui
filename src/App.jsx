import React from "react";

export default function App() {
  const categories = [
    "DC Axial Fans",
    "AC Fans",
    "EC Fans",
    "Blower Fans",
    "Server Fans",
    "Waterproof Fans",
  ];

  const products = [
    {
      name: "120x120x38mm PWM Fan",
      specs: ["12V DC", "6000 RPM", "Dual Ball Bearing", "PWM + FG"],
    },
    {
      name: "80x80x25mm Server Fan",
      specs: ["24V DC", "9500 RPM", "High Pressure", "IP68"],
    },
    {
      name: "172x150x51mm Blower Fan",
      specs: ["48V DC", "High Airflow", "Metal Housing", "Industrial"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            BC Cooling
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#">Products</a>
            <a href="#">Applications</a>
            <a href="#">Support</a>
            <a href="#">OEM / ODM</a>
            <a href="#">Contact</a>
          </nav>

          <button className="rounded-full bg-black text-white px-5 py-2 text-sm">
            Download Catalog
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600 mb-6">
            Industrial Cooling Fan Solutions
          </div>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
            Professional
            <br />
            Cooling Fan
            <br />
            Product Database
          </h1>

          <p className="mt-8 text-lg text-neutral-600 leading-8 max-w-xl">
            High reliability DC / AC / EC cooling fans for server,
            telecom, industrial, AI and medical applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-black text-white px-7 py-4 text-sm font-medium">
              Explore Products
            </button>

            <button className="rounded-full border border-neutral-300 px-7 py-4 text-sm font-medium">
              View Applications
            </button>
          </div>
        </div>

        <div className="aspect-square rounded-[40px] bg-neutral-100 border border-neutral-200 shadow-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1600&auto=format&fit=crop"
            alt="Industrial cooling fan"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="border-t border-neutral-200 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold tracking-tight mb-12">
            Cooling Fan Collections
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((item) => (
              <div
                key={item}
                className="group rounded-[32px] border border-neutral-200 bg-neutral-50 p-8"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                    alt="Cooling fan category"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-2xl font-semibold tracking-tight">
                  {item}
                </div>

                <div className="mt-3 text-sm text-neutral-500 leading-7">
                  High reliability industrial cooling solutions.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold tracking-tight mb-14">
            Featured Cooling Fans
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-[32px] border border-neutral-200 bg-white p-6"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
                    alt="Cooling fan product"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-2xl font-semibold leading-tight tracking-tight">
                  {product.name}
                </div>

                <div className="mt-5 space-y-2 text-sm text-neutral-600">
                  {product.specs.map((spec) => (
                    <div key={spec}>• {spec}</div>
                  ))}
                </div>

                <button className="mt-8 w-full rounded-full bg-black text-white py-4 text-sm font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-bold">BC Cooling</div>
          <div className="mt-4 text-neutral-600 max-w-md leading-7">
            Professional cooling fan manufacturer providing industrial
            thermal solutions for global customers.
          </div>
        </div>
      </footer>
    </div>
  );
}
