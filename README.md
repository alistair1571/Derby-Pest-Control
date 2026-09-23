# Derby Pest Control, derbypestcontrol.co.uk

Static site, pre-built and ready to publish as-is.

## Deploying, GitHub to Cloudflare Workers

This repo deploys via Cloudflare Workers Builds (connected to this GitHub repo, using `wrangler deploy`), not GitHub Pages. A few things follow from that:

1. `wrangler.jsonc` is already committed at the root, with an explicit `assets` block. This matters: without it, Wrangler falls back to auto-detected settings during a non-interactive build, which isn't reliable to depend on for a multi-page site. The key setting is `"html_handling": "auto-trailing-slash"`, which is what makes `/rat-control/index.html` correctly serve at `/rat-control/`, matching every internal link, the sitemap, and every canonical tag on the site.
2. **Custom domain isn't set via the `CNAME` file**, that's a GitHub Pages mechanism and does nothing here (it's kept in case this ever gets pointed at GitHub Pages directly instead, but it's inert for Cloudflare Workers). For Cloudflare, add the custom domain from the Worker's own dashboard page (**Workers & Pages -> derby-pest-control -> Settings -> Domains & Routes**), then point DNS at Cloudflare as usual.
3. `.nojekyll` is similarly a GitHub Pages-only file, harmless here, does nothing.
4. `404.html` is a real custom 404 page, and `not_found_handling: "404-page"` in `wrangler.jsonc` is what tells Cloudflare to serve it.

## Structure

- Every page is a folder with its own `index.html` (e.g. `/rat-control/index.html` serves at `/rat-control/`).
- `style.css` and `script.js` are external files, shared and cached across every page, not embedded per-page.
- `images/` holds the site's photography and logo assets.
- `sitemap.xml` and `robots.txt` are already correct and reference the live domain.
- `404.html` is the custom not-found page.

## Lead form

Already wired to Formspree, submissions go to alistir1571@gmail.com. If this is a fresh Formspree form, the first real submission triggers a one-time confirmation email that needs clicking before submissions actually arrive, that's a Formspree account step, not a site issue.

## Before going fully live

- The phone number (`01332 496 0123`) is currently a Derby-style placeholder, not the real business line, swap it throughout once confirmed.
- No reviews or Google Business Profile are referenced anywhere on the site, correctly, since none exist yet. Add these honestly once they're real.
