# Static website — no integrations required

The website now directs customers to call 07449793979 or email yamzahkitchen@gmail.com. There are no order or review submission endpoints, stored customer feedback, automatic emails, SMS messages or Google Sheets connections.

No OAuth setup, Gmail permission, Google Drive connection, Twilio account or secret environment variables are required. The previous server adapters and Google connection helper have been removed. Existing spreadsheets and historical local records are not deleted or updated by the website.

The chat application’s Google plugins are separate from the website. Removing website integrations does not revoke account-wide Google permissions or uninstall plugins used elsewhere. Any previously granted Google/Twilio permissions can be revoked in those services if no longer used.

Deploy only the static `dist/client` build using the Cloudflare configuration in the README. Do not run an older order-processing server.
