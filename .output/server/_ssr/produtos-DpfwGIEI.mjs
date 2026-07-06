import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CTABanner } from "./CTABanner-vKGMPtDZ.mjs";
import { T as Target, b as ChartColumn, L as Link2, G as Gamepad2, g as ShoppingBag, h as Check, d as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
const mLeadsImg = "/assets/m-leads-WPIEg50v.png";
const mAnalyticsImg = "/assets/m-analitics-CCd8_Q16.png";
const mChainImg = "/assets/m-mchain-DRifDb5t.png";
const mGamingImg = "/assets/m-gaming-BwlavxME.png";
const mEcommerceImg = "/assets/m-ecommerce-DRLtBh1s.png";
const mLogoImg = "/assets/mlogo-BfmS5fdl.png";
const productImages = {
  leads: mLeadsImg,
  analytics: mAnalyticsImg,
  chain: mChainImg,
  gaming: mGamingImg,
  ecom: mEcommerceImg
};
const products = [{
  id: "leads",
  name: "M.Leads",
  icon: Target,
  tag: "Sales Intelligence",
  color: "oklch(0.65 0.28 295)",
  headline: "Captura, qualifica e converte — em tempo real.",
  desc: "Plataforma de lead intelligence com scoring alimentado por IA, integrações CRM nativas e attribution multi-touch.",
  features: ["Lead scoring em tempo real", "Integração HubSpot/Salesforce", "Attribution multi-touch", "Automação de outreach", "Dashboards comerciais"],
  stack: ["Python", "Kafka", "PostgreSQL", "OpenAI", "Webhooks"],
  metrics: [{
    k: "Lead-to-meeting",
    v: "+38%"
  }, {
    k: "Tempo qualificação",
    v: "−72%"
  }, {
    k: "Pipeline visibility",
    v: "100%"
  }]
}, {
  id: "analytics",
  name: "M.Analytics",
  icon: ChartColumn,
  tag: "Business Intelligence",
  color: "oklch(0.7 0.22 245)",
  headline: "O sistema nervoso da decisão executiva.",
  desc: "Dashboards executivos com modelagem preditiva, KPIs em tempo real e drill-down a qualquer dimensão do negócio.",
  features: ["Modelos preditivos no-code", "Conectores nativos a 50+ sources", "Embedded analytics", "Alertas inteligentes", "Self-service para C-level"],
  stack: ["Snowflake", "dbt", "React", "Apache Superset", "Python"],
  metrics: [{
    k: "Time-to-insight",
    v: "−85%"
  }, {
    k: "Adoção C-level",
    v: "94%"
  }, {
    k: "Custos BI",
    v: "−40%"
  }]
}, {
  id: "chain",
  name: "M.Chain+",
  icon: Link2,
  tag: "Supply Chain",
  color: "oklch(0.7 0.3 330)",
  headline: "Rastreabilidade total. Otimização automática.",
  desc: "Orquestração end-to-end da supply chain com rastreabilidade blockchain e otimização logística por reinforcement learning.",
  features: ["Track & trace blockchain", "Otimização de rotas RL", "Forecast de procura", "Compliance automático", "Marketplace de fornecedores"],
  stack: ["Hyperledger", "Go", "Kubernetes", "TimescaleDB", "GraphQL"],
  metrics: [{
    k: "Custos logística",
    v: "−22%"
  }, {
    k: "Lead time",
    v: "−35%"
  }, {
    k: "OTIF",
    v: "98.7%"
  }]
}, {
  id: "gaming",
  name: "M.Gaming",
  icon: Gamepad2,
  tag: "AR / VR · Gamification",
  color: "oklch(0.75 0.2 200)",
  headline: "Treinar, vender e formar — em mundos novos.",
  desc: "Engine proprietário para gamificação corporativa, training imersivo e experiências AR/VR para enterprise.",
  features: ["Editor visual de cenários", "Multi-plataforma (Vision Pro, Quest, Web)", "Analytics de performance", "Multiplayer corporativo", "LMS integrado"],
  stack: ["Unity", "WebXR", "Three.js", "Node", "Cassandra"],
  metrics: [{
    k: "Retenção formação",
    v: "4×"
  }, {
    k: "Custo por trainee",
    v: "−60%"
  }, {
    k: "Time-to-competency",
    v: "−50%"
  }]
}, {
  id: "ecom",
  name: "Ecommerce",
  icon: ShoppingBag,
  tag: "Commerce Suite",
  color: "oklch(0.7 0.25 60)",
  headline: "Comércio headless. Conversão sem fricção.",
  desc: "Plataforma headless de comércio com checkout otimizado, gestão omnichannel e analytics de conversão integrados.",
  features: ["Checkout one-page", "PIM multi-marketplace", "A/B testing nativo", "PWA & offline-first", "Pagamentos globais"],
  stack: ["Next.js", "Stripe", "Algolia", "GraphQL", "Edge functions"],
  metrics: [{
    k: "Conversão",
    v: "+3.2×"
  }, {
    k: "LCP",
    v: "<1.2s"
  }, {
    k: "Cart abandonment",
    v: "−45%"
  }]
}];
function Produtos() {
  const [active, setActive] = reactExports.useState(null);
  const [pinned, setPinned] = reactExports.useState(0);
  const expandedIdx = active ?? pinned;
  const sel = products[expandedIdx];
  const accent = sel.color;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative pt-40 pb-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "/ Produtos Proprietários" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
        opacity: 0,
        y: 30
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.1
      }, className: "mt-6 font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] tracking-tight max-w-5xl", children: [
        "Um sistema orbital de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "tecnologia proprietária" }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-12 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square max-w-[600px] w-full mx-auto", children: [
        [0.55, 0.78, 1].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-full border border-border/40", style: {
          inset: `${(1 - s) * 50}%`,
          borderStyle: i === 1 ? "dashed" : "solid"
        } }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full glass-elev grid place-items-center holo-border overflow-hidden dark:!bg-white dark:!border-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full pointer-events-none dark:bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.85)_60%,rgba(255,255,255,0.6)_100%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mLogoImg, alt: "Moonlight", className: "relative size-20 object-contain opacity-100", style: {
            filter: "none"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full pointer-events-none", style: {
            boxShadow: `0 0 60px ${accent}`,
            transition: "box-shadow 600ms"
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
          rotate: 360
        }, transition: {
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }, className: "absolute inset-0", children: products.map((p, i) => {
          const angle = i / products.length * Math.PI * 2;
          const r = 47;
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          const isActive = i === expandedIdx;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.button, { "data-magnetic": true, onMouseEnter: () => setActive(i), onMouseLeave: () => setActive(null), onFocus: () => setActive(i), onBlur: () => setActive(null), onClick: () => setPinned(i), className: "absolute -translate-x-1/2 -translate-y-1/2", style: {
            left: `${x}%`,
            top: `${y}%`
          }, whileHover: {
            scale: 1.15
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            rotate: -360
          }, transition: {
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }, className: `size-20 md:size-24 rounded-2xl glass grid place-items-center transition-all overflow-hidden p-1 dark:!bg-white/90 dark:hover:!bg-white dark:!border-white/70 ${isActive ? "holo-border" : ""}`, style: {
            boxShadow: isActive ? `0 0 40px ${p.color}, inset 0 1px 0 oklch(1 0 0 / 0.1)` : void 0
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: productImages[p.id], alt: p.name, className: "w-full h-full object-contain" }) }) }, p.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-h-[500px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 40,
        filter: "blur(10px)"
      }, animate: {
        opacity: 1,
        x: 0,
        filter: "blur(0)"
      }, exit: {
        opacity: 0,
        x: -20,
        filter: "blur(10px)"
      }, transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }, className: "glass-elev rounded-3xl p-8 md:p-10 holo-border relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 size-64 rounded-full pointer-events-none", style: {
          background: sel.color,
          opacity: 0.2,
          filter: "blur(60px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
          String(expandedIdx + 1).padStart(2, "0"),
          " / ",
          String(products.length).padStart(2, "0"),
          " · ",
          sel.tag
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-4xl md:text-5xl tracking-tight", children: sel.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg text-primary", children: sel.headline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: sel.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 glass rounded-2xl p-4 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 scanline opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-end gap-1.5 h-24", children: Array.from({
            length: 24
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            height: 0
          }, animate: {
            height: `${20 + Math.sin(i * 0.6 + expandedIdx) * 30 + Math.random() * 40}%`
          }, transition: {
            delay: i * 0.02,
            duration: 0.6
          }, className: "flex-1 rounded-sm", style: {
            background: `linear-gradient(to top, ${sel.color}, transparent)`
          } }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-3 gap-3", children: sel.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-lg p-3 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-gradient", children: m.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground", children: m.k })
        ] }, m.k)) })
      ] }, sel.id) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 30
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -10
    }, transition: {
      duration: 0.5
    }, className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-elev rounded-3xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4", children: "Capabilities" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: sel.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4 text-primary mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-elev rounded-3xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4", children: "Technology stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: sel.stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md glass px-3 py-1.5 text-xs font-mono", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4", children: "Business benefits" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Implementação chave-na-mão em 6–12 semanas. Hospedagem em cloud privada ou managed por nós. SLA 99.9% incluído." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "data-magnetic": true, className: "mt-6 inline-flex items-center gap-2 text-sm text-primary group", children: [
          "Pedir demo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })
        ] })
      ] })
    ] }, sel.id + "-detail") }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, { eyebrow: "demo", title: "Vê os produtos a funcionar em ambiente real.", cta: "Agendar demo" })
  ] });
}
export {
  Produtos as component
};
