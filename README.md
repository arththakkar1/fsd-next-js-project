# PureBrush

A modern, animated landing page for PureBrush - built with Next.js, React, and Framer Motion.

## Features

- **Smooth Animations**: Powered by Framer Motion and Lenis smooth scroll
- **Interactive Components**: Magnetic cursor effects, tilt cards, and velocity-based animations
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Modern UI**: Clean and professional design with shadcn/ui components
- **Performance Optimized**: Built with Next.js 14+ for optimal loading speeds

## Project Structure

```
PureBrush/
├── app/                      # Next.js app directory
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── lenis.tsx            # Lenis smooth scroll setup
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── BestSellers.tsx      # Best selling products section
│   ├── ComparisonSection.tsx # Product comparison
│   ├── FaqNewsletter.tsx    # FAQ and newsletter signup
│   ├── Features.tsx         # Product features showcase
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── HowItWorks.tsx       # How it works section
│   ├── IngredientsSection.tsx # Ingredients showcase
│   ├── MagneticCursor.tsx   # Interactive cursor effect
│   ├── Motion.ts            # Motion variants and animations
│   ├── ScrollToLink.tsx     # Smooth scroll navigation
│   ├── SplitSection.tsx     # Split content layout
│   ├── StaggerReveal.tsx    # Staggered animation wrapper
│   ├── StatsSection.tsx     # Statistics display
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── TiltCard.tsx         # 3D tilt effect cards
│   ├── VelocityImageCard.tsx # Velocity-based image animations
│   ├── VideoShowcase.tsx    # Video presentation
│   ├── context/
│   │   └── LenisContext.tsx # Lenis scroll context
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── separator.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/purebrush.git
cd purebrush
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

## Development

The landing page consists of several key sections:

- **Hero**: Main header with call-to-action
- **Features**: Product features and benefits
- **How It Works**: Step-by-step guide
- **Best Sellers**: Featured products
- **Ingredients**: Product composition details
- **Comparison**: Product comparison table
- **Statistics**: Key metrics and achievements
- **Testimonials**: Customer reviews
- **Video Showcase**: Product demonstration
- **FAQ & Newsletter**: Common questions and email signup

## Component Architecture

### Animation Components

- `Motion.ts`: Centralized animation variants for consistency
- `StaggerReveal.tsx`: Wrapper for staggered child animations
- `MagneticCursor.tsx`: Interactive cursor following effect
- `TiltCard.tsx`: 3D tilt effect on hover
- `VelocityImageCard.tsx`: Scroll velocity-based animations

### Context

- `LenisContext.tsx`: Provides Lenis smooth scroll instance throughout the app

### UI Components

Built with shadcn/ui for consistent design system:

- Button
- Card
- Input
- Separator

## Customization

### Styling

Global styles are defined in `app/globals.css`. The project uses Tailwind CSS for utility-first styling.

### Animations

Animation variants can be customized in `components/Motion.ts`. Adjust timing, easing, and transitions as needed.

### Content

Update component content directly in their respective files under the `components/` directory.

## Performance Considerations

- Images should be optimized using Next.js Image component
- Lazy loading is implemented for below-the-fold content
- Animations are GPU-accelerated for smooth performance
- Code splitting is handled automatically by Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Contact

For questions or support, please contact the development team.
