import type { Project } from "@/data/projects";
import { TrustDial } from "./TrustDial";
import { FirewallGate } from "./FirewallGate";
import { PromiseSeal } from "./PromiseSeal";
import { BlastRadius } from "./BlastRadius";
import { DriftGuard } from "./DriftGuard";

/** The interactive demo for a project's `visual` key, or null (those get a typographic exhibit). */
export function demoFor(project: Pick<Project, "visual">) {
  switch (project.visual) {
    case "trust-dial":
      return <TrustDial />;
    case "action-gate":
      return <FirewallGate />;
    case "promise-seal":
      return <PromiseSeal />;
    case "blast-radius":
      return <BlastRadius />;
    case "drift-guard":
      return <DriftGuard />;
    default:
      return null;
  }
}
