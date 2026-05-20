type HeroVisualFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroVisualFrame({ children, className }: HeroVisualFrameProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[72rem] px-2 pb-10 pt-4 sm:px-4 sm:pb-14 lg:px-6 lg:pb-20 lg:pt-8">
        <div
          aria-hidden
          className="absolute inset-x-[12%] bottom-[11%] h-[20%] rounded-full bg-[#2DD4BF]/12 blur-[84px] sm:bottom-[14%] sm:h-[22%]"
        />
        <div
          aria-hidden
          className="absolute inset-x-[18%] bottom-[8%] h-[12%] rounded-full bg-[#38BDF8]/10 blur-[96px] sm:bottom-[10%]"
        />

        <div className="relative mx-auto w-full max-w-[64rem]">
          <div
            aria-hidden
            className="absolute inset-x-[1.4%] top-[1.8%] h-[76%] rounded-[2rem] border border-white/6 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent"
          />
          <div
            aria-hidden
            className="absolute inset-x-[8%] top-[4%] h-[16%] rounded-full bg-white/[0.035] blur-[44px]"
          />

          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#667286]/65 bg-[linear-gradient(180deg,#151C28_0%,#0A0F17_46%,#101824_100%)] shadow-[0_46px_110px_rgba(2,8,23,0.56)] sm:rounded-[2.2rem] lg:rounded-[2.6rem]">
            <div
              aria-hidden
              className="absolute inset-x-[1.1%] top-[1.5%] h-[77%] rounded-[1.35rem] border border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] sm:rounded-[1.75rem] lg:rounded-[2rem]"
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-[1.3%] h-2 w-16 -translate-x-1/2 rounded-full bg-black/50 sm:h-2.5 sm:w-20"
            />
            <div
              aria-hidden
              className="absolute inset-x-[10%] top-[3.8%] h-[8%] rounded-full bg-white/[0.04] blur-[30px]"
            />
            <div className="px-[3.4%] pb-[7.2%] pt-[5.2%] sm:px-[3.2%] sm:pb-[6.6%] sm:pt-[4.8%] lg:px-[3%] lg:pb-[6%] lg:pt-[4.2%]">
              <div className="relative overflow-hidden rounded-[1.1rem] border border-[#253246] bg-[radial-gradient(circle_at_20%_18%,rgba(45,212,191,0.08),transparent_30%),radial-gradient(circle_at_88%_8%,rgba(56,189,248,0.09),transparent_22%),linear-gradient(180deg,#07111C_0%,#0B1220_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_-30px_70px_rgba(2,8,23,0.28)] sm:rounded-[1.4rem] lg:rounded-[1.6rem]">
                {children}
              </div>
            </div>
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[16%] bg-[linear-gradient(180deg,rgba(39,46,61,0)_0%,rgba(52,59,76,0.68)_40%,rgba(26,31,42,1)_100%)]"
            />
          </div>

          <div
            aria-hidden
            className="absolute left-1/2 top-full hidden h-20 w-28 -translate-x-1/2 bg-[linear-gradient(180deg,#4B5563_0%,#2A3343_35%,#161E2A_100%)] [clip-path:polygon(38%_0,62%_0,72%_100,28%_100)] shadow-[0_16px_24px_rgba(2,8,23,0.3)] lg:block"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-[calc(100%+4.75rem)] hidden h-4 w-44 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#6B7280_0%,#374151_38%,#111827_100%)] shadow-[0_12px_22px_rgba(2,8,23,0.28)] lg:block"
          />
          <div
            aria-hidden
            className="absolute inset-x-[24%] top-[calc(100%+5.7rem)] hidden h-5 rounded-full bg-black/35 blur-xl lg:block"
          />
        </div>
      </div>
    </div>
  );
}