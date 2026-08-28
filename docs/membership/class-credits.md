---
sidebar_position: 11
sidebar_label: Class Credits & Packs
---

# Class Credits & Packs

Every batch of class credits a member receives is tracked as its own **pack**, with its own size and its own expiration date. A member holding a 10-session punch card and a 4-class monthly allowance has two separate packs — and each one expires on its own schedule instead of being merged into a single pool.

"Class credits," "check-in credits," and "check-in quota" all refer to the same balance. You'll see the quota wording on member profiles and the credits wording in the member-facing portal.

## Why Packs Matter

Before packs, a member's credits lived in one pool with one expiration date. Adding a new purchase pushed that single date out, so credits the member had nearly used up could quietly get a new lease on life — or, in the other direction, a long-dated pack could inherit an early expiration and disappear sooner than the member expected.

With packs, that can't happen:

| Situation | What happens |
|---|---|
| Member buys a 10-class pack (6-month expiry), then a 3-class pack (2-week expiry) | Two packs. The 3-class pack expires in two weeks; the 10-class pack still has its full six months. |
| Recurring plan with additive credits grants 4 credits a month | Each month's 4 credits form a new pack with its own expiration, counted from the day they were granted. |
| One pack expires with credits left in it | Only that pack's credits are forfeited. Every other pack is untouched. |

## Which Credits Get Used First

Credits are always spent from the **pack that expires soonest**. If a member books a class needing more credits than the soonest-expiring pack holds, the remainder comes from the next pack in line, and so on. Packs that never expire are used last.

This means a member never loses credits they could have spent — the ones closest to expiring go first automatically.

## Viewing a Member's Packs

Open any member, go to the **Account** tab, and find **Check-in Quota (Class Credits)**.

The three tiles at the top are the member's overall totals. Below them, the **Credit Packs** table lists each pack:

| Column | Shows |
|---|---|
| **Pack** | The pack name (usually the membership level it came from) and how it was granted — signup, purchase, renewal, admin adjustment |
| **Remaining** | Credits left out of the pack's total, e.g. *3 of 5* |
| **Expires** | The pack's own expiration date, or *Never*. Packs expiring within two weeks show a countdown; expired packs are marked and dimmed |
| **Granted** | When the pack was created |

Above the table, a summary line shows how many credits are **usable** right now, and — if any packs have expired with credits still in them — how many are sitting in expired packs. That second number is the difference between "this member ran out of credits" and "this member's credits expired," which is usually the question you're actually trying to answer.

Packs the member has fully used are hidden so the list stays readable. If there are any, a **Show N fully used** link appears; click it to see them.

Members with more than ten packs get a paginated list.

## Editing a Pack

Click **Edit** on any pack to change:

- **Pack name** — what staff and the member see
- **Pack size** — the total number of credits in the pack
- **Expires** — the pack's expiration date; leave it blank for a pack that never expires

Click **Save**. The member's totals update immediately.

**You can't shrink a pack below the number of credits already used from it.** If a member has used 3 credits from a 5-credit pack, the smallest you can make that pack is 3. Those 3 credits were genuinely spent on classes the member attended, and erasing them would leave the member's history not adding up. To take credits away from a member, reduce the *unused* portion.

## Removing a Pack

Click **Remove** on a pack to take its remaining credits off the member's balance. You'll be asked to confirm, and the confirmation tells you how many credits are about to be removed.

Removing a pack does **not** erase what was already spent from it. Classes the member booked with those credits stay booked, and if one of those bookings is cancelled later, the credit still returns correctly. This is why a removed pack disappears from the balance rather than being deleted outright.

Both editing and removing a pack require the **Manage Memberships** permission. Staff without it can still view a member's packs but can't change them.

## Refunds and Cancellations

When a class booking paid with credits is cancelled, the credits go back to **the exact packs they were drawn from** — not to the newest pack, and not as a fresh pack.

That has one consequence worth knowing: **if the pack a credit came from has since expired, the returned credit stays expired.** The member's pack shows the credit back, but it isn't usable, because the package it belonged to has run out of time. This is deliberate — a credit refunded after its package expired shouldn't extend the package. If you want to give the member usable credits in that situation, add a new pack or raise the total on a current one.

Credits are restored automatically when:

- A member cancels their own booking in the portal (inside the cancellation window)
- Staff cancel a booking from the member's **Activity** tab
- Staff delete a check-in that consumed a credit
- A class is auto-cancelled for being under-enrolled

## When Credits Run Out vs. Expire

Members see different messages depending on which happened:

- **"Not enough class credits. You have 1 remaining but need 2."** — the member is short.
- **"Your class credits have expired."** — the member has credits, but every pack holding them has passed its expiration date.

The same distinction applies at check-in. Telling these apart matters at the front desk: the second member bought something and let it lapse, which is a different conversation from the first.

## Adjusting a Member's Total

The **Edit Total Quota** box below the packs table sets a member's overall total. It works from the newest pack backwards:

- **Increasing** the total adds credits to the member's newest pack, so they inherit that pack's expiration. If the member has no packs, a new one is created that never expires.
- **Decreasing** the total removes credits from the newest pack first, working back into older packs only as far as needed. Existing packs keep their own expiration dates.

You can't set a total below the number of credits the member has already used. If you try, the total is set to that floor and a message explains why.

For most adjustments, editing the specific pack is clearer — use the total when you just want the number to come out right and don't care which pack absorbs the change.

## Audit Trail

Pack edits, pack removals, quota changes, and credit-refunding cancellations all appear in the member's **Activity Log**, showing who made the change, when, and the before and after values. Nothing about a member's credit balance changes without a record of it.

## Settings That Affect Credits

| Setting | Where | What it does |
|---|---|---|
| **Number of Check-ins / Class Credits** | [Membership Levels](./membership-levels.md) | How many credits a level grants, and therefore each pack's size |
| **Expiration Days** / **Credits Never Expire** | [Membership Levels](./membership-levels.md) | How long each pack lasts from the day it's granted |
| **Additive Credits (Class Pack)** | [Membership Levels](./membership-levels.md) | Whether a purchase stacks a new pack or replaces the member's existing packs |
| **Consume Credits On** | [Portal Settings](../settings/portal-settings.md) | Whether credits are taken at booking or at check-in |
| **Allow class credits (quota)** | [Classes](../calendar/classes.md) | Whether credits can be used for a specific class |

## Expired Pack Housekeeping

Once a pack passes its expiration date its credits stop being usable immediately — nothing needs to run for that to take effect. A background job also refreshes the member's displayed totals every hour so the numbers on their profile match, which is why a member's total may take up to an hour to visibly drop after a pack lapses. The usable balance is always correct in the meantime.
