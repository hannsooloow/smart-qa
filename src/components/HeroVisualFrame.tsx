type HeroVisualFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroVisualFrame({ children, className }: HeroVisualFrameProps) {
  return (
    <div className={className}>
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-x-[7%] bottom-[6%] h-[18%] rounded-full bg-[#2DD4BF]/6 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute inset-x-[3%] inset-y-[2%] rounded-[1.45rem] border border-[#314762]/25"
        />
        <div className="relative overflow-hidden rounded-[1.35rem] border border-[#24364F] bg-transparent shadow-[0_24px_60px_rgba(2,8,23,0.34)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[1px] rounded-[calc(1.35rem-1px)] border border-white/5"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent"
          />
          <div className="relative">{children}</div>
        </div>
        <div
          aria-hidden
          className="mx-auto mt-3 h-1.5 w-[28%] rounded-full bg-[#0A1220] shadow-[0_10px_28px_rgba(2,8,23,0.34)]"
        />
      </div>
    </div>
  );
}