import type { Metadata } from "next";

export const SITE_URL = "https://www.teenharbor.com";
export const SITE_NAME = "Teen Harbor";

/**
 * Builds per-page metadata with a canonical URL and matching Open Graph /
 * Twitter tags. Child metadata replaces (not merges) the parent's
 * openGraph object, so every page passes through this helper.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalOrganization", "MedicalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/teen-harbor-logo.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description:
    "Residential mental health and dual diagnosis treatment for adolescents ages 12–17 in Fresno, California.",
  telephone: "+1-559-234-1001",
  email: "info@teenharbor.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "895 S. Marks Ave",
    addressLocality: "Fresno",
    addressRegion: "CA",
    postalCode: "93706",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Central Valley, California" },
    { "@type": "State", name: "California" },
  ],
  medicalSpecialty: "Psychiatric",
};
