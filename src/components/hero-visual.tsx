import Image from "next/image";

type HeroVisualProps = {
  className?: string;
};

export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[76rem] overflow-visible">
        <div
          aria-hidden
          className="absolute inset-x-[8%] top-[6%] h-[22%] rounded-full bg-white/[0.028] blur-[62px]"
        />
        <div
          aria-hidden
          className="absolute right-[4%] top-[15%] h-[36%] w-[48%] rounded-full bg-[#38BDF8]/[0.08] blur-[102px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-[18%] bottom-[10%] h-[20%] rounded-full bg-[#2DD4BF]/14 blur-[86px]"
        />
        <div
          aria-hidden
          className="absolute left-[6%] bottom-[10%] h-[26%] w-[42%] rounded-full bg-[#0B1220] blur-[90px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-[18%] top-[20%] h-[20%] rounded-full bg-[#0B1220]/56 blur-[74px]"
        />
        <div className="relative z-10 overflow-visible sm:-mx-2 lg:-mx-4 xl:-mx-6">
          <Image
            src="/Hero-Smart-QA-monitor.png"
            alt="Qonductor monitor showing coordinated QA workflow stages and release metrics"
            width={1240}
            height={900}
            priority
            unoptimized
            className="h-auto w-[100%] max-w-none translate-x-0 translate-y-0 sm:w-[104%] sm:translate-x-[-2%] lg:w-[112%] lg:translate-x-[-6%] lg:translate-y-[-2%] xl:w-[116%] xl:translate-x-[-8%]"
            sizes="(min-width: 1440px) 960px, (min-width: 1280px) 58vw, (min-width: 1024px) 62vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
