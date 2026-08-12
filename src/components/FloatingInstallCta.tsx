"use client";

import { useEffect, useRef, useState } from "react";
import { InstallRequestForm } from "@/components/InstallRequestForm";

/**
 * The persistent domain bar on the homepage. It retires once the reader
 * reaches the final call to action, so it never sits on top of the footer.
 */
export function FloatingInstallCta({ hideBelow }: { hideBelow: string }) {
  const [hidden, setHidden] = useState(false);
  const target = useRef<Element | null>(null);

  useEffect(() => {
    target.current = document.querySelector(hideBelow);
    const el = target.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hideBelow]);

  return (
    <div className="floating-cta" data-hidden={hidden || undefined} aria-hidden={hidden}>
      <InstallRequestForm ctaSource="hero-domain-cta" hideIdleStatus disabled={hidden} />
    </div>
  );
}
