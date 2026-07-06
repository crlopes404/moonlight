import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { e as useNavigate, C as ClientOnly, L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as getLocale } from "./index.mjs";
import { S as SectionHeader } from "./SectionHeader-BDdHnlrv.mjs";
import { C as CTABanner } from "./CTABanner-5edbe3A9.mjs";
import "../_libs/urlpattern-polyfill.mjs";
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
import "stream";
import "async_hooks";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const pt_hero_badge = (
  /** @type {(inputs: Hero_BadgeInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight Comunicação Global · Est. 1998`
    );
  })
);
const en_hero_badge = (
  /** @type {(inputs: Hero_BadgeInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight Comunicação Global · Est. 1998`
    );
  })
);
const hero_badge = (
  /** @type {((inputs?: Hero_BadgeInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_BadgeInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_badge();
    return en_hero_badge();
  })
);
const pt_hero_title_1 = (
  /** @type {(inputs: Hero_Title_1Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `O Futuro`
    );
  })
);
const en_hero_title_1 = (
  /** @type {(inputs: Hero_Title_1Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `The Future`
    );
  })
);
const hero_title_1 = (
  /** @type {((inputs?: Hero_Title_1Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Title_1Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_title_1();
    return en_hero_title_1();
  })
);
const pt_hero_title_2 = (
  /** @type {(inputs: Hero_Title_2Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Não Espera`
    );
  })
);
const en_hero_title_2 = (
  /** @type {(inputs: Hero_Title_2Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Won't Wait`
    );
  })
);
const hero_title_2 = (
  /** @type {((inputs?: Hero_Title_2Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Title_2Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_title_2();
    return en_hero_title_2();
  })
);
const pt_hero_p_1 = (
  /** @type {(inputs: Hero_P_1Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Software à medida, Business Intelligence e consultoria IT — desde`
    );
  })
);
const en_hero_p_1 = (
  /** @type {(inputs: Hero_P_1Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Custom software, Business Intelligence and IT consulting — since`
    );
  })
);
const hero_p_1 = (
  /** @type {((inputs?: Hero_P_1Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_P_1Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_p_1();
    return en_hero_p_1();
  })
);
const pt_hero_p_2 = (
  /** @type {(inputs: Hero_P_2Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `a transformar empresas do setor automóvel e enterprise com tecnologia que`
    );
  })
);
const en_hero_p_2 = (
  /** @type {(inputs: Hero_P_2Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `transforming automotive and enterprise companies with technology that`
    );
  })
);
const hero_p_2 = (
  /** @type {((inputs?: Hero_P_2Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_P_2Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_p_2();
    return en_hero_p_2();
  })
);
const pt_hero_p_accent = (
  /** @type {(inputs: Hero_P_AccentInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `antecipa o amanhã`
    );
  })
);
const en_hero_p_accent = (
  /** @type {(inputs: Hero_P_AccentInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `anticipates tomorrow`
    );
  })
);
const hero_p_accent = (
  /** @type {((inputs?: Hero_P_AccentInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_P_AccentInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_p_accent();
    return en_hero_p_accent();
  })
);
const pt_hero_cta_primary = (
  /** @type {(inputs: Hero_Cta_PrimaryInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Quero ser contactado`
    );
  })
);
const en_hero_cta_primary = (
  /** @type {(inputs: Hero_Cta_PrimaryInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Get in touch`
    );
  })
);
const hero_cta_primary = (
  /** @type {((inputs?: Hero_Cta_PrimaryInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Cta_PrimaryInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_cta_primary();
    return en_hero_cta_primary();
  })
);
const pt_hero_cta_secondary = (
  /** @type {(inputs: Hero_Cta_SecondaryInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Conhecer o B.Analytics`
    );
  })
);
const en_hero_cta_secondary = (
  /** @type {(inputs: Hero_Cta_SecondaryInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Discover B.Analytics`
    );
  })
);
const hero_cta_secondary = (
  /** @type {((inputs?: Hero_Cta_SecondaryInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Cta_SecondaryInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_cta_secondary();
    return en_hero_cta_secondary();
  })
);
const pt_hero_orbit_1 = (
  /** @type {(inputs: Hero_Orbit_1Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `A tecnologia`
    );
  })
);
const en_hero_orbit_1 = (
  /** @type {(inputs: Hero_Orbit_1Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Technology is`
    );
  })
);
const hero_orbit_1 = (
  /** @type {((inputs?: Hero_Orbit_1Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Orbit_1Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_orbit_1();
    return en_hero_orbit_1();
  })
);
const pt_hero_orbit_2 = (
  /** @type {(inputs: Hero_Orbit_2Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `é a nossa`
    );
  })
);
const en_hero_orbit_2 = (
  /** @type {(inputs: Hero_Orbit_2Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `our`
    );
  })
);
const hero_orbit_2 = (
  /** @type {((inputs?: Hero_Orbit_2Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Orbit_2Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_orbit_2();
    return en_hero_orbit_2();
  })
);
const pt_hero_orbit_accent = (
  /** @type {(inputs: Hero_Orbit_AccentInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `órbita`
    );
  })
);
const en_hero_orbit_accent = (
  /** @type {(inputs: Hero_Orbit_AccentInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `orbit`
    );
  })
);
const hero_orbit_accent = (
  /** @type {((inputs?: Hero_Orbit_AccentInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Orbit_AccentInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_orbit_accent();
    return en_hero_orbit_accent();
  })
);
const pt_hero_chip_since = (
  /** @type {(inputs: Hero_Chip_SinceInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Desde 1998`
    );
  })
);
const en_hero_chip_since = (
  /** @type {(inputs: Hero_Chip_SinceInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Since 1998`
    );
  })
);
const hero_chip_since = (
  /** @type {((inputs?: Hero_Chip_SinceInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Chip_SinceInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_chip_since();
    return en_hero_chip_since();
  })
);
const pt_hero_chip_custom = (
  /** @type {(inputs: Hero_Chip_CustomInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Software à medida`
    );
  })
);
const en_hero_chip_custom = (
  /** @type {(inputs: Hero_Chip_CustomInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Custom software`
    );
  })
);
const hero_chip_custom = (
  /** @type {((inputs?: Hero_Chip_CustomInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Chip_CustomInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_chip_custom();
    return en_hero_chip_custom();
  })
);
const pt_hero_chip_sla = (
  /** @type {(inputs: Hero_Chip_SlaInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Suporte SLA`
    );
  })
);
const en_hero_chip_sla = (
  /** @type {(inputs: Hero_Chip_SlaInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `SLA Support`
    );
  })
);
const hero_chip_sla = (
  /** @type {((inputs?: Hero_Chip_SlaInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Hero_Chip_SlaInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_hero_chip_sla();
    return en_hero_chip_sla();
  })
);
const pt_home_about_eyebrow = (
  /** @type {(inputs: Home_About_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Quem Somos`
    );
  })
);
const en_home_about_eyebrow = (
  /** @type {(inputs: Home_About_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `About`
    );
  })
);
const home_about_eyebrow = (
  /** @type {((inputs?: Home_About_EyebrowInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_About_EyebrowInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_about_eyebrow();
    return en_home_about_eyebrow();
  })
);
const pt_home_about_title = (
  /** @type {(inputs: Home_About_TitleInputs) => LocalizedString} */
  ((i) => {
    return (
      /** @type {LocalizedString} */
      `${i?.anos} anos a desenhar o amanhã.`
    );
  })
);
const en_home_about_title = (
  /** @type {(inputs: Home_About_TitleInputs) => LocalizedString} */
  ((i) => {
    return (
      /** @type {LocalizedString} */
      `${i?.anos} years designing tomorrow.`
    );
  })
);
const home_about_title = (
  /** @type {((inputs: Home_About_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_About_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_about_title(inputs);
    return en_home_about_title(inputs);
  })
);
const pt_home_about_p_1 = (
  /** @type {(inputs: Home_About_P_1Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Fundada em 1998, a`
    );
  })
);
const en_home_about_p_1 = (
  /** @type {(inputs: Home_About_P_1Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Founded in 1998,`
    );
  })
);
const home_about_p_1 = (
  /** @type {((inputs?: Home_About_P_1Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_About_P_1Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_about_p_1();
    return en_home_about_p_1();
  })
);
const pt_home_about_company = (
  /** @type {(inputs: Home_About_CompanyInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight Comunicação Global`
    );
  })
);
const en_home_about_company = (
  /** @type {(inputs: Home_About_CompanyInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight Comunicação Global`
    );
  })
);
const home_about_company = (
  /** @type {((inputs?: Home_About_CompanyInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_About_CompanyInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_about_company();
    return en_home_about_company();
  })
);
const pt_home_about_p_2 = (
  /** @type {(inputs: Home_About_P_2Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `é uma software house portuguesa focada em desenvolvimento à medida, Business Intelligence e transformação digital. Construímos sistemas, plataformas e o produto próprio`
    );
  })
);
const en_home_about_p_2 = (
  /** @type {(inputs: Home_About_P_2Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `is a Portuguese software house focused on custom development, Business Intelligence and digital transformation. We build systems, platforms and our own product`
    );
  })
);
const home_about_p_2 = (
  /** @type {((inputs?: Home_About_P_2Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_About_P_2Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_about_p_2();
    return en_home_about_p_2();
  })
);
const pt_home_about_p_3 = (
  /** @type {(inputs: Home_About_P_3Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `para empresas que recusam esperar pelo futuro.`
    );
  })
);
const en_home_about_p_3 = (
  /** @type {(inputs: Home_About_P_3Inputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `for companies that refuse to wait for the future.`
    );
  })
);
const home_about_p_3 = (
  /** @type {((inputs?: Home_About_P_3Inputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_About_P_3Inputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_about_p_3();
    return en_home_about_p_3();
  })
);
const pt_home_learn_history = (
  /** @type {(inputs: Home_Learn_HistoryInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Conhecer a história`
    );
  })
);
const en_home_learn_history = (
  /** @type {(inputs: Home_Learn_HistoryInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Discover our story`
    );
  })
);
const home_learn_history = (
  /** @type {((inputs?: Home_Learn_HistoryInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Learn_HistoryInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_learn_history();
    return en_home_learn_history();
  })
);
const pt_home_years_label = (
  /** @type {(inputs: Home_Years_LabelInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `anos · 1998–2026`
    );
  })
);
const en_home_years_label = (
  /** @type {(inputs: Home_Years_LabelInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `years · 1998–2026`
    );
  })
);
const home_years_label = (
  /** @type {((inputs?: Home_Years_LabelInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Years_LabelInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_years_label();
    return en_home_years_label();
  })
);
const pt_home_services_eyebrow = (
  /** @type {(inputs: Home_Services_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Serviços`
    );
  })
);
const en_home_services_eyebrow = (
  /** @type {(inputs: Home_Services_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Services`
    );
  })
);
const home_services_eyebrow = (
  /** @type {((inputs?: Home_Services_EyebrowInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Services_EyebrowInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_services_eyebrow();
    return en_home_services_eyebrow();
  })
);
const pt_home_services_title = (
  /** @type {(inputs: Home_Services_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Engenharia transversal.`
    );
  })
);
const en_home_services_title = (
  /** @type {(inputs: Home_Services_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `End-to-end engineering.`
    );
  })
);
const home_services_title = (
  /** @type {((inputs?: Home_Services_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Services_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_services_title();
    return en_home_services_title();
  })
);
const pt_home_services_subtitle = (
  /** @type {(inputs: Home_Services_SubtitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Cinco disciplinas, uma filosofia: do código à operação.`
    );
  })
);
const en_home_services_subtitle = (
  /** @type {(inputs: Home_Services_SubtitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Five disciplines, one philosophy: from code to operations.`
    );
  })
);
const home_services_subtitle = (
  /** @type {((inputs?: Home_Services_SubtitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Services_SubtitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_services_subtitle();
    return en_home_services_subtitle();
  })
);
const pt_home_service_dev = (
  /** @type {(inputs: Home_Service_DevInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Software Development`
    );
  })
);
const en_home_service_dev = (
  /** @type {(inputs: Home_Service_DevInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Software Development`
    );
  })
);
const home_service_dev = (
  /** @type {((inputs?: Home_Service_DevInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Service_DevInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_service_dev();
    return en_home_service_dev();
  })
);
const pt_home_service_bi = (
  /** @type {(inputs: Home_Service_BiInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `BI & Marketing`
    );
  })
);
const en_home_service_bi = (
  /** @type {(inputs: Home_Service_BiInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `BI & Marketing`
    );
  })
);
const home_service_bi = (
  /** @type {((inputs?: Home_Service_BiInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Service_BiInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_service_bi();
    return en_home_service_bi();
  })
);
const pt_home_service_consulting = (
  /** @type {(inputs: Home_Service_ConsultingInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `IT Consulting`
    );
  })
);
const en_home_service_consulting = (
  /** @type {(inputs: Home_Service_ConsultingInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `IT Consulting`
    );
  })
);
const home_service_consulting = (
  /** @type {((inputs?: Home_Service_ConsultingInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Service_ConsultingInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_service_consulting();
    return en_home_service_consulting();
  })
);
const pt_home_service_iot = (
  /** @type {(inputs: Home_Service_IotInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `IoT / AR / VR`
    );
  })
);
const en_home_service_iot = (
  /** @type {(inputs: Home_Service_IotInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `IoT / AR / VR`
    );
  })
);
const home_service_iot = (
  /** @type {((inputs?: Home_Service_IotInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Service_IotInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_service_iot();
    return en_home_service_iot();
  })
);
const pt_home_service_sla = (
  /** @type {(inputs: Home_Service_SlaInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Suporte SLA`
    );
  })
);
const en_home_service_sla = (
  /** @type {(inputs: Home_Service_SlaInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `SLA Support`
    );
  })
);
const home_service_sla = (
  /** @type {((inputs?: Home_Service_SlaInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Service_SlaInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_service_sla();
    return en_home_service_sla();
  })
);
const pt_home_learn_services = (
  /** @type {(inputs: Home_Learn_ServicesInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Explorar serviços`
    );
  })
);
const en_home_learn_services = (
  /** @type {(inputs: Home_Learn_ServicesInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Explore services`
    );
  })
);
const home_learn_services = (
  /** @type {((inputs?: Home_Learn_ServicesInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Learn_ServicesInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_learn_services();
    return en_home_learn_services();
  })
);
const pt_home_product_eyebrow = (
  /** @type {(inputs: Home_Product_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Produto Proprietário`
    );
  })
);
const en_home_product_eyebrow = (
  /** @type {(inputs: Home_Product_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Proprietary Product`
    );
  })
);
const home_product_eyebrow = (
  /** @type {((inputs?: Home_Product_EyebrowInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Product_EyebrowInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_product_eyebrow();
    return en_home_product_eyebrow();
  })
);
const pt_home_product_subtitle = (
  /** @type {(inputs: Home_Product_SubtitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `O nosso produto de dados: integração de fontes, dashboards de BI e sistemas de apoio à decisão — numa só plataforma.`
    );
  })
);
const en_home_product_subtitle = (
  /** @type {(inputs: Home_Product_SubtitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Our data product: source integration, BI dashboards and decision-support systems — in a single platform.`
    );
  })
);
const home_product_subtitle = (
  /** @type {((inputs?: Home_Product_SubtitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Product_SubtitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_product_subtitle();
    return en_home_product_subtitle();
  })
);
const pt_home_pillar_data_name = (
  /** @type {(inputs: Home_Pillar_Data_NameInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Data Integration`
    );
  })
);
const en_home_pillar_data_name = (
  /** @type {(inputs: Home_Pillar_Data_NameInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Data Integration`
    );
  })
);
const home_pillar_data_name = (
  /** @type {((inputs?: Home_Pillar_Data_NameInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Pillar_Data_NameInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_pillar_data_name();
    return en_home_pillar_data_name();
  })
);
const pt_home_pillar_data_tag = (
  /** @type {(inputs: Home_Pillar_Data_TagInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Fontes unificadas em tempo real`
    );
  })
);
const en_home_pillar_data_tag = (
  /** @type {(inputs: Home_Pillar_Data_TagInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Unified sources in real time`
    );
  })
);
const home_pillar_data_tag = (
  /** @type {((inputs?: Home_Pillar_Data_TagInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Pillar_Data_TagInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_pillar_data_tag();
    return en_home_pillar_data_tag();
  })
);
const pt_home_pillar_bi_name = (
  /** @type {(inputs: Home_Pillar_Bi_NameInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `BI Dashboards`
    );
  })
);
const en_home_pillar_bi_name = (
  /** @type {(inputs: Home_Pillar_Bi_NameInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `BI Dashboards`
    );
  })
);
const home_pillar_bi_name = (
  /** @type {((inputs?: Home_Pillar_Bi_NameInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Pillar_Bi_NameInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_pillar_bi_name();
    return en_home_pillar_bi_name();
  })
);
const pt_home_pillar_bi_tag = (
  /** @type {(inputs: Home_Pillar_Bi_TagInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Visualização e KPIs executivos`
    );
  })
);
const en_home_pillar_bi_tag = (
  /** @type {(inputs: Home_Pillar_Bi_TagInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Executive visualization and KPIs`
    );
  })
);
const home_pillar_bi_tag = (
  /** @type {((inputs?: Home_Pillar_Bi_TagInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Pillar_Bi_TagInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_pillar_bi_tag();
    return en_home_pillar_bi_tag();
  })
);
const pt_home_pillar_dec_name = (
  /** @type {(inputs: Home_Pillar_Dec_NameInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Decision Systems`
    );
  })
);
const en_home_pillar_dec_name = (
  /** @type {(inputs: Home_Pillar_Dec_NameInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Decision Systems`
    );
  })
);
const home_pillar_dec_name = (
  /** @type {((inputs?: Home_Pillar_Dec_NameInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Pillar_Dec_NameInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_pillar_dec_name();
    return en_home_pillar_dec_name();
  })
);
const pt_home_pillar_dec_tag = (
  /** @type {(inputs: Home_Pillar_Dec_TagInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Apoio à decisão orientado a dados`
    );
  })
);
const en_home_pillar_dec_tag = (
  /** @type {(inputs: Home_Pillar_Dec_TagInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Data-driven decision support`
    );
  })
);
const home_pillar_dec_tag = (
  /** @type {((inputs?: Home_Pillar_Dec_TagInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Pillar_Dec_TagInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_pillar_dec_tag();
    return en_home_pillar_dec_tag();
  })
);
const pt_home_learn_product = (
  /** @type {(inputs: Home_Learn_ProductInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Explorar o B.Analytics`
    );
  })
);
const en_home_learn_product = (
  /** @type {(inputs: Home_Learn_ProductInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Explore B.Analytics`
    );
  })
);
const home_learn_product = (
  /** @type {((inputs?: Home_Learn_ProductInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Learn_ProductInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_learn_product();
    return en_home_learn_product();
  })
);
const pt_home_cases_eyebrow = (
  /** @type {(inputs: Home_Cases_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Case Studies`
    );
  })
);
const en_home_cases_eyebrow = (
  /** @type {(inputs: Home_Cases_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Case Studies`
    );
  })
);
const home_cases_eyebrow = (
  /** @type {((inputs?: Home_Cases_EyebrowInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Cases_EyebrowInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_cases_eyebrow();
    return en_home_cases_eyebrow();
  })
);
const pt_home_cases_title = (
  /** @type {(inputs: Home_Cases_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Transformações reais.`
    );
  })
);
const en_home_cases_title = (
  /** @type {(inputs: Home_Cases_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Real transformations.`
    );
  })
);
const home_cases_title = (
  /** @type {((inputs?: Home_Cases_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Cases_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_cases_title();
    return en_home_cases_title();
  })
);
const pt_home_cases_subtitle = (
  /** @type {(inputs: Home_Cases_SubtitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Projetos entregues para líderes da indústria automóvel e enterprise.`
    );
  })
);
const en_home_cases_subtitle = (
  /** @type {(inputs: Home_Cases_SubtitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Projects delivered for leaders in the automotive and enterprise industry.`
    );
  })
);
const home_cases_subtitle = (
  /** @type {((inputs?: Home_Cases_SubtitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Cases_SubtitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_cases_subtitle();
    return en_home_cases_subtitle();
  })
);
const pt_home_case_1_sector = (
  /** @type {(inputs: Home_Case_1_SectorInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Automotive`
    );
  })
);
const en_home_case_1_sector = (
  /** @type {(inputs: Home_Case_1_SectorInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Automotive`
    );
  })
);
const home_case_1_sector = (
  /** @type {((inputs?: Home_Case_1_SectorInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Case_1_SectorInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_case_1_sector();
    return en_home_case_1_sector();
  })
);
const pt_home_case_1_kpi = (
  /** @type {(inputs: Home_Case_1_KpiInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Leads Management`
    );
  })
);
const en_home_case_1_kpi = (
  /** @type {(inputs: Home_Case_1_KpiInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Leads Management`
    );
  })
);
const home_case_1_kpi = (
  /** @type {((inputs?: Home_Case_1_KpiInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Case_1_KpiInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_case_1_kpi();
    return en_home_case_1_kpi();
  })
);
const pt_home_case_2_sector = (
  /** @type {(inputs: Home_Case_2_SectorInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Plataforma digital`
    );
  })
);
const en_home_case_2_sector = (
  /** @type {(inputs: Home_Case_2_SectorInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Digital platform`
    );
  })
);
const home_case_2_sector = (
  /** @type {((inputs?: Home_Case_2_SectorInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Case_2_SectorInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_case_2_sector();
    return en_home_case_2_sector();
  })
);
const pt_home_case_2_kpi = (
  /** @type {(inputs: Home_Case_2_KpiInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Plataforma chave-na-mão`
    );
  })
);
const en_home_case_2_kpi = (
  /** @type {(inputs: Home_Case_2_KpiInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Turnkey platform`
    );
  })
);
const home_case_2_kpi = (
  /** @type {((inputs?: Home_Case_2_KpiInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Case_2_KpiInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_case_2_kpi();
    return en_home_case_2_kpi();
  })
);
const pt_home_case_3_sector = (
  /** @type {(inputs: Home_Case_3_SectorInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Energia`
    );
  })
);
const en_home_case_3_sector = (
  /** @type {(inputs: Home_Case_3_SectorInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Energy`
    );
  })
);
const home_case_3_sector = (
  /** @type {((inputs?: Home_Case_3_SectorInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Case_3_SectorInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_case_3_sector();
    return en_home_case_3_sector();
  })
);
const pt_home_case_3_kpi = (
  /** @type {(inputs: Home_Case_3_KpiInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Sistemas de negócio`
    );
  })
);
const en_home_case_3_kpi = (
  /** @type {(inputs: Home_Case_3_KpiInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Business systems`
    );
  })
);
const home_case_3_kpi = (
  /** @type {((inputs?: Home_Case_3_KpiInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Case_3_KpiInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_case_3_kpi();
    return en_home_case_3_kpi();
  })
);
const pt_home_learn_cases = (
  /** @type {(inputs: Home_Learn_CasesInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Ver portfolio`
    );
  })
);
const en_home_learn_cases = (
  /** @type {(inputs: Home_Learn_CasesInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `View portfolio`
    );
  })
);
const home_learn_cases = (
  /** @type {((inputs?: Home_Learn_CasesInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Learn_CasesInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_learn_cases();
    return en_home_learn_cases();
  })
);
const pt_home_clients_eyebrow = (
  /** @type {(inputs: Home_Clients_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Confiança de líderes`
    );
  })
);
const en_home_clients_eyebrow = (
  /** @type {(inputs: Home_Clients_EyebrowInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Trusted by leaders`
    );
  })
);
const home_clients_eyebrow = (
  /** @type {((inputs?: Home_Clients_EyebrowInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Clients_EyebrowInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_clients_eyebrow();
    return en_home_clients_eyebrow();
  })
);
const pt_home_clients_p = (
  /** @type {(inputs: Home_Clients_PInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Ecossistema automóvel e enterprise — do grupo Stellantis a marcas premium.`
    );
  })
);
const en_home_clients_p = (
  /** @type {(inputs: Home_Clients_PInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Automotive and enterprise ecosystem — from the Stellantis group to premium brands.`
    );
  })
);
const home_clients_p = (
  /** @type {((inputs?: Home_Clients_PInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Home_Clients_PInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_home_clients_p();
    return en_home_clients_p();
  })
);
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
  const locale = getLocale();
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: hero_badge() }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient", children: hero_title_1() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient-aurora", children: hero_title_2() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.8,
          duration: 1
        }, className: "mt-7 max-w-xl lead text-foreground/80 dark:text-muted-foreground text-balance mx-auto lg:mx-0", children: [
          hero_p_1(),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "1998" }),
          " ",
          hero_p_2(),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: hero_p_accent() }),
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
            to: "/$locale/contacto",
            params: {
              locale
            }
          }), children: [
            hero_cta_primary(),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(MagneticButton, { variant: "ghost", onClick: () => navigate({
            to: "/$locale/produtos",
            params: {
              locale
            }
          }), children: hero_cta_secondary() })
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
          hero_orbit_1(),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          hero_orbit_2(),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: hero_orbit_accent() }),
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
    }, className: "absolute bottom-10 inset-x-0 z-30 flex flex-wrap items-center justify-center gap-3 px-6", children: [hero_chip_since(), hero_chip_custom(), "B.Analytics", hero_chip_sla()].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1.5 glass rounded-full text-[11px] font-mono uppercase tracking-wider text-muted-foreground", children: t }, t)) })
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
  label: home_service_dev
}, {
  icon: ChartColumn,
  label: home_service_bi
}, {
  icon: Briefcase,
  label: home_service_consulting
}, {
  icon: Boxes,
  label: home_service_iot
}, {
  icon: Headphones,
  label: home_service_sla
}];
const productPillars = [{
  icon: Database,
  name: home_pillar_data_name,
  tag: home_pillar_data_tag
}, {
  icon: ChartColumn,
  name: home_pillar_bi_name,
  tag: home_pillar_bi_tag
}, {
  icon: Cpu,
  name: home_pillar_dec_name,
  tag: home_pillar_dec_tag
}];
const casesPreview = [{
  client: "FCA / Fiat Chrysler",
  sector: home_case_1_sector,
  kpi: home_case_1_kpi
}, {
  client: "Homologacoes.net",
  sector: home_case_2_sector,
  kpi: home_case_2_kpi
}, {
  client: "Rubisgás",
  sector: home_case_3_sector,
  kpi: home_case_3_kpi
}];
function Home() {
  const anos = (/* @__PURE__ */ new Date()).getFullYear() - 1998;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: home_about_eyebrow(), title: home_about_title({
          anos
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 lead text-muted-foreground measure", children: [
          home_about_p_1(),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: home_about_company() }),
          " ",
          home_about_p_2(),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "B.Analytics" }),
          " ",
          home_about_p_3()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnMore, { to: "/$locale/quem-somos", children: home_learn_history() }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full glass-elev holo-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-8 rounded-full border border-border/40 animate-[orbit-spin_30s_linear_infinite]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-16 rounded-full border border-dashed border-border/40 animate-[orbit-counter_40s_linear_infinite]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl text-gradient", children: anos }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2", children: home_years_label() })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: home_services_eyebrow(), title: home_services_title(), subtitle: home_services_subtitle() }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-sm leading-tight", children: s.label() })
      ] }) }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnMore, { to: "/$locale/servicos", children: home_learn_services() }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: home_product_eyebrow(), title: "B.Analytics", subtitle: home_product_subtitle() }),
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 font-display text-xl relative", children: p.name() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground relative", children: p.tag() })
        ] })
      ] }) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnMore, { to: "/$locale/produtos", children: home_learn_product() }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: home_cases_eyebrow(), title: home_cases_title(), subtitle: home_cases_subtitle() }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: c.sector() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-display text-2xl", children: c.client }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 font-display text-2xl text-gradient", children: c.kpi() })
      ] }, c.client)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LearnMore, { to: "/$locale/case-studies", children: home_learn_cases() }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow", children: home_clients_eyebrow() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground measure mx-auto", children: home_clients_p() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5", children: ["BMW", "Volkswagen", "Stellantis", "Peugeot", "Audi", "Fiat Chrysler", "Rubisgás"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl md:text-2xl tracking-tight text-foreground/55 hover:text-foreground transition-colors", children: c }, c)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTABanner, {})
  ] });
}
function LearnMore({
  to,
  children
}) {
  const locale = getLocale();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, params: {
    locale
  }, "data-magnetic": true, className: "inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-primary group", children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5 transition-transform group-hover:translate-x-1" })
  ] });
}
export {
  Home as component
};
