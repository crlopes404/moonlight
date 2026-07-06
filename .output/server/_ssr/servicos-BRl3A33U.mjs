import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CTABanner } from "./CTABanner-vKGMPtDZ.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as CodeXml, b as ChartColumn, B as Briefcase, c as Boxes, H as Headphones, d as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const services = [{
  icon: CodeXml,
  title: "Software Development",
  n: "01",
  desc: "Aplicações móveis híbridas, plataformas SaaS e sistemas à medida com arquiteturas escaláveis e DevOps moderno.",
  tech: ["Mobile híbrido", "SaaS", "Sistemas custom", "React", "Node", "Cloud"],
  process: ["Discovery", "Architecture", "Build", "Ship", "Iterate"],
  benefits: ["Apps híbridas multi-plataforma", "Plataformas SaaS multi-tenant", "Sistemas à medida do negócio"],
  cases: "ERPs, portais, super-apps, plataformas SaaS, sistemas internos"
}, {
  icon: ChartColumn,
  title: "BI & Marketing",
  n: "02",
  desc: "Analytics, sistemas de geração e gestão de leads e operações de contact center — dados que convertem.",
  tech: ["Analytics", "Lead systems", "Contact center", "B.Analytics", "Dashboards"],
  process: ["Audit", "Data modeling", "Dashboards", "Lead ops", "Adoption"],
  benefits: ["Analytics e KPIs em tempo real", "Sistemas de gestão de leads", "Contact center integrado"],
  cases: "Lead management, reporting executivo, campanhas data-driven"
}, {
  icon: Briefcase,
  title: "IT Consulting",
  n: "03",
  desc: "Arquitetura de sistemas, auditorias técnicas e equipas dedicadas em modelo TaaS (Team as a Service).",
  tech: ["Arquitetura", "Auditorias", "TaaS", "Cloud", "Segurança"],
  process: ["Diagnóstico", "Roadmap", "Auditoria", "Execução", "Handover"],
  benefits: ["Arquitetura empresarial sólida", "Auditorias técnicas e de segurança", "Equipas TaaS dedicadas"],
  cases: "Migração cloud, modernização legacy, reforço de equipas"
}, {
  icon: Boxes,
  title: "IoT / AR / VR",
  n: "04",
  desc: "Dispositivos conectados, edge computing e experiências imersivas de realidade aumentada e virtual.",
  tech: ["IoT", "Edge", "AR", "VR", "WebXR", "Unity"],
  process: ["PoC", "Spec", "Build", "Integrar", "Operar"],
  benefits: ["Telemetria e dispositivos conectados", "Experiências AR/VR enterprise", "Visualização 3D e simulação"],
  cases: "Indústria 4.0, formação imersiva, smart devices"
}, {
  icon: Headphones,
  title: "Suporte",
  n: "05",
  desc: "Help desk e suporte aplicacional com acordos de nível de serviço (SLA) e monitorização contínua.",
  tech: ["Help desk", "SLA", "Monitorização", "Manutenção", "On-call"],
  process: ["Onboarding", "Triagem", "Resolução", "SLA", "Melhoria"],
  benefits: ["Help desk multi-canal", "SLA garantido e mensurável", "Manutenção evolutiva contínua"],
  cases: "Suporte aplicacional, manutenção de plataformas, operação 24/7"
}];
function Servicos() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-40 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "/ Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "mt-6 font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight max-w-5xl", children: [
          "Engenharia que ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "resolve" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.4
        }, className: "mt-8 lead text-muted-foreground measure", children: "Cinco disciplinas integradas, ao serviço de empresas que recusam soluções genéricas." })
      ] })
    ] }),
    services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServicePanel, { ...s, reverse: i % 2 === 1 }, s.title)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, { eyebrow: "brief", title: "Conta-nos o teu desafio. Voltamos com arquitetura.", cta: "Pedir consulta" })
  ] });
}
function ServicePanel({
  icon: Icon,
  title,
  n,
  desc,
  tech,
  process,
  benefits,
  cases,
  reverse
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 30
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-100px"
  }, className: "glass-elev rounded-3xl p-8 md:p-12 holo-border relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute size-96 rounded-full pointer-events-none ${reverse ? "-top-20 -left-20" : "-top-20 -right-20"}`, style: {
      background: "var(--glow)",
      filter: "blur(100px)",
      opacity: 0.4
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative grid lg:grid-cols-[1fr_1.2fr] gap-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: [
          n,
          " · serviço"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 inline-flex size-16 rounded-2xl glass items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-7 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl md:text-5xl tracking-tight", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3", children: "Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md glass px-3 py-1.5 text-xs font-mono", children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "data-magnetic": true, className: "mt-8 inline-flex items-center gap-2 text-sm text-primary group", children: [
          "Discutir projeto ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4", children: "Process flow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: process.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-lg p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-primary", children: String(idx + 1).padStart(2, "0") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] font-medium", children: p })
            ] }),
            idx < process.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -right-1 w-2 h-px bg-primary/50" })
          ] }, p)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3", children: "Benefícios" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 mt-2 rounded-full bg-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
          ] }, b)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2", children: "Casos típicos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: cases })
        ] })
      ] })
    ] })
  ] }) }) });
}
export {
  Servicos as component
};
