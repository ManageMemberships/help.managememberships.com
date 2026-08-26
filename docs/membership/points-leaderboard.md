---
sidebar_position: 10
sidebar_label: Points & Leaderboard
---

# Points & Leaderboard

Reward members for showing up. Members earn points automatically for check-ins and class attendance, staff can award points manually, and a leaderboard turns the whole thing into a friendly competition.

## How Members Earn Points

| Event | Default Points | Notes |
|---|---|---|
| General check-in | 1 | Kiosk, QR, or manual check-in |
| Class attended | 1 | Awarded instead of the general check-in rate — never both |
| First class booked | 10 | One-time bonus, awarded on a member's first-ever class booking |
| Automation trigger | Your choice | Any trigger event (door scan, purchase, etc.) via the **Award Points** action |
| Manual award | Your choice | Awarded by staff from the member's profile |

All point values are configurable in **Settings → Portal Settings → Points**. Set any value to 0 to disable that source. The first-class-booking bonus can only be earned once — cancelling and rebooking a class does not re-earn it.

## The Leaderboard

### Member Portal

When **Show Public Leaderboard** is enabled (it's on by default), members see a **Leaderboard** link in their portal navigation. The page ranks the top 50 members by points earned, toggleable between **This Month** and **This Year**, with the viewing member's own row highlighted.

To hide the leaderboard from members, turn off **Show Public Leaderboard** in **Settings → Portal Settings → Points**.

### Owner Dashboard Widget

Your admin dashboard includes a **Leaderboard** widget showing the top 10 members by points, with the same month/year toggle. It's visible by default and can be hidden in [Dashboard Widgets](../settings/dashboard-widgets.md) settings.

## Awarding Points Manually

On any member's detail page, the **Award Points** section (Overview tab) lets staff:

1. Enter a point amount and an optional reason (e.g. "Shared us on Instagram")
2. Click **Award** — the points are added immediately

The same section shows the member's complete point history: every award with its amount, source (check-in, class, trigger, or manual), reason, who awarded it, and when. Manual awards are recorded in the member's audit log with the before/after balance.

## Awarding Points Automatically with Triggers

Beyond check-ins and classes, you can award points for any event [Automation Triggers](../settings/triggers.md) supports — door scans, class check-ins, first class bookings, and more:

1. Go to **Settings → Triggers** and click **New automation trigger**
2. Give it a name and turn **Active** on
3. Under **When It Runs**, choose "The moment something happens"
4. Pick an event from the **When** dropdown
5. Under **What It Sends**, click **Add an action**, set **Type** to **Award Points**, and enter the points to award

The points are credited to the matched member the moment the event fires, with the trigger's name recorded as the reason.
