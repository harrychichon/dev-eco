# Architecture Documentation

This project follows a **Layered Architecture** pattern, which separates concerns into distinct layers.

## Layer Structure

### 1. Presentation Layer
**Location**: `app/`, `components/`

- **`app/`**: Next.js App Router pages and API routes
  - Contains page components and route handlers
  - Handles routing and page-level logic
  - API routes serve as the backend endpoints

- **`components/`**: Reusable UI components
  - `components/ui/`: Base UI components (buttons, inputs, etc.)
  - Other feature-specific components
  - Components should be presentational and receive data via props

### 2. Application Layer
**Location**: `services/`

- Business logic and service layer
- API client functions
- Data transformation and validation
- Orchestrates interactions between different parts of the application

### 3. Data/Infrastructure Layer
**Location**: `lib/`, `types/`

- **`lib/`**: Utility functions, helpers, and shared logic
  - Common utilities (e.g., `lib/utils.ts` for className merging)
  - Configuration helpers
  - Third-party integrations

- **`types/`**: TypeScript type definitions
  - Shared interfaces and types
  - API response types
  - Domain models

### 4. Static Assets
**Location**: `public/`

- Images, fonts, and other static files
- Served directly by Next.js

## Data Flow

```
User Interaction
    ↓
Presentation Layer (app/, components/)
    ↓
Application Layer (services/)
    ↓
Data Layer (lib/, types/)
    ↓
External APIs / Database
```

## Best Practices

1. **Separation of Concerns**: Each layer should only depend on layers below it
2. **Reusability**: Keep components and utilities generic and reusable
3. **Type Safety**: Use TypeScript types throughout all layers
4. **API Routes**: Use Next.js API routes (`app/api/`) for backend functionality
5. **Component Organization**: Group related components in feature folders when the project grows

## Example: Adding a New Feature

1. **Types** (`types/`): Define interfaces and types
2. **Services** (`services/`): Create service functions for business logic
3. **Components** (`components/`): Build UI components
4. **Pages** (`app/`): Create pages that use components and services
5. **API Routes** (`app/api/`): Create backend endpoints if needed

