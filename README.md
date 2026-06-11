# E4 Holdings — Corporate Page

The official corporate information page for **E 4 Holdings Proprietary Limited**, the registered Botswana company (UIN BW00009650250) behind the [Deliver-e](https://delivere.app) marketplace.

**Live site:** [e4.delivere.app](https://e4.delivere.app) (also at [deliver-e.github.io/E4-website](https://deliver-e.github.io/E4-website/))

The page covers company registration details, directors and shareholding, official documents (certificate of incorporation), products, and contact information.

## Stack

- [React 18](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [react-router-dom](https://reactrouter.com/) — routes `/` and `/company`
- Hosted on GitHub Pages, deployed by GitHub Actions

## Repository layout

```
app/                        Vite project
├── src/
│   ├── App.jsx             Router (/ and /company)
│   └── pages/company/
│       ├── companyData.js  Company facts, directors, shareholders
│       └── CompanyPage.jsx Page component
└── public/
    └── documents/          Official PDFs served as-is
.github/workflows/deploy.yml  Build & deploy pipeline
```

## Local development

```sh
cd app
npm ci
npm run dev      # dev server with HMR
npm run build    # production build → app/dist
```

## Updating content

- **Company details, directors, shareholders** — edit [`app/src/pages/company/companyData.js`](app/src/pages/company/companyData.js). No other files need touching for data changes.
- **Certificate PDF** — replace [`app/public/documents/E4-Holdings-Certificate-of-Incorporation.pdf`](app/public/documents/E4-Holdings-Certificate-of-Incorporation.pdf) with a new file of the same name.

## Deployment

Every push to `main` triggers [the deploy workflow](.github/workflows/deploy.yml), which builds the app and publishes `app/dist` to GitHub Pages. A copy of `index.html` is written to `404.html` so client-side routes (e.g. `/company`) survive deep links.

The custom domain `e4.delivere.app` is configured in the repo's Pages settings and points to GitHub Pages via a `CNAME` DNS record (`e4 → deliver-e.github.io`).
