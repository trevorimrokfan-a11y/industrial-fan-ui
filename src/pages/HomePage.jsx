
import Hero3D from "../components/Hero3D";
import FanSelector from "../components/FanSelector";
import ProductCard from "../components/ProductCard";
import RFQForm from "../components/RFQForm";
import LanguageSwitcher from "../components/LanguageSwitcher";
import DarkModeToggle from "../components/DarkModeToggle";

const products = [
  {
    name: "120x120x38mm PWM Fan",
    airflow: "220 CFM",
    voltage: "12V",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
  },
  {
    name: "80mm Server Fan",
    airflow: "120 CFM",
    voltage: "24V",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold">BC Cooling</div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </div>
      </header>

      <Hero3D />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="uppercase tracking-[0.2em] text-sm text-neutral-500">
              AI Server Cooling
            </div>

            <h2 className="text-5xl font-semibold mt-4">
              Featured Products
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <ProductCard key={item.name} product={item} />
          ))}
        </div>
      </section>

      <FanSelector />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="rounded-[32px] border border-neutral-200 dark:border-neutral-800 p-10">
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Datasheet Center
            </div>

            <h3 className="text-4xl font-semibold mt-4">
              Download Resources
            </h3>

            <div className="mt-10 space-y-4">
              {[
                "120mm PWM Fan Datasheet.pdf",
                "Server Cooling Fan STEP File.zip",
                "AI Cooling Catalog 2026.pdf"
              ].map((file) => (
                <div
                  key={file}
                  className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 flex justify-between items-center"
                >
                  <div>{file}</div>
                  <button className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          <RFQForm />
        </div>
      </section>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
        <div className="max-w-7xl mx-auto px-6 text-sm text-neutral-500">
          Industrial Cooling Fan Platform — WordPress Ready Structure + SEO Optimized
        </div>
      </footer>
    </div>
  );
}
