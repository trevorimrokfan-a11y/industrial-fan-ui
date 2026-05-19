
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero3D() {
  const fanRef = useRef();

  useEffect(() => {
    gsap.to(fanRef.current, {
      rotate: 360,
      repeat: -1,
      duration: 8,
      ease: "linear",
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="uppercase tracking-[0.2em] text-sm text-neutral-500">
          Professional Cooling Fan Database
        </div>

        <h1 className="text-6xl lg:text-8xl font-semibold tracking-tight mt-6">
          AI Server
          <br />
          Cooling
          <br />
          Solutions
        </h1>

        <p className="mt-8 text-lg text-neutral-500 max-w-xl leading-8">
          High reliability industrial cooling fans for AI data centers,
          telecom, server and industrial systems.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black">
            Explore Products
          </button>

          <button className="px-8 py-4 rounded-full border border-neutral-300 dark:border-neutral-700">
            Download Catalog
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div
          ref={fanRef}
          className="w-[420px] h-[420px] rounded-full border-[40px] border-black dark:border-white relative"
        >
          <div className="absolute inset-16 rounded-full border-[24px] border-neutral-500"></div>
        </div>
      </div>
    </section>
  );
}
