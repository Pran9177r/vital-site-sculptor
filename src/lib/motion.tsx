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
