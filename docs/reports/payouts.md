---
sidebar_position: 17
---

# Payouts

The **Payouts** report shows your Stripe Connect balance and payout history, so you can see what you're owed and what's already on its way to your bank without checking Stripe directly.

---

## Balance Summary

Four figures at the top of the report:

- **Total Balance** — funds currently held by Stripe for your account, not yet paid out
- **Future Payouts** — the portion of your balance not yet available, which will be included in a future payout once it settles
- **In Transit to Bank** — payouts Stripe has already sent but that haven't yet been confirmed as landed in your bank account
- **Lifetime Total Volume** — your gym's total revenue processed to date, calculated from your own transaction history rather than pulled from Stripe

---

## Payout History

Below the summary, a table lists your individual payouts:

- **Amount**
- **Status** (e.g. paid, pending, in transit)
- **Bank Account** — the destination account the payout was sent to
- **Method** (standard or instant)
- **Date Initiated**

Use **Next** and **Previous** to page through older payouts.

---

## Refreshing Data

Balance and payout figures are cached for up to 30 minutes rather than pulled from Stripe on every page load. Click **Refresh** at any time to pull the latest figures — if a refresh fails to load, a **Retry** button appears.

If your gym hasn't connected a Stripe account yet, this report shows a message instead of data.

---

## Availability

The Payouts report requires the same permission as other financial reports and is available on the **Starter** plan and above.

> **Note:** Balance figures assume a single USD currency per connected account. If an account ever holds a balance in another currency, that portion will not be reflected in the totals shown here.
