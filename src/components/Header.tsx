"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        // Transparent at rest so the homepage hero video reads full-bleed,
        // solid the moment the page moves.
        scrolled || open
          ? "bg-ink/95 backdrop-blur border-border py-2.5"
          : "bg-transparent border-transparent py-3.5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label={`${site.name}, home`}>
            <Image
              src="/chabot-logo-light.webp"
              alt={site.name}
              width={1094}
              height={326}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
            {mainNav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground py-2"
                    aria-expanded={openMenu === item.label}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {openMenu === item.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-80 border border-line-strong bg-ink-2 p-1.5 shadow-2xl shadow-black/50">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block px-3 py-2.5 hover:bg-ink-3 transition-colors"
                          onClick={() => setOpenMenu(null)}
                        >
                          <span className="block text-sm font-medium">{c.label}</span>
                          {c.desc && (
                            <span className="block text-xs text-muted-foreground mt-0.5">
                              {c.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-started/"
              className="inline-flex h-9 items-center bg-lime px-4 text-sm font-medium text-ink hover:brightness-110 transition-[filter]"
            >
              Get the chatbot
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="inline-flex h-10 w-10 items-center justify-center hover:bg-ink-3"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="lg:hidden mt-3 pb-6 border-t border-border pt-4 space-y-1"
            aria-label="Mobile"
          >
            {mainNav.map((item) =>
              item.children ? (
                <details key={item.label} className="group">
                  <summary className="flex cursor-pointer items-center justify-between px-3 py-2 text-sm font-medium hover:bg-ink-3 list-none">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:bg-ink-3"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm font-medium hover:bg-ink-3"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-2 pt-3">
              <Link
                href="/get-started/"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center justify-center bg-lime px-4 text-sm font-medium text-ink"
              >
                Get the chatbot
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
