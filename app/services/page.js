import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services - Zhang Dong Architecture",
  description:
    "Transform your Bay Area home with our expert remodeling design service. Custom solutions, professional design, and no surprise costs. Get your quote today.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Modernize Your Space with Confidence
            </h1>
            <p className="text-lg md:text-xl text-black/70 mb-8 leading-relaxed">
              Transform your Bay Area home with our expert remodeling design
              service, ensuring a sleek, modernized space that meets your unique
              style.
            </p>
            <div className="mb-8">
              <Link
                href="/services/renovation-strategy-guide"
                className="text-black underline hover:opacity-70 transition-opacity text-sm"
              >
                → Learn about different renovation strategies
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-sm text-black/60">
                <svg
                  className="w-5 h-5 text-green-600"
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
                Custom solutions for your lifestyle
              </div>
              <div className="flex items-center gap-2 text-sm text-black/60">
                <svg
                  className="w-5 h-5 text-green-600"
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
                Professional design for lasting appeal
              </div>
              <div className="flex items-center gap-2 text-sm text-black/60">
                <svg
                  className="w-5 h-5 text-green-600"
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
                No surprise costs
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 text-lg font-light hover:bg-black/90 transition-colors"
            >
              Get Your Quote Today
            </Link>
            <p className="mt-6 text-sm text-black/60">
              <strong>No Surprise Cost Guarantee:</strong> Your peace of mind is
              our priority.
            </p>
            <p className="mt-4 text-sm text-black/50">
              Trusted by 100+ Bay Area homeowners
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
                Transform Your Home Effortlessly
              </h2>
              <p className="text-lg text-black/70 mb-12 text-center max-w-2xl mx-auto">
                As a Bay Area homeowner looking to modernize, you need
                solutions that are seamless and tailored. Our design service
                enhances your living space beautifully.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light mb-2">
                    Enjoy revitalized living spaces
                  </h3>
                  <p className="text-black/60 text-sm">
                    Create beautiful, functional spaces that reflect your
                    lifestyle and enhance your daily living experience.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light mb-2">
                    Increase your home's market value
                  </h3>
                  <p className="text-black/60 text-sm">
                    Strategic design improvements that enhance both aesthetics
                    and property value for long-term investment returns.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-light mb-2">
                    Reduce future maintenance hassles
                  </h3>
                  <p className="text-black/60 text-sm">
                    Quality materials and thoughtful design choices that minimize
                    ongoing maintenance and maximize durability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
                Proven Expertise & Client Satisfaction
              </h2>
              <p className="text-lg text-black/70 mb-12 text-center max-w-2xl mx-auto">
                You're in good hands with our decades of experience and numerous
                satisfied clients in the Bay Area.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2 text-black">
                    20+
                  </div>
                  <p className="text-black/70">years of industry experience</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2 text-black">
                    Award-winning
                  </div>
                  <p className="text-black/70">design team</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2 text-black">
                    200+
                  </div>
                  <p className="text-black/70">5-star client reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
                How It Works
              </h2>
              <p className="text-lg text-black/70 mb-12 text-center max-w-2xl mx-auto">
                Experience a structured, straightforward process from consultation
                to your finished dream home.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Initial consultation to define your vision
                    </h3>
                    <p className="text-black/60">
                      We meet with you to understand your goals, lifestyle needs,
                      and design preferences. This collaborative session sets the
                      foundation for your project.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Design phase with draft and feedback
                    </h3>
                    <p className="text-black/60">
                      Our team creates detailed design proposals with
                      visualizations. You review and provide feedback, and we
                      refine until it's perfect.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Finalization and detailed quote
                    </h3>
                    <p className="text-black/60">
                      Once the design is approved, we provide a comprehensive,
                      transparent quote with no hidden costs. Our "No Surprise
                      Cost" guarantee ensures clarity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Project execution with regular updates
                    </h3>
                    <p className="text-black/60">
                      We manage the entire project with regular communication and
                      updates. You stay informed every step of the way.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-light text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">
                      Completion and walkthrough
                    </h3>
                    <p className="text-black/60">
                      We conduct a final walkthrough with you to ensure
                      everything meets our high standards and your expectations.
                      Your satisfaction is our priority.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Get Started on Your Modernization Journey
              </h2>
              <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
                Let's bring your modern home vision to life. Our 'No Surprise
                Cost' guarantee gives you peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-4 text-lg font-light hover:bg-black/90 transition-colors"
                >
                  Contact us today
                </Link>
                <Link
                  href="/contact"
                  className="inline-block border border-black text-black px-8 py-4 text-lg font-light hover:bg-black hover:text-white transition-colors"
                >
                  Schedule a free consultation
                </Link>
              </div>
              <p className="text-sm text-black/60">
                Receive your personalized quote
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

