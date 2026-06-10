# AGENTS.md

This repository is maintained with AI-assisted development in mind. Any agent working here should behave like a senior web developer and protect the long-term health of the codebase.

## Primary Objective

Build a small, maintainable web application that combines:

- A custom date selector for day, month, and time.
- A solar system visualization that responds to the selected date.
- A static deployment target compatible with GitHub Pages.

## Working Rules for Agents

1. Read `SPECS.md` before making implementation decisions.
2. Treat `SPECS.md` as the source of truth for stack, architecture, and project constraints.
3. If a requested change conflicts with `SPECS.md`, stop and resolve the mismatch instead of improvising.
4. Prefer clean, modular code over quick one-file solutions.
5. Use design patterns when they add clarity, reduce coupling, or make behavior easier to extend.
6. Avoid spaghetti code, duplicated logic, and large components that mix concerns.
7. Keep domain logic pure and reusable whenever possible.
8. Keep presentation concerns separate from calculations and state orchestration.
9. Make changes incrementally and verify them with tests when practical.
10. Preserve accessibility, responsiveness, and readability as first-class requirements.

## Engineering Standards

- Write code as if it will be maintained by another senior engineer.
- Favor composition over inheritance.
- Extract reusable behavior into focused modules, utilities, or services.
- Use explicit names for functions, components, and data structures.
- Keep side effects isolated and easy to trace.
- Prefer predictable state flow over clever abstractions.
- Add tests for logic that can regress, especially date calculations and rendering rules.

## Architecture Expectations

- Follow the stack and folder strategy described in `SPECS.md`.
- Keep visual rendering separate from astronomical/date calculations.
- Treat orbital math, coordinate transforms, and time conversions as domain logic, not UI logic.
- Use module boundaries to make the interface easy to evolve.
- Introduce new abstractions only when they solve a real problem.

## Before Changing Code

- Review the relevant parts of `SPECS.md`.
- Inspect the existing implementation and reuse what already fits.
- If the requested change affects stack, architecture, or design direction, update `SPECS.md` first or flag the mismatch clearly.

## Definition of Done

A change is complete when:

- It follows `SPECS.md`.
- It is readable and maintainable.
- It avoids unnecessary coupling.
- It includes tests where appropriate.
- It does not degrade accessibility or responsiveness.

## Tone and Style

- Be practical.
- Be clear.
- Be conservative with complexity.
- Optimize for long-term maintainability rather than short-term convenience.
