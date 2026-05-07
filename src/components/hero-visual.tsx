import Image from "next/image";

type HeroVisualProps = {
  className?: string;
};

export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[72rem] overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-[16%] bottom-[4%] h-[16%] rounded-full bg-[#2DD4BF]/18 blur-[64px]"
        />
        <div className="relative z-10 overflow-visible sm:-mx-4 lg:-mx-8 xl:-mx-10">
          <Image
            src="/Hero-Smart-QA-monitor.png"
            alt="SmartQA Autopilot monitor showing workflow stages and release metrics"
            width={1240}
            height={900}
            priority
            className="h-auto w-[116%] max-w-none translate-x-[-8%] translate-y-[-2%] sm:w-[120%] sm:translate-x-[-10%] lg:w-[136%] lg:translate-x-[-15%] lg:translate-y-[-4%] xl:w-[144%] xl:translate-x-[-17%]"
            sizes="(min-width: 1440px) 900px, (min-width: 1280px) 54vw, (min-width: 1024px) 58vw, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
