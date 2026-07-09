---
sidebar_position: 6
---

# Trainer Reports

The **Trainer Reports** page gives you a performance breakdown for each trainer on your team — sessions taught, total bookings, revenue generated, attendance rate, and a per-session drill-down.

Access it from **Reports > Bookings > Trainer Reports**.

---

## Date Range

Use the **From** and **To** date pickers at the top to set the reporting period. The report updates automatically when you change either date. Defaults to the current calendar month.

---

## Summary Cards

At the top of the report you'll see totals across all trainers for the selected period:

| Card | Description |
|------|-------------|
| **Revenue** | Total revenue from paid class bookings across all trainers |
| **Sessions** | Total number of class sessions taught |
| **Bookings** | Total number of member bookings |
| **Attended** | Number of bookings marked as attended |
| **Attendance Rate** | Percentage of marked bookings that were attended |

---

## Trainer Rows

Each trainer appears as a row showing:

- **Name and email**
- **Classes taught** (listed as tags)
- **Sessions** — number of distinct class sessions in the date range
- **People** — total bookings across all sessions
- **Avg/Class** — average number of people per session
- **Attendance Rate** — color-coded badge (green 75%+, yellow 50-74%, red below 50%)
- **Revenue** — total revenue from paid bookings

Trainers are sorted by revenue (highest first).

---

## Session Drill-Down

Click any trainer row to expand an accordion showing every session they taught in the date range:

- **Class name, date, and time**
- **Headcount** — how many people booked
- **Attended / No-show** counts
- **Revenue** for that session
- **Attendee pills** — each member's name shown as a colored badge:
  - Green = attended
  - Red = no-show
  - Gray = unmarked
  - Click any name to go directly to that member's detail page
  - If the member paid, the amount appears next to their name

Click the trainer row again to collapse the detail.

---

## CSV Export

Click the **CSV** button to download the summary data (one row per trainer) as a spreadsheet. Includes trainer name, email, sessions, bookings, average per session, attended, no-show, revenue, and attendance rate.

---

## Requirements

- Trainers must be marked as **Trainer** in the Staff settings
- Trainers must have **Trainer Availability** configured so their classes appear on the calendar
- Classes must have the trainer assigned in the class configuration
- Attendance must be marked on class bookings (via the Class Registrations page) for attendance rate to be meaningful
- Available on **Core** and **Enterprise** plans
