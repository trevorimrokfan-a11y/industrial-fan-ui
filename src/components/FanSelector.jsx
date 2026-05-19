
export default function FanSelector() {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Online Fan Selector
        </div>

        <h2 className="text-5xl font-semibold mt-4">
          Find the Right Cooling Fan
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {["Size", "Voltage", "Airflow", "IP Rating"].map((item) => (
            <select
              key={item}
              className="rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black p-5"
            >
              <option>{item}</option>
            </select>
          ))}
        </div>

        <button className="mt-8 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black">
          Search Products
        </button>
      </div>
    </section>
  );
}
