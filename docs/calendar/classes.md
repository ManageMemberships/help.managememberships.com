---
sidebar_position: 2
---

# Classes

The **Classes** section allows you to define and manage the types of classes or private sessions your organization offers. This includes standing weekly classes, appointment-based sessions, and any other structured offerings.

---

## Overview Table

The class table shows all classes currently available for your business.

| Column         | Description |
|----------------|-------------|
| **Name**       | The name of the class or session. |
| **Price**      | Cost of a single registration. |
| **Days**       | Days of the week this class is offered. |
| **Is Active**  | Indicates whether this class is visible and open for registration. |

---

## Creating a New Class

Click **"New Available Class"** to open the class editor. This will open a side panel with configuration fields organized into sections.

### Basic Information

#### **Class Name**
- A label or title for the class.

#### **Class Image**
- Upload a class image. Required.

#### **Class Description**
- Rich text description shown on the registration form.

#### **Max Participants**
- For fixed-time classes, this limits how many can attend. For appointments, it limits per session.

---

### Pricing

#### **Base Price**
- Cost per registration. Can be discounted based on membership level.

#### **One-Time Free Code**
- Optional promotional code that allows users to get their first class free.
- When set, users can enter this code during registration to waive the class fee.
- Each user can only use the code once, and it's only valid for this specific class.
- Leave blank if no promotional pricing is needed.

#### **Promo Codes**
- Create one or more discount codes for a class. Each code can be used once per user.
- Click **Add Promo Code** to add a new code. Each promo code has:
  - **Code** — the text the member enters at registration (e.g., `SUMMER10`). Case-insensitive.
  - **Type** — the kind of discount:
    - **Free (100% off)** — waives the full class fee. Limited to 1 ticket per use.
    - **BOGO (Buy 1 Get 1)** — the member is billed for half the tickets (rounded up). For example, 3 tickets would bill for 2.
    - **% Off** — a percentage discount on the per-ticket price.
    - **$ Off** — a flat dollar amount off the per-ticket price.
  - **Amount** — required for **% Off** and **$ Off** types. Enter the percentage (0–100) or dollar amount.
  - **Display Name** (optional) — a friendly label shown on the invoice (e.g., "Summer Special").
- Promo codes and membership-level discounts **do not stack**. If a promo code is applied, membership discounts are skipped.
- When a member enters a valid promo code during registration, the price updates in real time and a confirmation message is shown.

---

### Schedule & Timing

#### **Fixed Schedule Class**
- Toggle that determines whether this is a scheduled class (like Monday 6PM Jiu Jitsu) or a flexible time block (like a personal training session).

If toggled off:
- **Session Duration (Minutes)** becomes visible
- **Available Trainers** selection becomes required

#### **Available From / Available Until**
- Controls the window of availability. Leave **Available Until** blank if the class is ongoing.
- **Important:** If this class is only intended to appear once, it is recommended to set the end date to the day after, and use **Available Days** to limit which single day within that range is used.

#### **Start & End Time**
- Set the time of day the class occurs or is bookable.

#### **Registration Deadline**
- How many days before the class should registration close. Options range from same day (no restriction) to 2 weeks before. Leave blank for no restriction.

#### **Minimum Participants**
- The minimum number of registrants this class needs in order to run. Leave blank if the class runs regardless of enrollment.
- Cannot be set higher than **Max Participants**.
- On its own this field does nothing — pair it with one or both of the settings below. See [Minimum Class Size](#minimum-class-size) for how the warnings and auto-cancellation work.

#### **Warn If Under Minimum**
- How many days before the class registrants should receive a heads-up email if enrollment is still below the minimum. Leave blank to disable warnings.
- If you also use auto-cancellation, the warning must be set to go out **earlier** than the auto-cancel point (a larger number of days).

#### **Auto-Cancel If Under Minimum**
- How many days before the class it should be automatically cancelled if enrollment is still below the minimum. Registrants are refunded and notified. Leave blank to disable auto-cancellation.

#### **Available Days**
- Select the days of the week this class can occur. Multiple days supported.
- This field is used to repeat classes on a weekly schedule (e.g., every Monday and Thursday).

#### **Recurring Schedule Groups**

Schedule Groups let a single class run at **multiple time blocks** on the same day — for example, a morning session at 9:00 AM and an evening session at 6:00 PM, both under the same class name and settings.

To add schedule groups:
1. Enable the **Recurring** toggle on a schedule group row
2. Select which **days of the week** that block runs
3. Set the **Start Time** and **End Time** for that block
4. Click **Add Schedule Group** to define additional time blocks

Each group is independent — different days, start times, and end times. For example:

| Group | Days | Time |
|-------|------|------|
| Group 1 | Mon, Wed, Fri | 6:00 AM – 7:00 AM |
| Group 2 | Mon, Wed, Fri | 6:00 PM – 7:00 PM |

**How schedule groups affect the rest of the system:**

- **Calendar** — each block appears as a separate event at its own time. Owners can see both the 6 AM and 6 PM session on the same day.
- **Member registration** — members see a time block selector when signing up and choose which session they want. Full blocks are clearly marked.
- **Class Reports** — the registration report includes a dropdown to filter by specific time block, so you can see AM vs PM attendance separately.
- **Kiosk check-in** — both blocks appear as separate check-in options when a member has a booking.
- **Reminders** — scheduled reminders fire relative to each block's actual start time.

:::tip
If your class runs at the same time every day, you don't need schedule groups — just use the standard **Start & End Time** fields. Schedule groups are for classes that genuinely run at different times on the same day.
:::

#### **Special Class Dates**
- Use this to schedule specific class dates that don't follow a weekly pattern.
- Perfect for short-term workshops or series (e.g., a 4-class course running every Wednesday in July).
- Click **Add Special Date** to add individual dates.
- These dates are treated as valid class days even if they aren't included in the **Available Days** field.

---

### Staff & Resources

#### **Available Trainers**
- Select trainers who can lead this class. Required for flexible booking classes like private lessons.
- Leave blank for group classes or drop-in events.

---

### Registration Requirements

#### **Required Agreements**
- Select which waivers (if any) must be signed to register for this class.

#### **Registration Questions**
- Add registration-time questions. Each question has:
  - **Question** — the question text (e.g., "Do you have any injuries?")
  - **Answer Type** — choose from:
    - **Short Text** — single-line free-form input
    - **Long Text** — multi-line text area
    - **Dropdown** — select one option from a list
    - **Radio Buttons** — select one option, all choices visible
    - **Checkboxes** — select multiple options
    - **Number** — numeric input
    - **Date** — date picker
  - **Options** — for Dropdown, Radio Buttons, and Checkboxes, enter comma-separated choices (e.g., "Beginner, Intermediate, Advanced")
  - **Required** — toggle to make the question mandatory

---

### Membership Eligibility & Discounts

#### **Eligible Membership Levels**
- Select which membership levels can register. Leaving this blank means **no one can register**.

#### **Membership Level Discounts**
- Offer discounts to specific membership levels.
- **Discount Type**: Choose between **% Off** (percentage) or **$ Off** (flat dollar amount).
  - **% Off**: Enter a percentage (0-100).
  - **$ Off**: Enter a fixed dollar amount to subtract from the class price. Useful when a percentage would produce repeating decimals (e.g., use $10 off instead of 66.67% off).

---

### Notifications & Advanced Settings

#### **Notification Emails**
- Comma-separated email addresses to notify when someone registers for this class.

#### **Class Active**
- Toggle whether this class is currently available for registration.

#### **Hide from Public Calendar**
- Toggle this to remove the class from public schedules, but still allow manual or link-based registration.

#### **Public View Link**
- After saving, a direct link to this class's public registration page is displayed.

#### **Reminder Settings**
- Configure email reminders to be sent to registered members before class starts. Enter hours before class (e.g., 24, 48, 168 for 7 days).

---

### Class Credits

#### **Allow class credits (quota)**
- When enabled (default), members with credit packs can use their class credits to book this class instead of paying. This is the same balance shown as **Check-in Quota** on a member's Account tab.
- When disabled, the "Use Class Credits" option will not appear for this class, even if the member has credits available.
- Useful for premium or special classes that should always require payment.

---

### ManageRegister POS

#### **Sync Completion to ManageRegister**
- If enabled, completed bookings for this class appear in ManageRegister via the register API.

---

## Editing a Class

Click the **edit icon** to update any part of the class. Changes will reflect immediately for new registrations. Existing bookings are unaffected unless specifically changed elsewhere.

---

## Duplicating a Class

Click the **"Duplicate"** action from the class table to quickly create a copy of an existing class. The duplicated version:
- Copies all fields including name, schedule, trainers, and membership settings
- Appends **"(copy)"** to the class name
- Is set to **inactive** by default so you can safely make adjustments before making it live

Use this feature to easily reuse common formats or seasonal class templates without starting from scratch.

---

## Deleting a Class

Click the **"Delete"** action from the class table to remove a class you no longer offer.

- All **booking, attendance, and feedback history is preserved** — attendance reports for the deleted class remain fully available under Reports.
- The class immediately disappears from the schedule, the member portal, and the class list.
- If the class has **upcoming bookings**, the confirmation dialog will tell you how many. Deleting does **not** cancel or refund those bookings, so notify affected members before deleting.

If you only want to temporarily stop registrations, uncheck **Is Active** instead of deleting.

---

## Waitlist

When a class reaches its **Max Participants** limit, members will see a **"Join Waitlist"** button instead of the normal registration form.

- Members are added to the waitlist in the order they join (first come, first served).
- When a booked member cancels, the first person on the waitlist is **automatically booked** into the class and receives an email notification.
- If the first person on the waitlist requested more tickets than are available (e.g., they want 3 but only 1 spot opened), they stay on the waitlist and are not promoted.
- Members can see their waitlisted classes on their **dashboard**.

---

## Minimum Class Size

If a class isn't worth running below a certain headcount, set **Minimum Participants** in the class editor and choose what should happen when an upcoming session is under-enrolled. The two behaviors are independent — use either one or both.

### Low-Enrollment Warning

With **Warn If Under Minimum** set, the system checks each upcoming session daily. When a session is the configured number of days away and still below the minimum, every registrant receives an email letting them know the class may be cancelled if enrollment doesn't pick up.

- Each registrant is warned **once per session** — no repeat emails on later days.
- Sessions with no registrants yet aren't marked as warned, so anyone who books later can still be notified.

### Owner Warning Before Auto-Cancellation

When auto-cancellation is enabled, **you get a heads-up too**: one day before a session reaches its auto-cancel point while still under the minimum, the account owner receives an email showing current vs. required enrollment and how many bookings would be affected. That gives you one last day to:

- Rally enrollment up to the minimum
- Lower **Minimum Participants** on the class
- Change or clear **Auto-Cancel If Under Minimum**

Any of those changes takes effect before the next daily check, and the session runs as scheduled. The owner warning is sent once per session — you won't be re-emailed about the same one.

### Automatic Cancellation

With **Auto-Cancel If Under Minimum** set, a session that is still below the minimum at the configured cut-off is cancelled automatically:

- **All bookings for that session are cancelled.** Members who paid by card are **refunded automatically** to their original payment method, and members who used class credits get their **credits restored**.
- **Every registrant receives an email** confirming the cancellation and stating whether they were refunded or were never charged.
- **The session disappears everywhere** — it's removed from the calendar, the class detail page, and the kiosk, and it can no longer be booked through any registration flow. Waitlisted members cannot be promoted into a cancelled session.
- Only that specific session is cancelled. The class itself stays active, and all other dates and time blocks are unaffected.

:::tip
Set the warning a few days ahead of the auto-cancel point (e.g., warn 5 days before, cancel 2 days before). That gives registrants time to rally friends into the class before it's called off. The class editor requires the warning lead time to be longer than the auto-cancel lead time.
:::

:::note
In the rare case an automatic refund can't be processed, the member's cancellation email tells them the refund will be handled manually. Reach out to support if you need help resolving one.
:::

---

## Cancellation Window

Members can cancel their class bookings up until the **cancellation window** closes. The cancellation window is configured in **Settings > Portal Settings > Cancellation Window (Hours)**.

- If set to 8 hours, a member cannot cancel a class that starts in less than 8 hours.
- The cancel button will not appear on the member dashboard once the window has passed.
- This setting applies to classes, events, and resource bookings.

---

## Using Class Credits

Members who have purchased a credit pack (see [Class Credits & Packs](../membership/class-credits.md)) can use their credits to book classes at no cost.

- When viewing a class, members with available credits will see a **"Use Class Credits"** checkbox.
- Checking the box hides the payment fields and changes the button to **"Book"**.
- Whether credits are deducted at booking time or check-in time depends on the **Consume Credits On** setting in Portal Settings.
- Credits come out of the member's pack that expires soonest, so they never lose credits they could have used.
- If credits were consumed at booking and the member cancels within the cancellation window, they are returned to the pack they came from. A credit whose pack has since expired comes back expired — it isn't usable again.
- Members whose credits have all lapsed see **"Your class credits have expired"** rather than a "not enough credits" message.
- Owners can disable credit usage for specific classes using the **Allow class credits (quota)** toggle in the class settings.
- Owners and trainers can also consume a member's credits when manually booking from the **Class Registrations** page.

---

## Advanced Registration Limits

Owners can set a monthly cap on how many classes a member can book more than 7 days in advance, per membership level.

- Go to **Membership Levels** and edit a level
- Set the **Advance Booking Limit** field (e.g., 1 or 2)
- Members on that level can only book that many classes per month when the class is more than 7 days away
- Same-week bookings (within 7 days) are always unlimited
- The limit resets at the start of each calendar month

This is useful for preventing members from reserving too many spots far in advance while still allowing flexible same-week bookings.

---

## Best Practices

- For regular group classes, keep **Fixed Schedule Class** enabled.
- For flexible appointments, define trainers and duration.
- Always check which membership levels are eligible.
- Hide inactive or seasonal classes using the **Class Active** toggle or **Hide from Public Calendar** option.
- Use **Special Class Dates** for irregular events like seminars or workshops.
- Avoid setting the **same start and end date** unless you're also selecting a day in **Available Days** — this can prevent the class from showing on the calendar.
