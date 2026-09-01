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

When **Show Public Leaderboard** is enabled (it's on by default), members see a **Leaderboard** link in their portal navigation. The page ranks the top 50 members by points earned, toggleable between **This Month**, **This Year**, and **Lifetime**, with the viewing member's own row highlighted.

To hide the leaderboard from members, turn off **Show Public Leaderboard** in **Settings → Portal Settings → Points**.

### Owner Dashboard Widget

Your admin dashboard includes a **Leaderboard** widget showing the top 10 members by points, with the same This Month / This Year / Lifetime toggle. It's visible by default and can be hidden in [Dashboard Widgets](../settings/dashboard-widgets.md) settings.

## Awarding Points Manually

On any member's detail page, the **Award Points** section (Overview tab) lets staff:

1. Optionally pick a **Preset** to fill in the amount and reason automatically — see [Point Award Reason Presets](#point-award-reason-presets) below. Both fields stay editable after picking one.
2. Enter (or adjust) a point amount and an optional reason (e.g. "Shared us on Instagram")
3. Click **Award** — the points are added immediately

Amounts can be negative to apply a correction or penalty; a reason is required for negative awards.

The same section shows the member's complete point history: every award with its amount, source (check-in, class, trigger, or manual), reason, who awarded it, when, and its status (**Active** or **Reversed**). Manual awards are recorded in the member's audit log with the before/after balance; reversing an award or editing its reason logs its own entry too — see [Reversing and Annotating Points](#reversing-and-annotating-points).

## Point Award Reason Presets

Set up reusable presets so staff don't have to type the same amount and reason every time — handy for common awards like "Referral bonus" or "Instagram share."

Manage them from **Settings → Point Award Reason Presets**:

| Field | Description |
|---|---|
| **Label** | The preset name shown in the Award Points dropdown |
| **Points** | The amount awarded when this preset is selected |
| **Category** | Optional tag you can filter by on the Points Ledger |
| **Active** | Inactive presets are hidden from the Award Points dropdown but stay listed here, editable |
| **Order** | Controls the order presets appear in the dropdown |

Selecting a preset on the Award Points form fills in the amount and reason but leaves both editable — presets are a shortcut, not a requirement, and free-text awards work exactly as before if you skip them.

Deleting a preset never changes point history already awarded with it — only the preset entry itself is removed.

## Reversing and Annotating Points

Every point transaction — manual or automatic — can be reversed or annotated from either a member's Award Points history or the [Points Ledger](#points-ledger):

- **Reverse** — voids the award. It's never deleted: the entry stays visible, marked **Reversed**, showing who reversed it and why, and immediately stops counting toward leaderboard totals and the member's balance. A reason is required.
- **Annotate** — updates the reason on an existing entry without touching the amount.

The amount on an award is never directly editable — if the amount itself was wrong, reverse it and award the correct amount instead.

## Points Ledger

**Membership → Points** lists every point transaction across your whole gym — check-ins, class attendance, manual awards, everything — in one place.

Filter by member, source, category, date range, manual-only, or reversed-only, sorted newest first. A summary strip at the top shows total points awarded this month, this year, and the top 5 earners this year.

You can reverse or annotate any entry directly from the ledger — see [Reversing and Annotating Points](#reversing-and-annotating-points) above.

## Awarding Points Automatically with Triggers

Beyond check-ins and classes, you can award points for any event [Automation Triggers](../settings/triggers.md) supports — door scans, class check-ins, first class bookings, and more:

1. Go to **Settings → Triggers** and click **New automation trigger**
2. Give it a name and turn **Active** on
3. Under **When It Runs**, choose "The moment something happens"
4. Pick an event from the **When** dropdown
5. Under **What It Sends**, click **Add an action**, set **Type** to **Award Points**, and enter the points to award

The points are credited to the matched member the moment the event fires, with the trigger's name recorded as the reason.

## Permissions

The **manage_achievements** permission controls access to the Points Ledger, Point Award Reason Presets, and awarding, reversing, or annotating points (the Award Points section on a member's profile). Staff without this permission will not see these menu items or actions.
