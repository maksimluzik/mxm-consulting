# MXM Consulting Website

Professional IT consulting website built with Jekyll and hosted on GitHub Pages. This repository contains the source code for [mxm-consulting.fi](https://mxm-consulting.fi), showcasing MXM Consulting's expertise in AI development, cloud architecture, software development, and digital transformation services.

## About MXM Consulting

MXM Consulting is a leading IT consultancy in Finland specializing in:
- **Artificial Intelligence & Machine Learning** - Custom ChatGPT development, AI tool creation, LLM solutions
- **Cloud Architecture** - AWS, Google Cloud, Azure solutions and migrations
- **Software Development** - Cross-platform mobile apps, progressive web applications, microservices
- **Digital Transformation** - Technical due diligence, automation, DevOps, process optimization
- **IT Management** - Team collaboration, agile methodologies, strategic technology planning

## Website Features

### Core Features
- **Professional Design** - Clean, modern layout with MXM Consulting branding
- **Responsive Layout** - Mobile-first design optimized for all devices
- **SEO Optimized** - Comprehensive metadata, Open Graph, LinkedIn integration
- **Client Showcase** - Interactive client logos including KnowU, Nordea, Tori, and more
- **Contact Integration** - Professional contact form powered by Formspree
- **Smooth Navigation** - Active navigation states and smooth scrolling animations
- **GDPR Compliant** - Complete privacy policy and data protection measures

### New Features (2025 Updates)
- **Portfolio Organization** - Dedicated portfolio section with project showcase and organized structure
- **Interactive Homepage Slideshow** - Windows-style horizontal scrollable expertise slideshow with touch/swipe support
- **Capitol Conquest Game** - Strategic hexagonal grid game showcasing web development and AI expertise
- **KnowU Product Page** - Dedicated showcase for MXM's KnowU personality assessment platform
- **Headliner AI Tool** - Custom ChatGPT for news article summarization with Finnish news optimization
- **Enhanced Services Page** - Visual service grids with icons and comprehensive delivery models
- **Interactive About Page** - Visual approach cards, technology grids, and industry tags
- **Modular JavaScript Architecture** - Separated JavaScript functionality with external file loading
- **Compact Footer Navigation** - Streamlined quick links with improved spacing
- **Visual Service Delivery Models** - On-site, remote, and hybrid consulting options

## Site Structure

```
mxm-consulting/
├── _config.yml              # Jekyll configuration and site metadata
├── _includes/               # Reusable components
│   ├── header.html          # Navigation with portfolio organization
│   ├── footer.html          # Compact footer with quick links
│   └── google-analytics.html # Analytics integration
├── _posts/                  # Blog posts (Jekyll default)
├── assets/
│   ├── main.scss           # Enhanced stylesheet with slideshow and grid layouts
│   ├── js/                 # JavaScript functionality
│   │   └── slideshow.js    # Interactive slideshow for homepage expertise section
│   └── img/                # Images, service icons, and logos
│       ├── clients/        # Client company logos (Nordea, Tori, KnowU, etc.)
│       ├── know-u-logo-big-grey.png # KnowU branding
│       ├── headliner-screenshot.png # Headliner tool screenshot
│       ├── capitol-conquest-splash_square.png # Game screenshot
│       └── *.png           # Service icons (cloud, AI, app, automation, etc.)
├── index.markdown          # Homepage with interactive expertise slideshow
├── about.markdown          # Enhanced about page with visual approach cards
├── services.markdown       # Services page with visual grids and delivery models
├── portfolio.markdown      # Portfolio overview with project showcase
├── portfolio/              # Portfolio section (organized under /portfolio/ URLs)
│   ├── knowu.markdown      # KnowU product showcase page (/portfolio/knowu/)
│   ├── game.markdown       # Capitol Conquest game showcase (/portfolio/game/)
│   └── news-proxy.markdown # Headliner ChatGPT tool demonstration (/portfolio/news-proxy/)
├── privacy-policy.markdown # GDPR-compliant privacy policy
├── sitemap.xml             # Dynamic sitemap generation
├── Makefile               # Development and deployment automation
└── README.md              # This documentation
```
├── about.markdown          # Enhanced about page with visual approach cards
├── services.markdown       # Services page with visual grids and delivery models
├── knowu.markdown          # KnowU product showcase page
├── news-proxy.markdown     # Headliner ChatGPT tool demonstration
├── privacy-policy.markdown # GDPR-compliant privacy policy
├── Makefile               # Development and deployment automation
└── README.md              # This documentation
```

## Page Overview

### Homepage (`index.markdown`)
- **Hero Section** - IT consulting expertise introduction
- **Client Showcase** - Interactive logos with company links
- **Interactive Slideshow** - Windows-style horizontal scrollable expertise cards with touch/swipe support
- **Technology Stack** - Comprehensive list of tools and methodologies
- **Contact Form** - Integrated Formspree contact system

### About Page (`about.markdown`)
- **Company Overview** - 15+ years of experience narrative
- **Visual Service Cards** - What We Do section with clean card design
- **Approach Methodology** - Client-focused, collaborative values
- **Industry Tags** - Pill-style industry experience indicators
- **Technology Grid** - Organized technology capabilities
- **Contact CTA** - Professional contact call-to-action

### Services Page (`services.markdown`)
- **Core Services Grid** - Visual service areas with detailed descriptions
- **Detailed Offerings** - Comprehensive service breakdowns
- **Specialized Expertise** - DevOps, data solutions, enterprise integration
- **Industry Focus** - Target market specializations
- **Service Delivery Models** - On-site, remote, and hybrid options with spacing

### Portfolio Page (`portfolio.markdown`)
- **Project Showcase** - Featured projects with direct navigation links
- **Technical Capabilities** - AI, web development, and cloud expertise demonstration
- **Development Approach** - Innovation focus and quality standards
- **Project Links** - Direct access to KnowU, Capitol Conquest, and Headliner

### Capitol Conquest Game (`game.markdown`)
- **Game Showcase** - Strategic hexagonal grid game demonstration
- **Technical Implementation** - Phaser.js, JavaScript algorithms, and AI opponent
- **Game Features** - Responsive design, touch controls, and persistent scoring
- **Development Highlights** - Modular architecture and performance optimization
- **Contact Information** - Direct consultation invitation

### KnowU Page (`knowu.markdown`)
- **Product Showcase** - Full-width logo and KnowU branding
- **Feature Overview** - Personality assessment capabilities
- **Platform Availability** - iOS, Android, and web versions
- **Beta Program** - Early access invitation
- **MXM Development Role** - Technical capabilities demonstration
- **Contact CTA** - Mobile and web application development services

### Headliner Page (`news-proxy.markdown`)
- **AI Tool Demonstration** - Custom ChatGPT capabilities
- **Feature Grid** - URL-based summarization, multi-language support
- **Technical Specifications** - Platform details and response times
- **Finnish News Optimization** - Enhanced support for HS, IL, IS
- **Live Tool Access** - Direct link to ChatGPT implementation
- **AI Development Showcase** - MXM's AI solution expertise

## Technology Stack

- **Jekyll 4.2.2** - Static site generator with enhanced performance
- **Minima Theme** - Base theme with extensive custom styling
- **SCSS/CSS** - Advanced styling with CSS Grid, Flexbox, and responsive design
- **GitHub Pages** - Hosting with automatic deployment pipeline
- **Formspree** - Professional contact form backend
- **Google Analytics** - Website analytics and user behavior tracking

### Recent Technical Enhancements
- **Interactive Slideshow Component** - Windows-style horizontal scrolling with touch/swipe support
- **Modular JavaScript Architecture** - External JavaScript files for better maintainability
- **Portfolio Organization** - Structured project showcase with /portfolio/ URL organization
- **CSS Grid Layouts** - Expertise grids and service delivery models
- **Smooth Scrolling** - Enhanced user experience with scroll-behavior
- **Active Navigation States** - Dynamic highlighting of current page
- **Responsive Image Handling** - Optimized loading and scaling
- **Visual Card Components** - Consistent design system across pages
- **Mobile-First Design** - Improved mobile experience and performance

## Local Development

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler gem
- Git
- Make (usually pre-installed on macOS/Linux)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maksimluzik/mxm-consulting.git
   cd mxm-consulting
   ```

2. **Install dependencies:**
   ```bash
   make install
   # or manually: bundle install
   ```

3. **Run locally:**
   ```bash
   make serve
   # or manually: bundle exec jekyll serve --livereload --watch
   ```
   
   **Alternative serve options:**
   ```bash
   make serve-fast    # Incremental builds for faster rebuilds
   make serve-all     # Include drafts and future posts
   ```

4. **View the site:**
   Open your browser to `http://localhost:4000`

### Available Make Commands

The project includes a `Makefile` with convenient shortcuts:

```bash
make install     # Install dependencies
make serve       # Serve with live reload
make serve-fast  # Serve with incremental builds (faster)
make serve-all   # Serve with drafts and future posts
make build       # Build for production
make clean       # Clean generated files
make update      # Update dependencies
make deploy      # Deploy to GitHub Pages (add, commit, push)
make help        # Show all available commands
```

### Development Tips

- **Live Reload**: `--livereload` automatically refreshes the browser when changes are made
- **Watch Mode**: `--watch` (enabled by default) rebuilds the site when files change
- **Incremental Builds**: `--incremental` speeds up rebuilds by only processing changed files
- **SCSS Compilation**: Changes to `assets/main.scss` are compiled automatically
- **New Pages**: Add `.markdown` files in the root directory
- **Navigation**: Update `_includes/header.html` to add new navigation items

## Deployment

### Quick Deployment (Recommended)

Use the convenient make command for rapid deployment:

```bash
make deploy
```

This command automatically:
1. Stages all changes (`git add .`)
2. Creates a timestamped commit (`git commit -m "update 2025-07-29 14:30:45"`)
3. Pushes to GitHub (`git push`)
4. Triggers automatic GitHub Pages deployment

### Manual Deployment

If you prefer manual control over commits:

1. **Stage and commit changes:**
   ```bash
   git add .
   git commit -m "Your custom commit message"
   git push origin master
   ```

2. **GitHub Pages automatically builds and deploys** (usually takes 1-2 minutes)

### Alternative Hosting

If you need to deploy to a different hosting provider:

1. **Build the site:**
   ```bash
   make build
   # or manually: bundle exec jekyll build
   ```

2. **Deploy the `_site` folder** to your hosting provider

## Content Management

### Adding New Services
1. Update `index.markdown` in the expertise grid section
2. Add corresponding service icons to `assets/img/`
3. Update `services.markdown` with detailed service descriptions
4. Ensure consistent styling with existing grid layouts

### Adding Client Logos
1. Add logo image to `assets/img/clients/`
2. Update the client logos section in `index.markdown`
3. Include the client's website URL and proper alt tags
4. Maintain consistent image sizing and aspect ratios

### Creating New Product Pages
1. Create new `.markdown` file in root directory (e.g., `product.markdown`)
2. Add navigation link to `_includes/header.html`
3. Update footer links in `_includes/footer.html`
4. Use consistent styling with existing product pages (KnowU, Headliner)

### Updating Contact Information
1. Update `_config.yml` for site-wide contact details
2. Modify `_includes/footer.html` for footer contact info
3. Update the contact form action URL in Formspree settings
4. Test contact form functionality after changes

### Managing Visual Content
1. **Service Icons**: Add new icons to `assets/img/` with consistent naming
2. **Product Screenshots**: Use high-quality images with proper compression
3. **Logo Variations**: Maintain brand consistency across all visual elements
4. **Responsive Images**: Test image display across different screen sizes

## SEO and Analytics

### Search Engine Optimization
- **Meta Tags**: Comprehensive metadata in each page's front matter
- **Open Graph**: Social media sharing optimization for LinkedIn, Facebook, Twitter
- **LinkedIn Integration**: Specific LinkedIn title and description tags
- **Structured Data**: JSON-LD implementation for search engines
- **Sitemap**: Automatically generated by Jekyll
- **Canonical URLs**: Proper URL canonicalization

### Performance Optimization
- **Optimized Images**: Compressed service icons and client logos
- **Minified CSS**: SCSS compilation with optimization
- **Fast Loading**: Static site architecture with minimal JavaScript
- **CDN Delivery**: Served via GitHub Pages global CDN
- **Mobile Performance**: Optimized for mobile Core Web Vitals

### Analytics and Tracking
- **Google Analytics**: Optional integration for user behavior analysis
- **Conversion Tracking**: Contact form submissions and page engagement
- **Performance Monitoring**: Page load times and user experience metrics

## Performance

- **Optimized Images**: Compressed client logos and service icons
- **Minified CSS**: SCSS compilation with compression
- **Fast Loading**: Static site with minimal JavaScript
- **CDN**: Served via GitHub Pages CDN

## Security

- **HTTPS**: Enforced via GitHub Pages
- **Privacy Policy**: GDPR-compliant privacy policy
- **Secure Forms**: External form processing via Formspree
- **No Database**: Static site reduces attack surface

## Recent Updates (2025)

### Major Feature Additions
- **Portfolio Organization** - Comprehensive portfolio section with project showcase and structured navigation
- **Interactive Homepage Slideshow** - Windows-style horizontal scrolling with touch/swipe support and auto-play
- **Capitol Conquest Game Integration** - Strategic game demonstration showcasing web development expertise
- **KnowU Product Integration** - Complete product page with full-width logo display
- **Headliner AI Tool Showcase** - Custom ChatGPT demonstration with Finnish news optimization
- **Enhanced Services Page** - Visual service grids with delivery model options
- **Improved About Page** - Interactive approach cards and technology grids
- **Modular JavaScript Architecture** - External JavaScript files for better code organization

### Design System Enhancements
- **Slideshow Component Design** - Professional slideshow with navigation arrows, indicators, and responsive behavior
- **CSS Grid Implementation** - Consistent grid layouts across all pages
- **Visual Card Components** - Standardized card design for services and features
- **Portfolio Navigation Structure** - Organized /portfolio/ URL structure with centralized project access
- **Responsive Image Handling** - Full-width logos with proper scaling
- **Emoji Integration** - Strategic use of emojis for visual hierarchy
- **Spacing Optimization** - Improved whitespace and component spacing

### Technical Improvements
- **JavaScript Modularization** - Separated slideshow functionality into external files
- **Portfolio URL Structure** - Organized project pages under /portfolio/ hierarchy
- **Touch/Swipe Navigation** - Mobile-optimized gesture controls for slideshow
- **Accessibility Enhancements** - ARIA labels, keyboard navigation, and screen reader support
- **Layout Standardization** - Consistent use of `layout: default` across pages
- **Image Path Optimization** - Absolute paths for reliable image loading
- **Contact CTA Integration** - Professional contact sections on product pages
- **Mobile-First Enhancements** - Improved mobile experience and touch targets

## Support

## 2025 Modernization Addendum

### Overview
The 2025 refresh introduces a modern full-bleed hero, fluid typography, CSS variable theming, dark mode support (via prefers-color-scheme), accessible focus states, IntersectionObserver reveal animations, and a refined information architecture using semantic section wrappers.

### New / Updated Files
- `_layouts/default.html` – Simplified main structure, added `no-js` class management and deferred site script.
- `assets/main.scss` – Extended with design tokens (CSS variables), hero, card system, logo cloud, gradient sections, and animation utilities.
- `assets/js/site.js` – Lightweight enhancement script (reveal animations + injected skip link).
- `index.markdown` – Reauthored homepage using semantic `<section>` blocks, hero pattern, service cards, modern logo cloud, gradient contact CTA.

### Full-Bleed Hero Implementation
The hero uses `<picture>` with optional WebP fallback pattern:
```
<picture>
   <source srcset="/assets/img/hero-bg.webp" type="image/webp" />
   <img class="hero__bg" src="/assets/img/hero-bg.jpg" alt="..." />
</picture>
```
Place both `hero-bg.webp` (primary) and `hero-bg.jpg` (fallback) into `assets/img/`. Use 2400–3000px width, optimized ≤450KB (WebP ideally ≤250KB). Compress with tools like Squoosh or ImageOptim.

### Adding Additional Hero Variants
Add new variants as `hero-alt-1.webp/jpg` etc. Then update the `<source>` list or use JavaScript to rotate (optional future enhancement).

### Asset Placement Guidelines
- Hero/background images: `assets/img/`
- Client logos: `assets/img/clients/`
- Service / capability icons: `assets/img/`
- Supplemental JS modules (future): `assets/js/` (keep each concern isolated; avoid bundling overhead unless complexity increases)

### Performance & Accessibility Notes
- Animations respect `prefers-reduced-motion`
- Dark mode inherits automatic color adjustments via CSS variables
- Skip link auto-injected if not present (`#main` anchor)
- Focus styles use layered outline via box-shadow for WCAG 2.1 AA visibility

### Recommended Royalty-Free Image Sources
Use high-resolution abstract technology / architecture imagery:
- unsplash.com (search: cloud architecture, data center, abstract technology)
- pexels.com (licensable for commercial use without attribution, still recommended)
- pixabay.com (broad corporate gradients/backgrounds)
- generated patterns: coolbackgrounds.io or haikei.app (ensure export compression)

When selecting images:
1. Favor subtle texture over busy detail for legible overlay text.
2. Crop to 16:9 or wider (e.g., 21:9) for cinematic hero experience.
3. Provide alt text describing concept (e.g., "Abstract network mesh representing cloud data flow").
4. Always include a non-WebP fallback for Safari versions without full support.

### Image Optimization Checklist
- Convert master image to WebP (quality 60–75)
- Provide JPEG fallback (progressive encode)
- Strip EXIF metadata
- Use logical naming (hero-bg, hero-bg-alt)
- Validate color contrast (Overlay already darkens with gradient mask)

### Extending the Design System
Add new color tokens or spacing in the `:root` block of `assets/main.scss`. Keep naming consistent: `--mxm-color-*`, `--mxm-radius-*`, `--mxm-shadow-*`.

### Adding Another Section
```
<section class="section alt" aria-labelledby="new-heading">
   <div class="mxm-container">
      <h2 id="new-heading">Section Title</h2>
      <p>Support text...</p>
   </div>
</section>
```

### Future Enhancement Ideas (Optional)
- Add CSS `prefers-color-scheme` explicit toggle button (store in localStorage)
- Integrate a lightweight CSS container queries enhancement for finer layout adaptation
- Add structured data for Services (`Service` / `Offer` schema) to further strengthen SEO
- Implement image lazy-loading for below-the-fold sections (hero intentionally eager)

### Quick QA Checklist After Image Replacement
1. Lighthouse Performance > 90 (Desktop & Mobile)
2. CLS remains stable (ensure hero height not collapsing before load)
3. Text contrast passes AA (check hero overlay)
4. Focus order logical (test TAB traversal)
5. Mobile first paint under ~2s on 4G (approximate)

---
This modernization layer is additive—legacy classes remain for backward compatibility, allowing incremental adoption on secondary pages.

For technical issues or questions about the website:

- **Email**: maksim@mxm-consulting.fi
- **Repository Issues**: [GitHub Issues](https://github.com/maksimluzik/mxm-consulting/issues)
- **Documentation**: [Jekyll Documentation](https://jekyllrb.com/docs/)

## License

This website is proprietary to MXM Consulting. All rights reserved.
