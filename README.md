# YamZah Kitchen

Website for YamZah Kitchen: ready-made Nigerian meals and catering.
Live at https://yamzahkitchen.yamzahkitchen.workers.dev/

Built with React and Vite and deployed as a Cloudflare Worker (static assets).
Customers order by phone (07449793979) or email (yamzahkitchen@gmail.com); there are no forms, payments or integrations.

## Where to edit

| What | File |
| --- | --- |
| Menu items, categories, descriptions, phone and email | `src/menu.js` |
| Page text and sections (Home, About, Catering, Order, Contact) | `src/App.jsx` |
| Dietary, delivery and contact-to-order blocks | `src/customer-care.jsx` |
| Colours, fonts and layout | `src/styles.css` |
| Images (menu photos, logo, hero, etc.) | `public/assets/` |
| Page title and description | `index.html` |

To add a menu photo, upload it to `public/assets/` named after the item's image key in `src/menu.js`, e.g. `public/assets/jollof.png`.

## Deployment

The repo is connected to Cloudflare Workers Builds (account yamzahkitchen@gmail.com, Worker `yamzahkitchen`).
Every commit to `main` runs:

- Build command: `npm run build` (outputs to `dist/client`)
- Deploy command: `npx wrangler deploy` (config in `wrangler.jsonc`)

## Local preview

Requires Node.js 22+:

```
npm install
npm run build
npm start
```

Then open http://127.0.0.1:4174/

Private credentials, customer records and spreadsheets are never committed (see `.gitignore`).
