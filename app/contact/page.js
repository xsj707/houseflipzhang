import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Contact - Zhang Dong Architecture",
  description: "Contact Zhang Dong Architecture",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light mb-8">Contact</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-light leading-relaxed mb-4">
              Get in touch with Zhang Dong Architecture.
            </p>
            <div className="space-y-4 mt-8">
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a
                  href="mailto:contact@zhangdongarchitecture.com"
                  className="text-black hover:opacity-70 transition-opacity"
                >
                  contact@zhangdongarchitecture.com
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-black hover:opacity-70 transition-opacity"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

