import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, BarChart3, Briefcase, Boxes, Headphones, ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { m } from "@/paraglide/messages";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$locale/servicos")({
  head: () => localizedHead({ path: "servicos", title: m.meta_servicos_title(), description: m.meta_servicos_desc() }),
  component: Servicos,
});

const services = [
  {
    icon: Code2, title: m.svc1_title, n: "01",
    desc: m.svc1_desc,
    tech: ["Mobile híbrido", "SaaS", "Sistemas custom", "React", "Node", "Cloud"],
    process: ["Discovery", "Architecture", "Build", "Ship", "Iterate"],
    benefits: [m.svc1_ben1, m.svc1_ben2, m.svc1_ben3],
    cases: m.svc1_cases,
  },
  {
    icon: BarChart3, title: m.svc2_title, n: "02",
    desc: m.svc2_desc,
    tech: ["Analytics", "Lead systems", "Contact center", "B.Analytics", "Dashboards"],
    process: ["Audit", "Data modeling", "Dashboards", "Lead ops", "Adoption"],
    benefits: [m.svc2_ben1, m.svc2_ben2, m.svc2_ben3],
    cases: m.svc2_cases,
  },
  {
    icon: Briefcase, title: m.svc3_title, n: "03",
    desc: m.svc3_desc,
    tech: ["Arquitetura", "Auditorias", "TaaS", "Cloud", "Segurança"],
    process: ["Diagnóstico", "Roadmap", "Auditoria", "Execução", "Handover"],
    benefits: [m.svc3_ben1, m.svc3_ben2, m.svc3_ben3],
    cases: m.svc3_cases,
  },
  {
    icon: Boxes, title: m.svc4_title, n: "04",
    desc: m.svc4_desc,
    tech: ["IoT", "Edge", "AR", "VR", "WebXR", "Unity"],
    process: ["PoC", "Spec", "Build", "Integrar", "Operar"],
    benefits: [m.svc4_ben1, m.svc4_ben2, m.svc4_ben3],
    cases: m.svc4_cases,
  },
  {
    icon: Headphones, title: m.svc5_title, n: "05",
    desc: m.svc5_desc,
    tech: ["Help desk", "SLA", "Monitorização", "Manutenção", "On-call"],
    process: ["Onboarding", "Triagem", "Resolução", "SLA", "Melhoria"],
    benefits: [m.svc5_ben1, m.svc5_ben2, m.svc5_ben3],
    cases: m.svc5_cases,
  },
];

function Servicos() {
  return (
    <>
      {/* Hero with network */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{m.svc_hero_eyebrow()}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight max-w-5xl">
            {m.svc_hero_t1()} <span className="text-gradient">{m.svc_hero_accent()}</span>.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 lead text-muted-foreground measure">
            {m.svc_hero_p()}
          </motion.p>
        </div>
      </section>

      {/* Service panels */}
      {services.map((s, i) => (
        <ServicePanel key={s.n} {...s} reverse={i % 2 === 1} />
      ))}

      <CTABanner eyebrow="brief" title={m.svc_cta_title()} cta={m.svc_cta_cta()} />
    </>
  );
}

function ServicePanel({ icon: Icon, title, n, desc, tech, process, benefits, cases, reverse }: any) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-elev rounded-3xl p-8 md:p-12 holo-border relative overflow-hidden"
        >
          <div className={`absolute size-96 rounded-full pointer-events-none ${reverse ? "-top-20 -left-20" : "-top-20 -right-20"}`} style={{ background: "var(--glow)", filter: "blur(100px)", opacity: 0.4 }} />

          <div className={`relative grid lg:grid-cols-[1fr_1.2fr] gap-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{n} · {m.svc_lbl_service()}</div>
              <div className="mt-4 inline-flex size-16 rounded-2xl glass items-center justify-center">
                <Icon className="size-7 text-primary" />
              </div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-tight">{title()}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{desc()}</p>

              <div className="mt-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t: string) => (
                    <span key={t} className="rounded-md glass px-3 py-1.5 text-xs font-mono">{t}</span>
                  ))}
                </div>
              </div>

              <button data-magnetic className="mt-8 inline-flex items-center gap-2 text-sm text-primary group">
                {m.svc_discuss()} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">Process flow</div>
                <div className="grid grid-cols-5 gap-2">
                  {process.map((p: string, idx: number) => (
                    <div key={p} className="relative">
                      <div className="glass rounded-lg p-3 text-center">
                        <div className="font-mono text-[10px] text-primary">{String(idx + 1).padStart(2, "0")}</div>
                        <div className="mt-1 text-[11px] font-medium">{p}</div>
                      </div>
                      {idx < process.length - 1 && <div className="absolute top-1/2 -right-1 w-2 h-px bg-primary/50" />}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">{m.svc_lbl_benefits()}</div>
                <ul className="space-y-2">
                  {benefits.map((b: () => string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="size-1.5 mt-2 rounded-full bg-primary shrink-0" />
                      <span>{b()}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{m.svc_lbl_cases()}</div>
                <p className="text-sm text-muted-foreground">{cases()}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
