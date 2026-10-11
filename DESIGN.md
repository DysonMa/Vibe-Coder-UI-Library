# Design System

<!-- impeccable:design-schema 1 -->

## Visual World

Vibe UI Patterns is a large-format interactive reference desk: calm paper-like surfaces, a precise cobalt-blue signal color, and generous reading space. It should feel like a practical visual glossary rather than a dashboard, code editor, or inspiration gallery.

## Surface Mode

Read. The visitor is learning a term and needs to find, understand, and reuse it quickly.

## Layout

- A quiet masthead keeps global search always available.
- The hero explains the one job in large, readable type.
- Category navigation is a clear horizontal index.
- Each selected category renders as a vertical series of large reference entries, not a dense multi-column card grid.
- Every entry pairs a calm reading column with one medium, consistently framed demo stage.
- On small screens, content remains single-column with the demo following the explanation.

## Typography

- Use Noto Sans TC as the main reading and display face.
- Use DM Mono only for prompts, keyboard shortcuts, and small technical labels.
- Body copy is at least 16px; primary titles and controls are noticeably larger than utility labels.
- Hierarchy comes from scale, weight, whitespace, and alignment—not decorative type effects.

## Color and Surfaces

- Main ground: warm paper white.
- Ink: deep blue-black for readable text.
- Signal: cobalt blue for active states, links, and primary actions.
- Demo stage: pale blue-gray field with a single cobalt action color.
- Trust labels retain distinct, accessible colors without defining the whole interface.

## Motion and Interaction

- The Hero uses a single scroll-linked parallax transition: its title recedes as a concise title takes its place in the fixed header.
- Every demo is a self-contained interaction viewport. Scroll patterns use their own fixed-height scroll area; other patterns respond only when a visitor clicks, drags, scrolls, or hovers as appropriate.
- Motion pauses visually under `prefers-reduced-motion`.
- No decorative auto-playing loops or repeated page-level animations.

## Accessibility

- Maintain keyboard-visible focus, clear labels, and contrast suitable for reading.
- Do not rely on color alone for pattern credibility labels.
- Keep prompts selectable and Copy controls large enough for touch.
