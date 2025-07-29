# MXM Consulting Website

Professional IT consulting website built with Jekyll and hosted on GitHub Pages. This repository contains the source code for [mxm-consulting.fi](https://mxm-consulting.fi), showcasing MXM Consulting's expertise in AI development, cloud architecture, and digital transformation.

## About MXM Consulting

MXM Consulting is a leading IT consultancy in Finland specializing in:
- **Artificial Intelligence & Machine Learning** - LLM fine-tuning, neural networks, custom AI models
- **Cloud Architecture** - AWS, Google Cloud, Azure solutions
- **Software Development** - Web applications, mobile apps, microservices
- **Digital Transformation** - Technical due diligence, automation, DevOps
- **IT Management** - Team collaboration, agile methodologies

## Website Features

- **Professional Design** - Clean, modern layout with MXM Consulting branding
- **Responsive Layout** - Mobile-first design that works on all devices
- **SEO Optimized** - Comprehensive metadata, Open Graph, and structured data
- **Client Showcase** - Interactive client logos with links to company websites
- **Contact Integration** - Contact form powered by Formspree
- **Smooth Navigation** - Anchor links with smooth scrolling animations
- **GDPR Compliant** - Complete privacy policy and data protection measures

## Site Structure

```
mxm-consulting/
├── _config.yml              # Jekyll configuration and site metadata
├── _includes/               # Reusable components
│   ├── header.html          # Navigation header with logo
│   ├── footer.html          # Professional footer with contact info
│   └── google-analytics.html # Analytics integration
├── _posts/                  # Blog posts (Jekyll default)
├── assets/
│   ├── main.scss           # Main stylesheet with custom styling
│   └── img/                # Images and client logos
│       ├── clients/        # Client company logos
│       └── *.png           # Service icons and branding
├── index.markdown          # Homepage content
├── 02_about.markdown       # About page
├── services.markdown       # Services page
├── privacy-policy.markdown # GDPR-compliant privacy policy
├── Makefile               # Development and deployment commands
└── README.md              # This file
```

## Technology Stack

- **Jekyll 4.2.2** - Static site generator
- **Minima Theme** - Base theme with extensive customizations
- **SCSS/CSS** - Custom styling with responsive design
- **GitHub Pages** - Hosting and automatic deployment
- **Formspree** - Contact form backend
- **Google Analytics** - Website analytics (optional)

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
3. Update the services list in the technologies section

### Adding Client Logos

1. Add logo image to `assets/img/clients/`
2. Update the client logos section in `index.markdown`
3. Include the client's website URL

### Updating Contact Information

1. Update `_config.yml` for site-wide contact details
2. Modify `_includes/footer.html` for footer contact info
3. Update the contact form action URL if needed

## SEO and Analytics

- **Meta Tags**: Configured in each page's front matter
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatically generated by Jekyll
- **Google Analytics**: Optional integration available

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

## Support

For technical issues or questions about the website:

- **Email**: maksim@mxm-consulting.fi
- **Repository Issues**: [GitHub Issues](https://github.com/maksimluzik/mxm-consulting/issues)
- **Documentation**: [Jekyll Documentation](https://jekyllrb.com/docs/)

## License

This website is proprietary to MXM Consulting. All rights reserved.
