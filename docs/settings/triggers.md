---
sidebar_position: 14
---

# Triggers

The **Triggers** section allows you to set up automated actions that respond to member behavior or run on a schedule. Triggers can send text messages or emails based on conditions you define.

---

## Creating a Trigger

Click **New automation trigger** to create an automation. The following fields are available:

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
- **When a Class Is Booked Without Its Follow-up** - Fires a set number of hours after a member books one class (e.g. CCL Part 1) if they still haven't booked its follow-up (Part 2)

#### Invalid Kiosk Check-in

Fires in two situations:

- **A known member is rejected** — no valid subscription, check-in quota exceeded or expired, etc. Both the member and Custom-recipient actions can be delivered. Rate limited to 2 notifications per member per 30 minutes.
- **The input matches nobody in the system** — e.g., someone types a name or scans a code that isn't recognized. Since there's no matched member, only **Custom-recipient** actions are delivered (use this as an owner/staff alert). The `attempted_input` variable contains exactly what was typed. Rate limited to 5 notifications per location per 30 minutes.

A pre-built template is available via the **Invalid kiosk check-in** button.

Message variables for this trigger: `{{ name }}`, `{{ email }}`, `{{ status }}`, `{{ reason }}` (why the check-in was rejected), and `{{ attempted_input }}` (unknown-person attempts only).

#### Class Booked Without Its Follow-up

For classes that come in parts, such as a 16-hour CCL split into **Part 1** (Saturday) and **Part 2** (Sunday). It reminds people who booked Part 1 to book Part 2, with a link straight to it.

Set it up with three fields:

- **When someone books** — the first class (Part 1). You can pick more than one.
- **But hasn't booked** — the follow-up class (Part 2). If you run Part 2 on more than one schedule, pick them all; booking any of them counts.
- **Check after** — how many hours after the Part 1 booking to check, from 1 to 168. Default 2.

When someone books Part 1, the check waits that many hours. The message goes out only if, by then:

- their Part 1 booking hasn't been cancelled;
- they have no Part 2 booking on or after their Part 1 date (a Part 2 booked for an earlier date doesn't count);
- Part 1 is still picked on the trigger.

Message variables for this trigger:
- `{{ class_name }}` and `{{ class_date }}` — the Part 1 class and its date.
- `{{ followup_class_name }}` — the Part 2 class.
- `{{ followup_link }}` — the booking page for the next open Part 2 date on or after Part 1, e.g. the Sunday right after a Saturday Part 1. With several Part 2 classes picked, it uses whichever has the earliest open date. If none has an open date posted, it links to the Part 2 dates page.

Example text:

```
Hi {{ first_name }}! You're booked for {{ class_name }} on {{ class_date }}. Don't forget {{ followup_class_name }} to finish your 16 hours: {{ followup_link }}
```

Use **Sending limit: Every time** if members may take the class more than once.

#### First Class Booking Example

An example is available for the **On First Class Booking** trigger. It sets up an email that tells new students to bring their citizenship or eligibility documents to the front desk.

To use it:

1. Click **New automation trigger**.
2. Click the **First class booking** button under the **Active** switch and confirm. (The example buttons appear on new triggers only, not when you edit one.)
3. Check the fields below, and change the email if you like.
4. Turn **Active** on and save.

The example fills in:

| Field | Set to |
|---|---|
| **Name** | First class booking — citizenship docs |
| **When It Runs** | The moment something happens |
| **When** | On First Class Booking |
| **Sending limit** | Only ever once per member |
| **Cooldown** | 7 days |
| **What It Sends** | One email to the member who booked |
| **Email Subject** | Documentation Requirements for Your Upcoming Class |
| **Active** | Off |

The **Email Content** starts as:

> Hi `{{ name }}`,
>
> Thank you for registering for your first class! Before attending, please review our documentation requirements.
>
> Please bring valid citizenship or eligibility documentation to the front desk before your class date.
>
> If you have any questions, please contact us.

Things to know:

- **It is off until you turn it on.** The example leaves **Active** off. An inactive trigger never sends anything.
- **Nothing creates it for you.** If you never create this trigger, no one gets the email.
- **Each member gets it once.** It goes out the first time a member books any class at your gym, however the booking is made. If that first booking is later cancelled, it still counts as their first, so a later booking does not send the email again.
- **To change the email,** edit **Email Subject** and **Email Content** before you save, or click **Edit** on the trigger in the list later. Your copy belongs to that trigger, so it does not change if the example is updated.
- **Variables you can use:** `{{ first_name }}`, `{{ name }}` and `{{ email }}`.
- **It does not check the Citizenship flag.** A member who is already marked Verified still receives it. See [Citizenship Verification](../citizenship-verification.md).
- **The sender.** Emails sent by a trigger do not use the **Sender Email** from [Portal Settings](./portal-settings.md).

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

*Scheduled triggers only.* Event triggers fire for the one member involved and don't use conditions.

A scheduled trigger checks your **active** members once a day, in the early morning, and messages whoever matches. Combine conditions with **ALL of these are true** or **ANY of these is true**. With no conditions, every active member matches.

| Condition | Matches members who… |
|---|---|
| **Activity date → Has not checked in for at least…** | haven't checked in for that many days (including members who have never checked in) |
| **Activity date → Had a failed door scan within the last…** | were denied at a door in that many days |
| **Custom field date** | have a date in that custom field that is that many days away |
| **Birthday is today** | have their birthday today, in your gym's time zone. Someone born on February 29 matches on February 28 in other years |
| **Membership level is** | are on any of the levels you pick |

Members with no phone number, or who have opted out of texts, are skipped for text messages.

### Birthday texts

To text members on their actual birthday, click the **Birthday text** template button. It fills in a scheduled trigger with **Birthday is today**, a **Sending limit** of once a year, and a text you can edit.

To send it only to some members, add a second condition, **Membership level is**, and pick the levels. For example, choose your Drop-In level to send drop-ins a birthday offer:

```
Happy birthday {{ first_name }}! 🎉 Come in anytime in the next week and your Day Pass is on us.
```

The member's birth date comes from their profile, so members with no birth date on file won't get it.

---

## Actions

Each trigger can perform one or more actions when conditions are met:

### Text Message
- **Send To** - The matched member or a custom phone number
- **Text Body** - The message content

Messages can include variables, which are filled in for each member: `{{ first_name }}`, `{{ name }}` (full name) and `{{ email }}`, plus the event-specific ones listed under each trigger type. Click a variable under the message box to insert it.

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
