import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";

// Projects data - this will be managed statically
// When new projects are added, add them to this array
// IMPORTANT: Also add the full project data to /app/project/[slug]/page.js projects object
const projects = [
  {
    slug: "demo-project-page",
    title: "DEMO PROJECT",
    location: "BAY AREA, CA, US",
    image: "/images/placeholder-project.jpg",
  },
  // Add more projects here as they are created
];

export const metadata = {
  title: "Projects - Zhang Dong Architecture",
  description: "Portfolio of residential design projects by Zhang Dong Architecture",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-8">
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/project/${project.slug}`}
                className="group"
              >
                <div className="aspect-square relative overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-black">
                  <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-black/70">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

