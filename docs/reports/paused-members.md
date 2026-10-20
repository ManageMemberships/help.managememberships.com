---
sidebar_position: 2.5
---

# Paused Members

The **Paused Members** report lists every member whose subscription is currently paused, so you can see who is paused, until when, and what the pause is costing them. Open it from **Reports → Admin → Paused members**.

---

## What You See

One row for each paused subscription, so a member with two paused subscriptions appears twice. Members whose account is inactive are included, because they are often the ones with an unpaid pause fee.

| Column | What it shows |
|---|---|
| **Member** | The member's name (click it to open their profile) and email |
| **Membership level** | The level of the paused subscription |
| **Paused since** | The date the pause started, or **Unknown** if there's no record of it |
| **Paused by** | The staff member who paused it, **Outside ManageMemberships** if it was paused directly in Stripe, or **Unknown** |
| **Resume date** | When it resumes automatically, or **No date** |
| **Pause fee** | The fee set when the pause started, such as **$5.00 per month**, or **Free** |
| **Next fee date** | The next day the pause fee will be charged. Blank for a free pause |
| **Unpaid pause fees** | How many pause fees are still unpaid and how much is owed, such as **2 · $10.00**. Blank when there are none |

At the bottom you'll see how many paused subscriptions match, and the total of their pause fees as a **monthly equivalent** (a quarterly fee counts as a third of its amount each month, a yearly one as a twelfth), so fees on different plans add up to a figure that means something.

For how pausing and pause fees work, see [Pausing a Subscription](/docs/membership/members#pausing-a-subscription).

---

## Search and Sort

- **Search** by member name or email.
- Click the **Resume date** heading to sort by resume date, soonest first or latest first. Subscriptions with **No date** always stay at the bottom. On a phone the headings are hidden, so use the **Sort by resume date** link above the list instead. Its text shows the current order, *(earliest first ↑)* or *(latest first ↓)*, and tapping it switches.
- The list shows 25 at a time. Use the page links below it to see more. The totals at the bottom always cover every match, not just the page you're on.

---

## Export CSV

Click **Export CSV** to download `paused-members-YYYY-MM-DD.csv`. It has:

- A header row and one row for every paused subscription that matches your search, not just the page you're looking at
- The same information as the screen, with the member's email and the unpaid amount each in their own column
- A **Totals** row at the bottom

---

## Who Can See It

You need the **View Subscription Reports** permission, the same one as the [Subscriptions](/docs/reports/subscriptions) report. Owners and managers always have it, accountants have it by default, and staff only have it if you've ticked it for them (see [Staff](/docs/settings/staff)). The report is available on the **Starter** plan and above.
