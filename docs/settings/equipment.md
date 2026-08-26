---
sidebar_position: 5
---

# Equipment

The Equipment section gives you a full inventory management and maintenance tracking system for your gym's equipment. It lives under **Settings → Equipment** and is split into three areas: the equipment registry, the maintenance log per item, and equipment categories.

---

## Equipment Registry

The main Equipment table shows every piece of equipment in your gym. For each item you can store:

- **Name** – required
- **Category** – required (see [Equipment Categories](#equipment-categories) below)
- **Serial Number**
- **Purchase Date**
- **Status** – one of Active, Needs Service, Out of Service, or Retired
- **Location** – only shown if multi-location is enabled on your account
- **Photo**
- **Notes**

The **Service** column shows a badge based on where the item stands against its maintenance schedule:

| Badge | Meaning |
|-------|---------|
| **On Schedule** | Next service date is in the future |
| **Due Soon** | Service is coming up within the next 14 days |
| **Due Today** | Service is due today |
| **Overdue** | Past the scheduled service date |
| **No Schedule** | No maintenance schedule has been set |

You can filter the table by category, status, or show only items that are overdue.

---

## Service Schedule

Each equipment item can have a maintenance schedule. Click **Set Schedule** on any row to configure:

- **Interval** – e.g. every 3 months, every 1 year
- **Schedule Active** toggle – disable without deleting the schedule

The schedule drives the Service badge on the registry and the automated service reminder emails (see [Service Reminders](#service-reminders) below). It advances automatically each time you log a maintenance entry with a **Next Service Due** date.

> The schedule interval is independent of any date you type on individual log entries. It determines when the system flags the item as due — not the log entry itself.

---

## Maintenance Log

Click **Maintenance Log** on any equipment row to open the full service history for that item.

Each log entry captures:

- **Date** – when the service was performed
- **Type** – Routine, Repair, Inspection, or Cleaning
- **Performed By** – free-text name of who did the work
- **Notes**
- **Cost**
- **Next Service Due** – optional; setting this advances the item's schedule
- **Photos** – upload before, after, damage, or other photos per entry

If the equipment's category has **Track Rounds/Parts** enabled, log entries also include:

- **Round Count** – total rounds/uses since last service
- **Parts Replaced** – free-text list of replaced parts

### Log Entry Locking

Entries are editable for 24 hours after creation. After that they lock automatically. Owners can unlock a locked entry from the edit slide-over if a correction is needed. All edits are tracked in a **Recent Changes** audit trail visible at the bottom of each entry's edit panel.

---

## Equipment Categories

Equipment categories let you organize your inventory by type. Go to **Settings → Equipment → Equipment Categories** to manage them.

Each category has:

- **Name**
- **Color** – used for visual grouping
- **Sort Order** – drag to reorder, or set a numeric value
- **Active** toggle
- **Track Rounds/Parts** – when enabled, maintenance log entries for this category show round count and parts-replaced fields

### Default Categories

ManageMemberships provides a set of default categories (e.g. Cardio, Strength, Free Weights). These are shared across all accounts and cannot be edited or deleted, but you can **Hide** them if they don't apply to your gym. Hidden defaults won't appear in the category dropdown when adding equipment.

You can also create your own custom categories — these can be edited, reordered, or deleted (as long as no equipment is currently assigned to them).

---

## Service Reminders

When a maintenance schedule's next due date arrives, ManageMemberships automatically emails the gym owner as a reminder to service that piece of equipment.

Reminders are sent once per scheduled date — if you've already logged the service and the next due date has advanced, you won't receive a duplicate.

No configuration is needed; reminders fire automatically as long as the schedule is active.

---

Need help setting up your equipment inventory? Contact support and we'll walk you through it.
