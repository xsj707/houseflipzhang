"use client";

import SiteHeader from "@/components/SiteHeader";
import Image from "next/image";

export default function HomePage() {
  // Placeholder image - will be replaced with actual image later
  // For now, using gradient background until actual image is provided
  const heroImage = "/images/placeholder-hero.jpg";

  // Description text with high contrast color (manually picked to contrast with image)
  // Color will be adjusted based on actual image provided
  const descriptionText =
    "Residential design services by Zhang Dong and his team. Serving the Bay Area and beyond with custom architectural solutions.";

  return (
    <div className="relative min-h-screen">
      <SiteHeader showNav={true} />

      {/* Full page hero image */}
      <div className="fixed inset-0 z-0">
        {/* Full-screen hero image */}
        <Image
          src={heroImage}
          alt="Zhang Dong Architecture"
          fill
          priority
          className="object-cover"
          style={{ objectFit: "cover" }}
        />
        {/* Subtle overlay to keep text legible */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Description text at bottom */}
      <div className="fixed bottom-8 left-8 right-8 md:left-16 md:right-16 z-20">
        <p
          className="text-lg md:text-xl font-light max-w-2xl"
          style={{
            color: "#ffffff", // High contrast white - adjust based on actual image
            textShadow: "0 2px 4px rgba(0,0,0,0.3)", // Subtle shadow for readability
          }}
        >
          {descriptionText}
        </p>
      </div>
    </div>
  );
}
