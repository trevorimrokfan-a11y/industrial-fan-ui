
export default function RFQForm() {
  return (
    <div className="rounded-[32px] border border-neutral-200 dark:border-neutral-800 p-10">
      <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
        RFQ System
      </div>

      <h3 className="text-4xl font-semibold mt-4">
        Request a Quote
      </h3>

      <div className="mt-10 space-y-4">
        <input
          className="w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-transparent p-5"
          placeholder="Your Name"
        />

        <input
          className="w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-transparent p-5"
          placeholder="Email"
        />

        <textarea
          className="w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-transparent p-5 min-h-[180px]"
          placeholder="Fan specifications..."
        />

        <button className="w-full rounded-full bg-black text-white dark:bg-white dark:text-black py-5">
          Submit RFQ
        </button>
      </div>
    </div>
  );
}
