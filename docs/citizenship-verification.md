---
sidebar_position: 8.5
---

# Citizenship Verification

Citizenship Verification gives your staff a simple flag on each member: **Verified** or **Not Verified**. Staff set it by hand, usually after a member shows their documents at the front desk. ManageMemberships keeps only the flag. It does not store the documents.

The flag then shows next to names on your class roster and check-in screens, so staff can see at a glance who still needs to be checked.

:::note
The flag is a reminder for your staff. It does not stop anyone from booking a class, signing up or checking in.
:::

---

## Turning It On

1. Go to **Settings → Portal Settings**.
2. Search for "citizenship", or expand **Privacy & Access**.
3. Turn on **Require Citizenship Verification**.
4. Click **Save Settings**.

The helper text under the switch reads: *Shows each member's citizenship verification status at the top of their member page, where staff can mark it verified.*

The setting is off by default. While it is off, the flag is hidden everywhere. Anything staff already marked is kept, and it shows again if you turn the setting back on.

You need the **Manage Portal Settings** permission to change it. Owners and managers always have it.

---

## Marking a Member Verified

1. Go to **Membership → Members** and open the member.
2. On the **Overview** tab, look under the member's name and email. You will see a pill that reads **Citizenship: Not Verified** (red) or **Citizenship: Verified** (green).
3. Click the pill.

The flag changes right away. There is no confirmation box. Hover over the pill to see what a click will do, for example *Click to mark not verified*. Click again to switch it back.

**Not Verified** covers both members nobody has checked yet and members you marked Not Verified. There is no separate "unknown" state.

### Who can change it

You need the **Manage Membership Levels** permission. Owners and managers always have it. Other staff need it ticked under **Settings → Staff → Edit → Permissions**. The default **Staff** role does not include it.

Without the permission, the pill is still shown, but you can't click it and there is no hover tip.

### Change History

Every click is recorded. Open the member's **Activity & History** tab and go to **Change History**. Each row shows the **Date**, the **User** who clicked, the **Action** (**Updated**) and the **Changes**.

A citizenship change appears as **Citizenship Verified** with the old and new value. For example, marking a member Verified for the first time shows `[empty] → 1`.

---

## Where the Flag Shows

| Screen | Where to find it | What it says |
|---|---|---|
| Member profile | **Membership → Members**, open a member, **Overview** tab | **Citizenship: Verified** or **Citizenship: Not Verified**. This is the pill you click. |
| [Class Registrations](./reports/class-registration.md) | **Reports → Bookings → Class Registrations**, next to the member's name | **Citizenship ✓** (green) or **Citizenship ✗** (red). Hover over it to see *Citizenship: Verified* or *Citizenship: Not Verified*. |
| Printed roster | **Print roster** on Class Registrations, in the **Compliance** column | *Citizenship: Verified* or *Citizenship: Not Verified*. Not Verified is printed bold and boxed. |
| [Bulk Check-In](./reports/bulk-checkin.md) | **Reports → Bookings → Bulk Check-In**, next to names in the search results and in the **Booked** and **Walk-Ins** lists | **Citizenship: Verified** or **Citizenship: Not Verified** |
| Check In | The simple search-and-check-in screen used by [Scoreboard-only accounts](./scoreboard-only-accounts.md), next to names in the search results and in the **Checked In Today** list | **Citizenship: Verified** or **Citizenship: Not Verified** |

Each label shows only while **Require Citizenship Verification** is on.

The flag does **not** show on:

- The [Check-in Report](./reports/check-in-report.md)
- The window that opens when you click a class on the [Class Calendar](./reports/class-calendar.md), which shows only the waiver warning (see below)
- The Class Registrations **Export CSV** file
- The [Daily Roster](./daily-roster.md)

---

## What the Warning Triangle Means

You may see a yellow **⚠** next to a name on Class Registrations and in the Class Calendar window. Hover over it and it says **Waiver(s) pending**. It is about waivers, not citizenship, and it shows whether or not Citizenship Verification is turned on.

---

## Emailing Students About Documents

If you want new students to know what to bring, set up the **First class booking** example on the [Triggers](./settings/triggers.md) page. It sends an email the first time someone books a class.

- Nothing sets this up for you. You have to create the trigger and turn **Active** on.
- The example email asks for "valid citizenship or eligibility documentation". You can change the wording.
- The email does not look at the Citizenship flag. A member who is already marked Verified still receives it.

---

## Related

- [Safety Briefing](./safety-briefing.md) works the same way and shows beside the citizenship label.
- [Class Registrations](./reports/class-registration.md) for the roster, **Print roster** and **Export CSV**.
- [Members](./membership/members.md) for the rest of the member profile.
- [Staff](./settings/staff.md) for giving staff the permissions above.
