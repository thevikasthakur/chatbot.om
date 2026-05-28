"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
        ticking.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header-solid" : ""}`}>
      <a href="#top" className="site-header-logo" aria-label="chatbot.om, back to top">
        <Image
          src="/chabot-logo-light.webp"
          alt="chatbot.om"
          width={160}
          height={40}
          quality={90}
          className="site-logo site-logo-light"
        />
        <Image
          src="/chatbot-logo-dark.webp"
          alt="chatbot.om"
          width={160}
          height={40}
          quality={90}
          className="site-logo site-logo-dark"
        />
      </a>
    </header>
  );
}
