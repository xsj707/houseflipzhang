import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata = {
  title: "Home Renovation Strategy Guide - Zhang Dong Architecture",
  description:
    "Deciding the best approach for modernizing your Bay Area home. Compare DIY, contractor, designer, and agency options to find the right renovation strategy.",
};

export default function RenovationStrategyGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              Home Renovation Strategies Key Differences
            </h1>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed">
              Deciding the best approach for modernizing your bay area home can
              be challenging. Let's explore which renovation strategy aligns with
              your vision and budget.
            </p>
          </div>
        </section>

        {/* Is This Guide For You Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Is This Guide for Bay Area Homeowners?
              </h2>
              <p className="text-lg text-black/70 mb-6">
                This guide is designed for{" "}
                <strong>Homeowners Seeking Modernization</strong> who are eager
                to refresh their space but are uncertain whether to go DIY, hire
                a contractor, engage a designer, or work with an agency.
                Consider this guide if you:
              </p>
              <ul className="space-y-3 text-black/70 mb-8">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Own a home in the bay area and want a modernized look.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Appreciate contemporary or personalized designs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Are concerned about budget surprises.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Seek professional advice but are unsure of the right level
                    of involvement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-black mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Want to avoid time-consuming renovation pitfalls.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Default Strategy Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Default Renovation Strategy for Homeowners
              </h2>
              <p className="text-lg text-black/70 leading-relaxed">
                Most bay area <strong>Homeowners Seeking Modernization</strong>{" "}
                should consider engaging a professional service like a Designer
                or our{" "}
                <Link
                  href="/services"
                  className="text-black underline hover:opacity-70 transition-opacity"
                >
                  Residential Remodeling Design Service
                </Link>{" "}
                for a seamless experience and no surprise costs. DIY might be
                appealing for those with renovation experience and a tight
                budget, while a contractor suits those comfortable with managing
                project details. However, a tailored agency can provide
                comprehensive guidance and execution when customization is key.
              </p>
            </div>
          </div>
        </section>

        {/* Factors to Evaluate Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Factors Homeowners Should Evaluate
              </h2>
              <p className="text-lg text-black/70 mb-8">
                It's crucial to weigh several factors when choosing your
                renovation approach:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-light mb-2">
                    <strong>Budget:</strong> Consider how much control you want
                    over expenses and if surprise costs are a concern.
                  </h3>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">
                    <strong>Time:</strong> Evaluate how much personal time and
                    effort you can dedicate.
                  </h3>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">
                    <strong>Control:</strong> Decide how much input you want in
                    the design and execution.
                  </h3>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">
                    <strong>Expertise:</strong> Consider whether professional
                    expertise is needed to achieve your desired outcome.
                  </h3>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">
                    <strong>Risk:</strong> Assess the potential risks of delays
                    or cost overruns.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weighing Options Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Weighing Your Home Renovation Options
              </h2>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                When it comes to home renovation, options include doing it
                yourself, hiring a contractor, working with a designer, or
                employing an agency like our{" "}
                <Link
                  href="/services"
                  className="text-black underline hover:opacity-70 transition-opacity"
                >
                  Residential Remodeling Design Service
                </Link>
                . Let's compare these to see which aligns best with your bay
                area home modernization goals.
              </p>
            </div>
          </div>
        </section>

        {/* Pros and Cons Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Pros and Cons of Each Approach
              </h2>
              <p className="text-lg text-black/70 mb-8">
                Choosing the right renovation strategy depends on your
                priorities:
              </p>
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>DIY:</strong>
                  </h3>
                  <p className="text-black/70">
                    Choose this if you want full control and have the skills and
                    time, but be prepared for the risk of costly mistakes.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>Contractor:</strong>
                  </h3>
                  <p className="text-black/70">
                    Opt for a contractor if you prefer delegating the labor but
                    can oversee project management.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>Designer:</strong>
                  </h3>
                  <p className="text-black/70">
                    Ideal for those seeking professional input and a cohesive
                    vision but who can handle separate contractor negotiations.
                  </p>
                </div>
                <div className="border-l-4 border-black pl-6">
                  <h3 className="text-2xl font-light mb-3">
                    <strong>Agency:</strong>
                  </h3>
                  <p className="text-black/70">
                    Consider our{" "}
                    <Link
                      href="/services"
                      className="text-black underline hover:opacity-70 transition-opacity"
                    >
                      Residential Remodeling Design Service
                    </Link>{" "}
                    if you desire a comprehensive, stress-free process with a
                    clear budget and final result assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When Our Service Is Ideal Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                When Our Design Service Is Ideal
              </h2>
              <p className="text-lg text-black/70 mb-6 leading-relaxed">
                Our{" "}
                <Link
                  href="/services"
                  className="text-black underline hover:opacity-70 transition-opacity"
                >
                  Residential Remodeling Design Service
                </Link>{" "}
                is an excellent fit when you're looking for a stress-free
                renovation in the bay area. We manage the entire process from
                design to execution, ensuring your vision comes to life without
                unexpected costs due to our 'No Surprise Cost' guarantee. This
                offers peace of mind, especially for those who value clarity and
                expert oversight throughout the renovation process.
              </p>
            </div>
          </div>
        </section>

        {/* Steps to Decision Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Steps to Make Your Renovation Decision
              </h2>
              <p className="text-lg text-black/70 mb-8">
                To move forward confidently, consider taking these steps:
              </p>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    1
                  </div>
                  <p className="text-black/70 pt-1">
                    List your budget, timeline, and design priorities.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    2
                  </div>
                  <p className="text-black/70 pt-1">
                    Evaluate your comfort level with project management.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    3
                  </div>
                  <p className="text-black/70 pt-1">
                    Reach out to our{" "}
                    <Link
                      href="/services"
                      className="text-black underline hover:opacity-70 transition-opacity"
                    >
                      Residential Remodeling Design Service
                    </Link>{" "}
                    to discuss your needs and get detailed insights.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    4
                  </div>
                  <p className="text-black/70 pt-1">
                    Schedule consultations with potential contractors or
                    designers to compare approaches.
                  </p>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-light text-sm">
                    5
                  </div>
                  <p className="text-black/70 pt-1">
                    Decide which approach fits your renovation goals and
                    lifestyle best.
                  </p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-black/10">
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-4 text-lg font-light hover:bg-black/90 transition-colors"
                >
                  Get Started with a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

