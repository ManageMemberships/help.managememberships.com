---
sidebar_position: 2
---

# Dashboard Widgets

The **Dashboard Widgets** page lets you choose which widgets appear on your owner dashboard and which are hidden. Each widget is a self-contained panel — you can show only the data you care about and declutter the rest.

---

## Accessing Dashboard Widgets Settings

Go to **Settings → Dashboard Widgets** in the navigation menu.

---

## Showing and Hiding Widgets

Each widget has a toggle. Turn it on to show it on the dashboard, turn it off to hide it.

Changes take effect immediately after you click **Save**. The dashboard cache is automatically busted so you see the updated layout on your next page load without needing to manually refresh.

---

## Available Widgets

| Widget | Default | Requires |
|---|---|---|
| Daily Metrics Report | Visible | Financial permission, non-free plan |
| Member Changes | Visible | Members permission, non-free plan |
| Membership Levels | Visible | Membership permission |
| Members | Visible | Members permission, non-free plan |
| Upcoming Events | Visible | Events permission, non-free plan |
| Equipment Service Reminders | Visible | Resource permission |
| Paid Transactions Chart | Visible | Financial permission, non-free plan |
| Class Check-ins Chart | Visible | Class permission, non-free plan |
| Sign-ups / Cancellations Chart | Visible | None (always accessible) |
| Events Chart | Visible | Events permission, non-free plan |
| Revenue Summary | Hidden | Financial permission, non-free plan |
| Door Access Summary | Hidden | Door permission, non-free plan |
| Open Value by Stage | Hidden | CRM permission, non-free plan |
| Open Deals by Stage | Hidden | CRM permission, non-free plan |
| Conversions by Month | Hidden | CRM permission, non-free plan |
| Avg Days to Convert | Hidden | CRM permission, non-free plan |
| Average LTV | Hidden | Financial permission |
| At Risk Customers | Hidden | Members permission |
| Leaderboard | Visible | None (always accessible) |

Widgets marked **Hidden** by default are opt-in — they won't appear until you explicitly enable them. This keeps the dashboard focused for most users while making advanced reporting available to those who want it.

---

## Average LTV

Estimates the average lifetime value of a member: the average monthly-normalized recurring subscription value multiplied by the average membership length in months. For example, if your average member pays the equivalent of $120/month and stays 14 months, Average LTV shows $1,680.

- Includes Stripe, CardPointe, and manually billed recurring subscriptions. One-time cash sales are not included.
- Weekly, quarterly, semi-annual, and annual plans are normalized to a monthly rate before averaging, so mixed billing intervals compare fairly.
- Still-active members count their duration so far (from signup to today), so the number keeps growing as members stay subscribed.
- Subscription data is compiled nightly, so recent changes may not be reflected until the next day.

Use it to sanity-check acquisition spend: if a new member's lifetime value is $1,680, you know what a lead is worth.

---

## At Risk Customers

Lists members on an **active, auto-renewing subscription** who have had **no check-in and no portal login in the last 16 days** — the members most likely to quietly cancel next.

- Members who have *never* checked in or logged in are included too; no activity at all is itself a risk signal.
- Cancelled, expired, and paused members are excluded, since they've already left — this list is for members you can still save.
- Day-pass and other non-renewing purchases are excluded too; a one-off visitor isn't expected back, so their absence isn't a churn signal.
- Free accounts (free membership levels or $0-priced levels) are excluded — there's no revenue at risk when they drift away.
- Family/sub-accounts count as covered when the parent account's subscription is active.
- The list is collapsed by default, showing just the at-risk count. Click the bar to expand and see each member's name and email.

A good habit is to check this list weekly and reach out personally — a quick "we miss you" text or email — before the member decides to cancel.

---

## Leaderboard

Shows your top 10 members by points earned, toggleable between **This Month** and **This Year**. Points come from check-ins, class attendance, first class bookings, manual awards, and automation triggers — see [Points & Leaderboard](../membership/points-leaderboard.md) for how earning works and how to configure point values.

Members can see their own version of this ranking on the portal's Leaderboard page (top 50), controlled by the **Show Public Leaderboard** toggle in Portal Settings → Points.

---

## Resetting to Defaults

Click **Reset to Defaults** to restore the original visibility for all widgets. This re-hides any opt-in widgets you had enabled and re-shows any default widgets you had hidden.

---

## Notes

- Widget settings are per-portal (not per-staff-user). Hiding a widget hides it for all users on your account.
- Staff members only see widgets their permissions allow, regardless of the widget toggle state.
- If all widgets you have access to are hidden, you'll see a "choose a menu option" prompt instead of an empty dashboard.
