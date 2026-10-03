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

1. **At the counter.** When a flagged member is selected in ManageRegister, staff see **⚠ NEEDS SAFETY BRIEFING**. Clicking **Print briefing ticket** adds them to the safety briefing queue and prints a QR ticket.
2. **Unlock the kiosk.** On the briefing kiosk, open `https://<your-subdomain>.managememberships.com/kiosk/briefing` and enter your employee code. The screen shows who is running the briefing. Use **Lock kiosk** when you're done.
3. **Scan out.** After the briefing, each attendee scans their ticket on the way out, using a USB or Bluetooth QR scanner or the kiosk's camera. Their briefing is marked complete, the queue entry closes, and the time and employee are recorded.

Scanning the same ticket again shows "already checked out". A ticket from another gym, or anything that isn't a ticket, is rejected.

---

## Clearing or Setting the Flag by Hand

For a regular who has already been briefed, or someone who needs it again:

1. Open the member under **Members**
2. Find the **Safety Briefing** row
3. Click it to switch between **Needs Briefing** and **Complete**

This needs the **Manage memberships** permission.

---

## Notes

- Reprinting a member's ticket gives the same QR code; they're only in the queue once.
- Changing or removing an employee's kiosk code locks any kiosk they had unlocked.
- If the register has no Star printer, or printing fails, a printable ticket opens instead.
