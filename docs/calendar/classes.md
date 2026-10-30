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

#### **Show seats left**
- Off by default. When on, members see how many seats are left on each date instead of a general "Limited spots available!" note:
  - the class page says **3 spots left** (or **1 spot left**) under the price;
  - the [Schedule Widget](./schedule-widget.md) pop-up shows the count next to the class name;
  - the **Next dates for one class** widget shows the count on each date.
- Leave it off if you'd rather not show that a class is nearly empty.
- Classes with flexible time slots have seats per slot, so they keep the general note either way.
- A date that is full always says **This date is full.**, whether this is on or off.

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
- How long before the class registrants should receive a heads-up email if enrollment is still below the minimum. Leave blank to disable warnings.
- Choices range from **6 hours before** up to **2 weeks before**, so same-day classes can be handled as well as ones booked weeks out.
- If you also use auto-cancellation, the warning must be set to go out **earlier** than the auto-cancel point (a longer lead time).

#### **Auto-Cancel If Under Minimum**
- How long before the class it should be automatically cancelled if enrollment is still below the minimum. Registrants are refunded and notified. Leave blank to disable auto-cancellation.
- Same range as the warning — from **6 hours before** to **2 weeks before**. A 6 PM class set to auto-cancel 6 hours out is decided at noon that day, rather than the previous morning.

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

### Pay Cash

#### **Allow "pay cash at the session"**
- **Off by default.** Turn it on for a class when members like to pay cash (a recovery session, for example) but you still want them to book online.
- When it's on, the booking page shows a **Pay cash at the session** checkbox. A member who ticks it needs no card, nothing is charged, and they are booked right away. Everyone who can book the class sees the option.
- The booking is saved as **UNPAID**, with the amount owed set at what they would have paid online: the class price after any membership discount or promo code, times the tickets, plus tax if you charge tax. The card processing fee is not added to cash.
- Their confirmation email says how much to bring in cash. You get your usual new-registration email, marked **PAY CASH AT THE SESSION, not paid yet**.
- Booking with class credits, or a class that costs $0, doesn't use this option.
- **Web booking page only.** The mobile app and ManageRegister don't offer pay-cash bookings.

**Collecting the cash**
1. Open the [Class Calendar](/docs/reports/class-calendar), click the class, and find the member on the roster. Unpaid bookings are marked **UNPAID**.
2. Click **Collect Payment**, leave **Document Cash Collected** selected, and click **Collect Payment**.
3. The booking becomes **CASH** and counts as revenue in your class and trainer reports for the amount owed. (You can also pick **Charge Card on File** there if the member decides to pay by card.)

**Cancellations and no-shows**
- A cash booking holds a spot but is never charged or refunded, because nothing was paid. A member who cancels (within your cancellation window) or doesn't show owes nothing, and an unpaid booking stays on the roster until someone removes it. Remove no-shows from the roster so they don't take a spot or show as unpaid.

---

### ManageRegister POS

#### **Sync Completion to ManageRegister**
- If enabled, completed bookings for this class appear in ManageRegister via the register API.

#### **Checking in from ManageRegister**
- Staff can check people in for today's classes from **Account Check** in ManageRegister. If the person booked or bought the class, it's picked for them, and checking in marks that booking **attended**, the same as checking in from the member app.
- **The class has to be paid for first.** Someone with no paid booking is refused when the class costs them something. ManageRegister's **Collect payment** books their seat (refused when the class is full) and puts it in the cart at their member price. Members whose discount makes the class free, or whose level gives them check-in credits, aren't asked to pay.
- Where **Require Citizenship Verification** is on, someone not yet verified is refused. Staff check their documents and click **I have verified their citizenship — check in**, which records the verification on their account and checks them in.

---

## Booking Without an Account

Visitors who aren't logged in can still see a class's date, time and price. To book, they need an account:

- With **Level for New Accounts from Booking Pages** set in [Portal Settings](../settings/portal-settings.md#level-for-new-accounts-from-booking-pages), and that level allowed to book the class under **Membership Eligibility**, the class page shows a **Book this class** box with two tabs, **I have an account** and **I'm new here**. A new visitor fills in their details under **I'm new here** and clicks **Create account & continue**, and can book without leaving the page. An existing member logs in under **I have an account** and stays on the class page.
- Otherwise the page shows **Log In** and **Create Account**, and logging in brings them back to the class.

### Signing Waivers on the Class Page

If the membership level a new account joins has waivers attached (**Members → Membership Levels → Associated Agreements**), the person signs them in the **Book this class** box, on the same class page, instead of being sent to their dashboard:

- The box shows **One more step before booking** with the waiver to sign. Any fillable fields in the waiver work the same as everywhere else a waiver is signed.
- With more than one waiver, they sign one at a time and the box says how many are left (for example **2 waivers left**). After the last one, the normal booking form appears.
- The class date, time and price stay visible above the waiver, so they see what they're booking before they sign. On a paid class, the card form only appears once every waiver is signed.
- An existing member who logs in from the class page with an unsigned waiver gets the same thing: they sign in the box and stay on the class page.
- They can't book until every waiver is signed. Other pages of the member portal still send them to their dashboard to sign, as before.
- Signatures are saved exactly as when someone signs from their dashboard, so you see them in the same places (see [Agreements](../membership/agreements.md#signing-from-a-class-page)).

A class's own **Required Agreements** (under [Registration Requirements](#registration-requirements)) are separate from the level's **Associated Agreements** and aren't part of this step. They're added to the booking when the person books, don't hold up the booking, and are signed afterwards from the **Sign Required** link next to the class on their dashboard.

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

When a class reaches its **Max Participants** limit, the class page says **This date is full.** and members see a **"Join Waitlist"** button instead of the normal registration form.

- Members are added to the waitlist in the order they join (first come, first served).
- When a booked member cancels, the first person on the waitlist is **automatically booked** into the class and receives an email notification.
- If the first person on the waitlist requested more tickets than are available (e.g., they want 3 but only 1 spot opened), they stay on the waitlist and are not promoted.
- Members can see their waitlisted classes on their **dashboard**.

---

## Minimum Class Size

If a class isn't worth running below a certain headcount, set **Minimum Participants** in the class editor and choose what should happen when an upcoming session is under-enrolled. The two behaviors are independent — use either one or both.

### Low-Enrollment Warning

With **Warn If Under Minimum** set, the system checks each upcoming session every hour. When a session reaches the configured lead time and is still below the minimum, every registrant receives an email letting them know the class may be cancelled if enrollment doesn't pick up.

- Each registrant is warned **once per session** — no repeat emails on later days.
- Sessions with no registrants yet aren't marked as warned, so anyone who books later can still be notified.

### Owner Warning Before Auto-Cancellation

When auto-cancellation is enabled, **you get a heads-up too**: about 24 hours before a session reaches its auto-cancel point while still under the minimum, the account owner receives an email showing current vs. required enrollment and how many bookings would be affected. That gives you a day to:

- Rally enrollment up to the minimum
- Lower **Minimum Participants** on the class
- Change or clear **Auto-Cancel If Under Minimum**

Any of those changes takes effect at the next hourly check, and the session runs as scheduled. The owner warning is sent once per session — you won't be re-emailed about the same one.

:::note
If you set an auto-cancel lead time shorter than 24 hours, there isn't room for a full day of notice — the owner warning still goes out, but closer to the cancellation point.
:::

### Automatic Cancellation

With **Auto-Cancel If Under Minimum** set, a session that is still below the minimum at the configured cut-off is cancelled automatically:

- **All bookings for that session are cancelled.** Members who paid by card are **refunded automatically** to their original payment method, and members who used class credits get their **credits restored**.
- **Every registrant receives an email** confirming the cancellation and stating whether they were refunded or were never charged.
- **The session disappears everywhere** — it's removed from the calendar, the class detail page, and the kiosk, and it can no longer be booked through any registration flow. Waitlisted members cannot be promoted into a cancelled session.
- Only that specific session is cancelled. The class itself stays active, and all other dates and time blocks are unaffected.

:::tip
Set the warning well ahead of the auto-cancel point (e.g., warn 2 days before, cancel 12 hours before). That gives registrants time to rally friends into the class before it's called off. The class editor requires the warning lead time to be longer than the auto-cancel lead time.
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
