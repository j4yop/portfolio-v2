# Portfolio-v2 Domain Model

A high-performance personal developer portfolio and engineering showcase with blueprint-grid visual language, Web Audio micro-interactions, and live GitHub ecosystem telemetry.

## Layout & Architecture

**Blueprint Grid**:
The structural layout system dividing the viewport into two 30% margin gutters and a 40% centered content column on desktop, bounded by fine dashed lines (`repeating-linear-gradient` mask) and 2×2px intersection nodes.
_Avoid_: Wireframe, container grid, columns layout

**Cell 1**:
The top hero zone occupying `22vh` (or clamped dynamic height in archive pages) containing interactive background effects (canvas petals, spotlight dots, or WebGL displacement) and the live clock.
_Avoid_: Header banner, hero section

**Cell 2**:
The 112px fixed header band directly below Cell 1, anchoring the framed avatar, title typography with chromatic aberration shadow, command palette trigger, and theme toggle.
_Avoid_: Navbar bar, profile row

**Flowing Content Column**:
The centered 40% scrollable vertical column housing all editorial content, showcase grids, and telemetry sections.
_Avoid_: Main content, body area

**Blueprint Nav**:
The fixed desktop right-side navigation overlay in the right margin tracking active on-page sections via IntersectionObserver.
_Avoid_: Sidebar, table of contents

## Showcase & Telemetry

**Experience Timeline**:
A horizontal interactive Gantt-style career chart visualizing tenures, roles, and dates across full chart width with auto-scroll on mobile.
_Avoid_: Work history, career list

**Project Card**:
A dual-layer showcase card featuring an outer border wrapper, ambient hover background preview, bottom-aligned floating screenshot, live/building status pill, and optional video modal trigger.
_Avoid_: Project tile, portfolio item

**Contribution Graph**:
A live GitHub calendar heatmap proxying GraphQL requests through `/api/github` with client-side `localStorage` caching and offline fallback.
_Avoid_: Heatmap, commit chart

**Open Source Contributions**:
A filtered list of pull requests queried via GitHub GraphQL Search (`author:Ashutoshx7 type:pr`) supporting merged, open, and closed states with pagination.
_Avoid_: PR list, contributions table

**Highlight Card**:
An archival or marquee milestone badge celebrating program acceptances (GSoC, LFX, Vercel OSS, Claude OSS, Sentry, Sarvam) and media features.
_Avoid_: Award card, accomplishment

## Interactions & Audio

**Sound Engine**:
A singleton Web Audio API coordinator decoding base64-embedded audio assets with buffer caching, handling volume attenuation, pitch scaling, and sound playback.
_Avoid_: Audio player, sound effects manager

**Flight Button**:
A GSAP-driven submission button morphing into a 3D flying paper airplane with trail svg animations and completion states.
_Avoid_: Submit button, animated button

**Flip Cover Button**:
A 3D folding lid button hinged at the top edge rotating -120deg on hover to reveal a Cal.com booking action underneath.
_Avoid_: 3D button, booking button

**Displacement Text**:
A Three.js WebGL plane with custom GLSL vertex displacement shaders displacing typography toward the pointer along the z-axis.
_Avoid_: 3D text, canvas text

**Cursor Companion (Oneko)**:
An interactive 8-directional animated screen companion sprite tracking cursor movement vectors across the viewport, featuring retro idle scratch/sleep states, draggable positioning, speech bubble responses, and variant switching.
_Avoid_: Floating gif, mouse icon, pet widget

