# Ornamental Elements — Generate, Preview, Then Integrate

## Step 1 — Generate the elements (AI image, transparent PNG)

Using the Nano Banana Pro image model, I'll generate **6 individual ornament PNGs** with transparent backgrounds, in a consistent traditional South-Indian wedding illustration style (gold `#C9942A`, peacock teal `#1F6F7A`, deep red `#3D0000`, soft pink `#E89BB0`, leaf green `#6B8E5A`) on the cream parchment palette already used in the invite.

Assets to produce (saved to `public/ornaments/`):

1. **`peacock-left.png`** — single ornate peacock facing right, tail fanned, gold + teal + pink accents, traditional Tanjore/Kalamkari illustration style.
2. **`peacock-right.png`** — mirror of #1 (facing left).
3. **`gopuram-pillar.png`** — tall slim temple pillar with tiered roof, ivory + gold detailing.
4. **`floral-garland.png`** — horizontal hanging garland of pink hibiscus + jasmine + green leaves, for top-of-section dividers.
5. **`palm-frond.png`** — single curved coconut/areca palm leaf in deep green.
6. **`mandala-corner.png`** — quarter-circle gold mandala/kolam ornament for section corners.

## Step 2 — Show them to you

I will display all 6 PNGs inline in chat (via `presentation-artifact`) for your approval. **No changes to `invite.html` until you say "go".**

If any element looks off, I regenerate just that one.

## Step 3 — Integrate (only after approval)

Replace current inline-SVG hero ornaments with the new PNGs:

- **Hero**: peacocks bottom-left & bottom-right, gopuram pillars left & right edges, floral garland across the top, palm fronds in lower corners, mandala behind monogram.
- **Section dividers**: small floral garland between each section (Couple, Celebrations, Venue).
- **Card corners**: mandala-corner ornaments in the top-left of each event card and the venue card.
- **Parents block**: small palm fronds flanking the heading (replacing the removed lines you asked to drop earlier — purely decorative, no horizontal rule).

## Step 4 — Scroll animations on every ornament

Extend the existing `IntersectionObserver` to also animate ornaments:

- Peacocks: `reveal-zoom` + 6s continuous `swayPeacock` after reveal.
- Garlands: `reveal` (fade-down from top) + 8s `breathe`.
- Palm fronds: `reveal-left` / `reveal-right` + 7s `windSway`.
- Mandalas: `reveal-zoom` + 30s slow `rotate` continuous.
- Pillars: `reveal` (fade-up) + 10s `floatY`.

Stagger sibling ornaments by 150 ms so they cascade into view as you scroll.

## Technical notes

- Generation model: `google/gemini-3-pro-image-preview` (Nano Banana Pro — best quality for illustrative work). Each image requested at ~1024px on the long edge, transparent background, "no text, no border, traditional Indian wedding ornament illustration, flat vector style, gold/teal/pink/green palette on white".
- Saved as PNG under `public/ornaments/`, referenced from `public/invite.html`.
- All animations CSS-only, GPU-friendly (`transform` + `opacity`), respect `prefers-reduced-motion`.
- No new npm packages, no framework changes — still a single static HTML file.

## What I need from you

Just approve this plan. I'll generate the 6 elements, post them in chat for review, and wait for your "go" before touching `invite.html`.
