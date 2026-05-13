export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #7c3aed 100%)" }}
          >
            {/* Декоративная сцена — сердце и самолётик на весь фон */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Большое сердце — нарисовано "от руки", чёрной ручкой */}
              <path
                d="M400 480 C340 440 180 360 160 240 C148 170 190 110 250 108 C295 106 335 130 360 165 C375 185 388 210 400 235 C412 210 425 185 440 165 C465 130 505 106 550 108 C610 110 652 170 640 240 C618 360 460 440 400 480 Z"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="rgba(239,68,68,0.12)"
                opacity="0.7"
              />
              {/* Внутренняя штриховка сердца — эффект "нарисованного" */}
              <path
                d="M370 200 C355 185 335 178 315 182"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.35"
              />
              <path
                d="M360 220 C340 205 315 200 295 205"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.3"
              />

              {/* Пунктирная траектория самолётика */}
              <path
                d="M80 480 C150 400 200 350 280 300 C340 260 380 240 400 235 C420 230 460 220 520 180 C580 140 650 100 720 60"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                strokeLinecap="round"
                opacity="0.4"
              />

              {/* Бумажный самолётик в полёте — в точке траектории */}
              <g transform="translate(510,182) rotate(-38)">
                {/* Корпус */}
                <path
                  d="M0 0 L28 -8 L0 8 Z"
                  fill="white"
                  opacity="0.95"
                />
                {/* Нижнее крыло */}
                <path
                  d="M0 0 L16 10 L0 8 Z"
                  fill="rgba(251,191,36,0.9)"
                />
                {/* Верхнее крыло */}
                <path
                  d="M0 0 L16 -10 L0 -8 Z"
                  fill="rgba(167,139,250,0.85)"
                />
                {/* Складка по центру */}
                <line x1="0" y1="0" x2="20" y2="-2" stroke="rgba(0,0,0,0.2)" strokeWidth="0.8" />
              </g>

              {/* Маленькие звёздочки / искры вокруг */}
              <circle cx="560" cy="150" r="2" fill="white" opacity="0.6" />
              <circle cx="540" cy="165" r="1.5" fill="rgba(251,191,36,0.8)" />
              <circle cx="570" cy="170" r="1.5" fill="white" opacity="0.5" />
              <circle cx="350" cy="280" r="1.5" fill="white" opacity="0.4" />
              <circle cx="280" cy="310" r="2" fill="rgba(167,139,250,0.7)" />
            </svg>

            {/* Контент поверх */}
            <div className="relative z-10 flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-300 text-xs sm:text-sm tracking-widest">
                  Детали
                </h3>
                <p className="text-white text-sm sm:text-base">21 мая 2026</p>
                <p className="text-white text-sm sm:text-base">12:40</p>
                <p className="text-white text-sm sm:text-base">Актовый зал, 5 этаж</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-300 text-xs sm:text-sm tracking-widest">
                  Класс
                </h3>
                <p className="text-white text-sm sm:text-base">4 «С»</p>
                <p className="text-white text-sm sm:text-base">Начальная школа</p>
                <p className="text-amber-300 text-sm sm:text-base">#4С_непросто_класс</p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <div>
                <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                  4 «С»
                </h1>
                <p className="text-purple-300 text-sm sm:text-base mt-2">С любовью, ваш 4 «С» ❤️</p>
              </div>
              <p className="text-white/50 text-xs sm:text-sm">Выпускной · 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
