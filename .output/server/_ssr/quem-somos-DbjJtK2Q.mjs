import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./SectionHeader-BDdHnlrv.mjs";
import { C as CTABanner } from "./CTABanner-vKGMPtDZ.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { R as Rocket, e as Shield, f as Sparkles, U as Users } from "../_libs/lucide-react.mjs";
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
const timeline = [{
  year: "1998",
  title: "Fundação",
  desc: "Nasce a Moonlight Comunicação Global, em Portugal, focada em software à medida."
}, {
  year: "2004",
  title: "Foco em Business Intelligence",
  desc: "Consolidamos a prática de BI & Marketing — analytics e sistemas de leads."
}, {
  year: "2010",
  title: "Setor automóvel",
  desc: "Parcerias com o ecossistema automóvel — gestão de leads para grandes marcas."
}, {
  year: "2015",
  title: "Consultoria & TaaS",
  desc: "Equipas dedicadas em modelo Team as a Service e auditorias de arquitetura."
}, {
  year: "2019",
  title: "IoT / AR / VR",
  desc: "Expansão para dispositivos conectados e experiências imersivas enterprise."
}, {
  year: "2022",
  title: "B.Analytics",
  desc: "Maturação do produto próprio de integração de dados, BI e decisão."
}, {
  year: "2026",
  title: "O futuro não espera",
  desc: "Plataformas data-driven e suporte SLA ao serviço de quem antecipa o amanhã."
}];
const values = [{
  icon: Rocket,
  title: "Velocidade com profundidade",
  desc: "Iteramos rápido sem cortar na engenharia. Entregamos software que dura."
}, {
  icon: Shield,
  title: "Fiabilidade por defeito",
  desc: "Suporte com SLA, monitorização contínua e operação que não falha quando importa."
}, {
  icon: Sparkles,
  title: "Curiosidade radical",
  desc: "Investimos continuamente em I&D próprio — daí ter nascido o B.Analytics."
}, {
  icon: Users,
  title: "Parceria de longo prazo",
  desc: "Clientes connosco há anos. Não fazemos drive-by consulting."
}];
const anos = (/* @__PURE__ */ new Date()).getFullYear() - 1998;
const stats = [{
  v: String(anos),
  l: "Anos de operação"
}, {
  v: "1998",
  l: "Fundação"
}, {
  v: "5",
  l: "Áreas de serviço"
}, {
  v: "SLA",
  l: "Suporte garantido"
}];
function QuemSomos() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-40 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: {
        backgroundImage: "radial-gradient(circle at 30% 30%, var(--glow), transparent 50%), radial-gradient(circle at 80% 60%, oklch(0.7 0.25 245 / 0.3), transparent 50%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: "/ Quem Somos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "mt-6 font-display text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight max-w-5xl", children: [
          "Engenheiros do ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "tempo presente" }),
          ", obcecados pelo futuro."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.4
        }, className: "mt-8 lead text-muted-foreground measure", children: [
          "Somos a Moonlight Comunicação Global — software house portuguesa fundada em 1998. Há ",
          anos,
          ' anos a transformar empresas com produtos, plataformas e equipas que recusam o "suficiente".'
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "A nossa jornada", title: "Desde 1998." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
          height: lineH
        }, className: "absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-electric" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-16", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          margin: "-100px"
        }, className: `relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-primary", children: t.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl tracking-tight", children: t.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: t.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 size-4 -translate-x-1/2 rounded-full bg-background border-2 border-primary", style: {
            boxShadow: "0 0 20px var(--glow)"
          } })
        ] }, t.year)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Missão · Visão · Valores", title: "O que nos move." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-2 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.08
      }, className: "glass-elev rounded-3xl p-8 hover:holo-border transition-all group relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 size-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity", style: {
          background: "var(--glow)",
          filter: "blur(60px)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-2xl glass grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "size-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-2xl", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: v.desc })
        ] })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.08
    }, className: "glass rounded-2xl p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl text-gradient", children: s.v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground", children: s.l })
    ] }, s.l)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Filosofia de equipa", title: "Engenharia primeiro. Sempre." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: 'Acreditamos que o futuro pertence às empresas que escolhem engenheiros, não vendedores. Cada decisão técnica é documentada, debatida e defendida. Cultivamos uma cultura de honestidade radical — onde dizer "não sei" é uma forma de excelência.' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3 font-mono text-sm", children: ["Code reviews obrigatórios", "Pair programming semanal", "20% para investigação livre", "Open-source contribution"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-primary" }),
          " ",
          x
        ] }, x)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-3xl glass-elev holo-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl italic leading-snug", children: '"Construímos para que os nossos clientes ainda nos agradeçam em 2040."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "— Equipa Moonlight" })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, { eyebrow: "vamos?", title: "Pronto para trabalhar com pessoas que pensam em décadas?", cta: "Falar connosco" })
  ] });
}
export {
  QuemSomos as component
};
