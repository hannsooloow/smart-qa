import Image from "next/image";

type HeroVisualProps = {
  className?: string;
};

export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div className={className}>
      <div className="relative isolate mx-auto w-full max-w-[40rem] sm:max-w-[48rem] lg:max-w-[74rem]">
        <div
          aria-hidden
          className="absolute inset-x-[18%] top-[4%] h-[18%] rounded-full bg-white/[0.05] blur-[72px] lg:top-[10%]"
        />
        <div
          aria-hidden
          className="absolute inset-x-[14%] top-[14%] h-[20%] rounded-full bg-[#0B1220]/56 blur-[74px] lg:top-[20%]"
        />
        <div
          aria-hidden
          className="absolute inset-x-[12%] bottom-[14%] h-[20%] rounded-full bg-[#2DD4BF]/18 blur-[96px] lg:bottom-[10%]"
        />
        <div className="relative z-10 -mt-7 overflow-x-clip -mx-1 sm:-mt-5 sm:-mx-2 lg:-mt-2 lg:-mx-4 xl:-mx-6">
          <Image
            src="/Hero-smart-qa-monitor-June-No-Background.png"
            alt="Release assessment monitor showing identified risks, coverage signal, and release confidence"
            width={1600}
            height={1200}
            priority
            className="h-auto w-[108%] max-w-none -translate-x-[4%] -translate-y-1 sm:w-[108%] sm:-translate-x-[4%] sm:-translate-y-2 lg:w-[116%] lg:-translate-x-[9%] lg:-translate-y-6 xl:w-[120%] xl:-translate-x-[11%]"
          />
        </div>
      </div>
    </div>
  );
}
