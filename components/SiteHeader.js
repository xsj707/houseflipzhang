import Link from "next/link";
import config from "@/config";
import Navigation from "./Navigation";

export default function SiteHeader({ showNav = true }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="pointer-events-auto text-black font-bold text-xl hover:opacity-70 transition-opacity"
          >
            {config.appName}
          </Link>
          {showNav && <Navigation />}
        </div>
      </div>
    </header>
  );
}

