## Edits to `public/invite.html`

All changes are in a single file. No new assets, no JS changes.

### 1. Hero section — remove ornaments

Delete these blocks (lines ~269–278):

- Both `gopuram-pillar.png` images (`.pillar-l`, `.pillar-r`)
- Both `palm-frond.png` images (`.frond-tl`, `.frond-tr`)
- The top `floral-garland.png` (`.garland-top`, lines 264–266)

Keep the two peacocks (you only asked to remove gopuram + leaves + top floral). If you also want peacocks gone, say so and I'll drop them too.

Also clean up the now-unused CSS rules for `.garland-top`, `.pillar-*`, `.frond-tl`, `.frond-tr` so the stylesheet stays tidy.

### 2. "Two Souls, One Vow" section — remove leaf decor

- Remove the `divider-orn` floral-garland image directly under the heading (line 337). This is the leafy garland appearing in that section's background area.

### 3. Bride & Groom — remove quotes

- Delete the two `<p class="quote">…</p>` lines (348 and 358).

### 4. Events section — rename

- Line 376: change `<div class="tag">Reception</div>` → `<div class="tag">Evening</div>`
- Line 377: change `<h3>Souvenir Soirée</h3>` → `<h3>Reception</h3>`

### 5. Countdown heading

- Line 402: change `Counting Down to the Muhurtham` → `Counting Towards the Wedding`

6. Replace the music with   
 "Walk of the Bride" — Agam (video id p2O6O907fM0)  
and please start the music from 0:55   
-----------  
the elements are not aligned properly throughout the page;  
sharing the exact set of changes  


### Note on "can't select elements"

The hero ornaments use `pointer-events:none` (line 53), so they shouldn't block clicks — but several large absolutely-positioned PNGs overlap the hero text area, which is likely what makes the layout feel cluttered/un-clickable. Removing the gopuram + fronds + top garland (step 1) will restore a clean hero with just the peacocks at the bottom corners.

Reply "go" to apply all six edits.