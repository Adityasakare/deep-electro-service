# Deep Electro Services – Angular Website

A responsive Angular website for Deep Electro Services and its Bijlify EV AC/DC charging product portfolio. Business text and catalogue data are maintained in JSON so routine copy updates do not require editing Angular components.

## Project status and source basis

This project was assembled from the uploaded `Bijlify Product wise catlog.zip` archive. It includes the supplied product images and technical PDF catalogues. The website uses the supplied Word documents for application guidance and the Bijlify Zen Bundle description.

**Not yet verified:** this execution environment could not reach the npm package registry, so dependency installation and a production build could not be run here. The package manifest and GitHub workflow are provided, but the lockfile must be regenerated with a successful npm install before relying on `npm ci` in a release pipeline. The first GitHub Actions run should be treated as a validation run, not as proof of a successful deployment.

## Technology

- Angular 20, standalone components and Angular Router
- TypeScript strict mode
- HTML5 and CSS3
- RxJS and Angular HttpClient
- Reactive Forms
- GitHub Actions and GitHub Pages

## Folder structure

```text
.
├── .github/workflows/deploy.yml
├── config/deployment.config.json
├── public/robots.txt
├── public/sitemap.xml
├── scripts/
│   ├── deployment.mjs
│   └── validate-json.mjs
├── src/
│   ├── app/
│   │   ├── core/services/website-content.service.ts
│   │   ├── models/website-content.model.ts
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── products/
│   │   │   ├── applications/
│   │   │   ├── zen-bundle/
│   │   │   └── contact/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   └── app.ts
│   ├── assets/
│   │   ├── config/website-content.json
│   │   ├── documents/
│   │   └── images/
│   ├── main.ts
│   ├── index.html
│   └── styles.css
├── angular.json
├── package.json
├── package-lock.json
└── README.md
```

## Prerequisites

- Windows 10/11, macOS or Linux
- Node.js 22 LTS (or a compatible supported Node release)
- npm (bundled with Node.js)
- Git
- A GitHub account for publishing

Install Node.js from https://nodejs.org/ and verify:

```bash
node --version
npm --version
git --version
```

## Extract and install

1. Extract `professional-website-source.zip` to a working folder.
2. Open PowerShell or Windows Terminal in the extracted project folder.
3. Install dependencies:

```bash
npm install
```

The included lockfile is a bootstrap lockfile because package registry access was unavailable during packaging. After the first successful install, commit the fully resolved lockfile:

```bash
npm install --package-lock-only
git add package-lock.json
git commit -m "Generate resolved npm lockfile"
```

Once a complete lockfile is committed, use `npm ci` for reproducible clean installs.

## Run locally

```bash
npm start
```

Open http://localhost:4200/.

## Build and checks

```bash
npm run validate:json
npm run lint
npm run build
```

No unit-test suite has been authored yet. Do not interpret the absence of tests as a passed test run. Add tests for key content loading, navigation and enquiry form validation before production sign-off.

## Edit website content without editing Angular code

Open:

`src/assets/config/website-content.json`

Use Notepad, Visual Studio Code or another text editor. For example, to change the homepage heading, edit:

```json
"home": {
  "headline": "Powering the places where people live, work and travel."
}
```

Keep valid JSON syntax: double quotes around keys and string values, commas between properties, and no trailing comma after the last property. Validate after editing:

```bash
npm run validate:json
```

The website loads this file at runtime. Save the file, test locally, commit and push to `main`; the next successful GitHub Actions deployment publishes the updated content.

Other editable sections include `site`, `navigation`, `about`, `products`, `applications`, `services`, `zenBundle`, `whyUs`, `faqs`, `contact`, `footer` and `seo`.

## Add or replace product images

1. Copy an optimised JPG, PNG, SVG or WebP file into `src/assets/images/`.
2. Update the relevant product's `image` value in `website-content.json` to the filename only.
3. Keep a descriptive `alt`-appropriate product name in the product record.
4. Check the image path in the browser before pushing.

Replace the placeholder logo at `src/assets/images/company-logo-placeholder.svg` or change `site.logo` to another file path. The uploaded archive did not contain a confirmed Deep Electro Services logo, so a clearly generic placeholder mark is used.

## Branding

The initial palette is:
- Deep teal: `#0D6B62`
- Dark teal: `#084D49`
- Ink: `#12313A`
- Pale mint: `#E7F3EF`
- Paper: `#F7FAF8`
- Accent gold: `#D4A65A`

Update CSS variables at the top of `src/styles.css` to change colours. The current typography uses Manrope and DM Sans with system fallbacks. Google Fonts are loaded externally; replace the import with locally hosted fonts if external font requests are not desired.

## Deployment configuration

Edit `config/deployment.config.json`:

```json
{
  "github": {
    "username": "YOUR_GITHUB_USERNAME",
    "repository": "YOUR_REPOSITORY_NAME",
    "pagesEnabled": true
  },
  "domains": {
    "githubPagesUrl": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/",
    "customDomain": "www.deepelectrocharge.com",
    "useCustomDomain": false,
    "enforceHttps": true
  },
  "deployment": {
    "deployToGitHubPages": true,
    "useCustomDomain": false
  }
}
```

Set your actual username and repository. For a user/organisation site repository named `USERNAME.github.io`, the workflow uses `/` as the base path. For a project repository it uses `/<repository>/`.

To publish with a custom domain:
1. Enter the domain in `domains.customDomain`.
2. Set both `domains.useCustomDomain` and `deployment.useCustomDomain` to `true` (the workflow currently uses `domains.useCustomDomain` when creating `CNAME`).
3. Configure DNS at your domain registrar. For `www`, create a CNAME record pointing to `USERNAME.github.io`. For an apex/root domain, use GitHub's published A/AAAA records or your DNS provider's ALIAS/ANAME support as documented by GitHub.
4. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
5. After DNS resolves, enable **Enforce HTTPS** in Pages settings.

GitHub Pages custom-domain behaviour may redirect the `github.io` URL to the configured custom domain. Verify the actual behaviour after publishing.

## GitHub repository setup

Create an empty repository on GitHub, then from the project directory:

```bash
git init
git add .
git commit -m "Initial website release"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Before the first push, set the real GitHub username and repository in `config/deployment.config.json`. Enable Pages with **GitHub Actions**. The workflow needs `contents: read`, `pages: write` and `id-token: write` permissions, already declared in the workflow.

The GitHub Actions workflow runs on pushes to `main` and manual dispatch. It validates JSON, lints the source, builds Angular, adds a GitHub Pages SPA fallback file and deploys the browser output to Pages. It does not deploy until the build job succeeds.

## Contact form limitation

GitHub Pages is static hosting and does not provide a server-side form endpoint. The current form validates fields and prepares an email in the user's configured mail application; it does not silently submit or store enquiries. To receive submissions online, approve and connect a form provider or backend (for example, Formspree or a custom API). Add spam protection and privacy disclosures before collecting customer information.

## SEO and static hosting notes

The project includes default metadata, Open Graph tags, robots.txt and a starter sitemap prefilled with `www.deepelectrocharge.com` as the proposed canonical domain. Verify that domain before enabling it. This is a client-rendered Angular application on static hosting: route-specific dynamic metadata and server-side rendering are not implemented. For stronger search indexing, consider Angular prerendering or SSR hosted on a platform that supports it.

## Troubleshooting

- **Dependency installation:** run `npm install` once to resolve and commit the complete lockfile. The included bootstrap lockfile is not a fully resolved dependency graph.
- **Blank page on project Pages URL:** check the repository name and base href settings in `config/deployment.config.json`.
- **Images fail on Pages:** check that the JSON image filename matches a file in `src/assets/images/`; use relative `assets/...` references.
- **Custom domain not resolving:** verify DNS records, remove conflicting records, wait for propagation and recheck Pages settings.
- **HTTPS unavailable:** wait for GitHub's certificate provisioning and enable Enforce HTTPS once available.
- **JSON loading fails:** run `npm run validate:json` and check the browser Network tab for the JSON asset request.

## Business-content verification required before public launch

The uploaded 60 kW DC technical PDF describes the model as `60 kW [30 kW × 2]`, while the separate Product USP Word document describes up to 60 kW through one gun when the other is idle. These statements conflict. The product page deliberately flags this for manufacturer confirmation and does not present the single-gun claim as settled fact.

The source archive did not include a confirmed Deep Electro Services logo, verified dealer phone/email, approved custom domain, GitHub username/repository, customer permissions for installation references, or a completed privacy policy. These must be supplied/approved before public launch.

Electrical load and space numbers in the supplied application guide are explicitly preliminary planning estimates, not manufacturer nameplate values or statutory requirements. Final design must be confirmed by the manufacturer and a qualified electrical professional.


## Updating website content (JSON only)

Most website copy, product information, navigation labels, contact links, About Us sections and footer text are maintained in:

`src/assets/config/website-content.json`

Edit this JSON file to update:
- Company name, tagline, logos, enquiry form URL and Bijlify app URL (`site`)
- Homepage headings, summary text, highlights and featured installation image (`home`)
- Short About Us summary, commitment statement and long-form sections (`about`)
- Product names, ratings, specifications, descriptions, images, applications and datasheet filenames (`products`)
- Applications, project support, Zen Bundle information, FAQs and footer copy

Keep the JSON syntax valid and retain the existing property names. Product images belong in `src/assets/images/`; product PDF datasheets belong in `src/assets/documents/`. Update the corresponding filename in the JSON when replacing an asset. The DES logo, Bijlify logo and 7.4 kW residential installation image supplied for this update are already included in the images folder.

The enquiry buttons use `site.enquiryUrl`; the footer app download uses `site.appUrl`. Change those URLs in the JSON to update their destinations site-wide.

The header theme control switches between the DES navy/cyan light and dark appearance. Visual design and component behaviour remain in Angular/CSS; routine copy, product, image-path and link updates do not require TypeScript changes.
