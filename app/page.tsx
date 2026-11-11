import Portfolio from "@/components/Portfolio";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Levent Kopuz",
  url: "https://leventkopuz.vercel.app",
  image: "https://leventkopuz.vercel.app/images/levent-color-original.jpg",
  jobTitle: "Product Innovation & Experience",
  sameAs: ["https://www.linkedin.com/in/leventkopuz/"],
  knowsAbout: [
    "Product Innovation",
    "Customer Experience",
    "Product Strategy",
    "Artificial Intelligence",
    "Startup Mentorship",
    "Program Management",
    "Community Building",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio />
    </>
  );
}
