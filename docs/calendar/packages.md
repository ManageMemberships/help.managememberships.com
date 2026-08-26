---
sidebar_position: 3
---

# Packages

**Packages** are time-based bookable sessions that bundle one or more resources together under a single price. Common uses: private range time, equipment rentals, guided sessions, event packages, one-on-one instruction blocks.

---

## Creating a Package

Go to **Owner Dashboard → Packages → Create**.

### Basic Fields

| Field | Description |
|---|---|
| **Name** | Displayed to members and on the calendar. |
| **Slug** | Auto-generated from the name. Used in the shareable link URL. |
| **Description** | Rich text shown at checkout and on the public booking page. |
| **Image** | Shown on the calendar popup and public page. |
| **Price** | Base price. Enter `0` for free. |
| **Start / End Date** | Date range this package is available. Leave End Date blank for ongoing. |
| **Start / End Time** | Daily time window for bookings. |
| **Duration Minutes** | Length of each bookable slot. Auto-calculated from start/end time. |
| **Days** | Days of the week this package repeats. Leave blank if using one-off dates only. |

### Membership Access & Discounts

- **Membership Levels** — only members in these levels can see and book this package.
- **Membership Discounts** — set a % off or $ off for specific membership levels.

---

## Registration Deadline

Block new bookings a set number of hours before the session starts.

**Setting → Registration Deadline** dropdown: 1 hr / 2 hr / 4 hr / 12 hr / 24 hr / 48 hr / 72 hr / No restriction.

Once the deadline passes:
- The booking page shows an error if a member tries to book.
- The public shareable link shows the date as **Closed**.
- The date's direct URL returns a 404.

---

## Add-ons at Checkout

Optional extras members can select when booking. Each add-on has a label and a price.

**Setting → Add-ons repeater** — add as many as you need.

At checkout:
- Each add-on appears as a checkbox with the label and price.
- The displayed total updates live as members check/uncheck.
- Selected add-ons are charged on top of the base price.
- The booking record stores which add-ons were purchased.

Free packages with chargeable add-ons will trigger payment only if the member selects at least one paid add-on.

---

## Special (One-off) Dates

Add specific dates this package is available **in addition to** the recurring weekly schedule. Useful for holiday events, one-time workshops, or anything that doesn't fit a recurring day.

**Setting → Special (One-off) Dates repeater** — pick as many individual dates as needed.

- One-off dates appear on the shareable link's upcoming date list alongside recurring dates.
- They also appear on the member-facing calendar.
- A package can use **only** one-off dates (no recurring days set) and work normally.
- One-off dates that fall outside the package's start/end date range still appear.

---

## Max Participants per Date

Cap how many bookings are accepted per date.

**Setting → Max Participants per Date** — leave blank for unlimited.

Once the cap is hit for a given date:
- Further booking attempts are blocked with a "fully booked" error.
- The public upcoming dates page shows **Full** for that date.
- The date's direct URL returns a 404.

Other dates on the same package are unaffected.

---

## Notification Emails

Control who gets emailed when a booking is made.

**Setting → Notification Emails** — comma-separated list of email addresses (e.g. `staff@example.com, manager@example.com`).

- If left blank, the notification goes to the owner account email.
- All addresses in the list receive the notification.
- The member's confirmation email is always sent to the member regardless of this setting.

---

## Shareable Link

Every package has a public URL you can post, email, or add to a button on your website. No login is required to view the page — members only need to log in when they click to book a specific time.

**Setting → Shareable Link** — shown as a read-only field after saving the package.

### What members see

1. **Package page** (`/packages/p/{slug}`) — package image, description, price, and a list of upcoming available dates. Dates that are full or past the registration deadline are labeled accordingly.
2. **Date page** (`/packages/p/{slug}/{date}`) — available time slots for that date. Clicking a slot prompts login if needed, then goes straight to checkout.

### Putting the link on a calendar

The shareable link works well as a calendar event URL or a linked button in an email campaign. Members who click it see all upcoming dates for that package in one place, rather than needing to navigate through your portal.

---

## Hide from Calendar

Toggle **Hide from Calendar** if you don't want this package appearing in the main member calendar view. The shareable link still works — this only affects the calendar block display.

---

## Sync to ManageRegister

When enabled, completed bookings for this package are exposed via the ManageRegister API so they can appear as achievements, badges, or completion records in ManageRegister.

**Setting → Sync to ManageRegister** toggle.

A booking counts as completed if:
- It was explicitly marked as attended (`confirmed: true` in the API), **or**
- The booking end time has passed and it wasn't cancelled (soft completion, `confirmed: false`).

Free and discounted bookings are included — no payment required to count as completed.

:::note For ManageRegister developers
`GET /api/{subdomain}/register/packages/completions?user_id={id}&start=YYYY-MM-DD&end=YYYY-MM-DD`

Same authentication (`X-System-Key`) as the classes completions endpoint. Response shape mirrors class completions: `[{ "package_name": "...", "confirmed": true|false }]`.
:::

---

## Resource Integration

Each package can have one or more **resources** attached, with a duration for each. When a booking is created, those resources are automatically blocked for the duration so they can't be double-booked.

Add resources in the **Resources repeater** on the package form. Each entry needs:
- **Resource** — select from your configured resources.
- **Duration Minutes** — how long that resource is reserved as part of this package.

---

## Best Practices

- Use **one-off dates** for events or workshops that don't repeat, and **Days** for recurring sessions — the same shareable link handles both.
- Set a **registration deadline** for anything that needs prep time (range setup, equipment staging, instructor scheduling).
- Use **notification emails** to route booking alerts to the staff member responsible, not just the owner inbox.
- Set **max participants** any time physical capacity matters — range lanes, equipment count, instructor bandwidth.
- Leave **Sync to ManageRegister** off unless you're actively using ManageRegister and want this package's completions tracked there.
