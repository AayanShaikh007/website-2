# Security contact and private reports

The public disclosure contact is `/.well-known/security.txt`, with the owner's public personal email and an expiry of October 1, 2027. Review the file before expiry. It does not promise a bounty, response deadline, or authorize testing.

## Private reports

Reports are local files under `C:/coding/website2/private-security/reports`, never an Astro route or a browser-accessible dashboard. Both Git and Vercel ignore the entire `private-security/` directory; Astro builds only source pages and `public/` assets. Ordinary filesystem permissions apply: these files are not encrypted and anyone with access to this Windows account can read them.

Run `npm run security:report -- private-security/traffic-snapshot.json` to produce timestamped Markdown, JSON, and spreadsheet-safe CSV. The generator accepts a JSON object with `source`, `window`, `coverage`, optional `totalRequests`, and `paths` entries containing `path` and integer `count`. It validates counts, strips path query strings/fragments, and preserves the source's coverage limitations. It omits IPs, user agents, and raw request records. Do not put personal data in source/window/coverage labels.

The first snapshot was transcribed programmatically from the signed-in Vercel Firewall Traffic dashboard's expanded Top Request Paths panel. Its displayed past-day window contains 39 paths and 141 requests, matching the displayed total. This is aggregate dashboard data, not per-request forensic logs. Status codes and exact request times are unavailable. Review-pattern matches do not establish an attack or compromise.

## Refreshing the source

The authenticated Vercel dashboard is at https://vercel.com/aayan14/aayanshaikh/firewall/traffic. Expand Top Request Paths and retain the exact displayed window and coverage when preparing a new snapshot. For authenticated CLI exports, Vercel supports `vercel firewall traffic list --project aayanshaikh --scope aayan14 --since 24h --dimension path --top 100 --json`. Its JSON must be mapped to the normalized schema above; the report generator deliberately rejects unknown schemas. Do not pass a token in shell arguments or commit credentials.

This implementation creates reports on request from snapshots. It does not schedule collection, email reports, install a background monitor, or extend Vercel retention. A browser sign-in does not authenticate the CLI. Continuous daily archives require an authenticated collector and an explicitly selected schedule. Default firewall history is limited by the Vercel plan. Overlapping windows must not be added together or treated as distinct request logs.

Tests: `npm run security:test`. Check deployment exclusions with `git check-ignore private-security/traffic-snapshot.json` and ensure `dist/private-security` is absent after building.

References: https://www.rfc-editor.org/rfc/rfc9116.html and https://vercel.com/docs/cli/firewall.
