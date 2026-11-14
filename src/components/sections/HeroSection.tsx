import { HERO_CONTENT } from "@/data/projects";
import { Wordmark } from "@/components/editorial/Wordmark";
import { TextLink } from "@/components/editorial/TextLink";
import { HeroStage } from "@/components/visuals/HeroStage";

/** design.md "Billboard and editorial opening": wordmark, a short serif proposition, then the work. */
export default function HeroSection() {
  return (
    <section className="page pt-s7 flex flex-col gap-s8">
      <Wordmark />
      <div className="grid gap-s7 md:grid-cols-[minmax(0,1fr)_minmax(0,440px)] md:items-center md:gap-s5">
        <div className="flex flex-col gap-s5 md:gap-s6">
          <h1 className="type-statement max-w-[660px]">{HERO_CONTENT.headline}</h1>
          <p className="type-reading max-w-[620px] text-ink-2">{HERO_CONTENT.subhead}</p>
          <TextLink href="#signature-work" className="type-body w-fit">
            View selected work
          </TextLink>
        </div>
        <HeroStage />
      </div>
    </section>
  );
}
