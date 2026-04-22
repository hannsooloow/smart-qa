export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/autopilot", label: "SmartQA Autopilot" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "automation-qa",
    shortLabel: "Automation QA",
    title: "Automation QA Services",
    summary:
      "Build maintainable test automation around the flows that actually determine release confidence.",
    hero:
      "Replace brittle manual regression cycles with automation coverage that survives product change and supports faster shipping.",
    outcomes: [
      "Lower regression risk before release",
      "Reduce repetitive manual QA effort",
      "Improve confidence in product-critical flows",
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
    title: "QA Consulting",
    summary:
      "Design the quality strategy, operating model, and technical decisions that let teams scale without accumulating release chaos.",
    hero:
      "Give engineering leadership a pragmatic QA strategy that fits the current team, roadmap, and delivery model.",
    outcomes: [
      "Clearer ownership and workflows",
      "Better tooling and process decisions",
      "Higher signal from QA investment",
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
    title: "CI/CD Quality Integration",
    summary:
      "Embed quality gates directly into delivery workflows so teams get earlier signal and fewer late surprises.",
    hero:
      "Move QA from a downstream checkpoint into a continuous part of the engineering delivery system.",
    outcomes: [
      "Earlier defect detection",
      "More reliable deployments",
      "Clear quality gates for releases",
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
    title: "Performance & Reliability",
    summary:
      "Identify stability and performance risk before it reaches production and damages user trust.",
    hero:
      "Strengthen the reliability posture of the product with practical validation, analysis, and QA visibility.",
    outcomes: [
      "Reduced production surprise",
      "Better visibility into reliability risk",
      "More resilient release decisions",
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
  { value: "6", label: "Autopilot workflow stages for pilot positioning" },
  { value: "24h", label: "target response time for qualified inbound leads" },
];

export const differentiators = [
  {
    title: "Automation with operating context",
    description:
      "SmartQA builds test systems around delivery risk, not around vanity coverage percentages.",
  },
  {
    title: "Platform-backed service delivery",
    description:
      "SmartQA Autopilot makes the service more scalable, repeatable, and evidence-driven than agency-only execution.",
  },
  {
    title: "CI-aware quality thinking",
    description:
      "Quality is integrated into release workflows so teams get earlier signal and cleaner go or no-go decisions.",
  },
  {
    title: "Technical credibility without hype",
    description:
      "The messaging emphasizes maintainability, workflow fit, and reporting clarity instead of generic AI promises.",
  },
];

export const autopilotSteps = [
  {
    title: "URL-based intake",
    description:
      "A client provides the application entry point and project context for SmartQA's managed setup flow.",
  },
  {
    title: "Application analysis",
    description:
      "Agents map flows, identify candidate journeys, and surface likely quality-critical paths.",
  },
  {
    title: "Scenario generation",
    description:
      "SmartQA produces test case suggestions that can be refined before execution begins.",
  },
  {
    title: "Execution runner",
    description:
      "Browser-based runs execute the selected coverage and capture diagnostic evidence.",
  },
  {
    title: "Healing layer",
    description:
      "Common selector or flow breakages can be repaired to reduce maintenance drag.",
  },
  {
    title: "Evidence-rich reporting",
    description:
      "Clients receive screenshots, logs, traces, and recommendations that are usable by engineering teams.",
  },
];

export const autopilotBenefits = [
  {
    title: "Faster path from application URL to actionable QA coverage",
    description:
      "Autopilot shortens the distance between product context and a usable regression workflow.",
  },
  {
    title: "Less brittle maintenance overhead",
    description:
      "The healing layer and managed review process reduce the normal cost of keeping automation current.",
  },
  {
    title: "More useful reporting for technical stakeholders",
    description:
      "Evidence is structured to support debugging, release decisions, and stakeholder communication.",
  },
];

export const audienceSegments = [
  {
    slug: "startups",
    title: "Startups",
    triggerLabel: "Speed with control",
    summary:
      "Best for teams moving quickly without a mature QA foundation and starting to feel the cost of release uncertainty.",
    painPoints: [
      "Manual testing is stealing time from shipping",
      "Founders or engineering leads do not trust release quality",
      "There is no repeatable regression system yet",
    ],
  },
  {
    slug: "scaleups",
    title: "Scaleups",
    triggerLabel: "Stability at velocity",
    summary:
      "Best for growing product organizations where engineering output outpaced QA maturity and reliability signal.",
    painPoints: [
      "Flaky automation has become hard to trust",
      "Multiple squads ship in parallel with inconsistent quality controls",
      "Release velocity is increasing faster than QA operations can scale",
    ],
  },
  {
    slug: "agencies",
    title: "Agencies",
    triggerLabel: "Repeatable delivery",
    summary:
      "Best for agencies that need high-trust QA capability across multiple client products without building a large internal function.",
    painPoints: [
      "Client expectations exceed in-house QA capacity",
      "Delivery margins shrink when QA stays manual",
      "Quality inconsistency creates reputational risk",
    ],
  },
  {
    slug: "enterprise",
    title: "Enterprise teams",
    triggerLabel: "Visibility and governance",
    summary:
      "Best for teams that need stronger process maturity, clearer reporting, and better integration with existing release systems.",
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
      "Coverage does not create confidence by itself. The system around it does.",
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
      "Late QA signal turns quality into friction. Pipeline-native signal turns it into leverage.",
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
      "Once engineers stop believing the suite, coverage volume stops mattering.",
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