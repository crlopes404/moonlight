import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate, C as ClientOnly, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader } from "./SectionHeader-BDdHnlrv.mjs";
import { C as CTABanner } from "./CTABanner-vKGMPtDZ.mjs";
import { C as CodeXml, b as ChartColumn, B as Briefcase, c as Boxes, H as Headphones, D as Database, i as Cpu, f as Sparkles, d as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion, b as useReducedMotion, c as useMotionValue, d as useSpring, a as useTransform } from "../_libs/framer-motion.mjs";
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
function MagneticButton({ children, variant = "primary", onClick, className = "" }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const rx = useTransform(sy, [-30, 30], [10, -10]);
  const ry = useTransform(sx, [-30, 30], [-10, 10]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.button,
    {
      ref,
      "data-magnetic": true,
      onClick,
      onMouseMove: (e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.35);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      },
      onMouseLeave: () => {
        x.set(0);
        y.set(0);
      },
      style: { x: sx, y: sy, rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" },
      className: `btn-magnetic ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { transform: "translateZ(20px)" }, children })
    }
  );
}
function Hero() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid bg-grid-fade opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: null }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent", style: {
      animation: "scan 8s linear infinite"
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-20 left-6 z-30 hidden lg:block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 bg-primary rounded-full" }),
        " SYS · Moonlight OS v2026"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 opacity-60", children: "LAT 38.7223 · LON -9.1393" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-20 right-6 z-30 hidden lg:block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70 text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "STATUS · ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "ONLINE" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 opacity-60", children: "UPTIME 99.99%" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-30 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pt-28 pb-28 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.2,
          duration: 0.8
        }, className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Moonlight Comunicação Global · Est. 1998" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-primary" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.4,
          duration: 1
        }, className: "mt-7 font-display font-semibold text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient", children: "O Futuro" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient-aurora", children: "Não Espera" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.8,
          duration: 1
        }, className: "mt-7 max-w-xl lead text-foreground/80 dark:text-muted-foreground text-balance mx-auto lg:mx-0", children: [
          "Software à medida, Business Intelligence e consultoria IT — desde",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "1998" }),
          " a transformar empresas do setor automóvel e enterprise com tecnologia que",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "antecipa o amanhã" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1,
          duration: 0.8
        }, className: "mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(MagneticButton, { variant: "primary", onClick: () => navigate({
            to: "/contacto"
          }), children: [
            "Quero ser contactado ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { variant: "ghost", onClick: () => navigate({
            to: "/produtos"
          }), children: "Conhecer o B.Analytics" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 1.2,
        duration: 0.8
      }, className: "absolute right-0 top-1/2 mt-20 w-[210px] glass-elev rounded-2xl p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-display text-lg leading-snug", children: [
          "A tecnologia",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "é a nossa ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "órbita" }),
          "."
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 1.4,
      duration: 1
    }, className: "absolute bottom-10 inset-x-0 z-30 flex flex-wrap items-center justify-center gap-3 px-6", children: ["Desde 1998", "Software à medida", "B.Analytics", "Suporte SLA"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 glass rounded-full text-[11px] font-mono uppercase tracking-wider text-muted-foreground", children: t }, t)) })
  ] });
}
function TiltCard({
  children,
  className = "",
  max = 6
}) {
  const ref = reactExports.useRef(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 300, damping: 30 });
  const sy = useSpring(my, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  if (reduce) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: (e) => {
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      },
      onMouseLeave: () => {
        mx.set(0.5);
        my.set(0.5);
      },
      style: { rotateX, rotateY, transformStyle: "preserve-3d", willChange: "transform" },
      className,
      children
    }
  );
}
const servicesPreview = [{
  icon: CodeXml,
  title: "Software Development"
}, {
  icon: ChartColumn,
  title: "BI & Marketing"
}, {
  icon: Briefcase,
  title: "IT Consulting"
}, {
  icon: Boxes,
  title: "IoT / AR / VR"
}, {
  icon: Headphones,
  title: "Suporte SLA"
}];
const productPillars = [{
  icon: Database,
  name: "Data Integration",
  tag: "Fontes unificadas em tempo real"
}, {
  icon: ChartColumn,
  name: "BI Dashboards",
  tag: "Visualização e KPIs executivos"
}, {
  icon: Cpu,
  name: "Decision Systems",
  tag: "Apoio à decisão orientado a dados"
}];
const casesPreview = [{
  client: "FCA / Fiat Chrysler",
  sector: "Automotive",
  kpi: "Leads Management"
}, {
  client: "Homologacoes.net",
  sector: "Plataforma digital",
  kpi: "Plataforma chave-na-mão"
}, {
  client: "Rubisgás",
  sector: "Energia",
  kpi: "Sistemas de negócio"
}];
function Home() {
  const anos = (/* @__PURE__ */ new Date()).getFullYear() - 1998;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Quem Somos", title: `${anos} anos a desenhar o amanhã.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 lead text-muted-foreground measure", children: [
          "Fundada em 1998, a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Moonlight Comunicação Global" }),
          " é uma software house portuguesa focada em desenvolvimento à medida, Business Intelligence e transformação digital. Construímos sistemas, plataformas e o produto próprio ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "B.Analytics" }),
          "para empresas que recusam esperar pelo futuro."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnMore, { to: "/quem-somos", children: "Conhecer a história" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full glass-elev holo-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-8 rounded-full border border-border/40 animate-[orbit-spin_30s_linear_infinite]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full border border-dashed border-border/40 animate-[orbit-counter_40s_linear_infinite]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl text-gradient", children: anos }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2", children: "anos · 1998–2026" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Serviços", title: "Engenharia transversal.", subtitle: "Cinco disciplinas, uma filosofia: do código à operação." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: servicesPreview.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.06
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TiltCard, { className: "glass rounded-2xl p-6 hover:holo-border transition-all group h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        transform: "translateZ(30px)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-6 text-primary group-hover:scale-110 transition-transform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-sm leading-tight", children: s.title })
      ] }) }) }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnMore, { to: "/servicos", children: "Explorar serviços" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Produto Proprietário", title: "B.Analytics", subtitle: "O nosso produto de dados: integração de fontes, dashboards de BI e sistemas de apoio à decisão — numa só plataforma." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-3 gap-4", children: productPillars.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TiltCard, { className: "relative glass-elev rounded-2xl p-7 group overflow-hidden h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-10 -right-10 size-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity", style: {
          background: "var(--glow)",
          filter: "blur(40px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          transform: "translateZ(40px)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl glass grid place-items-center relative group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "size-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 font-display text-xl relative", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground relative", children: p.tag })
        ] })
      ] }) }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnMore, { to: "/produtos", children: "Explorar o B.Analytics" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Case Studies", title: "Transformações reais.", subtitle: "Projetos entregues para líderes da indústria automóvel e enterprise." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-3 gap-6", children: casesPreview.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "glass-elev rounded-3xl p-8 group relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: c.sector }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-2xl", children: c.client }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-display text-2xl text-gradient", children: c.kpi })
      ] }, c.client)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnMore, { to: "/case-studies", children: "Ver portfolio" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Confiança de líderes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground measure mx-auto", children: "Ecossistema automóvel e enterprise — do grupo Stellantis a marcas premium." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5", children: ["BMW", "Volkswagen", "Stellantis", "Peugeot", "Audi", "Fiat Chrysler", "Rubisgás"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl md:text-2xl tracking-tight text-foreground/55 hover:text-foreground transition-colors", children: c }, c)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
function LearnMore({
  to,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, "data-magnetic": true, className: "inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-primary group", children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })
  ] });
}
export {
  Home as component
};
