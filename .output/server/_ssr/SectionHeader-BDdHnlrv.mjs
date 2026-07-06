import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SectionHeader({ eyebrow, title, subtitle, center }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${center ? "mx-auto text-center" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        className: "font-mono text-xs uppercase tracking-[0.3em] text-primary",
        children: [
          "/ ",
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { delay: 0.1 },
        className: "mt-4 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight",
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { delay: 0.2 },
        className: `mt-4 text-lg text-muted-foreground ${center ? "mx-auto" : ""} max-w-2xl`,
        children: subtitle
      }
    )
  ] });
}
export {
  SectionHeader as S
};
