# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

User copy preferences (2 October 2026): About has no “About YamZah Kitchen” heading; dietary section omits the cross-contact disclaimer and standalone Call link. Menu and Order same-day guidance says “Please complete the order form first, then contact YamZah Kitchen to discuss availability.” Contact introduction says “A meal for today or a celebration to plan, Talk to our kitchen.”

Current business email: yamzahkitchen@gmail.com. Use this for all website contact links, kitchen order/review notification recipients and Google OAuth identity. Do not reuse the previous Google account or its spreadsheet IDs.

Payment policy: this website collects order enquiries only. Do not add online payment collection.

Current user requirements (3 October 2026): Static contact-to-order website. No prices or price-on-enquiry labels, basket, order/catering submission forms, customer feedback recording, automatic email/SMS or Google integrations. Contact is by telephone or mailto only. Same-day copy: “For a same-day order request: Please contact YamZah Kitchen to make your order”. These requirements supersede previous order-processing and integration instructions. Preserve the food imagery, brand and navigation.
