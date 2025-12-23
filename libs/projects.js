// Utility to load all projects from individual project data files
// Each project is in its own folder: app/project/[project-name]/
// Each project has a data.js file that exports the project data

import { project as demoProjectPage } from "@/app/project/demo-project-page/data";
import { project as demoProjectPage2 } from "@/app/project/demo-project-page-2/data";
import { project as koreaNationalMuseum } from "@/app/project/korea-national-museum/data";

// Add new project imports here as you create them
// Each project should have a data.js file: app/project/[project-name]/data.js
// import { project as project4 } from "@/app/project/project-4-slug/data";

// Array of all project modules (imported from individual project pages)
const projectModules = [
  demoProjectPage,
  demoProjectPage2,
  koreaNationalMuseum,
  // Add new projects here as you create individual project folders
  // project4,
];

/**
 * Get all projects
 * @returns {Array} Array of all project objects
 */
export function getAllProjects() {
  return projectModules;
}

/**
 * Get a project by slug
 * @param {string} slug - The project slug
 * @returns {Object|null} The project object or null if not found
 */
export function getProjectBySlug(slug) {
  return projectModules.find((project) => project.slug === slug) || null;
}

/**
 * Get all project slugs (for generateStaticParams)
 * @returns {Array} Array of slug strings
 */
export function getAllProjectSlugs() {
  return projectModules.map((project) => project.slug);
}

/**
 * Get projects for listing page (with minimal data)
 * @returns {Array} Array of projects with slug, title, location, and image
 */
export function getProjectsForListing() {
  return projectModules.map((project) => ({
    slug: project.slug,
    title: project.title,
    location: project.location,
    image: project.image || project.mainImage,
  }));
}


