# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal web portfolio for Muhammad Syahril Eka Pratama (Telecommunications & Digital Technology, Polinema). Built as a **Phase 1: Vanilla Foundation** — HTML5, Vanilla CSS3, Vanilla JavaScript only. No build tools, frameworks, or dependencies.

**Phase 2 (planned):** Migration to Next.js + TypeScript for componentization and dynamic content.

## Commands

### Development
```bash
# No build step required — open directly in browser
open index.html
# or
python3 -m http.server 8000  # if local server needed
```

### Code Quality
- No linting, formatting, or testing configured in Phase 1
- Pure CSS (no Tailwind) per GEMINI.md guidelines
- Code written to be extractable into React components later

## Architecture

### File Structure
```
/Volumes/Data Shared/Project/Web_Portofolio/
├── index.html      # Single-page HTML with all sections
├── styles.css      # Complete design system + all styling
├── script.js       # IntersectionObserver scroll-reveal + blob mouse-follow
├── assets/
│   └── images/     # profile.jpg (referenced in HTML)
├── raw_source/     # Source markdown files for content (not used at runtime)
├── parse.py        # Utility (purpose unclear, not imported)
├── GEMINI.md       # Project context for AI agents
└── README.md       # Project documentation
```

### Design System (CSS Variables)
Defined in `:root` in `styles.css`:
- Colors: `--bg-color`, `--text-primary`, `--text-secondary`, `--accent-color`
- Gradients: `--accent-gradient`, `--blob-gradient-1`, `--blob-gradient-2`
- Glassmorphism: `--glass-bg`, `--glass-border`, `--glass-shadow`, `--glass-blur`
- Typography: `--font-heading` (Outfit), `--font-body` (Inter)

### Key Components
| Component | Class | Location |
|-----------|-------|----------|
| Navbar | `.navbar.glass` | Fixed, glassmorphism |
| Hero | `.hero` + `.hero-image` | Flex layout, floating animation |
| Sections | `.section` | Base padding/min-height |
| Project Cards | `.project-card.glass` | Grid, hover lift, tags |
| Skills | `.skills-container` + `.skill-tag` | Wrap grid, hover accent |
| Contact | `.contact-card.glass` | Centered, button group |

### JavaScript Behavior
1. **Blob mouse-follow** (lines 1-20): Two radial gradients animate toward cursor via Web Animations API
2. **Navbar scroll enhancement** (lines 22-32): Adds shadow/border after 50px scroll
3. **Scroll reveal** (lines 34-53): IntersectionObserver adds `.visible` to `.hidden-section` elements

## Content Source
Project/award details in `raw_source/`:
- `github_projects.md` — detailed project descriptions
- `hackintosh_config.md` — technical Hackintosh implementation notes
- `project_linkedin.md` — LinkedIn-formatted project entries
- Others: contact, education, honors, languages

## Conventions

### Adding/Modifying Content
1. Edit `index.html` directly for visible content
2. Update `styles.css` for new components/variants
3. Keep CSS variables in `:root` for theming consistency
4. Maintain glassmorphism pattern: `.glass` class + CSS variables

### CSS Organization
- Root variables → Utilities → Navbar → Hero → Responsive → Sections → Components → Animations
- Use `auto-fit, minmax(320px, 1fr)` grid for responsive cards
- Prefer CSS transitions over JS animations

### Phase 2 Preparation
- Class names are semantic and component-ready (`.project-card`, `.skill-tag`, etc.)
- No Tailwind — pure CSS for easy migration
- Logic in `script.js` is minimal and portable

## Notes
- No `.gitignore` entries for build artifacts (none exist)
- No package.json, no node_modules
- Profile image at `assets/images/profile.jpg` must exist for hero section
- Mobile nav hidden (`.nav-links { display: none }` at ≤900px) — hamburger menu planned for Phase 2