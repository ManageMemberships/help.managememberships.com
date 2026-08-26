---
sidebar_position: 7
---

# Door Access

The **Door Access** report shows a log of all door access events — both successful scans and denied attempts. This helps you monitor facility usage, track member attendance, and investigate security events.

---

## Time Period

Filter the log by time period:
- **Last 24 Hours** (default)
- **Last 7 Days**
- **Last 30 Days**
- **Last 90 Days**
- **All Time**
- **Custom** - Specify a custom date range

---

## Access Log

The log shows each door access event including:
- Member name
- Door name
- Access time
- Whether access was granted or denied
- Access method (QR code, card, etc.)

Use this report to identify unusual access patterns, verify member attendance, or troubleshoot door access issues.

---

## Unknown Scans

Scans that don't match any member also appear in the log, shown as **Unknown** along with what was scanned:

- An unrecognized email address is shown as-is — useful for spotting typos or someone scanning a card from a deleted account
- An invalid QR token is shown as a short fingerprint (e.g. `qr-token:a1b2c3...`) rather than the raw code, so the log never contains a usable credential

Common statuses for unknown scans:

| Status | Meaning |
|--------|---------|
| `denied-unknown` | The scanned email or QR code didn't match any member |
| `denied-legacy-email` | An email-based QR code was scanned, but legacy email codes are disabled for your portal (see [Digital Cards](/docs/settings/digital-cards)) — the member needs to re-add their wallet card or use the app |

You can search the log by the scanned input, just like member names.
