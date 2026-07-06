import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Shield, Sparkles, Users } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { m } from "@/paraglide/messages";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$locale/quem-somos")({
  head: () => localizedHead({ path: "quem-somos", title: m.meta_quemsomos_title(), description: m.meta_quemsomos_desc() }),
  component: QuemSomos,
});

const timeline = [
  { year: "1998", title: m.ab_tl1_title, desc: m.ab_tl1_desc },
  { year: "2004", title: m.ab_tl2_title, desc: m.ab_tl2_desc },
  { year: "2010", title: m.ab_tl3_title, desc: m.ab_tl3_desc },
  { year: "2015", title: m.ab_tl4_title, desc: m.ab_tl4_desc },
  { year: "2019", title: m.ab_tl5_title, desc: m.ab_tl5_desc },
  { year: "2022", title: m.ab_tl6_title, desc: m.ab_tl6_desc },
  { year: "2026", title: m.ab_tl7_title, desc: m.ab_tl7_desc },
];

const values = [
  { icon: Rocket, title: m.ab_val1_title, desc: m.ab_val1_desc },
  { icon: Shield, title: m.ab_val2_title, desc: m.ab_val2_desc },
  { icon: Sparkles, title: m.ab_val3_title, desc: m.ab_val3_desc },
  { icon: Users, title: m.ab_val4_title, desc: m.ab_val4_desc },
];

const anos = new Date().getFullYear() - 1998;

const stats = [
  { v: String(anos), l: m.ab_stat1_l },
  { v: "1998", l: m.ab_stat2_l },
  { v: "5", l: m.ab_stat3_l },
  { v: "SLA", l: m.ab_stat4_l },
];

function QuemSomos() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, var(--glow), transparent 50%), radial-gradient(circle at 80% 60%, oklch(0.7 0.25 245 / 0.3), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{m.ab_hero_eyebrow()}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight max-w-5xl">
            {m.ab_hero_t1()} <span className="text-gradient">{m.ab_hero_accent()}</span>{m.ab_hero_t2()}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 lead text-muted-foreground measure">
            {m.ab_hero_p({ anos })}
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section ref={ref} className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow={m.ab_sh1_eyebrow()} title={m.ab_sh1_title()} />

          <div className="mt-20 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50" />
            <motion.div style={{ height: lineH }} className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-electric" />

            <div className="space-y-16">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                    <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{t.year}</div>
                    <h3 className="mt-3 font-display text-3xl tracking-tight">{t.title()}</h3>
                    <p className="mt-3 text-muted-foreground">{t.desc()}</p>
                  </div>
                  <div className="hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 size-4 -translate-x-1/2 rounded-full bg-background border-2 border-primary" style={{ boxShadow: "0 0 20px var(--glow)" }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow={m.ab_sh2_eyebrow()} title={m.ab_sh2_title()} />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-elev rounded-3xl p-8 hover:holo-border transition-all group relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 size-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--glow)", filter: "blur(60px)" }} />
                <div className="relative">
                  <div className="size-12 rounded-2xl glass grid place-items-center">
                    <v.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{v.title()}</h3>
                  <p className="mt-3 text-muted-foreground">{v.desc()}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="font-display text-5xl text-gradient">{s.v}</div>
                <div className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">{s.l()}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow={m.ab_sh3_eyebrow()} title={m.ab_sh3_title()} />
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {m.ab_phil_p()}
            </p>
            <ul className="mt-8 space-y-3 font-mono text-sm">
              {[m.ab_phil_list1(), m.ab_phil_list2(), m.ab_phil_list3(), m.ab_phil_list4()].map((x, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-primary" /> {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-3xl glass-elev holo-border" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-8">
                <div className="font-display text-2xl italic leading-snug">{m.ab_quote()}</div>
                <div className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{m.ab_quote_author()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner eyebrow="vamos?" title={m.ab_cta_title()} cta={m.ab_cta_cta()} />
    </>
  );
}
