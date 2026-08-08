import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isSmallScreen() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

/** Observes an element once and toggles the `is-in` class when it enters view. */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  /** Reveal direction; defaults to a subtle fade-up. */
  variant?: "up" | "right" | "scale";
  /** Reveal immediately on mount (used for above-the-fold hero content). */
  immediate?: boolean;
};

/**
 * Adds reveal classes to its single child element without introducing any
 * extra DOM node, so layout, spacing and grid structure stay identical.
 */
export function Reveal({ children, delay = 0, variant = "up", immediate = false }: RevealProps) {
  const child = Children.only(children);
  const { ref, inView } = useInView<HTMLElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!isValidElement(child)) return <>{children}</>;

  const element = child as ReactElement<{
    className?: string;
    style?: CSSProperties;
    ref?: Ref<HTMLElement>;
  }>;

  const visible = immediate ? mounted : inView;

  return cloneElement(element, {
    ref,
    className: [
      element.props.className,
      `reveal reveal-${variant}`,
      visible ? "is-in" : undefined,
    ]
      .filter(Boolean)
      .join(" "),
    style: {
      ...element.props.style,
      ...(delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : null),
    },
  });
}

/**
 * Very subtle vertical parallax driven by transform only (no layout shift).
 * Disabled for reduced-motion users and on small screens.
 */
export function useParallax<T extends HTMLElement>(strength = 0.06) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || isSmallScreen()) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.setProperty("--parallax-y", `${(-progress * strength * 100).toFixed(2)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return ref;
}

/** True once the page has been scrolled past `offset` px. */
export function useScrolled(offset = 8) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return scrolled;
}

/**
 * Lenis-powered inertial smooth scrolling with anchor-link support.
 * Disabled entirely for reduced-motion users.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let lenis: { raf: (t: number) => void; scrollTo: (t: unknown, o?: unknown) => void; destroy: () => void } | null =
      null;
    let frame = 0;
    let cancelled = false;

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!target || !lenis) return;
      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -72, duration: 1.1 });
      history.replaceState(null, "", hash);
    };

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        touchMultiplier: 1.4,
several: undefined,
      } as never) as never;
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
      document.addEventListener("click", onClick);
    });

    return () => {
      cancelled = true;
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis?.destroy();
    };
  }, []);
}

/** Returns 0→1 scroll progress through the referenced element. */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return setProgress(0);
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { ref, progress };
}

/** Tracks which section id is currently in view for nav highlighting. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids.join(",")]);

  return active;
}
