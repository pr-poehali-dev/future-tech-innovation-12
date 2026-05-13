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
            {/* Самолётик, чей путь рисует сердце */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 600"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="50%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>

              {/* Пунктирный след самолётика — свободная дуга */}
              <path
                d="M120 500 C200 420 270 360 340 300 C390 260 430 230 480 200 C530 170 590 155 650 130"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
                strokeLinecap="round"
              />
              <path
                d="M120 500 C200 420 270 360 340 300 C390 260 430 230 480 200 C530 170 590 155 650 130"
                stroke="url(#trailGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="120 9999"
                opacity="0.7"
              />

              {/* Самолётик на траектории */}
              <g transform="translate(482,198) rotate(-28)">
                <path d="M0 0 L26 -6 L0 7 Z" fill="white" opacity="0.97" />
                <path d="M0 0 L15 -12 L0 -6 Z" fill="#a78bfa" opacity="0.92" />
                <path d="M0 0 L15 9 L0 7 Z" fill="#fbbf24" opacity="0.92" />
                <line x1="2" y1="0" x2="20" y2="-1.5" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" />
              </g>

              {/* Искры за самолётиком */}
              <circle cx="468" cy="203" r="2.5" fill="#f472b6" opacity="0.8" />
              <circle cx="455" cy="208" r="1.5" fill="white" opacity="0.6" />
              <circle cx="443" cy="212" r="1" fill="#fbbf24" opacity="0.7" />

              {/* Маленькое сердечко */}
              <path
                d="M658 118 C656 114 650 110 650 105 C650 100 654 97 658 101 C662 97 666 100 666 105 C666 110 660 114 658 118 Z"
                fill="#f472b6"
                opacity="0.95"
              />

              {/* Рассыпанные искорки вдоль пути */}
              <circle cx="200" cy="415" r="1.5" fill="white" opacity="0.35" />
              <circle cx="340" cy="302" r="1.5" fill="#f472b6" opacity="0.45" />
              <circle cx="390" cy="262" r="1" fill="white" opacity="0.4" />
              <circle cx="535" cy="168" r="2" fill="#fbbf24" opacity="0.5" />
              <circle cx="600" cy="148" r="1.5" fill="white" opacity="0.4" />
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
                <p className="text-white font-bold text-[7vw] sm:text-[5vw] lg:text-[4vw] leading-tight mt-4 sm:mt-6 lg:mt-10">С любовью, ваш 4 «С» ❤️</p>
              </div>
              <p className="text-white/50 text-xs sm:text-sm">Выпускной · 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}