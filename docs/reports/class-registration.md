---
sidebar_position: 5
---

# Class Registrations

The **Class Reports** page allows owners and administrators to view class bookings, see which members are registered for each timeslot, manually add bookings for users who did not register themselves, and keep a staff note against any individual session.

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
     - **Date** of booking
     - **Member Name**
     - **Tickets Purchased**
     - **Amount Paid**
   - You can also see if any member has **pending agreements**. For unsigned agreements, you will see a red "Unsigned" label. Signed agreements include a **"View Agreement"** link.

4. **Totals**
   - At the bottom of the table, you will see the total revenue (sum of all amounts paid) for the selected timeslot.

---

## **Manually Adding a Booking**

Sometimes members may call or request a spot without registering online. You can manually add a booking:

1. **Select the Class and Timeslot**
   - As described above, choose the class and timeslot first.

2. **Use the Manual Registration Section**
   - On the right-hand side, you will see the **"Manual Registration"** box.

3. **Select a Member**
   - Use the **"Select Member"** dropdown to choose the member you are booking for.

4. **Select Attendee (Family/Bundle Members)**
   - If the selected member has **child accounts** or **bundle members**, an **"Attendee"** dropdown will appear.
   - Use this to select which family member is actually attending the class.
   - For example, if a parent (TJ Young) has a child (Jamaal Young) on their account, select TJ Young as the member, then pick Jamaal Young as the attendee.
   - The attendee name will appear on the roster next to the parent's name.
   - You can also **search by a bundle member's name** in the member filter — it will find the parent account that contains that bundle member.

5. **Select Date**
   - Choose the date of the class from the **"Select Date"** dropdown.
   - Only available dates will be shown.

5. **Select Time Slot**
   - Once a date is chosen, the **"Select Time Slot"** dropdown will appear.
   - You will see available times and how many spots are open for each slot.

6. **Check Quota Usage (Optional)**
   - If the member has a **check-in quota** from a membership package, you can tick the **"Use Member's Quota"** checkbox.
   - When checked:
     - The booking will deduct from their available quota.
     - This is especially useful for **private training packages** or **limited check-in memberships**.

7. **Add the Booking**
   - Click the **"Add"** button.
   - The booking will always be for **1 ticket**, and this cannot be changed.

8. **Confirmation**
   - Once added, the booking will appear in the table of registrations for that timeslot.

---

## **Common Notes**

- **Errors and Validation**
  - You must select all required fields (Member, Date, Time Slot).
  - If a field is missing or invalid, you will see a red error message under the manual registration form.

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

Attendance data feeds into the [Trainer Reports](./trainer-reports) and is used to calculate attendance rates per trainer and per class. Consistently marking attendance helps you:
- Identify no-show patterns (members who book but don’t show)
- Track which classes have the best turnout
- Evaluate trainer performance

---

## **CSV Export**

Click the **Export CSV** button to download the current roster as a spreadsheet. The export includes member name, tickets, amount paid, attendance status, and any custom fields configured for the class.

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
4. Confirm.

What happens:

- Every active booking for that date is cancelled. Bookings already cancelled are left alone.
- **Class credits go back** to the packages they came from, so a member who paid with a punch-card isn't charged for a class that didn't run.
- The reason you chose is recorded against each member's activity log, so the cause is visible later.
- The session stops appearing on the calendar and can no longer be booked.

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
- The substitute is credited for that one session in [Trainer Reports](./trainer-reports), and the regular trainer's credit for that session is removed.
- **No one is notified.** The swap doesn't email or otherwise alert either trainer — let them know yourself if they need to hear it from you.

The **Swap trainer** button shows who's currently assigned to that date, so you can tell at a glance whether a session has already been covered.

:::note
A swap only updates bookings that already exist for that date. If a member registers for that session afterward, they're assigned the substitute automatically, the same as if the swap had always been there.
:::

---

## **Summary**

The Class Reports page is designed to give you full control over your class schedules and attendance records. You can:
- Quickly find which members are registered for each class.
- View payments and agreements.
- Mark attendance (attended or no-show) for each booking.
- Add last-minute or offline bookings with the Manual Registration tool.
- Deduct bookings from a member’s **check-in quota** when applicable.
- Export rosters to CSV.
- Leave a staff note on a single session that travels with it if the session moves.
- Cancel a single session and automatically return members' class credits.
- Swap the trainer for a single session without affecting the rest of the series.

This ensures that all class data is consistent and up to date, whether members register online, through your staff, or using their prepaid check-ins.
