export const navItems = [
  { href: "/qonductor", label: "Why Qonductor" },
  { href: "/features", label: "Features" },
  { href: "/services", label: "Services" },
  { href: "/insights", label: "Insights" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "automation-qa",
    shortLabel: "Automation QA",
    title: "Coverage for the flows that matter",
    summary:
      "We build test coverage around the product journeys that actually affect release confidence.",
    hero:
      "Replace brittle manual regression cycles with automation coverage that survives product change and supports faster shipping.",
    outcomes: [
      "Fewer manual regression cycles",
      "More confidence before release",
      "Coverage that stays useful",
      "Make automation assets easier to maintain",
    ],
    deliverables: [
      "Coverage plan tied to real release risk",
      "Core automated regression suite",
      "Maintenance and flake reduction recommendations",
      "Execution and reporting workflow",
    ],
    situations: [
      "Manual testing is slowing every release",
      "Existing automation is too brittle to trust",
      "The product team is shipping faster than QA can keep up",
    ],
  },
  {
    slug: "qa-consulting",
    shortLabel: "QA Consulting",
    title: "Fix the QA gaps slowing delivery",
    summary:
      "We find the process, tooling, and ownership issues that make QA harder than it should be.",
    hero:
      "Give engineering leadership a pragmatic QA strategy that fits the current team, roadmap, and delivery model.",
    outcomes: [
      "Clearer QA workflows",
      "Better release discipline",
      "Stronger signal from testing",
      "A roadmap for quality maturity",
    ],
    deliverables: [
      "QA maturity assessment",
      "Target-state operating model",
      "Coverage and tooling recommendations",
      "Implementation roadmap for team enablement",
    ],
    situations: [
      "Quality ownership is unclear across product and engineering",
      "The team needs guidance before investing further in tooling",
      "Delivery speed increased but QA processes did not mature with it",
    ],
  },
  {
    slug: "cicd-quality-integration",
    shortLabel: "CI/CD Integration",
    title: "Catch problems inside the pipeline",
    summary:
      "We move QA closer to the release path so issues show up earlier and decisions get easier.",
    hero:
      "Move QA from a downstream checkpoint into a continuous part of the engineering delivery system.",
    outcomes: [
      "Earlier failure detection",
      "Cleaner release gates",
      "Less last-minute QA chaos",
      "Less firefighting near release windows",
    ],
    deliverables: [
      "Pipeline quality gate design",
      "Automated checks wired into CI/CD",
      "Failure triage and reporting approach",
      "Environment and release validation strategy",
    ],
    situations: [
      "Teams deploy often but do not trust pipeline quality signal",
      "Quality checks exist but are disconnected from release decisions",
      "Regression bugs are discovered too late in the delivery cycle",
    ],
  },
  {
    slug: "performance-reliability",
    shortLabel: "Performance",
    title: "Find reliability issues before users do",
    summary:
      "We test the stability and performance risks that damage trust when they reach production.",
    hero:
      "Strengthen the reliability posture of the product with practical validation, analysis, and QA visibility.",
    outcomes: [
      "Fewer production surprises",
      "Better risk visibility",
      "More confident launches",
      "Faster diagnosis of recurring failures",
    ],
    deliverables: [
      "Reliability risk assessment",
      "Performance validation plan",
      "Issue reproduction and analysis support",
      "Reporting for engineering and product stakeholders",
    ],
    situations: [
      "The product is stable functionally but unreliable under real usage patterns",
      "Performance or reliability issues affect customer trust",
      "Teams need better evidence before high-risk releases",
    ],
  },
];

export const serviceNavItems = services.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.shortLabel,
}));

export const companyStats = [
  { value: "4", label: "service pillars tied to release confidence" },
  { value: "1", label: "primary CTA focused on consultation booking" },
  { value: "6", label: "Qonductor workflow stages for release clarity" },
  { value: "24h", label: "target response time for qualified inbound leads" },
];

export const differentiators = [
  {
    title: "We focus on release risk",
    description:
      "We test what affects shipping, not what looks good in a report.",
  },
  {
    title: "We make QA easier to run",
    description:
      "Less setup, less manual effort, and less maintenance drag for your team.",
  },
  {
    title: "We fit into delivery",
    description:
      "QA works with the release process instead of blocking it.",
  },
  {
    title: "We keep the signal clear",
    description:
      "Results are built to support release decisions, not just test counts.",
  },
];

export const qonductorSteps = [
  {
    title: "Track coverage",
    description:
      "See which product flows are covered and which changes need attention before release.",
  },
  {
    title: "Run targeted checks",
    description:
      "Execute the tests that matter for the release in front of you instead of chasing noise.",
  },
  {
    title: "Review failures fast",
    description:
      "Surface breakage, flaky behavior, and regressions before they slow the team down.",
  },
  {
    title: "Keep suites aligned",
    description:
      "Maintain QA as the product, release workflow, and delivery pace keep changing.",
  },
  {
    title: "Centralize reporting",
    description:
      "Give engineering, product, and QA one clear view of what passed, failed, and drifted.",
  },
  {
    title: "Decide with evidence",
    description:
      "Know whether a release is ready without extra coordination, guesswork, or late surprises.",
  },
];

export const qonductorBenefits = [
  {
    title: "Less release uncertainty",
    description:
      "See what changed, what passed, and what still needs attention before the team ships.",
  },
  {
    title: "Less QA coordination",
    description:
      "Keep coverage, execution, and reporting in one system instead of stitching updates together by hand.",
  },
  {
    title: "Clearer release decisions",
    description:
      "Use one release view to understand risk, spot failures, and decide whether to move forward.",
  },
];

export const audienceSegments = [
  {
    slug: "startups",
    title: "Startups",
    triggerLabel: "Move fast without guessing",
    summary:
      "For teams shipping quickly without a real QA system yet.",
    painPoints: [
      "Manual testing is stealing time from shipping",
      "Founders or engineering leads do not trust release quality",
      "There is no repeatable regression system yet",
    ],
  },
  {
    slug: "scaleups",
    title: "Scaleups",
    triggerLabel: "Keep quality aligned with speed",
    summary:
      "For teams whose release pace has outgrown manual QA and flaky automation.",
    painPoints: [
      "Flaky automation has become hard to trust",
      "Multiple squads ship in parallel with inconsistent quality controls",
      "Release velocity is increasing faster than QA operations can scale",
    ],
  },
  {
    slug: "agencies",
    title: "Agencies",
    triggerLabel: "Deliver client work with confidence",
    summary:
      "For teams that need repeatable QA across multiple products.",
    painPoints: [
      "Client expectations exceed in-house QA capacity",
      "Delivery margins shrink when QA stays manual",
      "Quality inconsistency creates reputational risk",
    ],
  },
  {
    slug: "enterprise",
    title: "Enterprise teams",
    triggerLabel: "Add signal to complex releases",
    summary:
      "For teams that need stronger reporting, reliability, and release control.",
    painPoints: [
      "Quality tooling and ownership are fragmented",
      "Leadership needs stronger evidence before high-impact releases",
      "Production defects create significant operational or reputational cost",
    ],
  },
];

export const insightPosts = [
  {
    slug: "release-confidence-with-automation",
    category: "Automation Strategy",
    title: "How to Build Release Confidence With Test Automation",
    excerpt:
      "Coverage alone is not enough. The release system around it is what builds confidence.",
    summary:
      "Strong release confidence comes from aligning automation coverage, pipeline signal, ownership, and reporting around actual business-critical flows.",
    sections: [
      {
        title: "Start with failure cost, not tool preference",
        body:
          "The best automation strategy starts by mapping which failures are expensive, frequent, or reputation-damaging. That is the real basis for coverage planning.",
      },
      {
        title: "Make automation part of release operations",
        body:
          "Automation should influence deploy decisions and surface signal early in CI/CD. If it only runs on demand or after the fact, it will never shape delivery behavior.",
      },
      {
        title: "Protect trust by managing maintenance well",
        body:
          "A brittle suite destroys trust faster than no suite. Teams need maintenance discipline, reporting clarity, and ownership rules if they want automation to remain credible.",
      },
    ],
  },
  {
    slug: "quality-gates-in-cicd",
    category: "CI/CD Quality",
    title: "How Quality Gates Belong Inside CI/CD, Not Beside It",
    excerpt:
      "Catch release risk inside the pipeline, before it turns into release friction.",
    summary:
      "Embedding validation into CI/CD creates earlier feedback, cleaner go or no-go decisions, and less release firefighting.",
    sections: [
      {
        title: "Separate signal by purpose",
        body:
          "Fast validation belongs close to pull requests, while deeper coverage can run later in the release path. A quality gate strategy should respect developer feedback speed.",
      },
      {
        title: "Tie failures to decisions",
        body:
          "A failing check should tell a team what to do next. Without ownership and escalation rules, pipeline failures become noise instead of guidance.",
      },
      {
        title: "Reporting matters as much as execution",
        body:
          "Teams need screenshots, logs, traces, and summary views that make it obvious whether a failure blocks release or just requires follow-up.",
      },
    ],
  },
  {
    slug: "flaky-tests-break-trust",
    category: "Automation Operations",
    title: "Why Flaky Tests Break Trust Faster Than Missing Tests",
    excerpt:
      "Once the team stops trusting the suite, the coverage stops helping.",
    summary:
      "Flaky tests damage release workflows by normalizing ignored failures and making automation harder to use as a decision tool.",
    sections: [
      {
        title: "Flakiness changes team behavior",
        body:
          "When failures are noisy or inconsistent, teams stop treating the suite as reliable signal. That creates blind spots exactly where automation was supposed to help.",
      },
      {
        title: "Stability needs architecture and operations",
        body:
          "Improving stability requires better selectors, environmental consistency, retries used carefully, and active maintenance ownership.",
      },
      {
        title: "Healing should support maintenance, not hide quality issues",
        body:
          "Smart healing is useful when paired with evidence and review. It should reduce maintenance drag, not silently mask broken user flows.",
      },
    ],
  },
];

export const contactDetails = {
  email: "hello@smartqa.pro",
  location: "Serving startups, scaleups, agencies, and enterprise teams",
};

export const operatingPrinciples = [
  "Treat QA as a release decision system, not a ticket queue.",
  "Prioritize maintainability as aggressively as initial coverage speed.",
  "Integrate quality signal where engineering teams already work.",
  "Use automation to create leverage, then layer human judgment where it adds value.",
];