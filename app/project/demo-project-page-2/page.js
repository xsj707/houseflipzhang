import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/libs/projects";
import { project } from "./data";

export const metadata = {
  title: `${project.title} - Zhang Dong Architecture`,
  description: project.description.substring(0, 160) + "...",
};

export default function DemoProjectPage2() {
  // Get other projects for "Related Projects" section
  const allProjects = getAllProjects();
  const otherProjects = allProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader showNav={true} />

      <main className="pt-24">
        {/* Back to projects link */}
        <div className="container mx-auto px-8 mb-8">
          <Link
            href="/projects"
            className="text-black hover:opacity-70 transition-opacity inline-flex items-center gap-2"
          >
            ← Back to projects
          </Link>
        </div>

        {/* Main image */}
        <div className="w-full h-[70vh] relative mb-16">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Project info */}
        <div className="container mx-auto px-8 mb-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-light mb-4">
              {project.title}
            </h1>
            <div className="text-sm text-black/70 mb-8">
              {project.type} · {project.location}
            </div>
            <div className="text-lg font-light leading-relaxed mb-12">
              {project.description}
            </div>

            {/* Additional images */}
            <div className="space-y-8 mb-16">
              {project.images.map((img, index) => (
                <div key={index} className="w-full aspect-video relative">
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>
              ))}
            </div>

            {/* Team section */}
            {project.team && project.team.length > 0 && (
              <div className="border-t border-black/10 pt-12 mb-16">
                <h2 className="text-2xl font-light mb-6">Project Team</h2>
                <div className="space-y-2">
                  {project.team.map((member, index) => (
                    <div key={index} className="text-black">
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Projects */}
            {otherProjects.length > 0 && (
              <div className="border-t border-black/10 pt-12">
                <h2 className="text-2xl font-light mb-8">Related Projects</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {otherProjects.map((relatedProject) => {
                    return (
                      <Link
                        key={relatedProject.slug}
                        href={`/project/${relatedProject.slug}`}
                        className="group"
                      >
                        <div className="aspect-square relative overflow-hidden mb-2">
                          <Image
                            src={relatedProject.mainImage}
                            alt={relatedProject.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="text-black">
                          <h3 className="font-semibold text-sm">
                            {relatedProject.title}
                          </h3>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

