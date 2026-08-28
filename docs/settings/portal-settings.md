---
sidebar_position: 8
---

# Portal Settings

## Getting Started

Navigate to **Settings → Portal Settings** in your admin dashboard.

> ⚠️ **Important:** Your portal will not function correctly until these settings are configured.

Use the **search bar** at the top of the settings page to quickly find any setting by name.

Settings are organized into collapsible groups. Click any group header to expand it; each group also contains collapsible sub-sections so you can focus on exactly what you need without scrolling through everything at once.

---

## Branding & Basics

Your business identity — name, timezone, colors, and homepage design.

### Basic Information

Core business details and branding for your portal.

#### Business Name

The name of your business, displayed throughout the portal.

#### Timezone

Used for scheduling classes, access control logic, and system time coordination.

#### Logo

The logo displayed throughout your portal (square image recommended).

#### Hero Banner

A banner image that appears at the top of your portal for guests.

#### Public Description

This message is shown to **non-logged-in visitors** on your portal homepage.

---

### Portal Colors

Customize the look and feel of your member-facing portal. Leave any field blank to use the default blue theme.

#### Primary Color

The main color used for buttons, links, and key UI elements.

#### Secondary / Accent Color

Used for highlights, hover states, and secondary elements.

#### Navigation Background

The background color of your portal's navigation bar.

#### Navigation Text Color

The text color used in the navigation bar.

#### Page Background Color

The background color for the main content area of your portal.

#### Heading / Title Color

The color used for headings and titles throughout the portal.

---

### Homepage Builder

Design your full public homepage with a drag-and-drop builder — hero sections, images, testimonials, calls-to-action, and a customizable membership levels display. Click **Open Homepage Builder** to get started.

See the [Homepage Builder](./homepage-builder.md) guide for full details.

---

## Member Portal & Communications

Messages shown to members and email sender / template settings.

### Member Portal & Welcome Messages

Settings related to the messages members and visitors see.

#### Dashboard Welcome Message

Shown to members **after logging in** on their dashboard.

#### Welcome Email

Sent to new members **after they complete registration**.

#### Upgrade Email (Optional)

An optional email sent to members when they upgrade their membership level.

---

### Email Settings

Manage sender information, notification recipients, and the email template.

#### Sender Name

This name will appear in the **"From" field** of all system-generated emails.

#### Sender Email

The email address used as the From: address on all system-generated emails sent to your members (welcome emails, payment failures, dunning notices, etc.).

> **Cannot** be a `@managememberships.com` address.

##### Verifying your sender address

ManageMemberships uses AWS SES to send email, which requires addresses to be verified before use. You can verify your own address directly from Portal Settings — no support ticket needed.

**Steps:**

1. Enter your desired sender email and click **Save Settings**.
2. Once saved, click the **Verify** button that appears next to the address.
3. AWS will send a confirmation email to that address — click the link inside it.
4. Return to Portal Settings; the status badge will update to **Verified** (you may need to refresh).

**Status badges:**

| Badge | Meaning |
|---|---|
| Unverified | Address saved but not yet verified — emails fall back to the platform address |
| Pending | Verification email sent; waiting for you to click the link |
| Verified | Address is active and all outbound emails use it as the From: address |

**Things to know:**

- You must **save the address first** before the Verify button becomes active. If you edit the address and haven't saved, the button is disabled.
- Changing the address resets verification status immediately — you'll need to re-verify the new address.
- Verification emails are rate-limited: one attempt every **5 minutes**, maximum **5 per day**. The verification link expires after **24 hours**.
- Until verified, all emails fall back to the default ManageMemberships platform address so your members always receive notifications.

#### Additional Payment Notification Recipients

A comma-separated list of staff emails to alert when a member's payment fails.

#### Additional Lead Notification Recipients

A comma-separated list of emails that receive new-lead notifications. The owner always receives them.

#### Email Template

Reusable content (such as headers or footers) for pre-filling email campaigns.

---

### Birthday Reminders

Configure automated birthday notifications.

#### Enable Birthday Reminders

Sends an email to you **7 days** and **1 day** before each member's birthday.
> The reminder includes member names, emails, and days remaining.

#### Additional Recipients

Comma-separated list of **other emails** that should receive birthday reminders.
> Example: `staff@example.com, manager@example.com`

---

## Membership & Billing

Configuration for payment processing and membership enforcement.

### Calendar Month Billing

When enabled, billing aligns to calendar months rather than the member's signup date.

### Split Processing Fees

When checked, a **small processing surcharge** is added to member payments to share payment processing fees with them.

### Cancellation Window (Hours)

The number of hours before a class, event, or resource booking that a member is allowed to cancel. For example, setting this to **8** means members cannot cancel within 8 hours of the start time. Default is **24**.

### Consume Credits On

Controls when class credits are deducted from a member's balance:
- **Check-in** (default) — Credits are consumed when the member checks in at the kiosk or is marked as attended.
- **Booking** — Credits are consumed immediately when the member books the class. If they cancel (within the cancellation window), credits are returned to the pack they were drawn from. See [Class Credits & Packs](../membership/class-credits.md).

### Hide Self-Cancellation

If enabled, members must **contact you** directly to cancel their subscriptions.

### Failed Payments Before Inactive

How many failed billing attempts will occur before a member is automatically marked **inactive**.

### Tax ID

If your jurisdiction requires tax collection, enter your tax ID here to enable automatic tax calculation on payments.

### Email on Payment Failure

Toggles whether or not to send an email to members when their payment fails asking them to update their payment method. Default is **on**.

### Allow Ad-hoc Charges

When enabled, staff can charge a member's card on file for any custom item or amount via the mobile app (e.g. coffee, tape, eggs) without needing a product in your catalog.

**How it works:**

1. Open the mobile app and go to the **Store / Purchases** screen
2. Scroll below the product list to the **Custom Charge** section
3. Enter the item name and dollar amount
4. Tap **Charge Card** — the card on file is charged immediately

**Limits:** Item name up to 100 characters. Minimum charge $0.50, maximum $500.00.

> This setting is off by default. Turn it on only if you want staff to be able to charge arbitrary amounts.

### Enhanced Payment Form (Apple Pay & Link)

When enabled, the registration form uses Stripe's modern Payment Element with support for **Apple Pay** and **Stripe Link** in addition to standard credit card entry. This also enables 3D Secure (SCA) support for cards that require it.

**Requirements:**
- Portal must use **Stripe** as the payment processor (not CardPointe)
- For Apple Pay: your subdomain must be registered as a payment method domain in Stripe. Contact support to set this up.
- Apple Pay only appears for users on **Safari** (iPhone, iPad, Mac) with a card added to their device's Wallet
- Stripe Link appears for all users and enables one-tap checkout with saved payment info

When this toggle is **off**, the registration form uses the standard credit card input. Existing portals are unaffected — this is off by default.

### Late Fee Amount

A flat dollar amount automatically added to a member's invoice when their payment fails. The fee is only charged **once per billing period** — if payment fails multiple times in the same period, the fee is not duplicated. Leave empty to disable.

### Late Fee Grace Period (days)

How many days after the invoice due date before the late fee is assessed. For example, set to `3` and a member whose payment fails on the 1st won't be charged the late fee until the 4th. Leave empty (or set to `0`) to charge the fee immediately on the first failure.

### Suppress Owner Welcome Emails

When enabled, the portal owner will not receive welcome email notifications for new member signups.

---

## Member Requirements

Settings related to registration requirements.

### Minimum Age

Sets a minimum allowed age for registration.
> **Note:** "Require Birthdate" must be enabled for this to apply.

### Require Birthdate

If checked, members will be required to enter their birthdate during sign-up.

### Require Profile Picture

When enabled, members must upload a photo at registration.
> Especially useful for security or gym environments with 24/7 access.

### Kiosk Waiver Free Membership Level

Select a membership level that allows kiosk check-in without requiring a signed waiver.

### Require Email Verification

When enabled, members must verify their email address before accessing the portal.

### Require Orientation Class

When enabled, members must complete an orientation class before gaining full access. Select the required orientation class from the dropdown.

---

## Store & Scheduling

Public store, shipping, and calendar display options.

### Public Store & Shipping

Settings for your public-facing product store.

#### Enable Public Store

When enabled, adds a `/products` page where anyone can browse and buy products without an account.

#### Offer Shipping

When enabled, shipping options are available at checkout for physical products. Disabling this means only local pickup is offered.

#### Shipping Rate Type

Choose between a flat rate per order or a flat rate per item.

#### Shipping Rate

The dollar amount charged for shipping.

---

### Calendar & Display Settings

Settings that affect how the calendar and scheduling features are displayed.

#### Side-by-Side Event Overlaps

When enabled, overlapping events on the calendar are shown side-by-side rather than stacked.

#### Facility Closures

Block specific dates or recurring days on the calendar system-wide (such as holidays or planned outages).
> Members will not be able to register or check in on these dates.

Click **Add Closure Date** to add a new closure. Each closure can include:
- **Start Date** and **End Date**
- **Recurring Day** (optional, for weekly closures)
- **Closure Reason**

---

## Features & Integrations

Enable additional features and connect third-party services.

### CRM & Automation

Automatically create CRM prospects and sync leads via Trello and Zapier.

#### Auto-Add Free/Trial to CRM

Automatically add free and trial members to the prospect CRM system.

#### Trello Integration

Connect your Trello workspace to create cards automatically when new prospects enter the CRM.

1. **Trello API Key** — from [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin)
2. **Trello Token** — generate from the same page
3. **Trello Board** — select which board to create cards on (loads after API key and token are saved)

#### Zapier Integration

Connect Zapier to fire webhooks on class and resource bookings, or to accept incoming leads from Facebook Lead Ads, Google Ads, and other sources.

- **Zapier Webhook URL** — fires on class/resource bookings
- **Zapier API Key** — for Zapier polling triggers. Click **Generate New API Key** to create one.

##### How Lead Capture Works (Facebook, Instagram & Google Ads)

Send leads from Facebook Lead Ads, Instagram, or Google Ads lead forms straight into your CRM pipeline using Zapier:

1. In Zapier, create a Zap with **Facebook Lead Ads** (covers Instagram too) or **Google Ads** as the trigger.
2. For the action, choose **Webhooks by Zapier → POST**.
3. URL: `https://<your-subdomain>.managememberships.com/api/zapier/prospects?domain=<your-subdomain>`
4. Headers: `X-API-Key` = your Zapier API Key (generate one above if blank, then Save first).
5. Data fields: `first_name`, `last_name`, `email`, `phone`, `source` (e.g. "facebook"), `notes`.

New leads appear on your pipeline instantly, you get an email notification, and any drip campaign with the "API Lead" trigger enrolls them automatically.

---

### Social & Messaging

Connect Facebook & Instagram to capture leads and reply from your CRM inbox.

#### Facebook & Instagram Connection

Connect your Facebook Page to capture leads from lead forms and reply to Facebook Messenger and Instagram DMs right from your CRM — no Zapier needed.

**Requirements:**
- You must be an admin of the Facebook Page
- Instagram DMs require a professional Instagram account linked to the Page

When connected, the panel shows your Page ID and Instagram link status. Use the buttons to:
- **Connect Facebook** — start the OAuth flow to link your Page
- **Refresh Connection** — re-run the connection to pick up a newly linked Instagram account or refresh tokens
- **Disconnect Facebook** — unlinks the Page. Leads and messages stop flowing in; existing conversations are kept.

---

### Analytics

#### Google Tag Manager Container ID

Add your GTM container ID (format: `GTM-XXXXXXX`) to track visitor activity on your portal. Find your container ID in your GTM workspace.

---

### Chat Widget

A floating **"Message us"** bubble on your public pages that turns anonymous visitors into CRM leads.

#### Enable Chat Widget

When enabled, logged-out visitors to your **homepage, blog, and landing pages** see a floating chat bubble. Opening it reveals a short form — name, phone, and message. Each submission is captured as a prospect in your [Prospect CRM](../communication/prospect-crm.md) (source: *chat widget*), with the visitor's message saved to the prospect's notes. If the phone or email matches an existing prospect, that record is updated instead of creating a duplicate.

The widget only appears to visitors who aren't logged in — your members won't see it.

#### Notification Emails

Add up to 10 email addresses to alert whenever someone submits the chat widget form. The account owner is always notified regardless. This list is specific to the chat widget — it's separate from the **Additional Lead Notification Recipients** list used for Google, Zapier, and Facebook leads.

Submissions are rate-limited and bot-protected, so enabling the widget won't flood your CRM with spam.

---

## Privacy & Access

Multi-location management and resource visibility controls.

### Multiple Locations

Enable support for managing classes and events at multiple business locations. When enabled, a Location Management page appears under Settings.

### Privacy Controls

Enable visibility settings on resources (public, members-only, staff-only) and allow marking trainers as sensitive staff to hide them from member-facing pages.

---

## Points

Reward members with points for showing up. Points power the member [Leaderboard](../membership/points-leaderboard.md) and can be awarded automatically, manually, or via triggers.

### Show Public Leaderboard

Adds a **Leaderboard** page and nav link to your member portal, ranking members by total points earned this month or year. On by default; turn it off to hide the page entirely.

### Points per Check-in

Points awarded for a general check-in. Leave empty to use the default (1). Set to 0 to disable.

### Points per Class Attended

Points awarded when a member attends a class. A class check-in earns this rate instead of the general check-in rate — never both. Leave empty to use the default (1). Set to 0 to disable.

### First Class Booked Bonus

A one-time bonus awarded when a member books their first-ever class. Leave empty to use the default (10). Set to 0 to disable. The bonus can only be earned once — cancelling and rebooking does not re-earn it.

### Awarding Points for Other Events

Want to award points for door scans, purchases, or other events? Create an [Automation Trigger](./triggers.md) with an **Award Points** action. The Points settings section includes a built-in walkthrough.
