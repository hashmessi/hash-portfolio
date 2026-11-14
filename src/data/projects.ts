export interface Project {
  id: string;
  slug: string;
  tier: "signature" | "applied" | "more" | "industry";
  name: string;
  award?: string;
  /** Team size and personal contribution, e.g. "Team of 3 · I built the scoring engine". Rendered only when set. */
  role?: string;
  oneLiner: string;
  problem: string;
  whatIBuilt: string;
  outcomes: string[];
  keyDecision?: string;
  extension?: {
    name: string;
    description: string;
    github?: string;
  };
  metric?: {
    label: string;
    value: string;
  };
  scopeNote?: string;
  builtVsNext?: string;
  result?: string;
  stack: string[];
  links: {
    demo?: string;
    github?: string;
    video?: string;
  };
  visual?: "trust-dial" | "action-gate" | "promise-seal" | "blast-radius" | "drift-guard";
}

export const HERO_CONTENT = {
  eyebrow: "AI Systems Engineer",
  headline: "The trust layer for autonomous systems.",
  tagline: "If it matters in reality, it deserves to be engineered.",
  subhead:
    "AI agents can now browse, pay, delete data and sign deals. I build the systems that decide what they're allowed to do: runtime guardrails, payment gates and governed data operations, where deterministic code has the final say instead of a model's guess.",
  proofStrip: [
    { label: "1st Prize, AI Full-Stack Hackathon", icon: "trophy" },
    { label: "Best Cybersecurity Solution, TLN Cybersecurity Challenge", icon: "shield" },
    { label: "10 products built, 5 with live demos", icon: "zap" },
  ],
  ctas: [
    { label: "View selected work", href: "#signature-work", primary: true },
    { label: "GitHub", href: "https://github.com/hashmessi", external: true },
    { label: "Contact", href: "#contact", primary: false },
  ],
};

export const THESIS_CONTENT = {
  lineA: "AI used to answer questions.",
  lineB: "Now it takes actions.",
  question: "So who decides what it's allowed to do?",
  conclusion: "Deterministic code.",
  subtext:
    "As AI moves from answering questions to taking actions, the hard problem changes. It's no longer 'is the output good?' but 'should this action be allowed?' These four systems are my answer.",
};

export const MANIFESTO_CONTENT = {
  heading: "How I build",
  statementLines: ["Start with the problem.", "Build the whole product.", "Make it safe to rely on."],
  body: [
    "I'm drawn to the point where AI stops being a demo and starts taking real actions. That's where the important engineering happens: deciding what a system is allowed to do, proving what it did, and making mistakes reversible. My working rule is that models can suggest, but code decides.",
    "I work across the stack, from Rust inference engines and FastAPI services to Next.js products. Five of these products have live demos, so you can try them yourself rather than take my word for it.",
  ],
  focusAreas: [
    "Applied AI for real users: healthcare, education, retail",
    "Industrial AI and decision systems",
    "Safe, auditable AI agents and payments",
    "Full-stack product engineering",
  ],
};

export const RECOGNITION_COUNTERS = [
  { value: "02", label: "Competition Awards", sub: "1st Prize AI Full-Stack · Best Cybersecurity Solution" },
  { value: "10", label: "Autonomous Builds", sub: "Systems, runtimes & full-stack applications" },
  { value: "05", label: "Live Production Demos", sub: "Deployed & testable right now" },
];

export const CONTACT_CONTENT = {
  heading: "Have a real problem AI should solve?",
  subhead:
    "I'm looking for AI Engineering, Applied AI, and Forward-Deployed Engineering roles at teams turning AI into products people actually rely on. Let's talk.",
  email: "hashvanthh21@gmail.com",
  phone: "+91 94426 43650",
  github: "https://github.com/hashmessi",
  linkedin: "https://www.linkedin.com/in/hashvanth-m-u-29470725a/",
};

export const PROJECTS: Project[] = [
  // ── 01. SIGNATURE WORK ────────────────────────────────────────────────────
  {
    id: "01",
    slug: "trustpulse",
    tier: "signature",
    name: "TrustPulse",
    award: "🏆 Overall 1st Prize, AI Full-Stack Hackathon",
    oneLiner: "A live credibility score for claims, which updates as evidence and consensus change.",
    problem:
      "Misinformation moves faster than fact-checkers. A one-time 'true/false' label goes stale as soon as new evidence or new sources appear.",
    whatIBuilt:
      "TrustPulse scores a claim using AI evidence analysis, published fact-checks and community input together. The result is a Trust Score that keeps updating in real time instead of a fixed verdict.",
    outcomes: [
      "Four-axis Bayesian scoring that combines AI evidence, fact-check sources and community signals",
      "Gemini analysis grounded in live search, cross-checked against the Google Fact Check API",
      "Community votes, flags and evidence submissions, streamed in real time through Supabase",
    ],
    keyDecision:
      "I modeled credibility as a probability that moves with evidence, not a binary label. That way the score can explain why it changed.",
    stack: ["Next.js 14", "TypeScript", "Gemini 1.5 Flash", "Google Fact Check API", "Supabase", "PostgreSQL", "Vercel"],
    links: {
      demo: "https://trust-pulse-kappa.vercel.app/",
      github: "https://github.com/hashmessi/TrustPulse-",
    },
    visual: "trust-dial",
  },
  {
    id: "02",
    slug: "chainbreak",
    tier: "signature",
    name: "ChainBreak",
    award: "🛡️ Best Cybersecurity Solution, TLN Cybersecurity Challenge",
    oneLiner: "A runtime firewall for AI agents that blocks unsafe actions before they execute.",
    problem:
      "Agents now have access to databases, APIs and infrastructure. A single bad tool call, or a chain of harmless-looking steps, can leak data or trigger an operation nobody approved.",
    whatIBuilt:
      "ChainBreak sits between the agent and its tools. It watches the agent's whole sequence of actions, checks each step against security rules, and returns a decision to ALLOW, BLOCK or HOLD the step for a human.",
    outcomes: [
      "Causal lineage tracking that follows sensitive data across multi-step action chains",
      "Deterministic security rules, with no LLM 'judge' that an attacker could talk past",
      "An adversarial test suite plus trajectory replay to reproduce and audit every decision",
    ],
    keyDecision:
      "Enforcement is deterministic. A guardrail that an LLM can be argued out of is not a guardrail.",
    extension: {
      name: "ChainBreak-Web3",
      description:
        "I applied the same model to blockchain agents. Before a transaction is signed, it checks the recipient, asset, contract method, calldata and multi-step spending limits against what the user actually authorized.",
      github: "https://github.com/hashmessi/ChainBreak-Web3",
    },
    stack: ["Python", "FastAPI", "React", "Custom Policy Engine", "Web3.js"],
    links: {
      demo: "https://chainbreak.onrender.com/",
      github: "https://github.com/hashmessi/ChainBreak",
    },
    visual: "action-gate",
  },
  {
    id: "03",
    slug: "promiseloop",
    tier: "signature",
    name: "PromiseLoop",
    oneLiner: "AI shopping agents can't take your money until they deliver what you approved.",
    problem:
      "An AI agent can authorize a payment, but authorization says nothing about whether the right product arrived at the agreed price.",
    whatIBuilt:
      "PromiseLoop is an accountability layer between AI shopping agents and PayPal. It seals the buyer's approved intent into a tamper-evident Promise Receipt. Funds are captured only after deterministic checks confirm that the fulfillment matches the receipt.",
    outcomes: [
      "SHA-256-sealed, versioned Promise Receipts that bind product, SKU, amount and fulfillment terms",
      "A Promise Drift Engine that blocks PayPal capture when the evidence doesn't match",
      "Promise Replay audit timeline, webhook verification and protection against duplicate execution",
    ],
    keyDecision:
      "Code decides whether money moves, not a model. The LLM can shop, but it can't approve its own work.",
    stack: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "PayPal APIs"],
    links: {
      demo: "https://promiseloop-web.onrender.com/",
      video: "https://youtu.be/NWzrT7E8OqI",
      github: "https://github.com/hashmessi/Paypal-DEV",
    },
    visual: "promise-seal",
  },
  {
    id: "04",
    slug: "warden-mcp",
    tier: "signature",
    name: "Warden-MCP",
    oneLiner:
      "Lets AI agents carry out data-deletion requests safely, with a human sign-off, an undo, and a tamper-evident audit trail.",
    problem:
      "An agent connected to company databases can wipe personal data across systems, with no preview, no approval step and no way back.",
    whatIBuilt:
      "Warden is a Model Context Protocol (MCP) server. It finds a person's data across PostgreSQL and MongoDB and produces a blast-radius report showing what would be affected. It acts only after a human approves.",
    outcomes: [
      "Discovery across multiple systems, with a blast-radius impact report before anything runs",
      "A human approval gate, plus snapshots taken before execution so deletes and anonymization can be reversed",
      "SHA-256 hash-chained audit log that anyone can verify independently, plus an operations dashboard",
    ],
    keyDecision:
      "Every destructive action can be undone by design, because the snapshot is taken before the delete, not after something goes wrong.",
    stack: ["Node.js", "TypeScript", "Model Context Protocol", "PostgreSQL", "MongoDB", "Next.js", "OpenAI API"],
    links: {
      github: "https://github.com/hashmessi/Warden-MCP",
    },
    visual: "blast-radius",
  },

  // ── 02. INDUSTRY INNOVATION ───────────────────────────────────────────────
  {
    id: "05",
    slug: "guardian",
    tier: "industry",
    name: "Guardian",
    metric: {
      label: "Simulated compound-drift scenario: 93.9% lower modeled loss",
      value: "₹18,511 → ₹1,128",
    },
    oneLiner:
      "Catches injection-molding process drift before defects appear, recommends the smallest safe fix, and verifies recovery before production continues.",
    problem:
      "Injection-molding plants often find out a process has drifted only after defective parts are made. Barrel temperature, injection pressure and resin moisture move slowly away from the ideal, and threshold alarms fire too late. Operators are left guessing whether to stop the machine, what caused the drift, what waiting costs, and which lot is already affected.",
    whatIBuilt:
      "Guardian is an advisory decision engine for machine-cycle telemetry. It detects early drift, estimates quality risk, weighs the cost of waiting against the cost of acting, recommends the minimum effective intervention, verifies recovery, and scopes the suspect lot. It never writes to machine controllers: operators make every physical adjustment.",
    outcomes: [
      "Early drift detection with EWMA, CUSUM, trend and multivariate Mahalanobis monitoring, before conventional alarm limits are crossed",
      "Gradient-boosted quality-risk classification with calibrated probabilities and root-cause ranking against a defined Quality Contract",
      "A cost-of-quality engine and constrained optimizer that pick the smallest action within machine, recipe and process-fingerprint limits",
      "Recovery verification through stability windows and quality checkpoints, plus lot containment from the last known-good cycle to quality release",
      "Counterfactual replay with Guardian on and off, and deterministic parsing of short operator replies in English, Hindi, Tamil and Kannada",
    ],
    keyDecision:
      "Abstention first: when confidence is too low, Guardian recommends an inspection instead of an action, and it never touches the machine controller itself.",
    scopeNote:
      "A local, offline decision-support prototype. Machine data and the quality model are simulated, with no PLC integration. The 93.9% figure comes from the bundled simulator's Scenario 6, not from validated factory savings. Engineering validation: 233 tests passed, 2 skipped, and 10/10 simulator scenarios passed.",
    stack: ["Python", "FastAPI", "scikit-learn", "NumPy", "SciPy", "React 19", "Vite", "Recharts", "SQLite", "Pytest"],
    links: {
      github: "https://github.com/hashmessi/guardian",
    },
    visual: "drift-guard",
  },

  // ── 03. APPLIED AI ────────────────────────────────────────────────────────
  {
    id: "06",
    slug: "maruthuva-tsl",
    tier: "applied",
    name: "Maruthuva TSL",
    oneLiner: "A two-way communication bridge between Deaf patients and doctors, built on Tamil Sign Language.",
    problem:
      "Deaf and non-speaking patients often can't describe their symptoms or understand urgent instructions in a clinic. Interpreters are rarely available when they're needed most.",
    whatIBuilt:
      "Maruthuva TSL recognizes Tamil Sign Language from the patient and turns it into Tamil or English speech and text for the clinician. The doctor's spoken or typed reply comes back to the patient through an interactive sign-language avatar.",
    outcomes: [
      "Gesture recognition built on hand landmarks (MediaPipe), with medical-vocabulary workflows",
      "Tamil and English voice and text output through Sarvam AI and AI4Bharat",
      "Rule-based safety flows for critical medical exchanges",
    ],
    scopeNote:
      "This is an assistive communication tool, not a diagnostic system. It helps patients and clinicians understand each other and leaves every clinical decision to the clinician.",
    stack: ["Python", "MediaPipe", "Sarvam AI", "AI4Bharat", "JavaScript"],
    links: {
      github: "https://github.com/hashvanth21/MaruthuvaTSL",
    },
  },
  {
    id: "07",
    slug: "smartattend",
    tier: "applied",
    name: "SmartAttend",
    metric: {
      label: "Classroom benchmark",
      value: "~1.24 s · 57 students",
    },
    oneLiner: "Take one classroom photo, get the attendance register in about a second.",
    problem: "Roll call wastes lecture time, introduces manual errors, and is easy to game with proxy attendance.",
    whatIBuilt:
      "SmartAttend detects and identifies every student in a classroom photo and writes a structured attendance record. Faculty get a portal, and heads of department get an analytics dashboard.",
    outcomes: [
      "SCRFD-10G face detection plus 512-dimensional ArcFace (ResNet-50) embeddings",
      "Consensus across multiple photos, so one blurry frame can't mark a student absent",
      "A Rust inference engine on ONNX Runtime, which runs offline on college hardware",
    ],
    keyDecision:
      "I wrote the inference path in Rust instead of Python, so the whole pipeline runs fast and offline on the college's own hardware, without depending on the cloud.",
    stack: ["Rust", "Python", "ONNX Runtime", "OpenCV", "FastAPI", "React", "SQLite"],
    links: {
      github: "https://github.com/hashmessi/SmartAttend",
    },
  },
  {
    id: "08",
    slug: "puma-x",
    tier: "applied",
    name: "Puma-X",
    oneLiner: "Shoe recommendations based on how your feet work, not just your size.",
    problem:
      "Online shoe shopping relies on size charts and looks. It ignores arch type, pronation and what the shoe will actually be used for.",
    whatIBuilt:
      "Puma-X profiles a shopper's foot width, arch and pronation along with their activity and climate. It then ranks products with an explanation for each match.",
    outcomes: [
      "Biomechanical compatibility rules for width, arch and pronation",
      "Hybrid ranking that adds activity and climate context",
      "Explainable results, side-by-side comparison and usage telemetry",
    ],
    builtVsNext:
      "The rule-based filtering and ranking engine is implemented. Foot scanning is simulated in this version, and an ML-learned ranker is the planned next step.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Supabase"],
    links: {
      github: "https://github.com/hashmessi/puma-X",
    },
  },

  // ── 04. MORE BUILDS ───────────────────────────────────────────────────────
  {
    id: "09",
    slug: "dealclose",
    tier: "more",
    name: "DealClose",
    oneLiner:
      "Real estate deals go from property research to a signed agreement in one auditable flow, and a human approves every step.",
    problem:
      "Deal research, contract drafting, and negotiation review are fragmented across spreadsheets, emails, and manual document tools.",
    whatIBuilt:
      "An AI deal engine that pulls live property data and extracts offer terms, attaching a confidence score to every field. It sends those terms to a human for approval, then generates the agreement PDF and routes it for e-signature. Every step is logged.",
    outcomes: [
      "AI property data extraction with confidence scores per field",
      "Human authorization gate before PDF generation",
      "Automated e-signature routing with full audit logging",
    ],
    keyDecision:
      "The AI drafts and a person authorizes. A confidence score on every field shows the reviewer exactly where to look before signing off.",
    result: "About 28 seconds end to end, compared with an estimated 45 minutes by hand.",
    stack: ["Next.js", "TypeScript", "OpenRouter", "SerpApi", "Xano", "Foxit eSign"],
    links: {
      demo: "https://deal-close-plum.vercel.app/",
      github: "https://github.com/hashmessi/DealClose",
    },
  },
  {
    id: "10",
    slug: "fitbridge",
    tier: "more",
    name: "FitBridge",
    oneLiner: "An AI fitness coach that plans around your goals, your equipment and the food you actually eat.",
    problem: "Generic fitness apps provide static templates that ignore regional diets, equipment limits, and progress.",
    whatIBuilt:
      "A fitness platform that generates personalized workouts and regional, cuisine-aware meal plans, with a streaming AI coach and progress tracking. Behind it is a multi-model backend that uses OpenAI-compatible APIs and DeepSeek.",
    outcomes: [
      "Personalized workout splits and equipment-constrained adaptations",
      "Regional, cuisine-aware nutritional planning",
      "Real-time streaming SSE coach chat and streak tracking",
    ],
    stack: ["React", "TypeScript", "Vite", "Python", "FastAPI", "Supabase", "DeepSeek"],
    links: {
      demo: "https://fitbridge.vercel.app/",
      github: "https://github.com/hashmessi/fitbridge",
    },
  },
];
