---
sidebar_position: 14
---

# Triggers

The **Triggers** section allows you to set up automated actions that respond to member behavior or run on a schedule. Triggers can send text messages or emails based on conditions you define.

---

## Creating a Trigger

Click **New Trigger** to create an automation. The following fields are available:

### Name
A descriptive name for the trigger (e.g., "Re-engage At-Risk Members").

### Active
Toggle the trigger on or off. Set to **Active** to enable or **Inactive** to pause.

### Trigger Type
Choose when the trigger fires:
- **Scheduled** - Runs on a recurring schedule
- **On Successful Door Scan** - Fires when a member is granted door access
- **On Invalid Door Scan** - Fires when a member scans a door but is denied access
- **On Invalid Kiosk Check-in** - Fires when a kiosk or quick-kiosk check-in is rejected
- **On First Class Booking** - Fires when a member books their very first class ever
- **On Class Check-in** - Fires when a member checks in to a class
- **On Merchandise Purchase** - Fires when a member buys a product

#### Invalid Kiosk Check-in

Fires in two situations:

- **A known member is rejected** — no valid subscription, check-in quota exceeded or expired, etc. Both the member and Custom-recipient actions can be delivered. Rate limited to 2 notifications per member per 30 minutes.
- **The input matches nobody in the system** — e.g., someone types a name or scans a code that isn't recognized. Since there's no matched member, only **Custom-recipient** actions are delivered (use this as an owner/staff alert). The `attempted_input` variable contains exactly what was typed. Rate limited to 5 notifications per location per 30 minutes.

A pre-built template is available via the **Invalid kiosk check-in** button.

Message variables for this trigger: `{{ name }}`, `{{ email }}`, `{{ status }}`, `{{ reason }}` (why the check-in was rejected), and `{{ attempted_input }}` (unknown-person attempts only).

#### First Class Booking Template

A pre-built template is available for the "First Class Booking" trigger. Click the **First class booking** template button to auto-fill a trigger with citizenship documentation email, "forever" deduplication (so each member only receives it once), and a pre-written email body.

### Schedule
When using a **Scheduled** trigger type, choose how often it runs:
- **Daily**
- **Hourly**

### Cooldown (days)
The minimum number of days that must pass before the same **member** can be messaged by this automation again. Prevents members from receiving duplicate messages.

Applies to actions sent to the member (**Matched user** recipient). It does **not** apply to staff alerts — see [Staff alerts vs. member messages](#staff-alerts-vs-member-messages) below.

### Sending limit
Controls how often the same **member** can be messaged by this trigger:
- **Every time** - No limit; the member is messaged on every occurrence
- **Day** - At most once per member per day
- **Week** - At most once per member per week
- **Year** - At most once per member per year
- **Forever** - Each member can only be messaged once

Like Cooldown, this applies only to actions sent to the member.

### Staff alert burst guard
*Event triggers only.*

Staff alerts (**Custom recipient** actions) are sent on **every** event — they are never limited by Cooldown or Sending limit. The burst guard is the one control over their volume: if the *same member* sets the same trigger off repeatedly, only one alert is sent per this many minutes.

- **0** (default) - No guard. Every event produces an alert.
- **10** - Default for newly created triggers. Collapses accidental double-scans while still alerting on every genuine visit.

Set this if a single member can realistically fire the same event many times in a row — for example, someone repeatedly scanning a door they don't have access to. Real repeat visits are normally hours apart, so a short window rarely suppresses anything you wanted to see.

### Staff alerts vs. member messages

The two are throttled independently, which matters when a trigger does both:

| | Cooldown / Sending limit | Staff alert burst guard |
|---|---|---|
| **Matched user** (the member) | Applies | Does not apply |
| **Custom recipient** (staff) | Does not apply | Applies |

A trigger set to "At most once a week" that also texts an owner will still text that owner on **every** event. The weekly limit only governs what the member receives.

---

## Conditions

Define which members the trigger applies to using the **Members where** rule builder. You can combine conditions with **AND/OR** logic.

### Available Condition Fields
- **Engagement Tier (Now)** - Current engagement level
- **Engagement Tier (30 Days Ago)** - Engagement level from 30 days prior
- **Last Check-in** - Date of most recent check-in
- **At Risk Since** - Date member was flagged as at-risk
- **Invalid Door Scan At** - Date of last denied door access

### Engagement Tier Values
- Highly Engaged
- Neutral
- Poorly Engaged
- At Risk

---

## Actions

Each trigger can perform one or more actions when conditions are met:

### Text Message
- **Send To** - The matched member or a custom phone number
- **Text Body** - The message content

### Email
- **Send To** - The matched member or a custom email address
- **Email Subject** - The subject line
- **Email Content** - The email body

### Award Points
- **Points to award** - How many points the matched member receives when the trigger fires
- Points are credited instantly, with the trigger's name recorded as the reason in the member's point history
- See [Points & Leaderboard](../membership/points-leaderboard.md) for how points work

---

## Managing Triggers

### Preview
Test your trigger conditions against members to see who would match before activating.

### Existing Triggers
All triggers are listed in a table showing their name, type, active status, and last run time. You can edit or delete triggers from this list.
