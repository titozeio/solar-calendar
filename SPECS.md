# SPECS.md

This document defines the intended technical direction for the Solar Calendar project. It is the reference point for implementation decisions made by humans and AI agents.

## Product Summary

Solar Calendar is a web experience that lets the user pick a date and time, then visualizes the solar system so the planets appear in the relative positions they would have on that date.

The first version should prioritize clarity, smooth interaction, and maintainable architecture over physical perfection.

## Goals

- Provide a custom date selector for day, month, and time.
- Update the solar system visualization when the date changes.
- Keep the planetary movement readable and visually coherent.
- Build a foundation that is easy to extend later.

## Non-Goals

- No real-time astronomical simulation engine in the first version.
- No heavyweight 3D rendering unless it becomes necessary later.
- No monolithic UI component that mixes date handling, orbital math, and rendering.

## Recommended Stack

- Structure: semantic HTML.
- Behavior: vanilla JavaScript with ES modules.
- Styling: CSS with design tokens and a clear component-based structure.
- Visualization: SVG first, with the option to introduce Canvas later if performance requires it.
- Optional utilities: tiny helpers only if they significantly reduce complexity.
- Deployment: static hosting on GitHub Pages.
- Testing: browser-oriented unit and integration tests if/when a lightweight test runner is added.

## Architecture Overview

The codebase should be organized around separation of concerns:

- HTML elements handle structure and accessibility.
- JavaScript modules handle interaction, state, and orchestration.
- Domain utilities handle date normalization, orbital math, and position mapping.
- Rendering modules consume computed positions and update the SVG or DOM.

## Suggested Design Patterns

- Composition for assembling the UI from small parts.
- Container/presentational separation where it improves clarity.
- Strategy pattern for interchangeable orbit or position calculation rules.
- Adapter pattern if external date or astronomy sources are introduced later.
- Pure function pipelines for date-to-position transforms.

## Data Flow

1. The user changes the selected date or time.
2. The date state is normalized into a canonical representation.
3. Domain logic calculates planetary positions for that date.
4. The visualization receives computed positions and renders the updated system.

## Core Modules

The first implementation should aim for modules similar to these:

- `components/`: reusable UI fragments.
- `features/date-picker/`: custom date selector logic and view.
- `features/solar-system/`: solar system visualization and orbital rendering.
- `domain/astronomy/`: date-to-position calculations and orbital helpers.
- `domain/date/`: date parsing, normalization, and formatting helpers.
- `shared/`: shared utilities, tokens, and constants.

## State Management

- Keep state local unless it genuinely needs to be shared.
- Prefer a single source of truth for the selected date.
- Derive orbit positions from the selected date instead of storing redundant copies.
- Avoid deeply nested callback chains where module boundaries or event delegation would be clearer.

## Visual Direction

- The UI should feel intentional rather than generic.
- Prefer a clear visual identity with controlled typography, spacing, and color tokens.
- Use motion sparingly, but meaningfully, to reinforce the orbital metaphor.
- Ensure the layout remains usable on mobile and desktop.

## Accessibility Requirements

- Keyboard navigation must work for the date selector.
- Interactive elements must have clear labels and focus states.
- Color should not be the only cue for meaning.
- The visualization should remain understandable even when motion is reduced.

## Testing Strategy

- Unit test domain logic for date normalization and orbital calculations.
- Test the date selector interactions in a browser-like environment.
- Test the rendering contract for the solar system view where practical.
- Add regression tests for bugs that involve date conversion or state synchronization.

## Code Quality Rules

- Prefer small, named functions over long inline logic.
- Keep pure computation separate from rendering.
- Avoid duplicated constants and magic numbers.
- Use explicit types for domain data.
- Comment only where the intent is not obvious.

## Initial Delivery Target

The first implementation milestone should include:

- The basic app shell.
- The custom date selector.
- A solar system visualization with responsive orbits.
- A clear mapping between selected date and planetary positions.
- Baseline tests for the important pure logic.
