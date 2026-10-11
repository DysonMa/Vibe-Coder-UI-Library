# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are vibe coders at two experience levels: people beginning to use AI for frontend work, and developers who can build but lack a precise UI/UX vocabulary. They use the product while deciding how to describe a desired interface, interaction, motion, or layout to an AI coding agent.

## Product Purpose

Vibe UI Patterns is an interactive learning reference for UI/UX prompt vocabulary. It helps visitors understand a term's essential effect and express the desired frontend behavior to AI with short, accurate terminology and ready-to-copy prompts.

Success means a visitor can quickly identify the right term, understand its core distinction, and give an AI a concise prompt that produces the intended result.

## Positioning

The product combines a curated, credibility-labelled vocabulary with deliberately small live demonstrations and AI-ready prompt phrasing. It is a precision reference for communicating frontend intent, rather than a general UI inspiration gallery or a full implementation tutorial.

## Operating Context

Visitors browse by pattern category, search by effect or term, interact with a small demonstration, compare easily confused concepts, and copy or assemble prompt language for use in an AI coding workflow.

## Capabilities and Constraints

- The product presents 61 patterns across Scroll, Layout, Motion, Interaction, Navigation, Loading & Feedback, Forms & Input, Responsive Design, and Visual Style.
- Each pattern has a concise Chinese explanation, an English AI prompt, a trust label (`Standard`, `UX Pattern`, or `Common Term`), and a focused interactive demonstration.
- The product is a static React + Vite web application; it has no backend or account flow.
- Interactions and animation must respect `prefers-reduced-motion`.
- Demos must stay deliberately simple and communicate only a pattern's central behavioral difference. Simple, useful wayfinding is more important than decorative complexity.

## Brand Commitments

The product name is Vibe UI Patterns / VIBE/UI. Its voice is direct, educational, compact, and practical for people prompting AI. The interface supports Traditional Chinese explanations with English technical vocabulary and prompts.

## Evidence on Hand

- Curated terminology, definitions, classification guidance, prompt examples, and demo constraints: `vibe-coding-ui-pattern-vocabulary.md`.
- Implemented React application and demonstration dataset: `src/App.jsx`, `src/patterns.js`, and `src/styles.css`.
- No user testimonials, customer data, performance benchmarks, or external product claims are available; future work must not fabricate them.

## Product Principles

1. Teach the name through the essential behavior, not through decoration.
2. Make the next useful action obvious: find a term, understand it, copy a prompt.
3. Prefer concise, accurate language over broad or fashionable claims.
4. Preserve the difference between standards, established UX patterns, and community terminology.
5. Reduce visual and interaction complexity whenever it does not help a visitor learn or act.

## Accessibility & Inclusion

- Respect reduced-motion preferences.
- Keep controls operable by keyboard and ensure visual labels are understandable without relying only on color.
- Preserve readable contrast and responsive access across desktop and mobile web.
