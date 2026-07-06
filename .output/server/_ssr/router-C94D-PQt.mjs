import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, d as useLocation, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as redirect, S as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { g as getLocale, i as isLocale, s as setLocale } from "./index.mjs";
import "../_libs/urlpattern-polyfill.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { M as Menu, X, A as ArrowUpRight, a as Moon, S as Sun } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "stream";
import "async_hooks";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const pt_nav_inicio = (
  /** @type {(inputs: Nav_InicioInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Início`
    );
  })
);
const en_nav_inicio = (
  /** @type {(inputs: Nav_InicioInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Home`
    );
  })
);
const nav_inicio = (
  /** @type {((inputs?: Nav_InicioInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_InicioInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_inicio();
    return en_nav_inicio();
  })
);
const pt_nav_quem_somos = (
  /** @type {(inputs: Nav_Quem_SomosInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Quem Somos`
    );
  })
);
const en_nav_quem_somos = (
  /** @type {(inputs: Nav_Quem_SomosInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `About`
    );
  })
);
const nav_quem_somos = (
  /** @type {((inputs?: Nav_Quem_SomosInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Quem_SomosInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_quem_somos();
    return en_nav_quem_somos();
  })
);
const pt_nav_servicos = (
  /** @type {(inputs: Nav_ServicosInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Serviços`
    );
  })
);
const en_nav_servicos = (
  /** @type {(inputs: Nav_ServicosInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Services`
    );
  })
);
const nav_servicos = (
  /** @type {((inputs?: Nav_ServicosInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_ServicosInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_servicos();
    return en_nav_servicos();
  })
);
const pt_nav_produtos = (
  /** @type {(inputs: Nav_ProdutosInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Produtos`
    );
  })
);
const en_nav_produtos = (
  /** @type {(inputs: Nav_ProdutosInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Products`
    );
  })
);
const nav_produtos = (
  /** @type {((inputs?: Nav_ProdutosInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_ProdutosInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_produtos();
    return en_nav_produtos();
  })
);
const pt_nav_cases = (
  /** @type {(inputs: Nav_CasesInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Cases`
    );
  })
);
const en_nav_cases = (
  /** @type {(inputs: Nav_CasesInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Cases`
    );
  })
);
const nav_cases = (
  /** @type {((inputs?: Nav_CasesInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_CasesInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_cases();
    return en_nav_cases();
  })
);
const pt_nav_contacto = (
  /** @type {(inputs: Nav_ContactoInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Contacto`
    );
  })
);
const en_nav_contacto = (
  /** @type {(inputs: Nav_ContactoInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Contact`
    );
  })
);
const nav_contacto = (
  /** @type {((inputs?: Nav_ContactoInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_ContactoInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_contacto();
    return en_nav_contacto();
  })
);
const pt_nav_aria_home = (
  /** @type {(inputs: Nav_Aria_HomeInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight — início`
    );
  })
);
const en_nav_aria_home = (
  /** @type {(inputs: Nav_Aria_HomeInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight — home`
    );
  })
);
const nav_aria_home = (
  /** @type {((inputs?: Nav_Aria_HomeInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Aria_HomeInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_aria_home();
    return en_nav_aria_home();
  })
);
const pt_nav_aria_main = (
  /** @type {(inputs: Nav_Aria_MainInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Principal`
    );
  })
);
const en_nav_aria_main = (
  /** @type {(inputs: Nav_Aria_MainInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Main`
    );
  })
);
const nav_aria_main = (
  /** @type {((inputs?: Nav_Aria_MainInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Aria_MainInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_aria_main();
    return en_nav_aria_main();
  })
);
const pt_nav_aria_open_menu = (
  /** @type {(inputs: Nav_Aria_Open_MenuInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Abrir menu`
    );
  })
);
const en_nav_aria_open_menu = (
  /** @type {(inputs: Nav_Aria_Open_MenuInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Open menu`
    );
  })
);
const nav_aria_open_menu = (
  /** @type {((inputs?: Nav_Aria_Open_MenuInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Aria_Open_MenuInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_aria_open_menu();
    return en_nav_aria_open_menu();
  })
);
const pt_nav_aria_close = (
  /** @type {(inputs: Nav_Aria_CloseInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Fechar`
    );
  })
);
const en_nav_aria_close = (
  /** @type {(inputs: Nav_Aria_CloseInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Close`
    );
  })
);
const nav_aria_close = (
  /** @type {((inputs?: Nav_Aria_CloseInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Aria_CloseInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_aria_close();
    return en_nav_aria_close();
  })
);
const pt_nav_aria_mobile = (
  /** @type {(inputs: Nav_Aria_MobileInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Mobile`
    );
  })
);
const en_nav_aria_mobile = (
  /** @type {(inputs: Nav_Aria_MobileInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Mobile`
    );
  })
);
const nav_aria_mobile = (
  /** @type {((inputs?: Nav_Aria_MobileInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Aria_MobileInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_aria_mobile();
    return en_nav_aria_mobile();
  })
);
const pt_nav_aria_toggle_theme = (
  /** @type {(inputs: Nav_Aria_Toggle_ThemeInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Alternar tema`
    );
  })
);
const en_nav_aria_toggle_theme = (
  /** @type {(inputs: Nav_Aria_Toggle_ThemeInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Toggle theme`
    );
  })
);
const nav_aria_toggle_theme = (
  /** @type {((inputs?: Nav_Aria_Toggle_ThemeInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Nav_Aria_Toggle_ThemeInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_nav_aria_toggle_theme();
    return en_nav_aria_toggle_theme();
  })
);
const pt_footer_tagline = (
  /** @type {(inputs: Footer_TaglineInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight Comunicação Global LDA. Desde 1998 a construir o futuro — software, BI e consultoria.`
    );
  })
);
const en_footer_tagline = (
  /** @type {(inputs: Footer_TaglineInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight Comunicação Global LDA. Building the future since 1998 — software, BI and consulting.`
    );
  })
);
const footer_tagline = (
  /** @type {((inputs?: Footer_TaglineInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Footer_TaglineInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_footer_tagline();
    return en_footer_tagline();
  })
);
const pt_footer_tagline_accent = (
  /** @type {(inputs: Footer_Tagline_AccentInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `O futuro não espera.`
    );
  })
);
const en_footer_tagline_accent = (
  /** @type {(inputs: Footer_Tagline_AccentInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `The future won't wait.`
    );
  })
);
const footer_tagline_accent = (
  /** @type {((inputs?: Footer_Tagline_AccentInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Footer_Tagline_AccentInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_footer_tagline_accent();
    return en_footer_tagline_accent();
  })
);
const pt_footer_nav_heading = (
  /** @type {(inputs: Footer_Nav_HeadingInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Navegar`
    );
  })
);
const en_footer_nav_heading = (
  /** @type {(inputs: Footer_Nav_HeadingInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Navigate`
    );
  })
);
const footer_nav_heading = (
  /** @type {((inputs?: Footer_Nav_HeadingInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Footer_Nav_HeadingInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_footer_nav_heading();
    return en_footer_nav_heading();
  })
);
const pt_footer_link_case_studies = (
  /** @type {(inputs: Footer_Link_Case_StudiesInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Case Studies`
    );
  })
);
const en_footer_link_case_studies = (
  /** @type {(inputs: Footer_Link_Case_StudiesInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Case Studies`
    );
  })
);
const footer_link_case_studies = (
  /** @type {((inputs?: Footer_Link_Case_StudiesInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Footer_Link_Case_StudiesInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_footer_link_case_studies();
    return en_footer_link_case_studies();
  })
);
const pt_footer_hq_heading = (
  /** @type {(inputs: Footer_Hq_HeadingInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Sede`
    );
  })
);
const en_footer_hq_heading = (
  /** @type {(inputs: Footer_Hq_HeadingInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Headquarters`
    );
  })
);
const footer_hq_heading = (
  /** @type {((inputs?: Footer_Hq_HeadingInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Footer_Hq_HeadingInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_footer_hq_heading();
    return en_footer_hq_heading();
  })
);
const pt_meta_default_title = (
  /** @type {(inputs: Meta_Default_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight — IT Solutions, Consulting & Marketing desde 1998`
    );
  })
);
const en_meta_default_title = (
  /** @type {(inputs: Meta_Default_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight — IT Solutions, Consulting & Marketing since 1998`
    );
  })
);
const meta_default_title = (
  /** @type {((inputs?: Meta_Default_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Default_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_default_title();
    return en_meta_default_title();
  })
);
const pt_meta_default_desc = (
  /** @type {(inputs: Meta_Default_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Software house portuguesa: Software Development, BI, IoT/AR/VR, Big Data e produtos proprietários.`
    );
  })
);
const en_meta_default_desc = (
  /** @type {(inputs: Meta_Default_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Portuguese software house: Software Development, BI, IoT/AR/VR, Big Data and proprietary products.`
    );
  })
);
const meta_default_desc = (
  /** @type {((inputs?: Meta_Default_DescInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Default_DescInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_default_desc();
    return en_meta_default_desc();
  })
);
const pt_meta_home_title = (
  /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight — O Futuro Não Espera · Desde 1998`
    );
  })
);
const en_meta_home_title = (
  /** @type {(inputs: Meta_Home_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Moonlight — The Future Won't Wait · Since 1998`
    );
  })
);
const meta_home_title = (
  /** @type {((inputs?: Meta_Home_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Home_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_home_title();
    return en_meta_home_title();
  })
);
const pt_meta_home_desc = (
  /** @type {(inputs: Meta_Home_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Software house portuguesa desde 1998: Software Development, BI & Marketing, IT Consulting, IoT/AR/VR e Suporte SLA. Produto próprio B.Analytics.`
    );
  })
);
const en_meta_home_desc = (
  /** @type {(inputs: Meta_Home_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Portuguese software house since 1998: Software Development, BI & Marketing, IT Consulting, IoT/AR/VR and SLA Support. Own product B.Analytics.`
    );
  })
);
const meta_home_desc = (
  /** @type {((inputs?: Meta_Home_DescInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Home_DescInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_home_desc();
    return en_meta_home_desc();
  })
);
const pt_meta_servicos_title = (
  /** @type {(inputs: Meta_Servicos_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Serviços — Moonlight`
    );
  })
);
const en_meta_servicos_title = (
  /** @type {(inputs: Meta_Servicos_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Services — Moonlight`
    );
  })
);
const meta_servicos_title = (
  /** @type {((inputs?: Meta_Servicos_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Servicos_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_servicos_title();
    return en_meta_servicos_title();
  })
);
const pt_meta_servicos_desc = (
  /** @type {(inputs: Meta_Servicos_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Software Development, BI & Marketing, IT Consulting, IoT/AR/VR e Suporte SLA — engenharia de excelência desde 1998.`
    );
  })
);
const en_meta_servicos_desc = (
  /** @type {(inputs: Meta_Servicos_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Software Development, BI & Marketing, IT Consulting, IoT/AR/VR and SLA Support — engineering excellence since 1998.`
    );
  })
);
const meta_servicos_desc = (
  /** @type {((inputs?: Meta_Servicos_DescInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Servicos_DescInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_servicos_desc();
    return en_meta_servicos_desc();
  })
);
const pt_meta_produtos_title = (
  /** @type {(inputs: Meta_Produtos_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Produtos — Moonlight · M.Leads, M.Analytics, M.Chain+, M.Gaming, Ecommerce`
    );
  })
);
const en_meta_produtos_title = (
  /** @type {(inputs: Meta_Produtos_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Products — Moonlight · M.Leads, M.Analytics, M.Chain+, M.Gaming, Ecommerce`
    );
  })
);
const meta_produtos_title = (
  /** @type {((inputs?: Meta_Produtos_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Produtos_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_produtos_title();
    return en_meta_produtos_title();
  })
);
const pt_meta_produtos_desc = (
  /** @type {(inputs: Meta_Produtos_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Cinco produtos proprietários para sales, analytics, supply chain, AR/VR e commerce.`
    );
  })
);
const en_meta_produtos_desc = (
  /** @type {(inputs: Meta_Produtos_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Five proprietary products for sales, analytics, supply chain, AR/VR and commerce.`
    );
  })
);
const meta_produtos_desc = (
  /** @type {((inputs?: Meta_Produtos_DescInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Produtos_DescInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_produtos_desc();
    return en_meta_produtos_desc();
  })
);
const pt_meta_quemsomos_title = (
  /** @type {(inputs: Meta_Quemsomos_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Quem Somos — Moonlight · Desde 1998`
    );
  })
);
const en_meta_quemsomos_title = (
  /** @type {(inputs: Meta_Quemsomos_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `About — Moonlight · Since 1998`
    );
  })
);
const meta_quemsomos_title = (
  /** @type {((inputs?: Meta_Quemsomos_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Quemsomos_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_quemsomos_title();
    return en_meta_quemsomos_title();
  })
);
const pt_meta_quemsomos_desc = (
  /** @type {(inputs: Meta_Quemsomos_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `A história, missão e cultura da Moonlight — software house portuguesa fundada em 1998.`
    );
  })
);
const en_meta_quemsomos_desc = (
  /** @type {(inputs: Meta_Quemsomos_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `The history, mission and culture of Moonlight — a Portuguese software house founded in 1998.`
    );
  })
);
const meta_quemsomos_desc = (
  /** @type {((inputs?: Meta_Quemsomos_DescInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Quemsomos_DescInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_quemsomos_desc();
    return en_meta_quemsomos_desc();
  })
);
const pt_meta_cases_title = (
  /** @type {(inputs: Meta_Cases_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Case Studies — Moonlight`
    );
  })
);
const en_meta_cases_title = (
  /** @type {(inputs: Meta_Cases_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Case Studies — Moonlight`
    );
  })
);
const meta_cases_title = (
  /** @type {((inputs?: Meta_Cases_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Cases_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_cases_title();
    return en_meta_cases_title();
  })
);
const pt_meta_cases_desc = (
  /** @type {(inputs: Meta_Cases_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Portfólio de transformações digitais entregues pela Moonlight.`
    );
  })
);
const en_meta_cases_desc = (
  /** @type {(inputs: Meta_Cases_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Portfolio of digital transformations delivered by Moonlight.`
    );
  })
);
const meta_cases_desc = (
  /** @type {((inputs?: Meta_Cases_DescInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Cases_DescInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_cases_desc();
    return en_meta_cases_desc();
  })
);
const pt_meta_contacto_title = (
  /** @type {(inputs: Meta_Contacto_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Contacto — Moonlight`
    );
  })
);
const en_meta_contacto_title = (
  /** @type {(inputs: Meta_Contacto_TitleInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Contact — Moonlight`
    );
  })
);
const meta_contacto_title = (
  /** @type {((inputs?: Meta_Contacto_TitleInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Contacto_TitleInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_contacto_title();
    return en_meta_contacto_title();
  })
);
const pt_meta_contacto_desc = (
  /** @type {(inputs: Meta_Contacto_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Fala com a Moonlight. Conta-nos o desafio e voltamos com arquitetura, prazos e orçamento em 24h úteis.`
    );
  })
);
const en_meta_contacto_desc = (
  /** @type {(inputs: Meta_Contacto_DescInputs) => LocalizedString} */
  (() => {
    return (
      /** @type {LocalizedString} */
      `Talk to Moonlight. Tell us your challenge and we'll come back with architecture, timelines and a quote within 24 business hours.`
    );
  })
);
const meta_contacto_desc = (
  /** @type {((inputs?: Meta_Contacto_DescInputs, options?: { locale?: "pt" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Contacto_DescInputs, { locale?: "pt" | "en" }, {}>} */
  ((inputs = {}, options = {}) => {
    const locale = options.locale ?? getLocale();
    if (locale === "pt") return pt_meta_contacto_desc();
    return en_meta_contacto_desc();
  })
);
const ThemeCtx = reactExports.createContext({ theme: "light", toggle: () => {
} });
function ThemeProvider({ children }) {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    const stored = typeof localStorage !== "undefined" && localStorage.getItem("ml-theme");
    const t = stored ?? "light";
    setTheme(t);
  }, []);
  reactExports.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("ml-theme", theme);
    } catch {
    }
  }, [theme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCtx.Provider, { value: { theme, toggle: () => setTheme((t) => t === "dark" ? "light" : "dark") }, children });
}
const useTheme = () => reactExports.useContext(ThemeCtx);
const links = [
  { to: "/$locale/home", label: nav_inicio },
  { to: "/$locale/quem-somos", label: nav_quem_somos },
  { to: "/$locale/servicos", label: nav_servicos },
  { to: "/$locale/produtos", label: nav_produtos },
  { to: "/$locale/case-studies", label: nav_cases },
  { to: "/$locale/contacto", label: nav_contacto }
];
function Navbar() {
  const { theme, toggle } = useTheme();
  const locale = getLocale();
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-x-0 top-0 z-[90]",
        style: {
          height: "150px",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background: "linear-gradient(to bottom, var(--color-background) 0%, color-mix(in oklch, var(--color-background) 55%, transparent) 45%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.header,
      {
        initial: { y: -40, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: `fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${scrolled ? "py-2.5" : "py-4"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between rounded-2xl md:rounded-full px-4 md:px-6 py-2.5 nav-glass transition-all duration-500 ${scrolled ? "neon-shadow scale-[0.99]" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/$locale/home", params: { locale }, className: "flex items-center gap-2.5 group shrink-0", "aria-label": nav_aria_home(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg tracking-tight", children: [
              "Moonlight",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-0.5", "aria-label": nav_aria_main(), children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              params: { locale },
              activeOptions: { exact: l.to === "/$locale/home" },
              className: "relative px-3.5 py-2 text-sm font-medium text-muted-foreground rounded-full transition-colors duration-200 hover:text-foreground [&.active]:text-foreground",
              children: ({ isActive }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    layoutId: "nav-active",
                    transition: { type: "spring", stiffness: 380, damping: 32 },
                    className: "absolute inset-0 rounded-full bg-primary/12 ring-1 ring-primary/25"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: l.label() })
              ] })
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LangToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, { theme, toggle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "md:hidden text-foreground p-2 -mr-1", onClick: () => setOpen(true), "aria-label": nav_aria_open_menu(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" }) })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 z-[120] md:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/90 backdrop-blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { clipPath: "circle(0% at 90% 5%)" },
          animate: { clipPath: "circle(150% at 90% 5%)" },
          exit: { clipPath: "circle(0% at 90% 5%)" },
          transition: { duration: 0.6, ease: [0.85, 0, 0.15, 1] },
          className: "absolute inset-0 flex flex-col p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "p-2", "aria-label": nav_aria_close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-12 flex flex-col gap-6", "aria-label": nav_aria_mobile(), children: links.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { delay: 0.1 + i * 0.05 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                params: { locale },
                activeOptions: { exact: l.to === "/$locale/home" },
                onClick: () => setOpen(false),
                className: "text-4xl font-display tracking-tight text-muted-foreground transition-colors [&.active]:text-foreground [&.active]:[text-shadow:0_0_30px_var(--glow)]",
                children: l.label()
              }
            ) }, l.to)) })
          ]
        }
      )
    ] }) })
  ] });
}
function Logo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative size-8 grid place-items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-md opacity-70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 32 32", className: "relative size-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "moon-g", cx: "35%", cy: "35%", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.96 0.01 280)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--color-primary)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "11", fill: "url(#moon-g)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "13", r: "9", fill: "var(--color-background)" })
    ] })
  ] });
}
function LangToggle() {
  const active = getLocale();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center rounded-full glass border border-border/60 overflow-hidden font-mono text-[11px]", "aria-label": "Idioma / Language", children: ["pt", "en"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => {
        if (l !== active) setLocale(l);
      },
      "aria-label": l === "pt" ? "Português" : "English",
      "aria-pressed": l === active,
      className: `px-2.5 py-1.5 uppercase tracking-wider transition-colors ${l === active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
      children: l
    },
    l
  )) });
}
function ThemeToggle({ theme, toggle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      "data-magnetic": true,
      onClick: toggle,
      "aria-label": nav_aria_toggle_theme(),
      className: "relative h-9 w-16 rounded-full glass border border-border/60 overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          layout: true,
          transition: { type: "spring", stiffness: 400, damping: 28 },
          className: `absolute top-1 size-7 rounded-full grid place-items-center ${theme === "dark" ? "left-1 bg-gradient-to-br from-primary to-accent" : "left-8 bg-gradient-to-br from-amber-300 to-orange-400"}`,
          style: { boxShadow: "0 0 20px var(--glow)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "size-3.5 text-white" }) }, "m") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: { rotate: -90, opacity: 0 }, animate: { rotate: 0, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "size-3.5 text-white" }) }, "s") })
        }
      )
    }
  );
}
const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/moonlight.lda",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/moonlightcglobal/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/moonlight_lda/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
  }
];
function Footer() {
  const locale = getLocale();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative pt-20 pb-12 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none",
        style: {
          backgroundImage: "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 100%, black, transparent 70%)",
          opacity: 0.06
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 size-[500px] rounded-full pointer-events-none", style: { background: "var(--glow)", filter: "blur(120px)", opacity: 0.35 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-10 pt-12 border-t border-border/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/$locale/home", params: { locale }, className: "font-display text-xl", children: [
            "Moonlight",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground max-w-xs", children: [
            footer_tagline(),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: footer_tagline_accent() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.a,
            {
              href: "mailto:suporte@moonlight.pt",
              "data-magnetic": true,
              className: "mt-6 inline-flex items-center gap-3 text-sm font-mono group",
              children: [
                "suporte@moonlight.pt",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-8 rounded-full glass grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3.5" }) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4", children: footer_nav_heading() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$locale/quem-somos", params: { locale }, className: "hover:text-primary transition-colors", children: nav_quem_somos() }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$locale/servicos", params: { locale }, className: "hover:text-primary transition-colors", children: nav_servicos() }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$locale/produtos", params: { locale }, className: "hover:text-primary transition-colors", children: nav_produtos() }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$locale/case-studies", params: { locale }, className: "hover:text-primary transition-colors", children: footer_link_case_studies() }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$locale/contacto", params: { locale }, className: "hover:text-primary transition-colors", children: nav_contacto() }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4", children: footer_hq_heading() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
            "Portugal",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:suporte@moonlight.pt", className: "hover:text-primary transition-colors", children: "suporte@moonlight.pt" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+351214359495", className: "hover:text-primary transition-colors", children: "+351 214 359 495" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.moonlight.pt", className: "hover:text-primary transition-colors", children: "moonlight.pt" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex gap-3", children: socials.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.href, target: "_blank", rel: "noopener noreferrer", "aria-label": s.name, "data-magnetic": true, className: "size-9 rounded-full glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", className: "size-3.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: s.path }) }) }, s.name)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 1998–2026 Moonlight Comunicação Global LDA. All rights reserved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Privacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Cookies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "est. 1998 / online" })
        ] })
      ] })
    ] })
  ] });
}
function Cursor() {
  const dot = reactExports.useRef(null);
  const ring = reactExports.useRef(null);
  const [hidden, setHidden] = reactExports.useState(true);
  const [hover, setHover] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setHidden(false);
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      document.documentElement.style.setProperty("--mx", `${mx / window.innerWidth * 100}%`);
      document.documentElement.style.setProperty("--my", `${my / window.innerHeight * 100}%`);
      document.body.style.setProperty("--mx", `${mx / window.innerWidth * 100}%`);
      document.body.style.setProperty("--my", `${my / window.innerHeight * 100}%`);
      const t = e.target;
      setHover(!!t.closest("a,button,[data-magnetic]"));
    };
    const tick = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  if (hidden) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: dot,
        className: "pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full",
        style: {
          backgroundColor: "rgba(216, 197, 255, 0.22)",
          boxShadow: "0 0 10px rgba(216, 197, 255, 0.25), 0 0 3px rgba(216, 197, 255, 0.2)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: ring,
        className: "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full transition-[width,height,margin,opacity] duration-200",
        style: {
          width: hover ? 56 : 32,
          height: hover ? 56 : 32,
          marginLeft: hover ? -28 : -16,
          marginTop: hover ? -28 : -16,
          border: "1px solid rgba(216, 197, 255, 0.25)",
          backdropFilter: "invert(1) hue-rotate(180deg)",
          mixBlendMode: "difference",
          opacity: 0.85
        }
      }
    )
  ] });
}
function PageTransition({ children }) {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20, filter: "blur(12px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -10, filter: "blur(8px)" },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      children
    },
    location.pathname
  ) });
}
const appCss = "/assets/styles-De6awFGw.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/$locale/home", params: { locale: getLocale() }, className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90", children: "Go home" }) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router.invalidate();
        reset();
      }, className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/${getLocale()}/home`, className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent", children: "Go home" })
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: meta_default_title() },
      { name: "description", content: meta_default_desc() },
      { name: "author", content: "Moonlight" },
      { property: "og:title", content: "Moonlight — O futuro não espera" },
      { property: "og:description", content: "Tecnologia de próxima geração desde 1998." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Moonlight" },
      { property: "og:locale", content: getLocale() === "en" ? "en_US" : "pt_PT" },
      { property: "og:locale:alternate", content: getLocale() === "en" ? "pt_PT" : "en_US" },
      { property: "og:image", content: "https://www.moonlight.pt/apple-touch-icon.png" },
      { property: "og:image:alt", content: "Moonlight" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Moonlight — O futuro não espera" },
      { name: "twitter:description", content: "Tecnologia de próxima geração desde 1998." },
      { name: "twitter:image", content: "https://www.moonlight.pt/apple-touch-icon.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: getLocale(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Cursor, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./route-BFsOu0JM.mjs");
const Route$8 = createFileRoute("/$locale")({
  beforeLoad: ({
    params
  }) => {
    if (!isLocale(params.locale)) throw notFound();
  },
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const Route$7 = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$locale/home", params: { locale: getLocale() } });
  }
});
const Route$6 = createFileRoute("/$locale/")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/$locale/home", params: { locale: params.locale } });
  }
});
const BASE = "https://www.moonlight.pt";
const OG_LOCALE = { pt: "pt_PT", en: "en_US" };
function localizedHead(opts) {
  const locale = getLocale();
  const other = locale === "pt" ? "en" : "pt";
  const url = `${BASE}/${locale}/${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:locale", content: OG_LOCALE[locale] },
      { property: "og:locale:alternate", content: OG_LOCALE[other] }
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hreflang: "pt", href: `${BASE}/pt/${opts.path}` },
      { rel: "alternate", hreflang: "en", href: `${BASE}/en/${opts.path}` },
      { rel: "alternate", hreflang: "x-default", href: `${BASE}/pt/${opts.path}` }
    ]
  };
}
const $$splitComponentImporter$5 = () => import("./servicos-LOccay8a.mjs");
const Route$5 = createFileRoute("/$locale/servicos")({
  head: () => localizedHead({
    path: "servicos",
    title: meta_servicos_title(),
    description: meta_servicos_desc()
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./quem-somos-BPSdd0UM.mjs");
const Route$4 = createFileRoute("/$locale/quem-somos")({
  head: () => localizedHead({
    path: "quem-somos",
    title: meta_quemsomos_title(),
    description: meta_quemsomos_desc()
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./produtos-D0WJ0WfG.mjs");
const Route$3 = createFileRoute("/$locale/produtos")({
  head: () => localizedHead({
    path: "produtos",
    title: meta_produtos_title(),
    description: meta_produtos_desc()
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./home-Cvpw9TWU.mjs");
const Route$2 = createFileRoute("/$locale/home")({
  head: () => localizedHead({
    path: "home",
    title: meta_home_title(),
    description: meta_home_desc()
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./contacto-BAUk_o3S.mjs");
const Route$1 = createFileRoute("/$locale/contacto")({
  head: () => localizedHead({
    path: "contacto",
    title: meta_contacto_title(),
    description: meta_contacto_desc()
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./case-studies--PwDdWUi.mjs");
const Route = createFileRoute("/$locale/case-studies")({
  head: () => localizedHead({
    path: "case-studies",
    title: meta_cases_title(),
    description: meta_cases_desc()
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const LocaleRouteRoute = Route$8.update({
  id: "/$locale",
  path: "/$locale",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const LocaleIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => LocaleRouteRoute
});
const LocaleServicosRoute = Route$5.update({
  id: "/servicos",
  path: "/servicos",
  getParentRoute: () => LocaleRouteRoute
});
const LocaleQuemSomosRoute = Route$4.update({
  id: "/quem-somos",
  path: "/quem-somos",
  getParentRoute: () => LocaleRouteRoute
});
const LocaleProdutosRoute = Route$3.update({
  id: "/produtos",
  path: "/produtos",
  getParentRoute: () => LocaleRouteRoute
});
const LocaleHomeRoute = Route$2.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => LocaleRouteRoute
});
const LocaleContactoRoute = Route$1.update({
  id: "/contacto",
  path: "/contacto",
  getParentRoute: () => LocaleRouteRoute
});
const LocaleCaseStudiesRoute = Route.update({
  id: "/case-studies",
  path: "/case-studies",
  getParentRoute: () => LocaleRouteRoute
});
const LocaleRouteRouteChildren = {
  LocaleCaseStudiesRoute,
  LocaleContactoRoute,
  LocaleHomeRoute,
  LocaleProdutosRoute,
  LocaleQuemSomosRoute,
  LocaleServicosRoute,
  LocaleIndexRoute
};
const LocaleRouteRouteWithChildren = LocaleRouteRoute._addFileChildren(
  LocaleRouteRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  LocaleRouteRoute: LocaleRouteRouteWithChildren
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
