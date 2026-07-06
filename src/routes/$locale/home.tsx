import { createFileRoute, Link } from "@tanstack/react-router";
import { getLocale } from "@/paraglide/runtime";
import { m } from "@/paraglide/messages";
import { localizedHead } from "@/lib/seo";
import { motion } from "framer-motion";
import { ArrowRight, Code2, BarChart3, Briefcase, Boxes, Headphones, Database, Cpu } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTABanner } from "@/components/CTABanner";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/$locale/home")({
  head: () => localizedHead({ path: "home", title: m.meta_home_title(), description: m.meta_home_desc() }),
  component: Home,
});

const servicesPreview = [
  { icon: Code2, label: m.home_service_dev },
  { icon: BarChart3, label: m.home_service_bi },
  { icon: Briefcase, label: m.home_service_consulting },
  { icon: Boxes, label: m.home_service_iot },
  { icon: Headphones, label: m.home_service_sla },
];

const productPillars = [
  { icon: Database, name: m.home_pillar_data_name, tag: m.home_pillar_data_tag },
  { icon: BarChart3, name: m.home_pillar_bi_name, tag: m.home_pillar_bi_tag },
  { icon: Cpu, name: m.home_pillar_dec_name, tag: m.home_pillar_dec_tag },
];

const casesPreview = [
  { client: "FCA / Fiat Chrysler", sector: m.home_case_1_sector, kpi: m.home_case_1_kpi },
  { client: "Homologacoes.net", sector: m.home_case_2_sector, kpi: m.home_case_2_kpi },
  { client: "Rubisgás", sector: m.home_case_3_sector, kpi: m.home_case_3_kpi },
];

function Home() {
  const anos = new Date().getFullYear() - 1998;
  return (
    <>
      <Hero />

      {/* Company Intro Preview */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow={m.home_about_eyebrow()} title={m.home_about_title({ anos })} />
            <p className="mt-6 lead text-muted-foreground measure">
              {m.home_about_p_1()} <span className="text-foreground font-medium">{m.home_about_company()}</span> {m.home_about_p_2()} <span className="text-foreground font-medium">B.Analytics</span> {m.home_about_p_3()}
            </p>
            <div className="mt-8"><LearnMore to="/$locale/quem-somos">{m.home_learn_history()}</LearnMore></div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full glass-elev holo-border" />
            <div className="absolute inset-8 rounded-full border border-border/40 animate-[orbit-spin_30s_linear_infinite]" />
            <div className="absolute inset-16 rounded-full border border-dashed border-border/40 animate-[orbit-counter_40s_linear_infinite]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="font-display text-7xl text-gradient">{anos}</div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">{m.home_years_label()}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow={m.home_services_eyebrow()} title={m.home_services_title()} subtitle={m.home_services_subtitle()} />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {servicesPreview.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <TiltCard className="glass rounded-2xl p-6 hover:holo-border transition-all group h-full">
                  <div style={{ transform: "translateZ(30px)" }}>
                    <s.icon className="size-6 text-primary group-hover:scale-110 transition-transform" />
                    <div className="mt-4 font-display text-sm leading-tight">{s.label()}</div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
          <div className="mt-10"><LearnMore to="/$locale/servicos">{m.home_learn_services()}</LearnMore></div>
        </div>
      </section>

      {/* Product Spotlight — B.Analytics */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow={m.home_product_eyebrow()}
            title="B.Analytics"
            subtitle={m.home_product_subtitle()}
          />
          <div className="mt-16 grid sm:grid-cols-3 gap-4">
            {productPillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <TiltCard className="relative glass-elev rounded-2xl p-7 group overflow-hidden h-full">
                  <div className="absolute -top-10 -right-10 size-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "var(--glow)", filter: "blur(40px)" }} />
                  <div style={{ transform: "translateZ(40px)" }}>
                    <div className="size-12 rounded-xl glass grid place-items-center relative group-hover:scale-110 transition-transform">
                      <p.icon className="size-6 text-primary" />
                    </div>
                    <div className="mt-5 font-display text-xl relative">{p.name()}</div>
                    <div className="mt-2 text-sm text-muted-foreground relative">{p.tag()}</div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
          <div className="mt-10"><LearnMore to="/$locale/produtos">{m.home_learn_product()}</LearnMore></div>
        </div>
      </section>

      {/* Cases Preview */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow={m.home_cases_eyebrow()} title={m.home_cases_title()} subtitle={m.home_cases_subtitle()} />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {casesPreview.map((c, i) => (
              <motion.div
                key={c.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-elev rounded-3xl p-8 group relative overflow-hidden"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{c.sector()}</div>
                <div className="mt-4 font-display text-2xl">{c.client}</div>
                <div className="mt-6 font-display text-2xl text-gradient">{c.kpi()}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10"><LearnMore to="/$locale/case-studies">{m.home_learn_cases()}</LearnMore></div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-sm">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="eyebrow">{m.home_clients_eyebrow()}</div>
          <p className="mt-4 text-muted-foreground measure mx-auto">
            {m.home_clients_p()}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {["BMW", "Volkswagen", "Stellantis", "Peugeot", "Audi", "Fiat Chrysler", "Rubisgás"].map((c) => (
              <span key={c} className="font-display text-xl md:text-2xl tracking-tight text-foreground/55 hover:text-foreground transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function LearnMore({ to, children }: { to: string; children: React.ReactNode }) {
  const locale = getLocale();
  return (
    <Link to={to} params={{ locale }} data-magnetic className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-primary group">
      {children}
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
