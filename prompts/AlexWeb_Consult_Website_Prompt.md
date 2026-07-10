# Prompt for Local Gemma — AlexWeb Consult Website

Copy everything in the code block below and paste it as a single prompt into your local Gemma instance (Ollama / LM Studio / etc.). It's written to produce a complete, ready-to-deploy static site in one pass, with no placeholders.

```
You are a senior frontend developer and brand designer. Build a complete, production-ready,
multi-page static website for a web development agency called "AlexWeb Consult."

=== BRAND CONTEXT ===
Name: AlexWeb Consult
Tagline: "Your Digital Partner"
Logo concept: a stylized "AW" monogram — the "A" is a gradient triangle/peak from light sky-blue
into deep navy, the "W" sits below it in solid deep navy, forming one continuous connected mark.
Wordmark "AlexWeb" is set in dark navy, bold, modern sans-serif; "CONSULT" appears beneath it in
the lighter blue, letter-spaced, small caps.

Color palette (use as CSS custom properties):
--color-bg-primary: #0B0E1A;      /* near-black background, main dark theme base */
--color-bg-surface: #121729;      /* slightly lighter panel/card background */
--color-accent-light: #4A9FE8;    /* light sky blue, from top of logo gradient */
--color-accent-mid: #2D5FC7;      /* mid-tone blue for gradients/hovers */
--color-accent-dark: #1B2A6B;     /* deep navy, from bottom of logo gradient + wordmark */
--color-text-primary: #F5F7FA;    /* off-white text on dark backgrounds */
--color-text-muted: #A9B4CC;      /* muted blue-grey secondary text */
--color-white-panel: #FFFFFF;     /* used sparingly for high-contrast cards/CTAs, echoing the logo's white circle */

Visual style reference: dark, techy, professional — thin glowing blue circuit/line accents in the
background (subtle, low-opacity SVG or CSS, not distracting), soft rounded rectangle panels,
gradient accent on key headlines and buttons (light blue → navy), generous whitespace, modern
sans-serif typography (e.g. Inter, Poppins, or system-ui stack). This mirrors the agency's own
Instagram promotional graphic, which uses this exact dark/blue-glow aesthetic.

=== BUSINESS INFO (use verbatim where noted, do not invent conflicting facts) ===
Company: AlexWeb Consult — a small, senior team of web developers (also do embedded/firmware
consulting on request, but the primary offering is web).
Tagline: "Your Digital Partner"
Core services (three pillars, keep these exact names as section headers or nav anchors):
  1. Website Creation & Support
  2. Tech Consultations
  3. "We build & maintain, you grow" — positioned as the ongoing-partnership value prop, not a
     separate service; use it as a supporting statement under the three-pillar section or as a
     closing-section headline.
Primary CTA everywhere: "Book your FREE consultation today!" (Instagram bio phrases this as
"Book a free call!") → button label "Tap to Book!" / "Book Free Consultation" (adapt wording per
context, keep the "free consultation" offer intact).
Contact email: alexweb.consult@outlook.com
No phone number or physical address is provided — do not invent one. Leave the contact section
built around email + a contact form only.
Instagram: https://www.instagram.com/alexweb.consult/ (handle @alexweb.consult)

REAL PORTFOLIO / PROJECTS (use these — they are actual work, not placeholders):
  1. BetterHealthyLife — https://betterhealthylife.eu/ — an e-commerce site selling structured
     workout programs (e.g. ABS program, Legs & Butt program) with cart, wishlist, and
     subscription-based access to training content. Describe as: "E-commerce build for a fitness
     & wellness brand, with product catalog, cart, and subscription-based content access."
  2. Mustafa Duran Fitness — http://mustafaduranfitness.com/ — a personal-trainer/coaching site
     for online fitness coaching (training programs, diet plans, consultations). Describe as:
     "Personal-training & coaching site built to convert visitors into booked consultations."
  3. New Green Energy — http://newgreenenergy.net/ — a business site for a green/renewable
     energy company. Site details beyond the name/industry couldn't be independently verified, so
     keep the description general and accurate: "Business website for a renewable energy
     company" — do not invent specific services, service areas, or claims that weren't confirmed.
  4. Arch Blog (in progress) — archwithi3.great-site.net — a blog project currently in
     development; label clearly as "In Progress" wherever it's shown, don't present it as finished.
  5. Other/experimental projects — github.com/pa6ov — see TEAM section below for the individual
     repos to highlight.
Do not invent additional fake client names — these five are the real ones to feature. If more
visual variety is needed for the portfolio grid, it's fine to add 1-2 clearly-labeled "concept /
capability demo" cards (e.g. a landing-page concept) alongside the real projects above, as long as
they are explicitly marked as demos and not confused with real client work.

=== SITE STRUCTURE (single set of pages, static site, no backend/database) ===
1. index.html — Home
   - Hero: logo, tagline "Your Digital Partner", one-sentence value prop, primary CTA button.
   - Three-pillar services overview (cards): Website Creation & Support / Tech Consultations /
     We build & maintain, you grow.
   - "Why AlexWeb Consult" / value-prop section (senior team, full-cycle build + maintenance,
     clear communication, fast turnaround — write original, natural copy, no filler lorem ipsum).
   - Featured work / portfolio teaser section: pull 2-3 of the REAL projects from the BUSINESS
     INFO section (e.g. BetterHealthyLife, Mustafa Duran Fitness, New Green Energy) with a
     one-line description each and a "View full portfolio" link to portfolio.html.
   - Testimonial section: since no real client quotes were supplied, either omit this section
     entirely or include 1-2 short testimonials CLEARLY labeled as illustrative/sample text (not
     presented as real client quotes).
   - Final CTA band with the free-consultation offer.
   - Footer with nav links, email, and a working Instagram link: https://www.instagram.com/alexweb.consult/ (handle @alexweb.consult).

2. services.html — Services detail page
   - Expand each of the 3 pillars into its own detailed section: what's included, process/steps,
     typical timeline, ideal client. Write full original copy.

3. about.html — About / Team
   - Agency story (short, written from scratch — professional, confident, no clichés).
   - Team/skills section: web development (HTML5/CSS3/JS, modern frameworks), tech consulting,
     ongoing support & maintenance. You may mention broader technical range (e.g. embedded/IoT
     consulting) as a secondary "we also help with" note, kept brief.
   - Team member card — Alex Pashov:
       Title: "Web Developer, System Programmer"
       Skills to list: Java, C++, C#, Python, and web technologies (HTML5/CSS3/JS).
       Link out to his GitHub: https://github.com/pa6ov
       Optionally reference 1-2 of his repos as evidence of range beyond web work, e.g.
       "RTTweb" (TypeScript) and "luxe_auto_resort" (a full HTML website build) — describe them
       briefly and honestly (a repo name is not a finished-product description; keep the wording
       general, e.g. "hands-on experience across TypeScript tooling and full site builds").
       Write this as a short, natural bio paragraph (2-4 sentences), not a bullet-point resume dump.
       If the team image supplied isn't usable as a real photo asset, render the card with a clean
       CSS/SVG avatar placeholder (initials or abstract shape in the brand colors) instead of a
       broken <img> tag.

4. portfolio.html — Work / Case studies
   - Feature the five REAL projects listed in the BUSINESS INFO section above as the primary
     cards: BetterHealthyLife (e-commerce), Mustafa Duran Fitness (coaching/booking site), New
     Green Energy (business site), Arch Blog (clearly labeled "In Progress"), and a card linking
     to the broader GitHub portfolio (github.com/pa6ov) for additional/experimental projects
     (RTTweb, valentines-invite, luxe_auto_resort, websites-for-sale — you may list these as a
     short "also on GitHub" list rather than full case studies, since they're smaller/experimental
     repos, not client sites).
   - Each real project card: name, one-line description of what it does, and (where linkable) an
     outbound link to the live site. Do not fabricate metrics, client names, or testimonials for
     these that weren't provided.
   - Optional: 1 additional clearly-labeled "concept / capability demo" card if the grid needs
     visual balance — must be explicitly marked as a demo, never presented as a real client.

5. contact.html — Contact
   - Contact form (name, email, project type dropdown, message) — client-side only, no backend;
     include a clear code comment showing where to wire up a form-handling service (e.g.
     Formspree, Netlify Forms, or a custom endpoint).
   - Mailto fallback to alexweb.consult@outlook.com.
   - Repeat the free-consultation CTA.

Shared components: sticky/responsive nav bar with logo, mobile hamburger menu, consistent footer
across all pages.

=== TECHNICAL REQUIREMENTS ===
- Pure HTML5, CSS3, and vanilla JavaScript. No build tools, no frameworks, no external
  dependencies except Google Fonts (self-hostable) — everything must run by opening the files
  directly or via a simple static server.
- Fully responsive: mobile-first, tested breakpoints for phone / tablet / desktop.
- Semantic HTML5 throughout (header, nav, main, section, article, footer, etc.).
- Accessibility: proper alt text on all images/icons, sufficient color contrast against the dark
  theme, visible focus states, aria-labels on icon-only buttons, logical heading hierarchy
  (single h1 per page).
- Smooth, subtle animations/transitions on hover states and scroll-reveal for sections (vanilla
  JS or CSS only — keep it tasteful, not gimmicky).
- Performance: no bloated assets, lazy-load below-the-fold images, minimal JS.
- Every page must be 100% complete and directly usable — no "// TODO," no lorem ipsum, no
  "[insert content here]" placeholders. If a real asset (like a specific photo) isn't available,
  use a clean CSS/SVG-based visual instead of a broken image tag.

=== SEO REQUIREMENTS (apply to every page) ===
- Unique, descriptive <title> per page (e.g. "Website Creation & Support | AlexWeb Consult").
- Unique meta description per page (under 160 characters, natural language, includes relevant
  keywords like "web developer," "website creation," "tech consultation").
- Open Graph and Twitter Card meta tags (og:title, og:description, og:image, og:type, og:url,
  twitter:card) on every page.
- Canonical link tag per page.
- Semantic heading structure (one h1, logical h2/h3 nesting) using target keywords naturally.
- JSON-LD structured data on index.html using schema.org "ProfessionalService" (or
  "WebSite" + "Organization"), including name, description, url, email, and sameAs (Instagram
  URL: https://www.instagram.com/alexweb.consult/).
- Descriptive, keyword-relevant alt text on all images.
- Clean, descriptive file names and internal links (no query-string spaghetti).
- Include a robots.txt and a sitemap.xml listing all five pages.
- Fast-loading, mobile-friendly markup (Core Web Vitals in mind: minimal layout shift, no
  render-blocking heavy scripts).

=== OUTPUT FORMAT ===
Output every file in full, one at a time, each clearly labeled with its filename as a header,
in this order: index.html, services.html, about.html, portfolio.html, contact.html, styles.css
(shared stylesheet), script.js (shared JS), robots.txt, sitemap.xml.
Do not summarize or truncate any file. Do not explain your reasoning before or after — output
only the labeled files.
```

### A few notes before you run it
- Updated with your real profile screenshots: the bio, link-in-bio list (BetterHealthyLife, Mustafa Duran Fitness, Arch Blog, and the GitHub portfolio), and the "Our Team" highlight for Alex Pashov are now built into the prompt, so the portfolio and about page will reflect real work instead of generic placeholders.
- I pulled a bit of public context on the linked sites/repos (what BetterHealthyLife and Mustafa Duran Fitness actually do, and what's in github.com/pa6ov) to write accurate one-line descriptions — nothing fabricated beyond that.
- If Alex has a headshot he's comfortable using (rather than the "About other projects" story-card photo), that would read better on about.html than a CSS placeholder avatar — just attach it and I'll adjust the prompt to reference it directly.
- Gemma models (even larger local ones) can lose the thread on very long single-shot generations like "5 full HTML files + CSS + JS." If it starts truncating or drifting from the color palette, it often works better to run this same prompt once per file (e.g. "Using the same brand context as before, now generate only styles.css") rather than all nine files in one go.
