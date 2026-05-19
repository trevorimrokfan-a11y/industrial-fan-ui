
export default function ProductCard({ product }) {
  return (
    <div className="rounded-[32px] border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-950">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-8">
        <div className="text-2xl font-semibold">
          {product.name}
        </div>

        <div className="mt-6 space-y-2 text-neutral-500">
          <div>Voltage: {product.voltage}</div>
          <div>Airflow: {product.airflow}</div>
        </div>

        <button className="mt-8 w-full rounded-full bg-black text-white dark:bg-white dark:text-black py-4">
          View Details
        </button>
      </div>
    </div>
  );
}
