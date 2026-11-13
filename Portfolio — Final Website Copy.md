# Portfolio — Final Website Copy

Nov 13, 2026 · @JK

## Panel verdict

The biggest fix is your positioning. Right now the portfolio says "I do everything". It should say "I build the trust layer for AI agents". Five of your eleven projects already make that case. The draft spreads it across ten domains, so a recruiter never sees the pattern.

**What's already strong**

- **Two external wins**, TrustPulse and ChainBreak. These are your best proof, so lead with them.
- **A rare technical thread.** ChainBreak, ChainBreak-Web3, PromiseLoop, Warden and DealClose all answer one question: how do you stop an AI agent from doing the wrong thing? Few junior engineers have a point of view on this, and founders are hiring for it right now.
- **Real systems choices.** You picked deterministic checks over LLM judgment, wrote a Rust inference engine, and built reversible deletes and hash-chained audits. These choices are what separate you from people who just wrap an API.

**What's costing you**

- **Too many identities.** "AI Systems Engineer · Product Builder · Full-Stack Developer" plus seven "core interests" reads as unfocused. Pick one lane and let the projects show your range.
- **Your role is never stated.** Hackathon wins and the Maruthuva repo (which sits under a different GitHub account) will make a recruiter ask: was this a team, and what did *you* build? Answer that before they ask.
- **Feature dumps.** Seven or eight noun bullets per project. A recruiter spends about 30 seconds per card. Three outcome bullets plus one **key decision** works better than eight features.
- **Hedged numbers.** "Reported benchmark" and "a stated 45-minute manual process" sound like you don't trust your own results. Either own the number with its test conditions or cut it.
- **Weak labels.** "Remarkable College Engineering Project" sounds self-awarded. Faculty Feedback Analyzer has no repo, and its "AI" is only a roadmap item. Both lower the average.

**The new structure**

| Tier | Projects | Card size | Change from the draft |
| --- | --- | --- | --- |
| Signature: Trust layer for AI | TrustPulse, ChainBreak (+ Web3), PromiseLoop, Warden-MCP | Large case study | Warden moves up; ChainBreak-Web3 folds into ChainBreak as an extension |
| Applied AI | Maruthuva TSL, SmartAttend, Puma-X | Medium card | Maruthuva leads this section as the human-impact story |
| More builds | DealClose, FitBridge | Compact card | DealClose framed around its trust pipeline |
| Cut or archive | Faculty Feedback Analyzer | GitHub only | Off the homepage until it has a repo and working AI |

In the copy below, anything in \[square brackets\] is a fact only you can fill in. Every claim comes from your draft. Nothing has been invented.

## Hero

**Eyebrow:** AI Systems Engineer

**Headline:** I build the trust layer for autonomous AI.

**Subhead:** AI agents can now browse, pay, delete data and sign deals. I build the systems that decide what they're *allowed* to do: runtime guardrails, payment gates and governed data operations, where deterministic code has the final say instead of a model's guess.

**Proof strip:** 1st Prize, AI Full-Stack Hackathon · Best Cybersecurity Solution, TLN Cybersecurity Challenge · 10 products built, 5 with live demos

**Buttons:** View selected work · GitHub · Contact

*Alternate headline, if you want to keep it broader:* Intelligent systems that can be trusted in production.

*Why this headline beats "Building Intelligent Systems. Engineering What Comes Next.":* Thousands of portfolios could use the old line. The new one makes a specific claim, and the first three cards prove it.

## Signature work: the trust layer for AI

**Section intro:** As AI moves from answering questions to taking actions, the hard problem changes. It's no longer "is the output good?" but "should this action be allowed?" These four systems are my answer.

---

### 01. TrustPulse

**Award label:** 🏆 Overall 1st Prize, AI Full-Stack Hackathon

**One-liner:** A live credibility score for claims, which updates as evidence and consensus change.

**Problem:** Misinformation moves faster than fact-checkers. A one-time "true/false" label goes stale as soon as new evidence or new sources appear.

**What I built:** TrustPulse scores a claim using AI evidence analysis, published fact-checks and community input together. The result is a Trust Score that keeps updating in real time instead of a fixed verdict.

- Four-axis Bayesian scoring that combines AI evidence, fact-check sources and community signals
- Gemini analysis grounded in live search, cross-checked against the Google Fact Check API
- Community votes, flags and evidence submissions, streamed in real time through Supabase

**Key decision:** I modeled credibility as a probability that moves with evidence, not a binary label. That way the score can explain *why* it changed.

**My role:** \[Team of N · I built X\]

**Stack:** Next.js 14 · TypeScript · Gemini 1.5 Flash · Google Fact Check API · Supabase · PostgreSQL · Vercel

**Links:** [Live demo](https://trust-pulse-kappa.vercel.app/) · [GitHub](https://github.com/hashmessi/TrustPulse-)

---

### 02. ChainBreak

**Award label:** 🛡️ Best Cybersecurity Solution, TLN Cybersecurity Challenge

**One-liner:** A runtime firewall for AI agents that blocks unsafe actions before they execute.

**Problem:** Agents now have access to databases, APIs and infrastructure. A single bad tool call, or a chain of harmless-looking steps, can leak data or trigger an operation nobody approved.

**What I built:** ChainBreak sits between the agent and its tools. It watches the agent's whole sequence of actions, checks each step against security rules, and returns a decision to ALLOW, BLOCK or HOLD the step for a human.

- Causal lineage tracking that follows sensitive data across multi-step action chains
- Deterministic security rules, with no LLM "judge" that an attacker could talk past
- An adversarial test suite plus trajectory replay to reproduce and audit every decision

**Key decision:** Enforcement is deterministic. A guardrail that an LLM can be argued out of is not a guardrail.

**Extension: ChainBreak-Web3.** I applied the same model to blockchain agents. Before a transaction is signed, it checks the recipient, asset, contract method, calldata and multi-step spending limits against what the user actually authorized. [GitHub](https://github.com/hashmessi/ChainBreak-Web3)

**My role:** \[Team of N · I built X\]

**Stack:** Python · FastAPI · React · custom policy engine

**Links:** [Live demo](https://chainbreak.onrender.com/) · [GitHub](https://github.com/hashmessi/ChainBreak)

---

### 03. PromiseLoop

**One-liner:** AI shopping agents can't take your money until they deliver what you approved.

**Problem:** An AI agent can authorize a payment, but authorization says nothing about whether the right product arrived at the agreed price.

**What I built:** PromiseLoop is an accountability layer between AI shopping agents and PayPal. It seals the buyer's approved intent into a tamper-evident Promise Receipt. Funds are captured only after deterministic checks confirm that the fulfillment matches the receipt.

- SHA-256-sealed, versioned Promise Receipts that bind product, SKU, amount and fulfillment terms
- A Promise Drift Engine that blocks PayPal capture when the evidence doesn't match
- Promise Replay audit timeline, webhook verification and protection against duplicate execution

**Key decision:** Code decides whether money moves, not a model. The LLM can shop, but it can't approve its own work.

**Stack:** React · TypeScript · Python · FastAPI · PostgreSQL · PayPal APIs

**Links:** [Live demo](https://promiseloop-web.onrender.com/) · [Demo video](https://youtu.be/NWzrT7E8OqI) · [GitHub](https://github.com/hashmessi/Paypal-DEV)

---

### 04. Warden-MCP

**One-liner:** Lets AI agents carry out data-deletion requests safely, with a human sign-off, an undo, and a tamper-evident audit trail.

**Problem:** An agent connected to company databases can wipe personal data across systems, with no preview, no approval step and no way back.

**What I built:** Warden is a Model Context Protocol (MCP) server. It finds a person's data across PostgreSQL and MongoDB and produces a blast-radius report showing what would be affected. It acts only after a human approves.

- Discovery across multiple systems, with a blast-radius impact report before anything runs
- A human approval gate, plus snapshots taken before execution so deletes and anonymization can be reversed
- SHA-256 hash-chained audit log that anyone can verify independently, plus an operations dashboard

**Key decision:** Every destructive action can be undone by design, because the snapshot is taken before the delete, not after something goes wrong.

**Stack:** Node.js · TypeScript · MCP · PostgreSQL · MongoDB · Next.js · OpenAI API

**Links:** [GitHub](https://github.com/hashmessi/Warden-MCP)

## Applied AI

**Section intro:** These projects take models off the benchmark page and put them in front of real people: patients, classrooms and shoppers.

---

### 05. Maruthuva TSL

**One-liner:** A two-way communication bridge between Deaf patients and doctors, built on Tamil Sign Language.

**Problem:** Deaf and non-speaking patients often can't describe their symptoms or understand urgent instructions in a clinic. Interpreters are rarely available when they're needed most.

**What I built:** Maruthuva TSL recognizes Tamil Sign Language from the patient and turns it into Tamil or English speech and text for the clinician. The doctor's spoken or typed reply comes back to the patient through an interactive sign-language avatar.

- Gesture recognition built on hand landmarks (MediaPipe), with medical-vocabulary workflows
- Tamil and English voice and text output through Sarvam AI and AI4Bharat
- Rule-based safety flows for critical medical exchanges

**Scope note:** This is an assistive communication tool, not a diagnostic system. It helps patients and clinicians understand each other and leaves every clinical decision to the clinician.

**My role:** \[Team project · I built X\]

**Stack:** Python · MediaPipe · Sarvam AI · AI4Bharat · JavaScript

**Links:** [GitHub](https://github.com/hashvanth21/MaruthuvaTSL)

---

### 06. SmartAttend

**Metric label:** \~1.24 s to mark a 57-student class

**One-liner:** Take one classroom photo, get the attendance register in about a second.

**Problem:** Roll call wastes lecture time, introduces manual errors, and is easy to game with proxy attendance.

**What I built:** SmartAttend detects and identifies every student in a classroom photo and writes a structured attendance record. Faculty get a portal, and heads of department get an analytics dashboard.

- SCRFD-10G face detection plus 512-dimensional ArcFace (ResNet-50) embeddings
- Consensus across multiple photos, so one blurry frame can't mark a student absent
- A Rust inference engine on ONNX Runtime, which runs offline on college hardware

**Key decision:** I wrote the inference path in Rust instead of Python, so the whole pipeline runs fast and offline on the college's own hardware, without depending on the cloud.

**Benchmark:** About 1.24 s end to end on a 57-student test set \[hardware: CPU/GPU model\].

**Stack:** Rust · Python · ONNX Runtime · OpenCV · FastAPI · React · SQLite

**Links:** [GitHub](https://github.com/hashmessi/SmartAttend)

---

### 07. Puma-X

**One-liner:** Shoe recommendations based on how your feet work, not just your size.

**Problem:** Online shoe shopping relies on size charts and looks. It ignores arch type, pronation and what the shoe will actually be used for.

**What I built:** Puma-X profiles a shopper's foot width, arch and pronation along with their activity and climate. It then ranks products with an explanation for each match.

- Biomechanical compatibility rules for width, arch and pronation
- Hybrid ranking that adds activity and climate context
- Explainable results, side-by-side comparison and usage telemetry

**Built vs. next:** The rule-based filtering and ranking engine is implemented. Foot scanning is simulated in this version, and an ML-learned ranker is the planned next step.

**Stack:** React · TypeScript · Node.js · Express · Supabase

**Links:** [GitHub](https://github.com/hashmessi/puma-X)

## More builds

**Section intro:** These are smaller products that show range across automation, personalization and full-stack delivery.

### 08. DealClose

**One-liner:** Real estate deals go from property research to a signed agreement in one auditable flow, and a human approves every step.

**What I built:** An AI deal engine that pulls live property data and extracts offer terms, attaching a confidence score to every field. It sends those terms to a human for approval, then generates the agreement PDF and routes it for e-signature. Every step is logged.

**Key decision:** The AI drafts and a person authorizes. A confidence score on every field shows the reviewer exactly where to look before signing off.

**Result:** About 28 seconds end to end, compared with an estimated 45 minutes by hand \[method: how this was measured\].

**Stack:** Next.js · TypeScript · OpenRouter · SerpApi · Xano · Foxit eSign

**Links:** [Live demo](https://deal-close-plum.vercel.app/) · [GitHub](https://github.com/hashmessi/DealClose)

### 09. FitBridge

**One-liner:** An AI fitness coach that plans around your goals, your equipment and the food you actually eat.

**What I built:** A fitness platform that generates personalized workouts and regional, cuisine-aware meal plans, with a streaming AI coach and progress tracking. Behind it is a multi-model backend that uses OpenAI-compatible APIs and DeepSeek.

**Stack:** React · TypeScript · Vite · Python · FastAPI · Supabase · DeepSeek

**Links:** [Live demo](https://fitbridge.vercel.app/) · [GitHub](https://github.com/hashmessi/fitbridge)

### Faculty Feedback Analyzer: take it off the homepage

The panel recommends cutting it for now. It has no public repo, its stack is HTML, CSS, JavaScript and Java, and the AI is listed only as a roadmap item. That puts it well below the rest of the portfolio, and a reviewer might ask about it in an interview. Bring it back once there's a repo and working AI analysis. Until then, at most list it in a one-line "Other work" footer.

## About and contact

**About heading:** How I build

**About copy:** I'm drawn to the point where AI stops being a demo and starts taking real actions. That's where the important engineering happens: deciding what a system is allowed to do, proving what it did, and making mistakes reversible. My working rule is that models can suggest, but code decides.

I work across the stack, from Rust inference engines and FastAPI services to Next.js products. Five of these products have live demos, so you can try them yourself rather than take my word for it.

**Focus areas** (these replace the seven "core interests"):

- AI agent security and runtime governance
- Agentic commerce and auditable automation
- Applied ML: computer vision and accessibility
- Full-stack product engineering

**Contact heading:** Building agents that need guardrails?

**Contact copy:** I'm looking for \[full-time roles / internships / founding-engineer roles\] at teams shipping AI into production. Let's talk.

**Buttons:** Email · GitHub · LinkedIn · Résumé

## Before you publish

There are six facts only you can supply. Each one closes a question a recruiter would otherwise ask.

- [ ] **Role and team size** for TrustPulse, ChainBreak and Maruthuva TSL. This matters most for Maruthuva, because its repo is under a different GitHub account.
- [ ] **SmartAttend hardware** behind the 1.24 s figure. If it's fast on a CPU, say so; that makes the number more impressive.
- [ ] **DealClose 45-minute baseline.** Say where it comes from, such as a timed manual run or an agent interview, or drop the comparison.
- [ ] **SmartAttend recognition.** If the college formally recognized it, name the award. If not, leave the label off, as this copy already does.
- [ ] **Live demos.** Check that every Render and Vercel link loads. Render free tier sleeps after inactivity, so expect a slow first load for ChainBreak and PromiseLoop, or upgrade before you send applications.
- [ ] **Contact line.** Choose the role type you're targeting.

On the visual direction in your draft (monochrome, editorial type, large cards), the panel agrees, with two additions. Give the four signature projects an architecture diagram each, showing where the ALLOW/BLOCK gate sits. Add the PromiseLoop demo video directly on the page. A recruiter who watches 60 seconds of it will remember you.
