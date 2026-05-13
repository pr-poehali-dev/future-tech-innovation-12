import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
          <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
            А история 4 «С» получилась особенно яркой, шумной, дружной и немножечко непростой.
            Мы приглашаем вас стать частью самого важного события — нашего выпускного вечера начальной школы.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex-1 lg:order-2 h-[400px] lg:h-auto min-h-[500px]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <img
          src="https://cdn.poehali.dev/projects/682cf35c-aa36-4ab2-aacd-ca8384c28dd3/files/2df1f3c8-9f01-401e-afce-6d5812ef71c5.jpg"
          alt="Школа №1579"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
