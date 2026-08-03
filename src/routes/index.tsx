import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is a pure static HTML/CSS/vanilla-JS build served from /site/.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MERIDIAN — Construction & Architectural Engineering" },
      {
        name: "description",
        content:
          "Meridian builds precision architecture: structural engineering, design-build delivery and architectural visualization for towers, campuses and infrastructure.",
      },
      { property: "og:title", content: "MERIDIAN — Construction & Architectural Engineering" },
      {
        property: "og:description",
        content:
          "Precision architecture, structural engineering and design-build delivery. 20+ years, 150+ completed projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dimensional-build-studio.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://dimensional-build-studio.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Meridian",
          url: "https://dimensional-build-studio.lovable.app/",
          telephone: "+31 20 000 0000",
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "Keileweg 24",
              addressLocality: "Rotterdam",
              addressCountry: "NL",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "Havenstraat 8",
              addressLocality: "Antwerp",
              addressCountry: "BE",
            },
          ],
          makesOffer: ["Architecture", "Structural Engineering", "Construction"].map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s },
          })),
        }),
      },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/site/index.html" });
  },
  component: () => null,
});
