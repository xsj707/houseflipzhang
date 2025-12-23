import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left side - Legal links */}
          <div className="flex flex-col gap-2">
            <Link
              href="/legal-notice"
              className="text-sm text-black hover:opacity-70 transition-opacity"
            >
              Legal notice
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-black hover:opacity-70 transition-opacity"
            >
              Privacy policy
            </Link>
            <Link
              href="/cookies-policy"
              className="text-sm text-black hover:opacity-70 transition-opacity"
            >
              Cookies policy
            </Link>
          </div>

          {/* Right side - Social and contact */}
          <div className="flex flex-col items-end gap-4">
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black hover:opacity-70 transition-opacity"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Contact info */}
            <div className="flex flex-col items-end gap-1 text-sm">
              <a
                href="tel:+1234567890"
                className="text-black hover:opacity-70 transition-opacity"
              >
                T +1 (234) 567-890
              </a>
              <a
                href="mailto:contact@zhangdongarchitecture.com"
                className="text-black hover:opacity-70 transition-opacity"
              >
                contact@zhangdongarchitecture.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

