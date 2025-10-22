# Scent Atelier - Luxury Perfume Brand Website

## Overview

Scent Atelier is a luxury perfume brand website designed to showcase handcrafted fragrances through an elegant, image-driven experience. The platform presents products, brand story, advertising campaigns, and provides an online ordering system for customers to purchase exclusive perfumes. The website emphasizes sophistication, visual storytelling, and emotional connection with the brand.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight React Router alternative)
- TanStack Query (React Query) for server state management and data fetching
- Tailwind CSS for utility-first styling with custom design system

**Design System:**
- shadcn/ui component library with "new-york" style variant
- Custom luxury brand color palette (Cream White, Gold, Charcoal Gray, Soft Pink, Coffee Brown)
- Typography system using Playfair Display (serif) for headings and Poppins (sans-serif) for body text
- Dark/light theme support with CSS variables and localStorage persistence

**Component Structure:**
- Page-based routing with dedicated components for Home, Products, About, Adverts, and Shop
- Reusable UI components from shadcn/ui (buttons, forms, cards, dialogs, etc.)
- Custom components including Navigation (with theme toggle), Footer, Marquee (scrolling text), and PromoFrame
- Responsive design with mobile-first approach

**State Management:**
- React Query for server state (products, orders)
- Local React state for forms and UI interactions
- Custom toast notifications hook for user feedback

### Backend Architecture

**Technology Stack:**
- Node.js with Express.js for REST API server
- TypeScript for type safety across the stack
- In-memory storage implementation (MemStorage class) for development/demo
- Drizzle ORM configured for PostgreSQL (prepared for production database)

**API Design:**
- RESTful endpoints following resource-based conventions
- GET /api/products - Retrieve all products
- GET /api/products/:id - Retrieve single product
- POST /api/orders - Create new order
- GET /api/orders - Retrieve all orders (admin endpoint)

**Server Architecture:**
- Express middleware for JSON parsing with raw body access
- Custom logging middleware for API request tracking
- Vite development server integration in development mode
- Static file serving for production builds

**Validation:**
- Zod schemas for runtime type validation
- Drizzle-Zod integration for database schema validation
- Server-side validation on order creation endpoint

### Data Storage Solutions

**Development Storage:**
- In-memory Map-based storage (MemStorage class)
- Pre-initialized with three sample products (L'Amour, Noir Essence, Soleil)
- Implements IStorage interface for easy swapping to database implementation

**Production-Ready Schema:**
- Drizzle ORM schema defined for PostgreSQL
- Products table: id, name, type, price, description, image
- Orders table: id, name, email, phone, productId, productName, quantity, deliveryAddress
- Schema uses TypeScript types exported for type safety

**Database Configuration:**
- Neon Database serverless PostgreSQL driver configured
- Connection pooling via @neondatabase/serverless
- Drizzle Kit for schema migrations
- Environment variable-based database URL configuration

### External Dependencies

**Third-Party UI Libraries:**
- Radix UI primitives for accessible, unstyled components (accordion, dialog, dropdown, select, toast, etc.)
- Embla Carousel for image carousels
- Lucide React for icon system
- cmdk for command palette functionality
- class-variance-authority for type-safe component variants

**Development Tools:**
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- ESBuild for server-side bundling in production
- PostCSS with Autoprefixer for CSS processing

**Database & ORM:**
- Drizzle ORM for type-safe database queries
- Neon Database serverless driver for PostgreSQL
- connect-pg-simple for potential session storage

**Utilities:**
- date-fns for date manipulation
- nanoid for unique ID generation
- tailwind-merge and clsx for conditional class name composition
- zod for schema validation

**Form Management:**
- React Hook Form for form state management
- @hookform/resolvers for Zod schema integration

**Asset Management:**
- Generated product images stored in attached_assets folder
- Image imports using Vite's asset handling
- Static assets served from public directory in production