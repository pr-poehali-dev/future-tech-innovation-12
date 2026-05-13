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