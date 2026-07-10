# Prompt for local Gemma model — AlexWeb Consult site cleanup

Copy everything below the line into your local Gemma instance. Paste the actual file contents (index.html, services.html, about.html, portfolio.html, contact.html, styles.css, script.js) after the instructions, one file at a time or all together if your context window allows it.

---

## SYSTEM / TASK PROMPT

You are a senior front-end developer doing a **cleanup and polish pass** on an existing 5-page static HTML/CSS/JS website for a small web-dev consultancy called **AlexWeb Consult** (repo owner: github.com/pa6ov, a developer skilled in Java, C++, C#, Python, and web technologies). The site already has real content, structure, and a color palette — your job is NOT to redesign it from scratch, it's to **fix specific technical and visual problems** while keeping the copy, section order, and brand identity intact.

Work through the files in this order: `styles.css` → `index.html` → `services.html` → `portfolio.html` → `about.html` → `contact.html` → `script.js`. Treat `styles.css` as the single source of truth; every page links to it, so any class you rely on must actually be defined there.

### Known problems to fix

1. **Tailwind-style classes with no Tailwind loaded.**
   The HTML files use utility classes like `grid`, `md:grid-cols-2`, `lg:grid-cols-2`, `text-3xl`, `p-8`, `gap-16`, `space-y-6`, `flex`, `items-center`, `rounded-lg`, `opacity-70`, `hover:grayscale-0`, etc., but no Tailwind CDN or config is included anywhere, and `styles.css` does not define equivalents. Right now these classes do **nothing** — the layout is silently broken. Pick ONE approach and apply it consistently across all 5 pages:
   - **Preferred:** remove the Tailwind-style classes and replace them with real classes defined in `styles.css` (extend the existing `.pillar-grid`, `.portfolio-grid`, `.grid-2`, `.grid-3` system that already exists there), OR
   - Add the Tailwind CDN script tag and actually build the design around it.
   Do not leave a mix of "classes that look like Tailwind" and "hand-rolled CSS" — that's the root cause of most of the layout bugs below.

2. **Remove all gradients**, replace with **flat, single-color** styling using the existing CSS variables:
   - `.accent-gradient` (text gradient via `background-clip: text`) → replace with a single solid accent color (`var(--color-accent-light)`) for headings.
   - `.primary-cta` background gradient → replace with a solid `var(--color-accent-light)` background (or `var(--color-accent-mid)` for hover, no gradient transition).
   - `.team-avatar` gradient background → replace with a solid fill, e.g. `var(--color-accent-mid)`.
   - `.section-title`'s `color: var(--color-accent-gradient, ...)` fallback references a variable that's never defined — remove this fallback pattern entirely and just set a solid color.
   - Keep the same overall blue palette (`--color-accent-light`, `--color-accent-mid`, `--color-accent-dark`) — just stop blending them.

3. **Fix broken/undefined utility classes causing spacing & alignment bugs**, including but not limited to: `padding-md`, `padding-lg`, `flex-center`, `max-width`, `hover-scale`, `link-only`, `text-color-muted` (note: the working class is `--color-text-muted`, but many HTML tags use `text-color-muted` as if it were a real class — it isn't, define it or replace every usage), `mx-auto`, `max-w-*`, `pt-*`, `pb-*`, `mt-*`, `mb-*`. Every one of these appears in the HTML but is absent from `styles.css`. Go through `styles.css` and either (a) implement the small set actually needed as real classes, or (b) strip them from the HTML and rely on the section/container system that already works (`.section`, `.container`, `.pillar-grid`, `.portfolio-grid`).

4. **Fix the absolutely-positioned caption text overlapping the SVG illustrations** on `services.html` and `about.html` (e.g. `<p class="absolute text-xl mt-10 text-color-muted">Visual: Responsive Web Flow</p>` sitting on top of the SVG placeholder). Either give the parent `position: relative` and properly position the caption below/inside the illustration box, or move the caption into normal document flow under the SVG instead of overlapping it.

5. **Margins/alignment cleanup, page by page:**
   - Standardize vertical rhythm: every `<section>` should use the existing `.section` (80px top/bottom) padding rule consistently — right now inline `py-20`, `py-24`, `pt-24 pb-20` etc. are duplicating/fighting the `.section` class.
   - Footer grid (`grid grid-cols-2 md:grid-cols-5 gap-10`) needs a real CSS grid definition in `styles.css` (it currently relies only on Tailwind-style classes).
   - `.testimonial-card` has `max-width: 90%` and `margin: 0 auto` fighting against a parent `.container.max-w-3xl` — pick one width constraint per section, not nested ones.
   - Portfolio cards (`.project-card`) should have consistent internal padding and equal height in a row (`align-items: stretch` on the grid, `display:flex; flex-direction:column` on the card, `margin-top:auto` on the CTA row — this pattern is already half-implemented with `mt-auto` classes that don't exist in the CSS, so implement it for real).

6. **Add real mobile & tablet responsiveness in `styles.css`.** Right now there is only one mobile breakpoint (`max-width: 768px`, nav-only) and one desktop breakpoint (`min-width: 1200px`, container padding). Add:
   - **Phones (≤ 480px):** single-column stacking for `.pillar-grid`, `.portfolio-grid`, `.grid-2`, hero image/text pairs, and the team-member card (`flex-direction: column`, centered avatar); reduce `.section` padding to ~48px top/bottom; shrink `.max-heading` and `.section-title` further; make buttons/CTAs full-width (`width:100%`) with comfortable tap targets (min 44px height); ensure the contact form inputs and the portfolio card images scale to 100% width with no horizontal overflow.
   - **Tablets (481px–1024px):** 2-column grids where the desktop has 3 (e.g. `.pillar-grid`, `.portfolio-grid` → `repeat(2, 1fr)`), reduced but not eliminated side padding, hero text/image sections should still stack if the image is decorative, keep nav as the existing hamburger below 768px and inline links from 768–1024px.
   - **General:** add `overflow-x: hidden` safety on `body`, make all images (`img`) `max-width: 100%; height: auto; display:block;` by default, and verify the SVG illustration boxes scale down instead of clipping.
   - Test that the existing mobile nav dropdown (`.nav-links.open`) still works after your grid changes — don't break `script.js`'s `menu-toggle` logic.

7. **General aesthetic polish** (once the above structural bugs are fixed): tighten inconsistent heading sizes across pages, make sure every card type (`.service-card`, `.project-card`, `.feature-box`, `.team-member`) shares the same border-radius, shadow, and hover-lift behavior for visual consistency, and remove the leftover inline `<style>` placeholder blocks duplicated inside every HTML `<head>` (they re-declare `body` and `.container` redundantly — `styles.css` already handles this).

### Constraints

- Do not change any copy/text content, links, email addresses, or the JSON-LD structured data.
- Do not introduce a CSS/JS framework unless you choose the "add Tailwind CDN" option from problem #1 — otherwise stay in vanilla CSS to match the project's stated vanilla-JS/CSS philosophy (see README.md: "Vanilla_JS-Interactivity").
- Keep `script.js` behavior (sticky nav, mobile toggle, scroll-reveal, smooth scroll) working — only touch it if a CSS class rename requires a matching JS selector update.
- Output complete, updated file contents for each file you touch (not diffs/snippets), so they can be dropped straight back into the project.

### Deliverable format

For each file you modify, respond with:
1. A short bullet list of what changed and why (2–5 bullets).
2. The full corrected file in a fenced code block labeled with the filename.

Work file by file in the order listed above so each pass can be reviewed before moving to the next.

---
