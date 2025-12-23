import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Cookies Policy - Zhang Dong Architecture",
  description: "Cookies policy for Zhang Dong Architecture",
};

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Cookies Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-light leading-relaxed mb-4">
              [Cookies policy content to be added]
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

