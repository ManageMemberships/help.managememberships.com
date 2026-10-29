---
sidebar_position: 8
sidebar_label: Safety Briefing
---

# Safety Briefing

Require new members to complete a range safety briefing before they shoot. New members are flagged, ManageRegister warns staff at the counter and prints a QR ticket, an employee runs the briefing at the **briefing kiosk**, and attendees scan their ticket on the way out to complete it.

---

## Turning It On

1. Go to **Settings** (search for "safety" to find it quickly)
2. Expand **Privacy & Access**
3. Toggle on **Require Safety Briefing**

Only members who sign up **after** you turn this on are flagged. Existing members and staff are never flagged automatically.

---

## Setting Each Employee's Kiosk Code

The briefing kiosk is unlocked with the code of the employee running the briefing, so every completed briefing records who ran it.

1. Go to **Staff**
2. Click **Edit** on the employee
3. Enter a 4–8 digit **Briefing kiosk code**
4. Click **Save**

Each code must be unique within your gym. Leave the field blank when editing to keep the current code.

:::note
The code can't be set on the **Add staff** form. Add the employee first, then edit them to set it.
:::

---

## The Process

1. **At the counter.** When a flagged member is selected in ManageRegister, in the cart or in **Account Check**, staff see **⚠ NEEDS SAFETY BRIEFING**. Clicking **Print briefing ticket** adds them to the safety briefing queue and prints a QR ticket. The register's **Checked In** list has the same button on anyone who still owes the briefing.
2. **Unlock the kiosk.** On the briefing kiosk, open `https://<your-subdomain>.managememberships.com/kiosk/briefing` and enter your employee code. The screen shows who is running the briefing. Use **Lock kiosk** when you're done.
3. **Scan out.** After the briefing, each attendee scans their ticket on the way out, using a USB or Bluetooth QR scanner or the kiosk's camera. Their briefing is marked complete, the queue entry closes, and the time and employee are recorded.

Scanning the same ticket again shows "already checked out". A ticket from another gym, or anything that isn't a ticket, is rejected.

Scanning out also puts them in the **Shooting** queue for the RSO. A ticket printed for someone in a party on the register's **Checked In** list keeps them with that party. The register's **Checked In** list picks up the completed briefing the next time staff open it, so that person moves toward green without anyone marking it by hand.

---

## Clearing or Setting the Flag by Hand

For a regular who has already been briefed, or someone who needs it again:

1. Go to **Membership → Members** and open the member
2. On the **Overview** tab, under the member's name and email, find the **Safety Briefing** pill. It reads **Safety Briefing: Needed** (red) or **Safety Briefing: Complete** (green)
3. Click the pill to switch between the two

There is no confirmation box. Hover over the pill to see what a click will do. On **Needed** it says *Click to mark complete*. On **Complete** it says *Click to mark as needing the briefing*.

This needs the **Manage Membership Levels** permission. Owners and managers always have it. Each change is recorded under **Activity & History → Change History** on the member's page.

:::note
Marking a member **Complete** by hand clears the flag, but it does not give them a **Briefed** label on the roster. **Briefed** appears only after their ticket is scanned out at the briefing kiosk.
:::

---

## Where the Flag Shows

The status shows in these places while **Require Safety Briefing** is on:

| Screen | What it says |
|---|---|
| Member profile, **Overview** tab | **Safety Briefing: Needed** or **Safety Briefing: Complete** |
| [Class Registrations](./reports/class-registration.md), next to the member's name | **Briefing Needed** (red) or **Briefed** (green) |
| Printed roster, **Compliance** column | *Safety briefing: Needed* or *Safety briefing: Briefed* |
| [Bulk Check-In](./reports/bulk-checkin.md), and the Check In screen | **Briefing Needed** or **Briefed** |
| ManageRegister | **⚠ NEEDS SAFETY BRIEFING** |

A member who was never flagged and never briefed shows **no label** on Class Registrations, the printed roster or the check-in screens. Their profile pill shows **Complete**.

The flag does not show on the [Check-in Report](./reports/check-in-report.md), in the Class Calendar window, or in the **Export CSV** file. It never stops a booking or a check-in.

The citizenship flag works the same way. See [Citizenship Verification](./citizenship-verification.md).

---

## Notes

- Reprinting a member's ticket gives the same QR code; they're only in the queue once.
- Changing or removing an employee's kiosk code locks any kiosk they had unlocked.
- If the register has no Star printer, or printing fails, a printable ticket opens instead.
