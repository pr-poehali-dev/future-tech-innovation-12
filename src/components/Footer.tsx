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

              {/* Путь самолётика — форма сердца, центр экрана */}
              <path
                id="heartPath"
                d="M400 195 C400 175 378 148 350 148 C308 148 280 185 280 222 C280 298 355 362 400 402 C445 362 520 298 520 222 C520 185 492 148 450 148 C422 148 400 175 400 195 Z"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="5 8"
                strokeLinecap="round"
              />

              {/* Цветной след — градиентная обводка поверх пунктира */}
              <path
                d="M400 195 C400 175 378 148 350 148 C308 148 280 185 280 222 C280 298 355 362 400 402 C445 362 520 298 520 222 C520 185 492 148 450 148 C422 148 400 175 400 195 Z"
                stroke="url(#trailGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="80 9999"
                opacity="0.75"
              />

              {/* Самолётик — на вершине сердца, летит вправо */}
              <g transform="translate(451,143) rotate(25)">
                {/* корпус */}
                <path d="M0 0 L26 -6 L0 7 Z" fill="white" opacity="0.97" />
                {/* верхнее крыло */}
                <path d="M0 0 L15 -12 L0 -6 Z" fill="#a78bfa" opacity="0.92" />
                {/* нижнее крыло */}
                <path d="M0 0 L15 9 L0 7 Z" fill="#fbbf24" opacity="0.92" />
                {/* складка */}
                <line x1="2" y1="0" x2="20" y2="-1.5" stroke="rgba(0,0,0,0.18)" strokeWidth="0.8" />
              </g>

              {/* Искры за самолётиком */}
              <circle cx="440" cy="147" r="2.5" fill="#f472b6" opacity="0.8" />
              <circle cx="427" cy="145" r="1.5" fill="white" opacity="0.6" />
              <circle cx="415" cy="148" r="1" fill="#fbbf24" opacity="0.7" />

              {/* Маленькое сердечко в нижней точке траектории */}
              <path
                d="M400 412 C398 408, 392 404, 392 399 C392 394, 396 391, 400 395 C404 391, 408 394, 408 399 C408 404, 402 408, 400 412 Z"
                fill="#f472b6"
                opacity="0.95"
              />

              {/* Рассыпанные искорки */}
              <circle cx="282" cy="230" r="1.5" fill="white" opacity="0.45" />
              <circle cx="518" cy="235" r="1.5" fill="white" opacity="0.45" />
              <circle cx="310" cy="175" r="2" fill="#f472b6" opacity="0.5" />
              <circle cx="490" cy="175" r="2" fill="#f472b6" opacity="0.5" />
              <circle cx="340" cy="370" r="1.5" fill="#fbbf24" opacity="0.55" />
              <circle cx="460" cy="370" r="1.5" fill="#fbbf24" opacity="0.55" />
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