# Derby Pest Control, derbypestcontrol.co.uk

Static site, pre-built and ready to publish as-is via GitHub Pages.

## Deploying

1. Push the contents of this folder to the root of a GitHub repository (or a `docs/` folder, matching whichever source you set in Pages settings).
2. In the repo's **Settings → Pages**, set the source to the branch and folder containing these files.
3. The `CNAME` file already points at `derbypestcontrol.co.uk`. At your domain registrar, add:
   - An `A` record for the apex domain pointing at GitHub Pages' IP addresses, or a `CNAME` record if using a `www` subdomain.
   - See GitHub's own "Managing a custom domain for your GitHub Pages site" docs for the current IPs, since these change occasionally.
4. `.nojekyll` is already present, this is a fully pre-built static site, so GitHub Pages should serve it as-is without running it through Jekyll.

## Structure

- Every page is a folder with its own `index.html` (e.g. `/rat-control/index.html` serves at `/rat-control/`), which GitHub Pages resolves natively.
- `images/` holds the site's photography.
- `sitemap.xml` and `robots.txt` are already correct and reference the live domain.

## Before going fully live

A few things are placeholders pending a confirmed real operator, worth checking before this is genuinely public:
- The phone number (`01332 496 0123`, currently a Derby-style placeholder, not the real business line) throughout the site.
- The lead form doesn't currently send anywhere, it needs wiring to a real endpoint (Formspree, Netlify Forms, or similar).
- No reviews or Google Business Profile are referenced anywhere on the site, correctly, since none exist yet. Add these honestly once they're real.
