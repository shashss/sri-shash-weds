# Invitation Update Plan (revised)

All edits live in `public/invite.html`.

## 1. Remove floating deepam lamps
- Delete the four `<img class="deepam">` tags.
- Remove `.deepam` CSS + `@keyframes flicker`.
- Remove the deepam loop inside the scroll handler.

## 2. Richer scroll animations
- Keep the single `IntersectionObserver`, but support variants:
  `reveal` (fade-up), `reveal-left`, `reveal-right`, `reveal-zoom`.
- Stagger children in `.couple-grid`, `.events`, and `.note .families` via
  `:nth-child` `transition-delay` (0/150/300 ms).
- Bride card slides in from left, groom from right; event cards zoom in;
  countdown fades up; venue card fades up.

## 3. New hero — light, ornamental, animated (matches reference image)

Replace the dark photo + red gradient hero with a **light ivory/cream parchment** scene built from layered SVGs/PNGs, in the spirit of the uploaded reference (gopuram pillars, peacocks, pink florals, palm fronds, vintage rose backdrop).

Composition:

```text
┌──────────────────────────────────────────────┐
│ ║gopuram   ✿ floral garland top ✿   gopuram║│
│ ║pillar                                pillar║│
│ ║+peacock                            peacock+║│
│ ║                                            ║│
│ ║          SRILATHA  N  S                    ║│
│ ║              ~ & ~                         ║│
│ ║         SHASHWATH SRIRAM                   ║│
│ ║                                            ║│
│ ║          07 · 06 · 2026                    ║│
│ ║                                            ║│
│ ║palm                                    palm║│
│ ║+gopuram base       ✿ florals    gopuram   ║│
└──────────────────────────────────────────────┘
```

Build approach (all inline assets, no external photo):
- **Background**: soft parchment gradient `#FDF6E3 → #FAF0DC → #f3e6c8` with a faint repeating rose-watermark pattern (low-opacity inline SVG of stylized roses, ~6% alpha) — mimics the vintage floral wallpaper.
- **Corner ornaments (4 inline SVGs)**:
  - Top-left & bottom-left: gopuram pillar + peacock + pink hibiscus cluster.
  - Top-right & bottom-right: mirrored gopuram pillar + peacock + palm frond.
  - Drawn in detailed inline SVG using gold (`#C9942A`), muted teal/peacock blue (`#1F6F7A`), ivory pillars (`#EFE4C8`), pink florals (`#E89BB0`), green leaves (`#6B8E5A`).
- **Animations** (all CSS, GPU-friendly):
  - Peacocks: gentle 6s `swayPeacock` (rotate ±2°, translateY ±4px).
  - Florals: 8s `breathe` (scale 1 ↔ 1.03).
  - Palm fronds: 7s `windSway` (rotate ±3° from base).
  - Gopuram: 10s `floatY` (translateY ±5px).
  - Tiny gold sparkle particles (~10 absolutely-positioned dots) drifting upward via `floatUp` keyframe with staggered delays.
  - Center monogram divider gets a soft `glow` pulse on the gold ornament.
- **Foreground (centered)**:
  - Small gold "श्री" monogram swapped for a simple gold ✦ ornament (since Sanskrit/Tamil text is being removed).
  - Couple names in **Cinzel Decorative**, color **deep red `#3D0000`** (great contrast on cream).
  - "& " separator in **gold `#C9942A`**.
  - Date line in muted green `#015041` with letter-spacing.
  - Scroll cue at bottom in gold.

`public/hero/hero-bg.jpg` will no longer be referenced (file kept on disk, harmless).

## 4. Remove Sanskrit & Tamil greetings
- Delete the hero `.invocation` block (`ॐ श्री गणेशाय नमः` + `சுபமுகூர்த்தம்`).
- Strip Tamil eyebrow text from every section: keep `Invitation`, `The Couple`, `Celebrations`, `Venue` (English only).
- Remove `Noto Serif Tamil` from the Google Fonts URL.

## 5. Font color updates (because hero is now light)
- Hero couple names: `#3D0000` (deep red) with subtle `0 2px 8px rgba(61,0,0,.15)` shadow.
- Hero "& " amp + ornament: `#C9942A` (gold).
- Hero date + scroll cue: `#015041` (deep green) — readable on cream.
- Rest of the page (already on ivory) stays as-is, since current colors already work on light backgrounds.

## 6. Autoplay "Vizhi Veekura" by Sai Abhyankar
Modern browsers block unmuted autoplay until user interaction. Implementation:
- Embed the official YouTube audio via a hidden `<iframe>`:
  `https://www.youtube.com/embed/<VIDEO_ID>?autoplay=1&loop=1&playlist=<VIDEO_ID>&controls=0&modestbranding=1`,
  `allow="autoplay"`, sized 0×0, opacity 0.
- Attach a one-shot `pointerdown`/`scroll`/`keydown` listener that calls
  `iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}','*')` to guarantee sound starts at first interaction (covers mobile Safari).
- Music toggle button (bottom-right) now sends `playVideo` / `pauseVideo` to the iframe instead of controlling `<audio>`. State persists in `localStorage`.
- The `<audio>` tag and its CDN MP3 source are removed.

**Need from you (one input)**: paste the YouTube URL for "Vizhi Veekura — Sai Abhyankar" (e.g. `https://www.youtube.com/watch?v=XXXXXXXXXXX`). I'll extract the 11-char video ID. If you'd rather I pick the top official upload, say "you choose" and I'll wire in what I find — you can swap the ID later in one line.

## 7. Remove decorative lines around parents' names
In the `.note` block:
- Delete the intro paragraph ("Together with their families…").
- Delete the closing paragraph ("…request the honour of your presence…").
- Keep only: heading + ornament + the two-column families grid (Bride's Parents / Groom's Parents).

---

## Question
Please paste the **YouTube URL** for *Vizhi Veekura by Sai Abhyankar* (or reply "you choose"). Everything else I have what I need to implement.
