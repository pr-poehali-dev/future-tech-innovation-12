import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/files/b92ec131-1444-4f52-bdce-592d07ad698c.jpg"
            alt="Класс 4С"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-800/60 to-amber-600/50" />
        </motion.div>
      </div>

      <div ref={textRef} className="relative z-10 px-6 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-amber-300 uppercase tracking-[0.3em] text-sm font-semibold mb-6"
        >
          #4С_непросто_класс
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug mb-10"
        >
          Приходите разделить с нами этот трогательный и немного волнительный день.
          Будет душевно, весело и по-настоящему празднично!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white/80 text-lg md:text-xl"
        >
          Ведь <span className="text-amber-300 font-semibold">#4С_непросто_класс</span>,{" "}
          а значит, просто так мы не прощаемся!
        </motion.p>
      </div>
    </div>
  );
}
