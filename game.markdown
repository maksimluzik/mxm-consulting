---
layout: default
title: "Strategic Hexxagon Game - Interactive Web Development Portfolio"
description: "Explore MXM Consulting's web development expertise through our strategic Hexxagon game. Built with Phaser.js, featuring AI algorithms, responsive design, and advanced JavaScript programming."
keywords: "web game development, Phaser.js, JavaScript programming, AI algorithms, hexagonal grid strategy, interactive web applications, MXM Consulting portfolio"
permalink: /portfolio/game/
order: 6
# Open Graph / Social Media
og_image: /assets/img/mxm-consulting-logo-black.jpg
og_type: website
og_title: "Strategic Hexxagon Game - Interactive Web Development Portfolio"
og_description: "Explore MXM Consulting's web development expertise through our strategic Hexxagon game. Built with Phaser.js, featuring AI algorithms, responsive design, and advanced JavaScript programming."
# LinkedIn specific
linkedin_title: "Strategic Hexxagon Game - Interactive Web Development Portfolio"
linkedin_description: "Explore MXM Consulting's web development expertise through our strategic Hexxagon game. Built with Phaser.js, featuring AI algorithms, responsive design, and advanced JavaScript programming."
canonical_url: https://mxm-consulting.fi/portfolio/game/
---

<section class="page-hero minimal" aria-labelledby="game-heading">
  <div class="mxm-container">
    <h1 id="game-heading">Capitol Conquest</h1>
    <p class="lead">Hex‑grid territory strategy — AI heuristics, WebSocket multiplayer, adaptive rendering & telemetry.</p>
    <div class="portfolio-meta" data-reveal>
      <span class="badge" data-accent>Live</span>
      <span class="badge">Phaser 3</span>
      <span class="badge">WebSocket</span>
      <span class="badge">AI Heuristics</span>
      <span class="badge">Analytics</span>
      <span class="badge">Responsive</span>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="splash-heading">
  <div class="mxm-container media-figure glass" data-reveal>
    <img src="/assets/img/capitol-conquest-splash_square.png" alt="Capitol Conquest screenshot" width="560" height="560" loading="lazy" />
    <div class="actions">
      <a href="https://cc.maksimluzik.com/" target="_blank" rel="noopener" class="btn accent">Play Game</a>
      <a href="https://github.com/maksimluzik/capitol-conquest" target="_blank" rel="noopener" class="btn dark">Source Code</a>
    </div>
    <p style="font-size:.7rem;opacity:.55;margin-top:.75rem;">Desktop + Mobile • Real-time Multiplayer • AI Bots</p>
  </div>
</section>


<div class="mxm-container prose" markdown="1">

## Overview

Capitol Conquest is a modern, Hexxagon-style strategy game built with Phaser 3. Two parties compete for control on a hexagonal grid through tactical moves that duplicate or jump pieces and convert adjacent opponent tiles. The game includes adaptive AI with multiple difficulty levels, real-time online multiplayer, built‑in chat, analytics, and responsive UX across devices.

## Game Features

<div class="feature-grid" style="margin-top:2.25rem;">
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><polygon points="12 2 22 8 22 18 12 24 2 18 2 8"></polygon></svg> Hex Strategy</h4><p>Duplicate (range 1) or jump (range 2); adjacency flips opponent tiles.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="3"></rect><line x1="6" y1="12" x2="10" y2="12"></line><line x1="8" y1="10" x2="8" y2="14"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="18" y1="11" x2="18.01" y2="11"></line></svg> Modes</h4><p>AI solo, local two-player & online real-time multiplayer.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg> AI Levels</h4><p>Normal, Hard, Expert—distinct evaluation weights & starting advantages.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> In-Game Chat</h4><p>Party-colored real-time messaging with scrollback.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> Global Stats</h4><p>Match outcomes, duration, mode & difficulty persisted.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> Multi-Device</h4><p>Responsive canvas, touch gestures & adaptive viewport.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg> Audio System</h4><p>Music toggle + distinct SFX per action.</p></div>
  <div class="feature-card"><h4><svg class="icon-inline" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Smooth UX</h4><p>Keyboard nav, clear affordances, smart defaults.</p></div>
</div>

## AI Implementation

The computer opponent uses a greedy, single-depth heuristic that balances multiple factors. Each candidate move is simulated and scored using a weighted combination of:

- Material advantage (piece differential)
- Limiting opponent mobility (reduce their next moves)
- Central control (prefer positions closer to the board center)
- Risk avoidance (penalize exposed positions)
- Small randomness (jitter) to prevent repetition

Different difficulty levels adjust weights and starting advantages to create distinct play styles and challenge levels.

## Online Multiplayer System

Real-time multiplayer features include instant matchmaking, synchronized turns via WebSockets, and reliability features for production use.

- Instant matchmaking with room-based pairing (two players per room)
- Live turn updates and server-side validation of game state
- Reconnection handling and disconnect win assignment
- Waiting room UI with loading animation
- Party-colored chat available throughout the match

Architecture highlights:

- Socket.IO server with Express.js backend
- Room management and turn validation on the server
- PM2 configuration for production uptime

## Statistics & Analytics

Global and per-mode stats are captured for online matches:

- Real-time write to Google Sheets via Google Apps Script
- Win/loss tracking, game duration, difficulty, mode, and timestamps
- Recent games view and performance analysis
- Analytics via Google Tag Manager for user engagement and performance

## User Interface & UX

- Branded title and themed party colors throughout the UI
- Responsive menus with hover/touch feedback and clear state indicators
- Keyboard support (arrow keys, Enter) and accessible defaults
- Mobile optimizations for dynamic viewports, touch targets, and typography

## Technical Architecture

<div class="tech-specs">
  <div class="spec-item"><strong>Frontend:</strong> Phaser 3 with ES6 modules, responsive layout with CSS Grid/Flexbox</div>
  <div class="spec-item"><strong>AI:</strong> Heuristic evaluation with multi-factor scoring and move simulation</div>
  <div class="spec-item"><strong>Backend:</strong> Express.js + Socket.IO for multiplayer, server-side validation</div>
  <div class="spec-item"><strong>Data:</strong> Google Apps Script + Google Sheets for global statistics</div>
  <div class="spec-item"><strong>Storage:</strong> LocalStorage for offline caching and preferences</div>
  <div class="spec-item"><strong>Build/Deploy:</strong> Static client (GitHub Pages) + Node server for multiplayer</div>
</div>

## Deployment & Performance

- Client hosted as a static site (GitHub Pages) with CDN assets
- Automated deployments via GitHub Actions
- Efficient rendering and lazy asset loading for performance
- Backend deployed to GCP compute instance
- Mobile performance optimizations and caching strategies

## Game Rules

### Objective
Control more tiles than your opponent when all playable hexes are filled.

### How to Play
1. Choose your side (🔴 Republicans or 🔵 Democrats)
2. Select a mode (Single Player, Local Two-Player, or Online)
3. For single player, pick a difficulty: Normal, Hard, or Expert
4. On your turn, either:
   - Duplicate to an adjacent hex (distance 1), or
   - Jump up to two hexes (distance 2)
5. After moving, adjacent enemy tiles flip to your color
6. The game ends when no moves remain; majority wins

### Controls
- Mouse/Touch: tap/click to select and move
- Keyboard: arrow keys to navigate menus, Enter to select
- ESC: return to menu; F: toggle fullscreen
- Music control available in the UI; chat in online matches

## Try the Game

<div class="cta-band">
  <h3 style="margin-top:0;">Try Capitol Conquest</h3>
  <p style="max-width:640px;margin:0 auto 1rem;">Experience AI-driven positional evaluation, hex grid transformations & real-time multiplayer session orchestration.</p>
  <a href="https://cc.maksimluzik.com/" target="_blank" rel="noopener" class="btn accent">Launch Game</a>
  <p style="margin-top:.75rem;font-size:.7rem;opacity:.65;">Repo: <a href="https://github.com/maksimluzik/capitol-conquest" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;">GitHub</a></p>
</div>

## Audio Credits

- Sound effects from Freesound.org (Creative Commons licensed)
- Background music generated with AIVA (Artificial Intelligence Virtual Artist)


## MXM Consulting Capability Showcase

Demonstrates MXM Consulting strengths in:

- **Interactive Web & Canvas Systems**
- **AI / Heuristic Algorithm Design**
- **Real-time Multiplayer State Synchronization**
- **Telemetry & Analytics Instrumentation**
- **Responsive & Accessible UI Architecture**

<section class="section gradient-dark" aria-labelledby="game-cta-heading">
  <div class="mxm-container">
  <h2 id="game-cta-heading">Need Real-Time Interactive Systems?</h2>
  <p style="max-width:760px;">Phaser / Canvas / WebGL experiences, AI opponent design, multiplayer orchestration & performance analytics — end to end.</p>
    <div class="hero-cta" style="margin-top:1.3rem;">
      <a href="/#contact" class="btn accent">Get in Touch</a>
      <a href="/services/" class="btn outline">Explore Services</a>
    </div>
  </div>
 </section>

</div>
