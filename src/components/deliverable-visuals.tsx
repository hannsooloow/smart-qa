import { Children, type ReactNode } from "react";

function joinClasses(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function DeliverableLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={joinClasses(
        "inline-flex rounded-full border border-[#2DD4BF]/18 bg-[#2DD4BF]/8 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-accent uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function DeliverableFrame({
  label,
  title,
  summary,
  footer,
  children,
  className,
  size = "default",
}: {
  label: string;
  title: string;
  summary?: string;
  footer?: string;
  children?: ReactNode;
  className?: string;
  size?: "default" | "compact";
}) {
  const compact = size === "compact";

  return (
    <div
      className={joinClasses(
        "surface-card-strong relative overflow-hidden rounded-[1.55rem] border border-[#425166]/56",
        compact ? "p-4" : "p-5 sm:p-6",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-x-[12%] top-0 h-16 rounded-full bg-white/[0.04] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-24 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.12),transparent_68%)]"
      />
      <div className="relative z-10">
        <DeliverableLabel>{label}</DeliverableLabel>
        <div className={compact ? "mt-3 space-y-2" : "mt-4 space-y-3"}>
          <h3
            className={joinClasses(
              "font-display font-semibold tracking-tight text-sand",
              compact ? "text-base leading-5" : "text-[1.35rem] leading-6 sm:text-[1.55rem]",
            )}
          >
            {title}
          </h3>
          {summary ? (
            <p
              className={joinClasses(
                "text-muted",
                compact ? "text-xs leading-5" : "text-sm leading-6",
              )}
            >
              {summary}
            </p>
          ) : null}
        </div>
        {children ? (
          <div className={compact ? "mt-4 space-y-2.5" : "mt-5 space-y-3"}>{children}</div>
        ) : null}
        {footer ? (
          <div
            className={joinClasses(
              "mt-4 rounded-[1rem] border border-white/6 bg-[#0B1220]/72 text-slate-300",
              compact ? "px-3 py-2 text-[0.72rem]" : "px-4 py-3 text-xs",
            )}
          >
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function DeliverableStack({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const items = Children.toArray(children);
  const positions = [
    "left-[4%] top-[6%] w-[76%] rotate-[-7deg] opacity-92",
    "right-[1%] top-[16%] w-[70%] rotate-[5deg] opacity-96",
    "left-[12%] bottom-[1%] w-[80%] rotate-[-1.5deg]",
  ];

  return (
    <div className={joinClasses("relative mx-auto w-full max-w-[42rem]", className)}>
      <div className="relative h-[23rem] sm:h-[27rem] lg:h-[31rem] xl:h-[34rem]">
        <div
          aria-hidden
          className="absolute left-[10%] right-[10%] top-[8%] h-24 rounded-full bg-white/[0.045] blur-[72px]"
        />
        <div
          aria-hidden
          className="absolute inset-x-[14%] bottom-[7%] h-20 rounded-full bg-[#2DD4BF]/18 blur-[92px]"
        />
        <div
          aria-hidden
          className="absolute right-[8%] top-[20%] h-24 w-24 rounded-full bg-[#38BDF8]/14 blur-[78px]"
        />
        {items.map((child, index) => (
          <div
            key={index}
            className={joinClasses(
              "absolute transition-transform duration-300",
              positions[index] ?? positions[positions.length - 1],
              index === items.length - 1 ? "z-30" : index === 1 ? "z-20" : "z-10",
            )}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}