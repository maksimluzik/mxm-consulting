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
    <p class="lead">Strategic Hexxagon-inspired territory control—AI heuristics, multiplayer sockets & responsive canvas rendering.</p>
  </div>
</section>

<section class="section" aria-labelledby="splash-heading">
  <div class="mxm-container media-figure">
    <img src="/assets/img/capitol-conquest-splash_square.png" alt="Capitol Conquest screenshot" />
    <div class="actions">
      <a href="https://cc.maksimluzik.com/" target="_blank" rel="noopener" class="btn accent">Play Game</a>
  <a href="https://github.com/maksimluzik/capitol-conquest" target="_blank" rel="noopener" class="btn dark">Source Code</a>
    </div>
    <p style="font-size:.7rem;opacity:.65;margin-top:.75rem;">Works on desktop & mobile • Live demo</p>
  </div>
</section>

---
<div class="mxm-container prose" markdown="1">

## Overview

Capitol Conquest is a modern, Hexxagon-style strategy game built with Phaser 3. Two parties compete for control on a hexagonal grid through tactical moves that duplicate or jump pieces and convert adjacent opponent tiles. The game includes adaptive AI with multiple difficulty levels, real-time online multiplayer, built‑in chat, analytics, and responsive UX across devices.

---

## Game Features

<div class="feature-grid" style="margin-top:2.25rem;">
  <div class="feature-card"><h4>🔷 Hex Strategy</h4><p>Duplicate (range 1) or jump (range 2); adjacency flips opponent tiles.</p></div>
  <div class="feature-card"><h4>🎮 Modes</h4><p>AI solo, local two-player & online real-time multiplayer.</p></div>
  <div class="feature-card"><h4>🤖 AI Levels</h4><p>Normal, Hard, Expert—distinct evaluation weights & starting positions.</p></div>
  <div class="feature-card"><h4>💬 In-Game Chat</h4><p>Party-colored real-time messaging with scrollback.</p></div>
  <div class="feature-card"><h4>📊 Global Stats</h4><p>Match outcomes, duration, mode & difficulty persisted.</p></div>
  <div class="feature-card"><h4>📱 Multi-Device</h4><p>Responsive canvas, touch gestures & adaptive viewport.</p></div>
  <div class="feature-card"><h4>🎵 Audio System</h4><p>Music toggle + distinct SFX per action.</p></div>
  <div class="feature-card"><h4>⚡ Smooth UX</h4><p>Keyboard nav, clear affordances, smart defaults.</p></div>
</div>

---

## AI Implementation

The computer opponent uses a greedy, single-depth heuristic that balances multiple factors. Each candidate move is simulated and scored using a weighted combination of:

- Material advantage (piece differential)
- Limiting opponent mobility (reduce their next moves)
- Central control (prefer positions closer to the board center)
- Risk avoidance (penalize exposed positions)
- Small randomness (jitter) to prevent repetition

Different difficulty levels adjust weights and starting advantages to create distinct play styles and challenge levels.

---

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

---

## Statistics & Analytics

Global and per-mode stats are captured for online matches:

- Real-time write to Google Sheets via Google Apps Script
- Win/loss tracking, game duration, difficulty, mode, and timestamps
- Recent games view and performance analysis
- Analytics via Google Tag Manager for user engagement and performance

---

## User Interface & UX

- Branded title and themed party colors throughout the UI
- Responsive menus with hover/touch feedback and clear state indicators
- Keyboard support (arrow keys, Enter) and accessible defaults
- Mobile optimizations for dynamic viewports, touch targets, and typography

---

## Technical Architecture

<div class="tech-specs">
  <div class="spec-item"><strong>Frontend:</strong> Phaser 3 with ES6 modules, responsive layout with CSS Grid/Flexbox</div>
  <div class="spec-item"><strong>AI:</strong> Heuristic evaluation with multi-factor scoring and move simulation</div>
  <div class="spec-item"><strong>Backend:</strong> Express.js + Socket.IO for multiplayer, server-side validation</div>
  <div class="spec-item"><strong>Data:</strong> Google Apps Script + Google Sheets for global statistics</div>
  <div class="spec-item"><strong>Storage:</strong> LocalStorage for offline caching and preferences</div>
  <div class="spec-item"><strong>Build/Deploy:</strong> Static client (GitHub Pages) + Node server for multiplayer</div>
</div>

---

## Deployment & Performance

- Client hosted as a static site (GitHub Pages) with CDN assets
- Automated deployments via GitHub Actions
- Efficient rendering and lazy asset loading for performance
- Backend deployed to GCP compute instance
- Mobile performance optimizations and caching strategies

---

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

---

## Try the Game

<div class="cta-band">
  <h3 style="margin-top:0;">Try Capitol Conquest</h3>
  <p style="max-width:640px;margin:0 auto 1rem;">Experience AI-driven positional evaluation, hex grid transformations & real-time multiplayer session orchestration.</p>
  <a href="https://cc.maksimluzik.com/" target="_blank" rel="noopener" class="btn accent">Launch Game</a>
  <p style="margin-top:.75rem;font-size:.7rem;opacity:.65;">Repo: <a href="https://github.com/maksimluzik/capitol-conquest" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;">GitHub</a></p>
</div>

---

## Audio Credits

- Sound effects from Freesound.org (Creative Commons licensed)
- Background music generated with AIVA (Artificial Intelligence Virtual Artist)

---

## About MXM Consulting's Web Development Expertise

This project demonstrates MXM Consulting's strength in interactive web development, AI implementation, and real-time systems:

- Interactive web apps and game development with modern frameworks
- AI/algorithm design and performance optimization
- Real-time networking, analytics, and production deployment
- Mobile-first design with accessible, responsive UX

<section class="section gradient-dark" aria-labelledby="game-cta-heading">
  <div class="mxm-container">
    <h2 id="game-cta-heading">Need Interactive Web Development?</h2>
    <p style="max-width:760px;">We architect performant real-time & interactive browser experiences—canvas rendering, multiplayer state sync, AI opponent logic & instrumentation.</p>
    <div class="hero-cta" style="margin-top:1.3rem;">
      <a href="/#contact" class="btn accent">Get in Touch</a>
      <a href="/services/" class="btn outline">Explore Services</a>
    </div>
  </div>
 </section>

</div>
