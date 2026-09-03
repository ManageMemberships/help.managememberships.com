---
sidebar_position: 5
---

# Class Registrations

The **Class Reports** page allows owners and administrators to view class bookings, see which members are registered for each timeslot, and manually add bookings for users who did not register themselves.

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

## **Summary**

The Class Reports page is designed to give you full control over your class schedules and attendance records. You can:
- Quickly find which members are registered for each class.
- View payments and agreements.
- Mark attendance (attended or no-show) for each booking.
- Add last-minute or offline bookings with the Manual Registration tool.
- Deduct bookings from a member’s **check-in quota** when applicable.
- Export rosters to CSV.
- Cancel a single session and automatically return members' class credits.

This ensures that all class data is consistent and up to date, whether members register online, through your staff, or using their prepaid check-ins.
