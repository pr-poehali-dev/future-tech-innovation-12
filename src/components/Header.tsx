interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-[0.3em] font-semibold">
          4 «С» · 2026
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
          <span className="text-yellow-300 text-sm">🎓</span>
          <span className="text-white text-sm uppercase tracking-wide">Выпускной</span>
        </div>
      </div>
    </header>
  );
}
