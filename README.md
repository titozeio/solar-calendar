# Solar Calendar

![Status](https://img.shields.io/badge/status-planning-orange)
![Stack](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20Vanilla%20JS-ff6f61)
![Architecture](https://img.shields.io/badge/architecture-modular-blue)
![UI](https://img.shields.io/badge/ui-SVG%20%2B%20CSS%20animation-ffb347)

Solar Calendar is a small web experience centered on a custom date selector and a solar system visualization. When the selected day, month, or time changes, the planets shift along their orbits to reflect their relative positions for that date.

This repository is intentionally documented first. The goal is to establish a clean foundation before implementation so the UI, domain logic, and rendering layer can stay easy to reason about as the project grows.

## What This Project Is

- A date-driven solar system visualization.
- A custom calendar picker with day, month, and time selection.
- A UI that maps time changes to planetary positions in a predictable way.
- A codebase designed for clarity, maintainability, and incremental growth.

## Guiding Principles

- Keep the domain logic separate from the view layer.
- Prefer composition over large, tightly coupled components.
- Use design patterns when they improve readability or reuse.
- Keep calculations pure and testable wherever possible.
- Avoid spaghetti code, hidden side effects, and one-off shortcuts.
- Build with accessibility and responsiveness in mind from the start.

## Documentation

- [AGENTS.md](./AGENTS.md): instructions for AI agents working on the project.
- [SPECS.md](./SPECS.md): the project specification, stack, and architecture guidance.

## Planned Stack

The current specification proposes a lightweight static stack:

- Plain HTML for structure.
- Vanilla JavaScript using ES modules for behavior and state.
- CSS for styling, layout, and motion.
- SVG-based rendering for the solar system visualization.
- Optional small utility libraries only when they add real value.
- A static deployment path compatible with GitHub Pages.

## Roadmap

1. Define the final product scope and interaction model.
2. Implement the custom date selector component.
3. Build the solar system visualization layer.
4. Connect date selection to orbital position calculations.
5. Add tests for date logic, rendering behavior, and accessibility.
6. Polish the experience for responsive layouts and mobile use.

## Status

The project is in the documentation and specification phase. Implementation will follow the structure defined in `SPECS.md` and should remain deployable as a static site on GitHub Pages.
