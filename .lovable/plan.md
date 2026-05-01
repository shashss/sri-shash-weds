# South Indian Wedding Invitation — Srilatha & Shashwath

A premium, single-page royal South Indian wedding invitation built as one static HTML file, dropped into `public/` so it's served as-is at `/invite.html`. The home route `/` will redirect to it so the preview opens straight into the invitation.

## Content

**Couple**
- Bride: Srilatha N S — D/o Sivasankaran N & Vijayalakshmi S
- Groom: Shashwath Sriram — S/o Sriram P & Deepa Shriram

**Events**
- Reception — 6 June 2026, 6:30 PM – 9:00 PM
- Wedding (Kalyanam) — 7 June 2026, 6:30 AM – 8:30 AM (countdown anchors to this)

**Venue (both events)**
- Sri Krishnaswamy Kalyana Mandapam, South Boag Road, T. Nagar, Chennai
- Map: https://maps.app.goo.gl/esm7RfPDHBf234Cx5

## Page Sections (in order)

1. **Scroll progress bar** — slim gold bar fixed at top.
2. **Hero (full viewport)** — uploaded reference images layered as backdrop (gopuram + peacocks + deepam + garden), with parallax. Sanskrit/Tamil invocation ("ॐ श्री गणेशाय नमः" / "சுபமுகூர்த்தம்") above. Couple names "Srilatha N S ✦ Shashwath Sriram" in **Cinzel Decorative**, separated by an ornamental gold divider. Date line "07 · 06 · 2026 — Chennai". Subtle scroll-down cue.
3. **Floating deepam lamps** — fixed-position SVG oil lamps that descend / brighten as the user scrolls (scroll listener + transform).
4. **Invitation note** — "With the blessings of elders…" intro in Philosopher/Lora, both sets of parents named, request-the-honour line.
5. **Couple cards** — two clip-path (temple-arch shaped) cards side-by-side: bride and groom names, parents, short tagline. Reveal on scroll via IntersectionObserver.
6. **Events timeline** — two ornate cards (Reception, Wedding) with date, time, venue. Gold border, kolam corner motifs.
7. **Live countdown** — DD : HH : MM : SS to 7 June 2026, 6:30 AM IST.
8. **Venue + map** — venue name, full address, "Open in Google Maps" gold button linking to the provided URL, plus an embedded Google Maps iframe.
9. **Footer** — couple monogram, names, date, "With love and gratitude".

## Interactions

- Scroll progress bar (gold) tracking page scroll.
- Parallax on hero backdrop image and temple SVG layer.
- Descending deepam lamps tied to scrollY.
- IntersectionObserver fade/slide-up reveals on every section.
- Clip-path arch cards for couple + events.
- **Background music toggle** — fixed bottom-right circular button (🎵 / 🔇) playing a soft nadaswaram/veena loop; muted by default (autoplay policy), persists state in `localStorage`.
- Live countdown updating every second.

## Design System

- Fonts (Google Fonts): Cinzel Decorative (couple names, headings), Cinzel (subheads), Philosopher (body accents), Lora (body), Noto Serif Tamil (Tamil lines).
- Palette: deep red `#3D0000`, crimson `#C0392B`, dark aquamarine `#015041`, gold `#C9942A`, ivory `#FDF6E3`, cream `#FAF0DC`.
- Texture: subtle cream paper background, gold filigree dividers, kolam corner ornaments (inline SVG).
- Fully responsive down to 360 px; hero scales, cards stack on mobile.

## Technical Details

- Single file: `public/invite.html` (pure HTML5 + CSS3 + vanilla JS, no frameworks, no build step).
- Uploaded reference images saved to `public/hero/` and used as layered `background-image`s in the hero (with `object-fit: cover` / `background-size: cover`).
- Music: a small royalty-free instrumental loop placed at `public/audio/invite-loop.mp3` (placeholder file; user can swap).
- Map: `<iframe>` Google Maps embed using the venue query, plus a direct link to the provided short URL.
- `src/routes/index.tsx` updated to immediately redirect to `/invite.html` so the existing preview entry-point shows the invitation. The TanStack route shell stays intact (no other routes touched).
- No backend, no Lovable Cloud, no env vars needed.

## Out of Scope

- No RSVP form, no nichayathartham or extra events, no grandparents — per your instructions.
