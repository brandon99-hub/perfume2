# Scent Atelier - The Art of Fragrance

## Project Overview

Scent Atelier is a luxurious, multi-page perfume brand website showcasing handcrafted fragrances with an elegant, image-driven design that evokes the experience of walking through an art gallery of scents.

**Status:** ✅ Completed MVP - All features implemented and tested
**Last Updated:** October 22, 2025

## Architecture

### Tech Stack
- **Frontend:** React 18 with Wouter routing, TypeScript
- **Backend:** Express.js with in-memory storage
- **Styling:** Tailwind CSS with custom design tokens
- **State Management:** TanStack Query v5
- **UI Components:** Shadcn UI with Radix primitives
- **Form Handling:** React Hook Form with Zod validation
- **Typography:** Playfair Display (headings), Poppins (body)

### Design System

**Color Palette:**
- Cream White: #FFF8F2 (--background light mode)
- Gold: #CDAA7D (--primary)
- Charcoal Gray: #333333 (--foreground)
- Soft Pink: #EACBC3 (--accent)
- Coffee Brown: #5A3E36

**Design Principles:**
- Luxury perfume brand aesthetic
- Generous spacing and breathing room
- Elegant serif headings, clean sans-serif body
- Dark mode support with theme toggle
- NO emoji - only Lucide React icons
- Responsive design across all breakpoints

## Pages & Features

### 1. Home (/)
- Hero section with background image and dark gradient overlay
- Marquee scrolling announcement
- Brand introduction with cream background overlay
- "Explore Collection" CTA button
- Three feature cards (Handcrafted, Premium Quality, Timeless Elegance) with Lucide icons
- Footer with credits

### 2. Products (/products)
- Elegant product table with headers: Image, Product Name, Type, Price, Description
- Three products: L'Amour (Floral, Ksh 5,500), Noir Essence (Woody, Ksh 6,800), Soleil (Citrus, Ksh 4,900)
- Internal anchor links on product names to detailed sections
- Promotional frames sidebar: "Special Offer" (Buy 2 Get 1 Free), "New Arrivals"
- Detailed product sections with larger images and full descriptions
- Alternating row colors with hover effects

### 3. About (/about)
- Hero section with workshop background image
- Brand story: "Founded in 2025, Scent Atelier emerged from a passion for olfactory art..."
- Philosophy and Craft sections in accent cards
- CTAs to Products page and Home

### 4. Adverts (/adverts)
- Marquee: "Limited Edition: Noir Essence now available in exclusive 50ml bottles!"
- Campaign title: "The Essence of Confidence - New 2025 Campaign"
- Campaign poster image
- Campaign description and values
- Featured products list with Sparkles icons
- Dark elegant gradient background for campaign poster

### 5. Shop (/shop)
- Hero section with shop counter background image
- Order form with fields:
  - Name (text)
  - Email (email)
  - Phone (tel)
  - Product Selection (dropdown with all products)
  - Quantity (number)
  - Delivery Address (textarea)
- Shipping fees table (5 locations: Nairobi, Mombasa, Kisumu, Nakuru, Other Counties)
- Order process steps explanation
- Form validation with Zod schema
- Success toast notification on submission
- Form reset after successful order

## API Endpoints

### Products
- `GET /api/products` - Returns all products
- `GET /api/products/:id` - Returns single product by ID

### Orders
- `POST /api/orders` - Creates new order
  - Request body: `{ name, email, phone, productId, quantity (number), deliveryAddress }`
  - Response: `201 Created` with order object including generated ID and productName
- `GET /api/orders` - Returns all orders (admin endpoint)

## Data Models

### Product
```typescript
{
  id: string;           // "lamour", "noir-essence", "soleil"
  name: string;         // "L'Amour", "Noir Essence", "Soleil"
  type: string;         // "Floral", "Woody", "Citrus"
  price: number;        // 5500, 6800, 4900
  description: string;
  image: string;
}
```

### Order
```typescript
{
  id: string;              // UUID (auto-generated)
  name: string;
  email: string;
  phone: string;
  productId: string;
  productName: string;     // Auto-populated from product
  quantity: number;
  deliveryAddress: string;
}
```

## Component Structure

### Shared Components
- `Navigation.tsx` - Sticky header with logo, page links, theme toggle
- `Footer.tsx` - Credits and copyright
- `Marquee.tsx` - Scrolling text announcements
- `PromoFrame.tsx` - Promotional cards

### Pages
- `Home.tsx` - Landing page with hero and features
- `Products.tsx` - Product listing with table and details
- `About.tsx` - Brand story and philosophy
- `Adverts.tsx` - Campaign showcase
- `Shop.tsx` - Order form and shipping info

## Generated Assets

All perfume images generated using AI image generation:
- `Luxury_perfume_bottle_hero_background_2f0f6cc2.png` - Home hero
- `L'Amour_floral_perfume_bottle_5bc1d7c3.png` - L'Amour product
- `Noir_Essence_woody_perfume_e46f0709.png` - Noir Essence product
- `Soleil_citrus_perfume_bottle_00ba1e93.png` - Soleil product
- `Perfume_atelier_workshop_background_f87dc6d2.png` - About page
- `Campaign_advertisement_poster_591c74a9.png` - Adverts page
- `Shop_counter_background_0905fcef.png` - Shop page

Images imported via `@assets` alias configured in vite.config.ts.

## Key Implementation Details

### Theme System
- Light/dark mode toggle in navigation
- Persisted in localStorage with key "theme"
- Toggles `.dark` class on `document.documentElement`
- All color tokens adapt automatically via CSS variables

### Form Handling
- Controlled components with React state
- Quantity converted from string to number before API submission
- Zod validation on backend
- Success toast with form reset
- Error toast on failure

### Routing
- Wouter for client-side routing
- No page reloads, smooth transitions
- Active link highlighting in navigation

### Icons
- Lucide React icons only (NO emoji per design guidelines)
- Used icons: Flower2, Sparkles, Heart, Moon, Sun

## Testing

✅ All end-to-end tests passed:
- Navigation between all pages
- Hero sections and marquees
- Product table display and anchor links
- Promotional frames visibility
- Order form submission (POST returns 201)
- Success toast and form reset
- Theme toggle persistence
- Responsive design
- Icon display (no emoji)

## Running the Project

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check
```

Server runs on port 5000 (both frontend Vite server and Express backend).

## Future Enhancements (Nice to Have)

- Shopping cart functionality
- Product detail pages with larger galleries
- Customer testimonials and reviews
- Email notifications for order confirmations
- Admin dashboard for order management
- Product search and filtering
- User authentication
- Payment integration
- Product reviews and ratings

## Important Notes

1. **NO emoji allowed** - Use Lucide React icons only (per design guidelines)
2. **Quantity field** - Must convert to number before API submission
3. **Images** - Use @assets alias, all images in attached_assets/generated_images/
4. **Forms** - React Hook Form + Zod validation required
5. **Typography** - Playfair Display (serif) for headings, Poppins (sans) for body
6. **Color tokens** - Defined in index.css, use Tailwind utility classes
7. **Theme** - Must support both light and dark modes
8. **Storage** - In-memory (MemStorage) with initial products seeded

## Credits

**Student:** [Your Name]  
**Registration Number:** [Your Registration Number]  
**Project:** Scent Atelier - The Art of Fragrance  
**Completion Date:** October 22, 2025
