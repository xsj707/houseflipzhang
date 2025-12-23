# Image Placeholders

The following images should be added to the `public/` directory when available:

- `placeholder-hero.jpg` - Full-page hero image for homepage (or any filename you prefer)
- `placeholder-project.jpg` - Project images for project pages (or any filename you prefer)

**Current Status:**
- Homepage currently shows a gradient background until the actual hero image is provided
- Project pages show gradient backgrounds until actual project images are provided

**To add images:**
1. Place your image files in the `public/` directory
2. Update the image paths in:
   - `app/page.js` - for homepage hero image (uncomment the Image component)
   - `app/projects/page.js` - for project listing images
   - `app/project/[slug]/page.js` - for individual project images

**Note:** When the actual hero image is provided, update the text color in `app/page.js` to ensure high contrast against the image.

