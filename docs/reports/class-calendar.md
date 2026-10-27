---
sidebar_position: 6
---

# Class Calendar

The **Class Calendar** report allows owners and administrators to see upcoming classes on a visual calendar, filter by specific classes, and view who is registered for each event. You can quickly check rosters and open the **Class Registrations** report for more details or to manually add attendees.

---

## **Viewing the Class Calendar**

1. **Open the Report**
   - Go to **Reports → Bookings → Class Calendar** in the main menu.

2. **Select a Class**
   - Use the **"Select Class"** dropdown above the calendar to filter the view to a single class.
   - Leaving this filter blank will display all classes scheduled under your business domain.

3. **Navigate the Calendar**
   - Use the arrow buttons to move between months or weeks (depending on your view setting).
   - You can switch between **Month**, **Week**, **Day**, and **List** views using the calendar toolbar.

4. **View Events**
   - Each class session appears as an event on the calendar, showing the class name and the number of bookings, e.g. **"BJJ (5)"**.
   - If anyone checked in for the class **without booking in advance** (at the kiosk or via [Bulk Check-In](/docs/reports/bulk-checkin)), the event also shows a walk-in count, e.g. **"BJJ (5) +2 walk-in"**.
   - Event colors: **blue** = upcoming/active bookings, **green** = everyone attended (including sessions attended only by walk-ins), **purple** = partially attended, **gray** = no activity.

---

## **Resources View**

If your business has bookable resources (lanes, rooms, courts, equipment, etc.), you can switch the calendar to show those instead of classes.

1. **Switch to Resources**
   - Use the **"Resources (Day)"** or **"Resources (Week)"** buttons in the calendar toolbar, next to Month/Week/Day/List.
   - Each resource appears as its own row, with bookings and blocked-off periods shown along that row — so you can see what's booked or unavailable at a glance.

2. **Mark a Resource Unavailable**
   - Click and drag across an empty time slot on a resource's row to block it off.
   - A confirmation box shows the resource and the time range you selected, with an optional **Reason** field (e.g., "Maintenance", "Private event").
   - Click **Mark Unavailable** to confirm. The blocked-off period then appears on the calendar in red.
   - **Overlap warning:** if the time you selected overlaps an existing booking on that resource, the confirmation box warns you before you continue — it does not stop you, so you can still mark it unavailable if you mean to.

3. **Remove an Unavailable Block**
   - Click an existing blocked-off (red) period, then confirm to remove it. The slot becomes bookable again immediately.

4. **View a Booking (Read-Only)**
   - Clicking an existing booking (not a blocked-off period) shows who booked it: **Name**, **Phone**, and **Membership Level**. This is a quick look-up only — it doesn't let you edit or cancel the booking from here.

---

:::info Resources view vs. the Resources page
This calendar view is for seeing and blocking off time at a glance. To add a new resource, or change its hours, pricing, or membership rules, use the [Resources](/docs/calendar/resources) page instead — marking a slot unavailable here has the same effect as adding an entry under that page's **Unavailable Dates** field.
:::

:::info Permission required
Creating or removing a blocked-off period requires the **Manage Resources** permission. Staff with only **View Class Reports** can still see the Resources view and any existing blocked-off periods, but selecting a slot or clicking a block to change it shows a permission message instead. See [Staff](/docs/settings/staff) to manage permissions.
:::

---

## **Viewing a Class Roster**

1. **Click on an Event**
   - Selecting any class event on the calendar will open a roster view for that timeslot.

2. **Roster Information**
   - The window title shows the class name and date, for example **Introduction to Handguns - 10/23/2026**. The date follows your browser's format.
   - Summary tiles at the top show **Total Bookings**, **Total Tickets**, **Total Revenue**, and **Walk-Ins**.
   - The booking table has these columns:
     - **Member**: the member's name, with **View Member** and **Check In** buttons. A yellow **⚠** next to the name is the waiver warning. Hover over it to see **Waiver(s) pending**.
     - **Time**
     - **Tickets**
     - **Amount Paid**: with an **UNPAID**, **CASH** or **COMPED** tag where it applies
     - **Status**: see step 4
     - **Actions**: **Collect Payment** (unpaid bookings only, see step 3) and **Remove**
   - What the buttons do:
     - **View Member** opens the **Members** list in a new tab, searched for that member's email.
     - **Check In** asks you to confirm, then checks the member in for this class.
     - **Remove** asks *Are you sure you want to remove (the member's name) from this class? This action cannot be undone.* Click **Yes, remove** to remove the booking.
   - Under the table, three more tiles track the class survey: **Remaining to Send**, **Sent** and **Completed**. A **Total participants** line shows how many people are booked.
   - This window does **not** show the **Citizenship** or **Briefing** labels. Click **View Full Report** to see them on [Class Registrations](./class-registration.md).

3. **Unpaid Bookings and Collecting Cash**
   - A booking that hasn't been paid shows a red **UNPAID** tag and a **Collect Payment** button. This is how bookings made with **Pay cash at the session** (a per-class setting, see [Classes](/docs/calendar/classes)) and bookings you add as unpaid show up.
   - Click **Collect Payment**, then choose **Document Cash Collected** (or **Charge Card on File**). A cash booking is marked **CASH** and counted as revenue for the amount owed.

4. **Check-In Status**
   - Booked members show one of: **Booked** (signed up, hasn't arrived), **Attended** / **Checked In** (green — they arrived, whether marked manually or via a kiosk check-in), or **Cancelled**.
   - Below the bookings table, a **Walk-In Check-Ins** section lists everyone who checked in for the class without a prior signup — the same people the [Daily Roster](/docs/daily-roster) shows with an amber "Walk-in" badge — with their check-in time and a link to their member profile.

5. **Buttons at the Bottom of the Window**
   - **Close** closes the window.
   - **Email Survey** queues the class survey email for everyone booked on that date, then shows **Surveys queued**. There is no confirmation box. Each click queues the email again for everyone booked on that date, including people who were already sent it or already answered.
   - **Email Class Participants** opens an email campaign with the booked members already selected. See [Emailing a Class's Participants](../communication/email-campaigns.md).
   - **Text Class Participants** does the same for a [text campaign](../communication/text-campaigns.md).
   - **View Full Report** opens the detailed [Class Registrations](./class-registration.md) page for that session in a new tab. From there you can see payment details, print the roster and manually add attendees.
   - **View Feedback** appears only once someone has completed the survey.

---

## **Adding Attendees via the Calendar**

While the Class Calendar itself is for viewing and navigation, you can add attendees by:

1. **Clicking an Event**
   - Opens the roster popup.

2. **Clicking "View Full Report"**
   - This takes you to the **Class Registrations** page for that event.

3. **Using Manual Registration**
   - On the Class Registrations page, follow the steps to manually add members.

---

## **Common Notes**

- **Filtering**
  - The **Select Class** dropdown only affects which events are shown on the calendar. All other business classes remain hidden unless selected.

- **Event Times**
  - Times are displayed according to your business’s time zone settings.

- **Roster Accuracy**
  - Rosters update automatically based on online registrations and manual entries.

- **Navigation Shortcuts**
  - Click today’s date in the calendar toolbar to return to the current day.

---

## **Summary**

The Class Calendar makes it easy to:
- See your entire class schedule in a calendar view.
- Quickly check who is registered for each session.
- Jump directly into the Class Registrations page to view payments and add attendees.

This tool ensures you can manage classes visually and access details in just a few clicks.
