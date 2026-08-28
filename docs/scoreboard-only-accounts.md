---
sidebar_position: 9
---

# Scoreboard-Only Accounts

A **Scoreboard-Only** account is a free, no-billing owner account built around one thing: check-ins, points, and a leaderboard. There's no plan to pick, no card to add, and no class calendar to set up — just a simple way to check people in and rank them.

:::tip Good for
Challenges, events, or any situation where you want a leaderboard up and running in a couple of minutes without touching billing at all.
:::

---

## What's Included

A scoreboard-only owner's dashboard is limited to four areas: **Dashboard**, **Check In**, **Members**, and **Check-In Report**. Everything else — the class calendar, billing tools, staff management, and so on — isn't part of this account type.

### Dashboard

The dashboard shows a single widget: **Leaderboard**, ranking the top 10 members by points with a **This Month** / **This Year** toggle. See [Points & Leaderboard](/docs/membership/points-leaderboard) for how points are earned and configured.

### Members

A trimmed-down member list — name, email, phone, active status, join date, and status. There are no billing columns, no filters, and no bulk actions like Merge Accounts or Permanent Delete.

- **Add Member** — just a name and either an email or a phone number (at least one is required). No password is collected, since these members aren't expected to log in.
- **Edit** — update name, email, or phone from the row's edit action. Duplicate emails within your account are rejected.
- **Delete / Restore** — soft-delete a member and restore them later from the same row.

:::info 50-member limit
Scoreboard-only accounts are capped at **50 members**. Once you hit the limit, **Add Member** is hidden and new imports are rejected until you free up space.
:::

### Importing Members via CSV

For adding several members at once:

1. Click **Import CSV** from the Members page
2. Click **Download CSV Template** to get the expected column headers (`name`, `email`, `mobile`)
3. Fill in your rows and upload the file
4. Review the preview — it shows how many rows are valid and lists any that were skipped, with a reason (missing name, missing contact info, or a duplicate email)
5. Click **Confirm Import** to create the valid rows

The same 50-member cap applies to imports — if a file would push you over the limit, it's rejected up front with a message telling you how many more you can add. Uploads are limited to 1MB.

### Check In

A simple, search-based check-in screen — search by name or email, then check the member in. There's no class to select, since this account type has no calendar; every check-in is a general check-in and counts toward the member's points based on your [Points settings](/docs/membership/points-leaderboard).

### Check-In Report

The same check-in report available on full accounts. Since there's no class calendar here, every entry shows as a **General Check-in**.

---

## The Public Leaderboard

Since scoreboard-only members don't have logins, the leaderboard is designed to be viewed without one. When the leaderboard is enabled (it is by default), anyone with the link can view it at `yourdomain.managememberships.com/leaderboard` — no sign-in required.

:::tip
Share the leaderboard link directly with your members, post it on a shared screen, or embed it wherever makes sense — no portal account needed to view it.
:::

---

## What's Not Included

- Class calendar and scheduling
- Billing, Stripe, or CardPointe setup
- Full member billing tools (subscriptions, credits, agreements)
- Staff accounts and permissions

If you outgrow the scoreboard-only feature set, reach out to support to talk about moving to a full account.
