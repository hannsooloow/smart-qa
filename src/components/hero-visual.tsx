"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroVisualProps = {
  className?: string;
};

const linePath =
  "M132 520C244 500 318 448 392 388C470 326 548 286 642 286C746 286 826 320 900 290C980 258 1040 202 1108 162";

const lineShadowPath =
  "M138 554C256 530 332 478 406 414C482 350 560 316 650 322C742 328 818 360 892 350C970 340 1040 290 1112 216";

export function HeroVisual({ className }: HeroVisualProps) {
  const prefersReducedMotion = useReducedMotion();
  const glowTransition = prefersReducedMotion
    ? { duration: 0 }
    : {
        duration: 3.8,
        ease: "easeInOut" as const,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror" as const,
      };

  return (
    <div className={className}>
      <div className="relative mx-auto aspect-[1.58] w-full">
        <motion.div
          aria-hidden
          className="absolute right-[10%] top-[8%] h-[28%] w-[30%] rounded-full bg-[#2DD4BF]/14 blur-3xl"
          animate={
            prefersReducedMotion ? undefined : { opacity: [0.26, 0.38, 0.26], scale: [1, 1.08, 1] }
          }
          transition={glowTransition}
        />
        <motion.div
          aria-hidden
          className="absolute left-[14%] top-[46%] h-[28%] w-[30%] rounded-full bg-[#38BDF8]/12 blur-3xl"
          animate={
            prefersReducedMotion ? undefined : { opacity: [0.18, 0.28, 0.18], scale: [1, 1.06, 1] }
          }
          transition={{ ...glowTransition, duration: 4.9 }}
        />

        <svg
          viewBox="0 0 1240 720"
          className="absolute inset-0 h-full w-full overflow-visible"
          role="img"
          aria-label="Animated SmartQA release intelligence visual"
        >
          <defs>
            <linearGradient id="heroCurve" x1="132" y1="520" x2="1108" y2="162" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2DD4BF" />
              <stop offset="54%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#2DD4BF" />
            </linearGradient>
            <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#111827" stopOpacity="0.96" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.84" />
            </linearGradient>
            <linearGradient id="heroPanelEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#334155" stopOpacity="0.72" />
              <stop offset="100%" stopColor="#334155" stopOpacity="0.3" />
            </linearGradient>
            <filter id="heroNodeGlow" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="heroCardGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g transform="translate(-86 -46) scale(1.18)">
            <path
              d={lineShadowPath}
              stroke="#243244"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="10 14"
              opacity="0.95"
            />
            <path
              d={linePath}
              stroke="url(#heroCurve)"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
              opacity="0.22"
              filter="url(#heroNodeGlow)"
            />
            <path
              d={linePath}
              stroke="url(#heroCurve)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
            />
            <motion.path
              d={linePath}
              stroke="#9FFCF0"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="18 24"
              initial={{ strokeDashoffset: 48, opacity: 0.42 }}
              animate={
                prefersReducedMotion
                  ? { opacity: 0.4 }
                  : { strokeDashoffset: [48, 0], opacity: [0.36, 0.62, 0.36] }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 2.6,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                    }
              }
              filter="url(#heroNodeGlow)"
            />

            <motion.g
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <rect x="96" y="162" width="276" height="174" rx="24" fill="#0A1425" stroke="#42526B" strokeWidth="1.6" />
              <rect x="120" y="188" width="52" height="52" rx="18" fill="#08111F" stroke="#2DD4BF" strokeWidth="2.4" />
              <path d="M138 214h16M146 206v16" stroke="#2DD4BF" strokeWidth="2.8" strokeLinecap="round" />
              <rect x="192" y="198" width="124" height="12" rx="6" fill="#314258" />
              <rect x="192" y="220" width="88" height="12" rx="6" fill="#243244" />
              <line x1="124" y1="294" x2="336" y2="294" stroke="#334155" strokeWidth="1.2" strokeDasharray="5 7" />
              <motion.path
                d="M126 282C162 274 196 264 224 246C246 232 276 222 332 190"
                stroke="#38BDF8"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.54 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              />
              <motion.circle
                cx="332"
                cy="190"
                r="5"
                fill="#38BDF8"
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.72, 1, 0.72] }}
                transition={glowTransition}
                filter="url(#heroNodeGlow)"
              />
            </motion.g>

            <motion.g
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, ease: "easeOut", delay: 0.08 }}
            >
              <rect
                x="802"
                y="100"
                width="282"
                height="184"
                rx="28"
                fill="#0A1425"
                stroke="#42526B"
                strokeWidth="1.6"
                filter="url(#heroCardGlow)"
              />
              <circle cx="944" cy="190" r="50" fill="none" stroke="#27364B" strokeWidth="12" />
              <motion.circle
                cx="944"
                cy="190"
                r="50"
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="12"
                strokeDasharray="160 240"
                strokeDashoffset="18"
                transform="rotate(-90 944 190)"
                animate={prefersReducedMotion ? { opacity: 0.92 } : { opacity: [0.76, 1, 0.76] }}
                transition={glowTransition}
                filter="url(#heroNodeGlow)"
              />
              <motion.circle
                cx="944"
                cy="190"
                r="14"
                fill="#08111F"
                stroke="#38BDF8"
                strokeWidth="2.4"
                animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.08, 1] }}
                transition={glowTransition}
              />
              <motion.rect
                x="868"
                y="244"
                width="72"
                height="12"
                rx="6"
                fill="#314258"
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.65, 1, 0.65] }}
                transition={{ ...glowTransition, duration: 2.9 }}
              />
              <motion.rect
                x="962"
                y="244"
                width="84"
                height="12"
                rx="6"
                fill="#42526B"
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.55, 0.88, 0.55] }}
                transition={{ ...glowTransition, duration: 3.2 }}
              />
            </motion.g>

            <motion.g
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.74, ease: "easeOut", delay: 0.14 }}
            >
              <rect x="518" y="370" width="360" height="154" rx="28" fill="#0A1425" stroke="#42526B" strokeWidth="1.6" />
              <rect x="560" y="430" width="18" height="58" rx="9" fill="#243244" />
              <motion.rect
                x="594"
                y="406"
                width="18"
                height="82"
                rx="9"
                fill="#2DD4BF"
                initial={{ opacity: 0.35, scaleY: 0.82, transformOrigin: "center bottom" }}
                animate={prefersReducedMotion ? { opacity: 0.82, scaleY: 1 } : { opacity: [0.72, 0.9, 0.72], scaleY: [0.96, 1.06, 0.96] }}
                transition={{ duration: 2.8, ease: "easeInOut", repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY }}
              />
              <rect x="628" y="438" width="18" height="50" rx="9" fill="#243244" />
              <motion.rect
                x="662"
                y="418"
                width="18"
                height="70"
                rx="9"
                fill="#38BDF8"
                initial={{ opacity: 0.35, scaleY: 0.82, transformOrigin: "center bottom" }}
                animate={prefersReducedMotion ? { opacity: 0.8, scaleY: 1 } : { opacity: [0.68, 0.88, 0.68], scaleY: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2.5, ease: "easeInOut", repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY, delay: 0.22 }}
              />
              <line x1="722" y1="492" x2="824" y2="492" stroke="#334155" strokeWidth="1.2" strokeDasharray="5 7" />
              <motion.path
                d="M724 464C748 450 772 440 794 440C816 440 836 426 850 400"
                stroke="#2DD4BF"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.44 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
              />
              <motion.circle
                cx="850"
                cy="400"
                r="7"
                fill="#2DD4BF"
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.78, 1, 0.78], scale: [1, 1.12, 1] }}
                transition={glowTransition}
                filter="url(#heroNodeGlow)"
              />
            </motion.g>

            <motion.g
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.86, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
              <circle cx="246" cy="496" r="28" fill="#08111F" stroke="#42526B" strokeWidth="2.2" />
              <motion.circle
                cx="246"
                cy="496"
                r="11"
                fill="#2DD4BF"
                animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.14, 1], opacity: [0.76, 1, 0.76] }}
                transition={{ ...glowTransition, duration: 2.9 }}
                filter="url(#heroNodeGlow)"
              />
              <motion.circle
                cx="246"
                cy="496"
                r="18"
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="2"
                animate={prefersReducedMotion ? { opacity: 0.38 } : { r: [18, 28, 18], opacity: [0.34, 0.12, 0.34] }}
                transition={{ duration: 2.9, ease: "easeInOut", repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY }}
              />

              <circle cx="482" cy="362" r="30" fill="#08111F" stroke="#42526B" strokeWidth="2.2" />
              <motion.circle
                cx="482"
                cy="362"
                r="12"
                fill="#38BDF8"
                animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.12, 1], opacity: [0.72, 1, 0.72] }}
                transition={{ ...glowTransition, duration: 2.4 }}
                filter="url(#heroNodeGlow)"
              />
              <motion.circle
                cx="482"
                cy="362"
                r="20"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                animate={prefersReducedMotion ? { opacity: 0.34 } : { r: [20, 30, 20], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2.4, ease: "easeInOut", repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY }}
              />

              <circle cx="742" cy="300" r="32" fill="#08111F" stroke="#42526B" strokeWidth="2.2" />
              <motion.circle
                cx="742"
                cy="300"
                r="13"
                fill="#2DD4BF"
                animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ ...glowTransition, duration: 2.6 }}
                filter="url(#heroNodeGlow)"
              />
              <motion.circle
                cx="742"
                cy="300"
                r="22"
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="2"
                animate={prefersReducedMotion ? { opacity: 0.34 } : { r: [22, 34, 22], opacity: [0.34, 0.12, 0.34] }}
                transition={{ duration: 2.6, ease: "easeInOut", repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY }}
              />

              <circle cx="1032" cy="186" r="28" fill="#08111F" stroke="#42526B" strokeWidth="2.2" />
              <motion.circle
                cx="1032"
                cy="186"
                r="11"
                fill="#38BDF8"
                animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.12, 1], opacity: [0.72, 1, 0.72] }}
                transition={{ ...glowTransition, duration: 2.2 }}
                filter="url(#heroNodeGlow)"
              />
              <motion.circle
                cx="1032"
                cy="186"
                r="18"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                animate={prefersReducedMotion ? { opacity: 0.32 } : { r: [18, 28, 18], opacity: [0.28, 0.1, 0.28] }}
                transition={{ duration: 2.2, ease: "easeInOut", repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY }}
              />
            </motion.g>
          </g>
        </svg>
      </div>
    </div>
  );
}