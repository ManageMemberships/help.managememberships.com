---
sidebar_position: 10
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
- **On Invalid Door Scan** - Fires when a member scans a door but is denied access
- **On First Class Booking** - Fires when a member books their very first class ever

#### First Class Booking Template

A pre-built template is available for the "First Class Booking" trigger. Click the **First class booking** template button to auto-fill a trigger with citizenship documentation email, "forever" deduplication (so each member only receives it once), and a pre-written email body.

### Schedule
When using a **Scheduled** trigger type, choose how often it runs:
- **Daily**
- **Hourly**

### Cooldown (days)
The minimum number of days that must pass before the same member can trigger this automation again. Prevents members from receiving duplicate messages.

### Dedupe Scope
Controls the deduplication window:
- **Day** - One trigger per member per day
- **Week** - One trigger per member per week
- **Forever** - Each member can only be triggered once

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

---

## Managing Triggers

### Preview
Test your trigger conditions against members to see who would match before activating.

### Existing Triggers
All triggers are listed in a table showing their name, type, active status, and last run time. You can edit or delete triggers from this list.
