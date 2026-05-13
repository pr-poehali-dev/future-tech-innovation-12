import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-05-21T12:40:00");
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Pad({ value }: { value: number }) {
  return String(value).padStart(2, "0");
}

const units = [
  { key: "days" as const, label: "дней" },
  { key: "hours" as const, label: "часов" },
  { key: "minutes" as const, label: "минут" },
  { key: "seconds" as const, label: "секунд" },
];

const program = [
  { time: "12:40", text: "Сбор гостей" },
  { time: "12:50", text: "Торжественное начало и выступление учеников" },
  { time: "14:20", text: "Памятное фото всего класса" },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isOver = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 flex flex-col items-center justify-center px-6 py-20">

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 w-full max-w-4xl"
      >
        <p className="text-amber-300 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4">
          До праздника осталось
        </p>
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-12">
          21 мая 2026 · 12:40
        </h2>

        {isOver ? (
          <p className="text-white text-4xl font-bold">🎉 Праздник уже здесь!</p>
        ) : (
          <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {units.map((u, i) => (
              <motion.div
                key={u.key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl w-full py-4 sm:py-6 mb-2 sm:mb-3">
                  <span className="text-white font-bold text-3xl sm:text-5xl lg:text-6xl tabular-nums">
                    <Pad value={timeLeft[u.key]} />
                  </span>
                </div>
                <span className="text-purple-300 text-xs sm:text-sm uppercase tracking-wider">
                  {u.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Program */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full max-w-2xl"
      >
        <p className="text-amber-300 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-8 text-center">
          Программа
        </p>
        <div className="flex flex-col gap-0">
          {program.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-4 sm:gap-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <span className="text-amber-300 text-xs font-bold">{item.time.split(":")[0]}</span>
                </div>
                {i < program.length - 1 && (
                  <div className="w-px h-8 bg-white/10 mt-1" />
                )}
              </div>
              <div className="pt-2 pb-6">
                <p className="text-amber-300 text-xs font-semibold mb-1">{item.time}</p>
                <p className="text-white/80 text-sm sm:text-base">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}