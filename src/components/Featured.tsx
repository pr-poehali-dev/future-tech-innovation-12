import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const details = [
  { icon: "🗓", label: "Дата", value: "21 мая 2026 года" },
  { icon: "⏰", label: "Начало", value: "в 12:40" },
  { icon: "🏛", label: "Место", value: "Актовый зал, 5 этаж" },
];

export default function Featured() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch min-h-screen bg-white overflow-hidden">
      <div className="flex-1 lg:order-1 flex flex-col justify-center px-8 py-16 lg:py-0 lg:px-16 xl:px-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase text-xs tracking-[0.3em] text-amber-500 font-semibold mb-4">
            4 «С» приглашает
          </p>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-neutral-900 leading-tight mb-8">
            Каждый класс — это маленькая история
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-10 max-w-xl">
            А история 4 «С» получилась особенно яркой, шумной, дружной и немножечко непростой.
            Мы приглашаем вас стать частью самого важного события — нашего выпускного вечера начальной школы.
          </p>

          <div className="flex flex-col gap-4">
            {details.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex items-center gap-4 bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-widest">{item.label}</p>
                  <p className="text-xl font-semibold text-neutral-900">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex-1 lg:order-2 h-[400px] lg:h-auto min-h-[500px]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <img
          src="https://cdn.poehali.dev/files/b92ec131-1444-4f52-bdce-592d07ad698c.jpg"
          alt="Класс 4С"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
