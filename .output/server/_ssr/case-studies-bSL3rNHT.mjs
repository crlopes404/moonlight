import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as CTABanner } from "./CTABanner-vKGMPtDZ.mjs";
import { m as motion, e as useInView } from "../_libs/framer-motion.mjs";
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
import "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const stats = [{
  v: 28,
  l: "Anos de operação"
}, {
  v: 1998,
  l: "Fundação"
}, {
  v: 5,
  l: "Áreas de serviço"
}, {
  v: 99.9,
  suffix: "%",
  l: "SLA de suporte"
}];
const cases = [{
  client: "FCA / Fiat Chrysler",
  sector: "Automóvel",
  year: "Leads Management",
  challenge: "Captar, distribuir e acompanhar leads comerciais à escala de uma rede automóvel multimarca.",
  strategy: "Plataforma centralizada de leads management integrada com a rede de concessionários e canais digitais.",
  solution: "Sistema de captação, qualificação e encaminhamento de leads, com dashboards de acompanhamento comercial.",
  stack: ["Lead Management", "Integrações", "Dashboards", "Web"],
  kpis: [{
    value: "360°",
    label: "Visão de leads"
  }, {
    value: "Multi",
    suffix: "-marca",
    label: "Rede de dealers"
  }, {
    value: "BI",
    label: "Acompanhamento"
  }],
  note: "Gestão de leads para uma das maiores redes automóveis do mundo."
}, {
  client: "Homologacoes.net",
  sector: "Plataforma digital",
  year: "Web Platform",
  challenge: "Digitalizar e centralizar processos de homologação num portal acessível e fiável.",
  strategy: "Plataforma web chave-na-mão, com gestão documental e fluxos de processo online.",
  solution: "Portal aplicacional desenvolvido à medida, com integrações e suporte aplicacional contínuo.",
  stack: ["Web Platform", "Sistemas custom", "Integrações", "Suporte SLA"],
  kpis: [{
    value: "100%",
    label: "Processo online"
  }, {
    value: "Self",
    suffix: "-service",
    label: "Acesso digital"
  }, {
    value: "SLA",
    label: "Suporte contínuo"
  }],
  note: "Plataforma digital chave-na-mão construída e mantida pela Moonlight."
}, {
  client: "Rubisgás",
  sector: "Energia",
  year: "Business Systems",
  challenge: "Suportar a operação de distribuição de energia com sistemas de negócio robustos.",
  strategy: "Desenvolvimento e integração de sistemas aplicacionais alinhados com os processos do negócio.",
  solution: "Sistemas à medida com integração de dados e suporte SLA para operação crítica.",
  stack: ["Sistemas custom", "Integração de dados", "BI", "Suporte SLA"],
  kpis: [{
    value: "B2B",
    label: "Operação crítica"
  }, {
    value: "Dados",
    label: "Integração"
  }, {
    value: "SLA",
    label: "Suporte"
  }],
  note: "Sistemas de negócio para um operador de referência no setor energético."
}];
function CasesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-40 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "/ Case Studies" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1
      }, className: "mt-6 font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Portfólio" }),
        " de inovação digital."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { ...s }, s.l)) })
    ] }) }),
    cases.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudy, { c, index: i }, c.client)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, { eyebrow: "próximo", title: "O teu projeto pode ser o próximo aqui.", cta: "Falar connosco" })
  ] });
}
function Counter({
  v,
  suffix,
  prefix,
  l
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, {
    once: true
  });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setN(v * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, v]);
  const f = v % 1 === 0 ? Math.round(n).toString() : n.toFixed(2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "glass rounded-2xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-4xl md:text-5xl", children: [
      prefix,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: f }),
      suffix
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground", children: l })
  ] });
}
function CaseStudy({
  c,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 40
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true,
    margin: "-100px"
  }, className: "glass-elev rounded-3xl p-8 md:p-12 holo-border relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 size-96 rounded-full pointer-events-none", style: {
      background: "var(--glow)",
      filter: "blur(80px)",
      opacity: 0.4
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: String(index + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.sector }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1 rounded-full bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl md:text-6xl tracking-tight", children: c.client }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Challenge", body: c.challenge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Strategy", body: c.strategy }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { label: "Solution", body: c.solution })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4", children: "Technology stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: c.stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { whileHover: {
            y: -3
          }, className: "rounded-md glass px-3 py-1.5 text-xs font-mono", children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3", children: "Timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-1 rounded-full bg-border/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            width: 0
          }, whileInView: {
            width: "100%"
          }, viewport: {
            once: true
          }, transition: {
            duration: 1.4
          }, className: "absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-electric" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-[10px] font-mono text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discovery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Design" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Build" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Scale" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: c.kpis.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-xl p-5 flex items-baseline justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl", children: [
            k.prefix,
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: k.value }),
            k.suffix
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: k.label })
        ] }, k.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 border-l-2 border-primary pl-6 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl md:text-2xl leading-snug", children: c.note }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: c.client }),
          " · Projeto Moonlight"
        ] })
      ] })
    ] })
  ] }) }) });
}
function Block({
  label,
  body
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-3", children: [
      "/ ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: body })
  ] });
}
export {
  CasesPage as component
};
