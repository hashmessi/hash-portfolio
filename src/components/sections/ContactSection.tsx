"use client";

import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { CONTACT_CONTENT } from "@/data/projects";
import { TactileCard } from "@/components/core/TactileCard";
import { TactileButton } from "@/components/core/TactileButton";
import { MonoBadge } from "@/components/core/MonoBadge";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center">
      <TactileCard className="p-8 md:p-14 flex flex-col items-center gap-8">
        <MonoBadge variant="allow" dot>
          AVAILABILITY: OPEN FOR ROLES
        </MonoBadge>

        <h2 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-text">
          {CONTACT_CONTENT.heading}
        </h2>

        <p className="text-base sm:text-lg text-text-2 max-w-xl leading-relaxed">
          {CONTACT_CONTENT.subhead}
        </p>

        {/* Tactile CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <TactileButton
            size="lg"
            variant="primary"
            href={`mailto:${CONTACT_CONTENT.email}`}
            icon={<Mail className="w-4 h-4" />}
          >
            Email Hashvanth
          </TactileButton>

          <TactileButton
            size="lg"
            variant="secondary"
            href="https://github.com/hashmessi"
            external
            icon={<Github className="w-4 h-4" />}
          >
            GitHub
          </TactileButton>

          <TactileButton
            size="lg"
            variant="secondary"
            href="https://www.linkedin.com/in/hashvanth-m-u-29470725a/"
            external
            icon={<Linkedin className="w-4 h-4" />}
          >
            LinkedIn
          </TactileButton>
        </div>

        <div className="pt-6 border-t border-line w-full flex items-center justify-center">
          <span className="font-mono text-xs text-text-2">
            Direct dispatch: <code className="text-accent font-semibold">{CONTACT_CONTENT.email}</code>
          </span>
        </div>
      </TactileCard>
    </section>
  );
}
