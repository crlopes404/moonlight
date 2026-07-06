import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeader } from "./SectionHeader-BDdHnlrv.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { d as ArrowRight, j as Mail, f as Sparkles, k as Clock, l as ShieldCheck, F as FileText, m as Minus, P as Plus } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const services = ["Software Development", "BI & Marketing", "IT Consulting", "IoT / AR / VR", "Suporte SLA", "B.Analytics", "Outro"];
const faqs = [{
  q: "Qual é o vosso prazo típico de resposta?",
  a: "Respondemos em até 24h úteis. Para projetos urgentes, agendamos call em 48h."
}, {
  q: "Trabalham com empresas fora de Portugal?",
  a: "Sim. Trabalhamos com clientes nacionais e internacionais, incluindo grandes grupos automóveis e enterprise."
}, {
  q: "Oferecem equipas dedicadas?",
  a: "Sim. No modelo TaaS (Team as a Service) montamos equipas dedicadas que integram a sua operação."
}, {
  q: "Como funciona o suporte?",
  a: "Disponibilizamos help desk e suporte aplicacional com SLA, monitorização contínua e manutenção evolutiva."
}, {
  q: "O B.Analytics é licenciável?",
  a: "Sim. O B.Analytics está disponível em cloud ou on-premise, com integração e suporte da Moonlight."
}];
function Contacto() {
  const [selected, setSelected] = reactExports.useState([]);
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const toggle = (s) => setSelected((cur) => cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]);
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 md:pt-44 pb-12 md:pb-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10", style: {
        background: "radial-gradient(ellipse 60% 50% at 50% 15%, var(--glow), transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "eyebrow", children: "/ Contacto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "mt-6 font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.92] tracking-tight", children: [
          "Vamos ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient italic font-light", children: "conversar" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.35
        }, className: "mt-7 lead text-muted-foreground measure mx-auto", children: [
          "Conta-nos o desafio. Voltamos com arquitetura, prazos e orçamento em",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: " 24h úteis" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.5
        }, className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "data-magnetic": true, onClick: scrollToForm, className: "btn-magnetic btn-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            "Iniciar projeto ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:suporte@moonlight.pt", "data-magnetic": true, className: "btn-magnetic btn-ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }),
            " suporte@moonlight.pt"
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative section-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-100px"
    }, transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }, className: "group relative overflow-hidden rounded-[2rem] glass-elev holo-border p-8 md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 opacity-90", style: {
        background: "linear-gradient(120deg, color-mix(in oklch, var(--color-primary) 14%, transparent), transparent 55%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-16 size-72 rounded-full pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100", style: {
        background: "var(--glow)",
        filter: "blur(80px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -left-16 size-72 rounded-full pointer-events-none", style: {
        background: "radial-gradient(circle, oklch(0.7 0.22 245 / 0.25), transparent 70%)",
        filter: "blur(80px)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 pointer-events-none opacity-[0.06]", style: {
        backgroundImage: "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(ellipse 70% 80% at 30% 0%, black, transparent 75%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-[1.2fr_auto] gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }),
            " Proposta personalizada"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] tracking-tight", children: [
            "Projetos maiores?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Preenche o briefing." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 lead text-muted-foreground measure", children: "Descreve objetivos, contexto e prazo. A nossa equipa responde com uma proposta à medida — arquitetura, roadmap e orçamento." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4 text-primary" }),
              " Resposta em 24h úteis"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-primary" }),
              " Confidencial · NDA disponível"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 text-primary" }),
              " Sem compromisso"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center lg:items-end gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity", style: {
              background: "var(--glow)",
              filter: "blur(28px)"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { "data-magnetic": true, onClick: scrollToForm, className: "relative inline-flex items-center gap-3 rounded-full px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-[1.03] active:scale-[0.98]", style: {
              background: "linear-gradient(120deg, var(--color-primary), var(--color-magenta))",
              boxShadow: "0 14px 50px -12px var(--glow), inset 0 1px 0 oklch(1 0 0 / 0.25)"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-5" }),
              "Preencher briefing",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-5 transition-transform group-hover:translate-x-1" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "2 min · 100% online" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "form", className: "relative section-sm scroll-mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, onSubmit: (e) => {
      e.preventDefault();
      alert("Obrigado! Voltamos em breve.");
    }, className: "glass-elev rounded-3xl p-8 md:p-12 holo-border relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 size-72 rounded-full pointer-events-none", style: {
        background: "var(--glow)",
        filter: "blur(70px)",
        opacity: 0.45
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "/ Formulário" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl tracking-tight", children: "Iniciar projeto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Preenche e enviamos uma resposta em 24h úteis." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nome", id: "name", delay: 0 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Empresa", id: "company", delay: 0.05 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", id: "email", type: "email", delay: 0.1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Telefone (opcional)", id: "phone", required: false, delay: 0.15 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Serviços de interesse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: services.map((s) => {
            const active = selected.includes(s);
            return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", "data-magnetic": true, "aria-pressed": active, onClick: () => toggle(s), className: `rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 ${active ? "bg-primary text-primary-foreground shadow-[0_8px_24px_-10px_var(--glow)]" : "glass text-muted-foreground hover:text-foreground hover:border-primary"}`, children: s }, s);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "msg", className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Descreve o desafio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "msg", rows: 5, required: true, className: "mt-3 w-full rounded-2xl glass px-5 py-4 bg-transparent outline-none resize-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/30", placeholder: "Contexto, objetivos, prazo..." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "data-magnetic": true, type: "submit", className: "btn-magnetic btn-primary mt-9 w-full sm:w-auto justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
          transform: "translateZ(20px)"
        }, className: "inline-flex items-center gap-2", children: [
          "Enviar briefing ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "FAQ", title: "Perguntas frequentes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-3", children: faqs.map((f, i) => {
        const open = openFaq === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.05
        }, className: "glass rounded-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(open ? null : i), "aria-expanded": open, className: "w-full flex items-center justify-between gap-4 p-5 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg", children: f.q }),
            open ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "size-5 text-primary shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-5 text-primary shrink-0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            height: 0,
            opacity: 0
          }, animate: {
            height: "auto",
            opacity: 1
          }, exit: {
            height: 0,
            opacity: 0
          }, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-muted-foreground", children: f.a }) }) })
        ] }, f.q);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative section-sm text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-4xl md:text-5xl tracking-tight", children: [
      "Ou simplesmente ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:suporte@moonlight.pt", "data-magnetic": true, className: "text-gradient", children: "manda-nos um email" }),
      "."
    ] }) }) })
  ] });
}
function Field({
  label,
  id,
  type = "text",
  required = true,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, whileInView: {
    opacity: 1,
    y: 0
  }, viewport: {
    once: true
  }, transition: {
    delay
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: id, className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id, type, required, className: "mt-2 w-full rounded-xl glass px-4 py-3 bg-transparent outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/30" })
  ] });
}
export {
  Contacto as component
};
