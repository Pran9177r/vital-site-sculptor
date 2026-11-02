import type { Metadata } from "next";
import Link from "next/link";

/**
 * A 404 is served with an HTTP 404 status, so it should never be indexed and
 * should not claim a canonical URL. `alternates`, `openGraph` and `twitter`
 * are explicitly cleared so this route does not inherit the homepage's
 * canonical and social tags from the root layout.
 *
 * `robots` must stay explicit: without it this route inherits the root
 * layout's `index, follow`, which would then contradict the `noindex` tag
 * Next.js injects for not-found routes.
 */
export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you were looking for could not be found. Browse Teen Harbor's adolescent treatment programs or contact our admissions team.",
  robots: { index: false, follow: true },
  alternates: null,
  openGraph: null,
  twitter: null,
};

const LINKS = [
  { href: "/treatment-and-services", label: "Treatment & Services" },
  { href: "/admissions", label: "Admissions" },
  { href: "/facility", label: "Our Facility" },
  { href: "/contact", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-5">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 text-center">
          <p className="text-sm font-semibold tracking-widest text-slate-400 uppercase mb-4">
            Error 404
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            This page could not be found
          </h1>
          <p className="text-slate-600 mb-10">
            The link may be out of date or the page may have moved. If you need to reach someone
            about a teen in crisis, call us at{" "}
            <a href="tel:5592341001" className="font-semibold text-brand underline">
              559-234-1001
            </a>
            .
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-brand-foreground font-semibold"
          >
            Back to home
          </Link>
          <div className="mt-10 pt-8 border-t border-slate-100">
            <p className="text-sm font-semibold text-slate-500 mb-4">Or try one of these pages</p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
