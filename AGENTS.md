# Agent Guidelines for Juanita Web

## Build/Lint/Test Commands

- `bun run dev` - Start development server with TinaCMS
- `bun run build` - Build for production (TinaCMS + Next.js)
- `bun run build-local` - Build locally without cloud checks
- `bun run lint` - Run Biome linter
- No test framework configured - verify changes manually

## Code Style (Biome Configuration)

- **Formatting**: 2 spaces, single quotes, semicolons, line width 160
- **Imports**: Use `@/` for root imports, organize imports automatically
- **Types**: TypeScript strict mode, prefer explicit types when helpful
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Components**: Use function declarations, destructure props with types

## Framework Conventions

- **Next.js 15** with App Router, TinaCMS for content management
- **Styling**: Tailwind CSS with class-variance-authority for variants
- **UI Components**: Radix UI primitives in `components/ui/`
- **Utilities**: Use `cn()` from `@/lib/utils` for className merging
- **Error Handling**: Use React Error Boundaries, handle async errors gracefully

## File Structure

- `app/` - Next.js app router pages
- `components/` - Reusable components (ui/, blocks/, layout/)
- `content/` - MDX content files
- `tina/` - TinaCMS configuration
