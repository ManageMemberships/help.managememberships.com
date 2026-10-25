---
sidebar_position: 5
---

# Class Registrations

The **Class Registrations** page allows owners and administrators to view class bookings, see which members are registered for each timeslot, manually add bookings for users who did not register themselves, print a sign-in roster, and keep a staff note against any individual session.

Find it under **Reports → Bookings → Class Registrations**. You can also reach it from the **View Full Report** button in the [Class Calendar](./class-calendar.md) window.

:::info Permission required
You need the **View Class Reports** permission. Owners and managers always have it. The default **Staff** role does not, so an owner has to tick it for each staff member under **Settings → Staff → Edit → Permissions**. See [Staff](../settings/staff.md).
:::

---

## **Viewing Class Registrations**

1. **Select a Class**
   - Use the **"Select a class"** dropdown at the top of the page.
   - This will display all upcoming classes available under your business domain.

2. **Select a Timeslot**
   - Once you select a class, use the **"Select Timeslot"** dropdown to choose the date and time.
   - All bookings for the selected timeslot will be displayed below.

3. **View Registered Members**
   - The report will show:
     - **Date**: the date of the booking. For a booking you add yourself with **Manual Registration**, this shows the date of the class instead.
     - **Member**: the member's name, which links to their profile. Labels may appear next to the name (see [Labels Next to a Member's Name](#labels-next-to-a-members-name)).
     - **Tickets**
     - **Quota Used?**: **Yes** if the booking used one of the member's check-ins, otherwise **No**. It says nothing about whether they attended.
     - **Amount Paid**: with an **UNPAID**, **CASH** or **COMPED** tag where it applies
     - **Attendance**: the **Attended** and **No-Show** buttons (see [Attendance Tracking](#attendance-tracking))
   - Any custom fields set to show on the roster appear as extra columns after **Member**.
   - A yellow **⚠** next to a name is the waiver warning. See [Labels Next to a Member's Name](#labels-next-to-a-members-name).
   - If the class has agreements, they are also listed under the name on bookings the member made online. Each one shows a red "Unsigned" label, or a **"View Agreement"** link once it is signed.

4. **Totals**
   - At the bottom of the table, you will see the total revenue (sum of all amounts paid) for the selected timeslot.

---

## **Labels Next to a Member's Name**

Next to a member's name you may see up to three labels:

| Label | What it means |
|---|---|
| **⚠** (yellow) | The waiver warning. Hover over it to see **Waiver(s) pending**. It is about waivers, not citizenship, and it shows whether or not the settings below are on. |
| **Citizenship ✓** (green) or **Citizenship ✗** (red) | Verified or not verified. Hover over it to see *Citizenship: Verified* or *Citizenship: Not Verified*. **✗** also shows for a member nobody has checked yet. |
| **Briefing Needed** (red) or **Briefed** (green) | The range safety briefing. A member who was never flagged and never briefed shows no label. |

The **Citizenship** label shows only while **Require Citizenship Verification** is on. The **Briefing** label shows only while **Require Safety Briefing** is on. Both are in **Settings → Portal Settings → Privacy & Access**. If you turn a setting off, its label disappears from this page.

The labels are for information. They do not stop a booking or a check-in. Staff change them on the member's profile. See [Citizenship Verification](../citizenship-verification.md) and [Safety Briefing](../safety-briefing.md).

---

## **Manually Adding a Booking**

Sometimes members may call or request a spot without registering online. You can manually add a booking:

1. **Select the Class**
   - Choose the class from the dropdown at the top of the page, the one that starts with **"Select a class"**. Type in **Filter classes...** above it to shorten the list.
   - The **Manual Registration** box appears as soon as a class is selected. You do not need to choose a timeslot first.

2. **Use the Manual Registration Section**
   - On the right-hand side, you will see the **"Manual Registration"** box.

3. **Select a Member**
   - Type in **Filter users...** to shorten the list.
   - Use the **"Select Member"** dropdown to choose the member you are booking for.

4. **Select Attendee (Family/Bundle Members)**
   - If the selected member has **child accounts** or **bundle members**, an **"Attendee"** dropdown will appear. It starts on **Same as member**, and the hint under it reads *Select if booking for a child/family member on this account*.
   - Use this to select which family member is actually attending the class.
   - For example, if a parent (TJ Young) has a child (Jamaal Young) on their account, select TJ Young as the member, then pick Jamaal Young as the attendee.
   - The attendee name will appear on the roster next to the parent's name.
   - You can also **search by a bundle member's name** in the member filter — it will find the parent account that contains that bundle member.

5. **Check Quota Usage (Optional)**
   - If the class accepts check-ins, then once you pick a member you will see either **Check-ins available: N** with a **Consume one check-in** checkbox, or **No check-ins available**.
   - When you tick **Consume one check-in**:
     - The booking will deduct one check-in from their available quota.
     - This is especially useful for **private training packages** or **limited check-in memberships**.

6. **Select Date**
   - Choose the date of the class from the **"Select Date"** dropdown.
   - Only available dates will be shown.

7. **Select Time Slot**
   - Once a date is chosen, the **"Select Time Slot"** dropdown will appear. It is required.
   - Each option shows the time and how many spots are open, for example **6:00 PM - 7:00 PM (8 spots)**.

8. **Choose a Payment Option**
   - Under **Payment**, pick one. **Mark Unpaid** is selected to start with.
     - **Mark Unpaid**: the booking is added as unpaid and shows an **UNPAID** tag. You can collect the payment later from the [Class Calendar](./class-calendar.md) window.
     - **Charge Card on File**: charges the class price to the member's card on file. You need the **Manage Classes** permission.
     - **Mark Paid (Cash)**: records the class price as paid in cash and shows a **CASH** tag.
     - **Mark Comped**: adds the booking for free and shows a **COMPED** tag.

9. **Add the Booking**
   - Click the **"Add"** button.
   - The booking will always be for **1 ticket**, and this cannot be changed.

10. **Confirmation**
    - Once added, the table of registrations shows that date and time, including the new booking, and the form is cleared.

---

## **Common Notes**

- **Errors and Validation**
  - You must select all required fields (Member, Date, Time Slot).
  - If a field is missing or invalid, you will see a red error message under the manual registration form. For example, if you leave **Select Time Slot** empty, it reads **The manual slot field is required.**

- **Updating the View**
  - After adding a booking, the page will automatically refresh the selected timeslot to show the new registration.

- **Available Dates**
  - The **"Select Date"** dropdown is populated based on the class schedule and availability. If no dates appear, verify the class configuration.

---

## **Searching for Class Bookings**

- Use the **Class** and **Timeslot** filters to narrow down the list of registrations.
- For each class and timeslot, you can:
  - See all members registered
  - Check payment information
  - View agreements (signed or unsigned)

---

## **Attendance Tracking**

You can mark each booking as **Attended** or **No-Show** directly from the class registration list:

1. Select a class and timeslot to view the roster
2. Each member row has **Attended** and **No-Show** buttons
3. Click to toggle the status — the button highlights to confirm
4. Attendance data is saved immediately

Attendance data feeds into the [Trainer Reports](./trainer-reports.md) and is used to calculate attendance rates per trainer and per class. Consistently marking attendance helps you:
- Identify no-show patterns (members who book but don’t show)
- Track which classes have the best turnout
- Evaluate trainer performance

---

## **Sorting the Roster**

Use the **Sort by** menu above the table to change the order:

- **Last Name (A–Z)** (the default)
- **First Name (A–Z)**

"Last name" means the last word in the member's name. The order carries through to **Print roster** and **Export CSV**.

---

## **Printing the Roster**

Choose a class and timeslot, then click **Print roster**. Your browser's print window opens with a clean sign-in sheet. It is not a copy of the screen.

**The header shows:**

- Your gym's name followed by **— Class roster**
- The class name
- The date and time
- **Instructor**, if the session has a trainer (a [swapped trainer](#swapping-the-trainer-for-a-session) is used)
- **Note**, if the session has a staff note
- **Booked: N**, and how many were cancelled

**The table has these columns:**

| Column | What it shows |
|---|---|
| **Member** | The name, plus *Attendee: name* when the booking is for someone else |
| **Membership** | The member's membership level |
| **Check-in** | An empty box to tick with a pen. It stays empty even if the member is already marked Attended. |
| **Compliance** | Only when **Require Citizenship Verification** or **Require Safety Briefing** is on. Plain words: *Citizenship: Verified*, *Citizenship: Not Verified*, *Safety briefing: Needed* or *Safety briefing: Briefed*. **Not Verified** and **Needed** are printed bold and boxed so they stand out on a black-and-white printout. |

Cancelled bookings are listed with **CANCELLED** instead of a box, and the name is struck through. Rows follow the **Sort by** order.

**Left off the printout:** amounts paid, tickets, quota, the **Attended** and **No-Show** buttons, the waiver **⚠**, phone numbers, emails and the waitlist.

:::tip
Your browser may add its own date, page title and web address at the top and bottom of the page. Turn off **Headers and footers** in the print window to remove them.
:::

---

## **CSV Export**

Click **Export CSV** to download the roster for the selected timeslot as a spreadsheet. Rows follow the **Sort by** order. If there are no bookings, nothing downloads.

The columns, in order:

| Column | What it holds |
|---|---|
| **Date** | The same date as the **Date** column on screen |
| **Member** | The member's name, with *(Attendee: name)* added when the booking is for someone else |
| **Email** | The member's email |
| **Phone** | The member's mobile number |
| Custom fields | One column for each custom field set to show on the roster |
| **Tickets** | Number of tickets |
| **Quota Used** | **Yes** or **No** |
| **Amount Paid** | The amount, without a dollar sign |
| **Status** | **Active** or **Cancelled** |
| **Attendance** | **Attended**, **No_show** or **Scheduled** (no attendance marked yet) |

:::note
The file does **not** include citizenship, safety briefing or waiver status. Those show only on screen and on the printed roster.
:::

Cancelled bookings are included, marked **Cancelled** in **Status**. Their amount is still in **Amount Paid**, so a total taken from the file includes them. The **Totals** row on screen leaves them out.

A cell that starts with **=**, **+**, **-** or **@** gets an apostrophe added in front. A phone number such as +1 (682) 540-1908 appears in the file as `'+1 (682) 540-1908`.

The file name is the class name in lowercase with dashes, then `-roster-` and the date and time of the timeslot, for example `concealed-carry-roster-2026-10-26_1800.csv`.

---

## **Staff Notes**

Each session can carry a private note — who actually taught it, why attendance was light, an incident worth remembering, anything the next person opening the roster should know. The note belongs to that one date, not to the class as a whole.

1. Select the class, then select the timeslot.
2. Click **Add/Edit Note**.
3. Type the note and click **Save Note**.

Once saved, the note appears under the class date whenever anyone opens that session, and the **Add/Edit Note** button shows a blue dot so you can tell at a glance that a note exists.

A few things worth knowing:

- **One note per session.** Saving again replaces what was there — it does not append. If you want to keep the earlier text, copy it before you overwrite it.
- **Closing discards an unsaved draft.** Text you typed but didn't save is gone when you reopen the note.
- **The note follows a moved session.** If you move a session to a new date or time, its note moves with it. If the destination already had its own note, the two are combined rather than one replacing the other, separated by a horizontal rule.
- **Cancelling a session leaves the note in place**, so the record of why it was cancelled stays with the date.

:::note
Notes are visible to everyone who can open Class Registrations, including staff accounts. Saving or editing one requires the same access level as cancelling or moving a session, so staff without membership-management rights can read notes but not change them. Keep that in mind before recording anything sensitive about a member.
:::

---

## **Cancelling a Session**

When a single session can't run — weather, a sick coach, a court double-booked — you can cancel that one date without touching the rest of the schedule.

1. Select the class, then select the timeslot for the date you're cancelling.
2. Click **Cancel this session**. The button shows how many bookings will be affected.
3. Choose a **reason**, and add a note if you pick "Other".
4. Leave **Email the booked members that this session is cancelled** ticked if you want them told (it's ticked by default), or untick it to let them know yourself.
5. Confirm.

What happens:

- Every active booking for that date is cancelled. Bookings already cancelled are left alone.
- **Class credits go back** to the packages they came from, so a member who paid with a punch-card isn't charged for a class that didn't run.
- The reason you chose is recorded against each member's activity log, so the cause is visible later.
- The session stops appearing on the calendar and can no longer be booked.
- **If the email box is ticked, each member gets one email** saying which class and when was cancelled, and that any class credit they used went back to their package. A parent with two children booked into the same session gets one email, not two. The page tells you how many members were emailed.

### What the email says

The email names the class and the date and time, and says the session has been cancelled. The reason is only included when it's **Inclement weather** or **Gym / venue closed**. Your private note and the internal reasons (staff error, duplicate check-in) are never put in the email.

Only members whose booking was cancelled by this action are emailed. If an email can't be sent, the booking is still cancelled and the page says how many emails failed.

Only this one date is affected. The class continues to run on every other date as scheduled.

:::note
Each booking is cancelled independently. If one fails, the rest still go through rather than the whole session being left half-cancelled — the page tells you how many succeeded and how many failed.
:::

---

## **Swapping the Trainer for a Session**

If your regular trainer can't make one date of a recurring class, you can substitute someone else for that date only — the rest of the series keeps its regular trainer.

1. Select the class, then select the timeslot for the date you're covering.
2. Click **Swap trainer**, next to **Move this session**.
3. Choose the substitute from the dropdown, or leave it blank to remove an existing swap and go back to the regular trainer.
4. Save.

What happens:

- Only that one date changes. Every other occurrence of the class keeps its regular trainer.
- The substitute is credited for that one session in [Trainer Reports](./trainer-reports.md), and the regular trainer's credit for that session is removed.
- **No one is notified.** The swap doesn't email or otherwise alert either trainer — let them know yourself if they need to hear it from you.

The **Swap trainer** button shows who's currently assigned to that date, so you can tell at a glance whether a session has already been covered.

:::note
A swap only updates bookings that already exist for that date. If a member registers for that session afterward, they're assigned the substitute automatically, the same as if the swap had always been there.
:::

---

## **Summary**

The Class Registrations page is designed to give you full control over your class schedules and attendance records. You can:
- Quickly find which members are registered for each class.
- View payments and agreements.
- Mark attendance (attended or no-show) for each booking.
- Add last-minute or offline bookings with the Manual Registration tool.
- Deduct bookings from a member’s **check-in quota** when applicable.
- Export rosters to CSV.
- Print a sign-in roster with a check-in box and the compliance labels.
- See at a glance who is citizenship-verified and who still needs a safety briefing.
- Leave a staff note on a single session that travels with it if the session moves.
- Cancel a single session, automatically return members' class credits, and email the booked members in one step.
- Swap the trainer for a single session without affecting the rest of the series.

This ensures that all class data is consistent and up to date, whether members register online, through your staff, or using their prepaid check-ins.
