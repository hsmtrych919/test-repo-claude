# CLAUDE.md
必ず日本語で回答してください。
This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a static HTML demo project focused on scroll-based animation effects, originally created as a learning repository for Claude Code. It demonstrates modern CSS animations enhanced with JavaScript using the Intersection Observer API.

## Development Commands
Since this is a static project with no build tools or package.json:
- **Run locally**: Open `index.html` directly in a web browser
- **Test changes**: Refresh the browser after making edits
- **No linting/building**: Direct HTML/CSS/JS development

## Architecture
The project uses a clean, vanilla JavaScript approach with no external dependencies:

### File Structure
- `index.html` - Main entry point with demo sections
- `css/framework.css` - Base framework with animation definitions and responsive utilities
- `css/style.css` - Project-specific styles for demo sections
- `js/scroll.js` - Scroll animation logic using Intersection Observer API
- `img/` - Demo assets (pic01.jpg, pic02.jpg, typ01.png, typ02.png)

### Animation System
Two main functions handle scroll-based animations:
- `inview(target, className, offset)` - Triggers animations when elements enter viewport
- `fromtop(target, className, offset)` - Triggers animations based on scroll position from top

### Available Animation Classes
- `fadein` - Basic fade in effect
- `fadein-up` - Fade in from bottom
- `fadein-down` - Fade in from top
- `fadein-left` - Fade in from left
- `fadein-right` - Fade in from right

### Demo Sections
- **実践01 (Practice 01)**: Left-side fade-in animation for side-by-side content
- **実践02 (Practice 02)**: Right-side fade-in animation with background styling

## Key Implementation Details
- Uses modern Intersection Observer API for performance
- Responsive design with flexible layouts
- CSS animations defined in framework.css, triggered by JavaScript
- No external dependencies - pure HTML/CSS/JS
- Japanese content for educational purposes

## When Making Changes
- Test animations by scrolling through the page
- Ensure responsive behavior across different screen sizes
- Maintain the educational nature of the demo sections
- Animation offsets are configurable in the JavaScript calls