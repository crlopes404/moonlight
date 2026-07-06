import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { getLocale } from "@/paraglide/runtime";
import { m } from "@/paraglide/messages";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/moonlight.lda",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/moonlightcglobal/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/moonlight_lda/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

export function Footer() {
  const locale = getLocale();
  return (
    <footer className="relative pt-20 pb-12 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 100%, black, transparent 70%)",
          opacity: 0.06,
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[500px] rounded-full pointer-events-none" style={{ background: "var(--glow)", filter: "blur(120px)", opacity: 0.35 }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10 pt-12 border-t border-border/50">
          <div className="md:col-span-2">
            <Link to="/$locale/home" params={{ locale }} className="font-display text-xl">Moonlight<span className="text-primary">.</span></Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              {m.footer_tagline()} <span className="text-foreground">{m.footer_tagline_accent()}</span>
            </p>
            <motion.a
              href="mailto:suporte@moonlight.pt"
              data-magnetic
              className="mt-6 inline-flex items-center gap-3 text-sm font-mono group"
            >
              suporte@moonlight.pt
              <span className="size-8 rounded-full glass grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowUpRight className="size-3.5" />
              </span>
            </motion.a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{m.footer_nav_heading()}</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/$locale/quem-somos" params={{ locale }} className="hover:text-primary transition-colors">{m.nav_quem_somos()}</Link></li>
              <li><Link to="/$locale/servicos" params={{ locale }} className="hover:text-primary transition-colors">{m.nav_servicos()}</Link></li>
              <li><Link to="/$locale/produtos" params={{ locale }} className="hover:text-primary transition-colors">{m.nav_produtos()}</Link></li>
              <li><Link to="/$locale/case-studies" params={{ locale }} className="hover:text-primary transition-colors">{m.footer_link_case_studies()}</Link></li>
              <li><Link to="/$locale/contacto" params={{ locale }} className="hover:text-primary transition-colors">{m.nav_contacto()}</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">{m.footer_hq_heading()}</div>
            <p className="text-sm">
              Portugal<br />
              <a href="mailto:suporte@moonlight.pt" className="hover:text-primary transition-colors">suporte@moonlight.pt</a><br />
              <a href="tel:+351214359495" className="hover:text-primary transition-colors">+351 214 359 495</a><br />
              <a href="https://www.moonlight.pt" className="hover:text-primary transition-colors">moonlight.pt</a>
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} data-magnetic className="size-9 rounded-full glass grid place-items-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-3.5">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <div>© 1998–2026 Moonlight Comunicação Global LDA. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            <span className="text-primary">est. 1998 / online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
