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

# Capitol Conquest - Strategic Hexxagon Game

<div style="text-align: center; margin: 30px 0;">
  <img src="/assets/img/capitol-conquest-splash_square.png" alt="Capitol Conquest Game Screenshot" style="width: 100%; max-width: 720px; height: auto; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
  <div style="margin-top: 20px;">
    <a href="https://cc.maksimluzik.com/" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 15px 30px; background-color: #000; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; transition: all 0.3s ease;">Play Game →</a>
  </div>
  <p style="font-size: 13px; color: #6c757d; margin-top: 8px;">Live demo. Works on desktop and mobile.</p>
  <p style="font-size: 12px; color: #6c757d;">Source code: <a href="https://github.com/maksimluzik/capitol-conquest" target="_blank" rel="noopener noreferrer">GitHub repo</a></p>
</div>

---

## Overview

Capitol Conquest is a modern, Hexxagon-style strategy game built with Phaser 3. Two parties compete for control on a hexagonal grid through tactical moves that duplicate or jump pieces and convert adjacent opponent tiles. The game includes adaptive AI with multiple difficulty levels, real-time online multiplayer, built‑in chat, analytics, and responsive UX across devices.

---

## Game Features

<div class="features-grid">
  <div class="feature-item">
    <h4>🔷 Hex-Based Strategy</h4>
    <p>Turn-based play on a hexagonal board with duplicate (range 1) and jump (range 2) moves. Adjacent enemy tiles auto-convert after a move.</p>
  </div>
  <div class="feature-item">
    <h4>🎮 Game Modes</h4>
    <p>Single-player vs AI, local two-player on one device, and real-time online multiplayer with matchmaking.</p>
  </div>
  <div class="feature-item">
    <h4>🤖 AI Difficulties</h4>
    <p>Normal (even start), Hard (AI advantage), and Expert (strong AI advantage) with distinct evaluation weights.</p>
  </div>
  <div class="feature-item">
    <h4>� In-Game Chat</h4>
    <p>Party-colored chat in online matches (red for Republicans, blue for Democrats) with clean, scrollable UI.</p>
  </div>
  <div class="feature-item">
    <h4>📊 Global Stats</h4>
    <p>Online games recorded to global statistics: wins/losses, durations, modes, and difficulty—leaderboard ready.</p>
  </div>
  <div class="feature-item">
    <h4>� Mobile & Desktop</h4>
    <p>Fully responsive UI, touch-friendly controls, dynamic viewport handling, and enhanced visuals on desktop.</p>
  </div>
  <div class="feature-item">
    <h4>🎵 Audio System</h4>
    <p>Background music with toggle and distinct SFX for duplicate, jump, and conversion actions.</p>
  </div>
  <div class="feature-item">
    <h4>⚡ Smooth UX</h4>
    <p>Keyboard navigation in menus, clear visual feedback, and smart defaults for quick start.</p>
  </div>
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

<div class="cta-section">
  <a href="https://cc.maksimluzik.com/" target="_blank" rel="noopener noreferrer" class="headliner-cta-button">Play Capitol Conquest →</a>
  <p class="cta-note">Play in your browser on desktop or mobile</p>
  <p class="cta-note">Code: <a href="https://github.com/maksimluzik/capitol-conquest" target="_blank" rel="noopener noreferrer" style="color: #fff; text-decoration: underline;">GitHub repository</a></p>
  
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

<div class="contact-cta">
  <h3>Need Interactive Web Development?</h3>
  <p>Contact MXM Consulting to discuss how we can develop engaging, interactive web applications for your specific requirements.</p>
  <a href="/#contact" class="contact-button">Get in Touch</a>
  
</div>
