# dev-eco

A Next.js project with Tailwind CSS, BiomeJS, and layered architecture.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: Tailwind UI (ready for Tailwind UI components)
- **Styling**: Tailwind CSS
- **Linting & Formatting**: BiomeJS
- **Language**: TypeScript
- **Architecture**: Layered Architecture

## Project Structure

```
dev-eco/
├── app/                    # Next.js App Router (pages and API routes)
│   ├── api/               # API routes (backend)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
├── lib/                   # Utility functions and helpers
├── services/              # Business logic and API services
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── ...config files
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run BiomeJS linter
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with BiomeJS
- `npm run type-check` - Run TypeScript type checking

## Architecture

This project follows a layered architecture pattern:

- **Presentation Layer** (`app/`, `components/`): UI components and pages
- **Application Layer** (`services/`): Business logic and service layer
- **Data Layer** (`lib/`, `types/`): Utilities, helpers, and type definitions
- **API Layer** (`app/api/`): API routes and endpoints

## License

MIT
