export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/#how-we-work", label: "How We Work" },
  { href: "/insights", label: "Insights" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "automation-engineering",
    shortLabel: "Automation Engineering",
    title: "Engineer coverage around release-critical flows",
    summary:
      "Build resilient automated coverage around the journeys that matter most to release confidence.",
    hero:
      "Strengthen release confidence with automation engineered for signal, maintainability, and delivery speed.",
    outcomes: [
      "Coverage engineered for change",
      "Earlier signal before release",
      "Less manual regression drag",
      "More maintainable QA assets",
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
    slug: "release-assurance",
    shortLabel: "Release Assurance",
    title: "Bring expert judgment into high-pressure releases",
    summary:
      "Add disciplined validation, triage, and release support where product change creates real delivery exposure.",
    hero:
      "Reduce late-cycle uncertainty with release-focused QA execution designed for real delivery pressure.",
    outcomes: [
      "Stronger release decisions",
      "Fewer late surprises",
      "Sharper defect triage",
      "More disciplined QA execution",
    ],
    deliverables: [
      "Pre-release validation planning",
      "Critical issue triage support",
      "Execution oversight on risky changes",
      "Release signal reporting",
    ],
    situations: [
      "High-impact releases need stronger QA judgment",
      "Delivery teams need sharper signal before ship",
      "Internal QA coverage is not enough for risky change windows",
    ],
  },
  {
    slug: "release-readiness",
    shortLabel: "Release Readiness",
    title: "Validate whether the release is ready to ship",
    summary:
      "Turn validation, evidence, and coverage review into a clearer go or no-go decision before release.",
    hero:
      "Give engineering and product leadership a sharper view of what is ready, what is exposed, and what needs review.",
    outcomes: [
      "Cleaner release decisions",
      "Clearer readiness evidence",
      "Less ambiguity before ship",
      "More confidence on critical launches",
    ],
    deliverables: [
      "Release readiness review",
      "Critical flow validation",
      "Environment and regression assessment",
      "Decision-ready QA summary",
    ],
    situations: [
      "Teams need better evidence before high-risk releases",
      "Product change is outpacing validation confidence",
      "Leadership needs a clearer release signal",
    ],
  },
  {
    slug: "quality-engineering-advisory",
    shortLabel: "Quality Engineering Advisory",
    title: "Design a QA model that fits the way your team ships",
    summary:
      "Define stronger quality systems, ownership, and operating discipline for teams that need more mature release confidence.",
    hero:
      "Align QA strategy, tooling, and delivery practices to the realities of your team, roadmap, and release risk.",
    outcomes: [
      "Clearer QA ownership",
      "Stronger operating model",
      "Better quality decisions",
      "A practical path to maturity",
    ],
    deliverables: [
      "QA operating model assessment",
      "Coverage and tooling recommendations",
      "Quality workflow design",
      "Implementation roadmap",
    ],
    situations: [
      "Quality ownership is fragmented",
      "The release process has outgrown current QA practices",
      "Leaders need a more mature quality engineering model",
    ],
  },
  {
    slug: "release-risk-analysis",
    shortLabel: "Release Risk Analysis",
    title: "Identify the weak points before they reach production",
    summary:
      "Analyze where coverage is thin, where change is risky, and where the release path is exposed before users feel the impact.",
    hero:
      "Find the unstable flows, missing checks, and high-risk patterns that undermine release confidence.",
    outcomes: [
      "Sharper visibility into release exposure",
      "Better prioritization of QA effort",
      "Earlier detection of hidden risk",
      "Clearer focus on what matters most",
    ],
    deliverables: [
      "Release risk assessment",
      "Coverage gap review",
      "Critical flow prioritization",
      "Risk summary for engineering and product",
    ],
    situations: [
      "Teams know risk exists but cannot see it clearly",
      "Coverage is growing without strong prioritization",
      "Critical flows need focused QA attention",
    ],
  },
  {
    slug: "release-intelligence",
    shortLabel: "Release Intelligence",
    title: "Turn QA activity into decision-ready release signal",
    summary:
      "Bring validation evidence, issue signal, and coverage context into reporting that helps teams make better release decisions faster.",
    hero:
      "Replace scattered QA updates with clearer visibility into readiness, risk, and what needs attention next.",
    outcomes: [
      "Clearer go or no-go signal",
      "Better cross-team visibility",
      "Faster interpretation of QA findings",
      "More credible release reporting",
    ],
    deliverables: [
      "Release reporting structure",
      "Issue signal summaries",
      "Coverage and evidence rollups",
      "Stakeholder-ready QA visibility",
    ],
    situations: [
      "QA reporting is noisy or hard to trust",
      "Product and engineering need clearer decision support",
      "Release visibility is fragmented across tools and people",
    ],
  },
];

export const serviceNavItems = services.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.shortLabel,
}));

export const companyStats = [
  { value: "6", label: "quality engineering services built around release confidence" },
  { value: "1", label: "primary CTA focused on consultation booking" },
  { value: "1", label: "release-focused quality engineering approach" },
  { value: "24h", label: "target response time for qualified inbound leads" },
];

export const differentiators = [
  {
    title: "We focus on release risk",
    description:
      "SmartQA concentrates effort where failures would delay, damage, or destabilize a release.",
  },
  {
    title: "We bring quality engineering judgment",
    description:
      "Coverage, validation, and reporting are guided by experienced QA operators, not generic execution volume.",
  },
  {
    title: "We fit into delivery",
    description:
      "Our operating model supports the way engineering teams actually ship, without adding unnecessary friction.",
  },
  {
    title: "We keep the signal clear",
    description:
      "The output is decision-ready quality signal built for release confidence, not a pile of disconnected test results.",
  },
];

export const deliveryWorkflowSteps = [
  {
    title: "Map release risk",
    description:
      "Identify the flows, changes, and weak points that deserve the most QA attention before release.",
  },
  {
    title: "Prioritize critical validation",
    description:
      "Focus execution on the checks that improve release confidence instead of spreading effort across noise.",
  },
  {
    title: "Surface failures early",
    description:
      "Expose breakage, regressions, and unstable behavior before they become customer-facing problems.",
  },
  {
    title: "Keep coverage aligned",
    description:
      "Maintain useful coverage as the product, roadmap, and release cadence continue to change.",
  },
  {
    title: "Clarify reporting",
    description:
      "Give engineering and product a clearer view of what passed, what failed, and what still needs attention.",
  },
  {
    title: "Decide with evidence",
    description:
      "Turn QA findings into usable release signal without guesswork, scattered updates, or last-minute surprises.",
  },
];

export const deliveryBenefits = [
  {
    title: "Sharper release visibility",
    description:
      "See what changed, what was validated, and what still carries risk before the team ships.",
  },
  {
    title: "Faster risk discovery",
    description:
      "Uncover unstable flows and missing coverage earlier in the release cycle.",
  },
  {
    title: "Clearer release decisions",
    description:
      "Bring evidence, coverage signal, and issue context together so engineering leaders can decide with confidence.",
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