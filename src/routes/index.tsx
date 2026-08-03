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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/site/index.html" });
  },
  component: () => null,
});
