---
layout: default
title: "Co-Split - Shared Service Cost Tracking Platform"
description: "Co-Split is a transparent cost-sharing platform for managing split subscriptions among friends. Track Netflix, Spotify, and other shared services with granular membership control and normalized monthly billing."
keywords: "cost sharing app, subscription management, split bills, shared services, Firebase, React, TypeScript, expense tracking, monthly billing, MXM Consulting portfolio"
permalink: /portfolio/co-split/
order: 7
# Open Graph / Social Media
og_image: /assets/img/mxm-consulting-logo-black.jpg
og_type: website
og_title: "Co-Split - Shared Service Cost Tracking Platform"
og_description: "Co-Split is a transparent cost-sharing platform for managing split subscriptions among friends. Track Netflix, Spotify, and other shared services with granular membership control and normalized monthly billing."
# LinkedIn specific
linkedin_title: "Co-Split - Shared Service Cost Tracking Platform"
linkedin_description: "Co-Split is a transparent cost-sharing platform for managing split subscriptions among friends. Track Netflix, Spotify, and other shared services with granular membership control and normalized monthly billing."
canonical_url: https://mxm-consulting.fi/portfolio/co-split/
---

<section class="page-hero minimal" aria-labelledby="co-split-heading">
  <div class="mxm-container">
    <h1 id="co-split-heading">Co-Split</h1>
    <p class="lead">Transparent cost‑sharing for split subscriptions—granular membership, normalized billing cycles & manual payment tracking without automation overhead.</p>
    <div class="portfolio-meta" data-reveal>
      <span class="badge" data-accent>Active</span>
      <span class="badge">React 19</span>
      <span class="badge">Firebase</span>
      <span class="badge">TypeScript Monorepo</span>
      <span class="badge">Firestore</span>
      <span class="badge">REST API</span>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="splash-heading">
  <div class="mxm-container media-figure glass" data-reveal>
    <div class="actions">
      <a href="https://co-split.maksimluzik.com/" target="_blank" rel="noopener" class="btn accent">Visit Co-Split</a>
      <a href="https://github.com/maksimluzik/co-split" target="_blank" rel="noopener" class="btn dark">Source Code</a>
    </div>
    <p style="font-size:.7rem;opacity:.55;margin-top:.75rem;">Firebase Functions • Firestore NoSQL • Google OAuth 2.0</p>
  </div>
</section>

<div class="mxm-container prose" markdown="1">

## Project Vision

**Co-Split** allows groups of friends to manage shared digital services (Netflix, Spotify, etc.) without automated payment gateways. It focuses on transparency, granular service membership, and manual payment tracking.

The platform solves a common problem: when friends share subscription costs, it's hard to keep track of who owes what, especially when not everyone participates in every service and billing cycles vary.

### Core Functionality

<div class="feature-grid" style="margin-top:2.25rem;">
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Authentication</h4><p>Firebase Auth with Google OAuth 2.0 & Email/Password support.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Group Dynamics</h4><p>Create groups, invite friends via unique code or link.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Service Ownership</h4><p>Any member adds services they pay for; transparent ownership tracking.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> Billing Cycles</h4><p>Monthly, Quarterly, Biyearly, or Yearly—all normalized to monthly view.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> Granular Participation</h4><p>Users explicitly "Join" specific services; no automatic enrollment.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> Cost Normalization</h4><p>All costs display as monthly equivalents for easy budgeting.</p></div>
</div>

## Technical Architecture

### Monorepo Structure

Co-Split is built as a **TypeScript monorepo** using npm workspaces, enabling tight integration between frontend, backend, and shared type definitions:

```
co-split/
├── frontend/       # React + Vite client application
├── backend/        # Firebase Functions (Node.js + Express)
├── shared/         # Shared TypeScript types
└── package.json    # Root npm workspaces configuration
```

### Technology Stack

**Frontend:**
- **React 19** with Vite for fast development and optimized builds
- **TypeScript** for type safety across the application
- **Vanilla CSS** with modern, glassmorphic design system
- **React Hooks** for state management (useState, useMemo)
- **Current Status:** Fully functional with mock data, ready for backend integration

**Backend:**
- **Firebase Functions** running Node.js 20
- **Express.js** REST API framework
- **Firestore** NoSQL database for scalable data storage
- **TypeScript** with strict type checking
- **Current Status:** Complete REST API implemented, ready for deployment

**Shared Types:**
- Centralized type definitions via `@co-split/shared` package
- Domain models (User, Group, Service)
- API contract types (requests/responses)
- Ensures type safety between frontend and backend

### Key Design Decisions

**No Payment Processing:** Co-Split is strictly a cost-tracking dashboard. There are no automated payments, credit cards, or financial transactions—just transparency and clarity about who owes what.

**Granular Control:** Users are not automatically enrolled in all services within a group. Each person explicitly chooses which services they want to participate in, giving fine-grained control over their commitments.

**Monthly Normalization:** All billing cycles are converted to monthly equivalents for consistent budgeting, while preserving the actual billing cycle information.

## REST API Reference

The backend exposes a RESTful API for all core functionalities:

**Groups:**
- `POST /api/groups` - Create a new group
- `GET /api/groups?userId={userId}` - Get all groups for a user
- `GET /api/groups/:groupId` - Get group details
- `POST /api/groups/:groupId/join` - Join a group via invite code

**Services:**
- `POST /api/services` - Create a new service
- `GET /api/services?groupId={groupId}` - Get all services for a group
- `POST /api/services/:serviceId/join` - Join a service
- `DELETE /api/services/:serviceId/leave` - Leave a service

**Users:**
- `GET /api/users/:userId/summary?groupId={groupId}` - Get financial summary

## Design Philosophy

<div class="feature-grid" style="margin-top:2.25rem;">
  <div class="feature-card"><h4>Modern Aesthetics</h4><p>Vibrant colors, dark mode, glassmorphism effects, smooth animations.</p></div>
  <div class="feature-card"><h4>Premium Feel</h4><p>State-of-the-art UI that feels polished and professional.</p></div>
  <div class="feature-card"><h4>Transparency</h4><p>Users always know exactly what they owe and who owes them.</p></div>
  <div class="feature-card"><h4>Granularity</h4><p>Fine-grained control over which services users participate in.</p></div>
  <div class="feature-card"><h4>Reminders & Nudges</h4><p>Smart notifications to settle balances and keep groups synchronized.</p></div>
  <div class="feature-card"><h4>Chat & Communication</h4><p>Built-in messaging integrations to coordinate payments and updates.</p></div>
</div>


<div class="cta-band">
  <h3 style="margin-top:0;">Try Co-Split</h3>
  <p style="max-width:680px;margin:0 auto 1.2rem;">Experience transparent cost-sharing for your group subscriptions. No payment processing, just clear visibility into shared expenses.</p>
  <a href="https://co-split.maksimluzik.com/" target="_blank" class="btn accent" rel="noopener">Visit Co-Split</a>
</div>

---

<br />

## MXM Consulting Delivery Scope

Co-Split demonstrates MXM Consulting's modern web application capabilities:

- **TypeScript Monorepo Architecture** with shared type safety across frontend and backend
- **Modern React Development** with React 19, Vite, and functional programming patterns
- **Firebase Cloud Platform** with Functions, Firestore, and Authentication
- **REST API Design** with Express.js and proper error handling
- **Responsive UI/UX** with glassmorphic design, dark mode, and accessibility
- **Mathematical Precision** in cost calculations and normalization algorithms
- **Scalable Data Architecture** with NoSQL patterns and efficient queries

<section class="section gradient-dark" aria-labelledby="cosplit-cta-heading">
  <div class="mxm-container">
    <h2 id="cosplit-cta-heading" style="color:white;">Need a Modern Web Platform?</h2>
    <p style="color:rgba(255,255,255,0.85);max-width:720px;margin:1rem auto 1.6rem;">MXM Consulting builds scalable, type-safe web applications with modern frameworks and cloud infrastructure. Let's discuss your project.</p>
    <a href="/#contact" class="btn accent">Get in Touch</a>
  </div>
</section>

</div>
