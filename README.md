# Zhang Dong Architecture

Website for Zhang Dong, an architect offering residential design services to customers in the Bay Area and beyond.

## Project Overview

This website showcases the architectural work of Zhang Dong and his team, featuring a homepage and content pages highlighting past residential design projects.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19, Tailwind CSS, DaisyUI
- **Backend**: Next.js API Routes
- **Database**: None - all assets managed locally
- **Authentication**: Single admin account (credentials in environment variables)
- **Content**: Static assets stored locally in `public/` directory

## Development

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Fill in your environment variables in `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Required environment variables (set in `.env.local`):

- `ADMIN_USERNAME` - Admin account username (default: "Zhang")
- `ADMIN_PASSWORD` - Admin account password (default: "ZhangDongSecrete1", **change when deploying**)

**Important**: Change the admin password in production to a secure value.

Optional variables (for future features):
- Various optional API keys for Stripe, Resend, etc. (see `.env.local` for full list)

## Project Structure

- `app/` - Next.js App Router pages and API routes
  - `app/admin/` - Admin area (protected, requires authentication)
- `components/` - React components
- `libs/` - Utility libraries and helpers
- `public/` - Static assets and images (all content managed locally)
- `config.js` - Application configuration

## Admin Area

The website includes an admin area accessible via `/admin` with a single admin account. Credentials are configured in `.env.local`:
- Username: Set via `ADMIN_USERNAME` (default: "Zhang")
- Password: Set via `ADMIN_PASSWORD` (default: "ZhangDongSecrete1")

**Security Note**: Always change the admin password before deploying to production.

## Build

```bash
npm run build
npm start
```

## License

Private project for Zhang Dong Architecture.
