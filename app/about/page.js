import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "About - Zhang Dong Architecture",
  description: "About Zhang Dong Architecture",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Profile</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-light leading-relaxed mb-4">
              Zhang Dong is an architect offering residential design services to customers
              in the Bay Area and beyond.
            </p>
            <p className="text-lg font-light leading-relaxed">
              [Profile content to be added]
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

