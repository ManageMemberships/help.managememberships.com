---
sidebar_position: 1
---

# Portal Settings

## Getting Started

To get started, navigate to **Settings → Portal Settings** in your admin dashboard.  

> ⚠️ **Important:** Your portal will not function correctly until these settings are configured.

Use the **search bar** at the top of the settings page to quickly find any setting by name.

---

## Basic Information

Core business details and branding for your portal.

### Business Name

The name of your business, displayed throughout the portal.

### Timezone

Used for scheduling classes, access control logic, and system time coordination.

### Logo

The logo displayed throughout your portal (square image recommended).

### Hero Banner

A banner image that appears at the top of your portal for guests.

### Public Description

This message is shown to **non-logged-in visitors** on your portal homepage.

---

## Portal Colors

Customize the look and feel of your member-facing portal.

### Primary Color

The main color used for buttons, links, and key UI elements.

### Secondary / Accent Color

Used for highlights, hover states, and secondary elements.

### Navigation Background

The background color of your portal's navigation bar.

### Navigation Text Color

The text color used in the navigation bar.

### Page Background Color

The background color for the main content area of your portal.

### Heading / Title Color

The color used for headings and titles throughout the portal.

---

## Member Portal & Welcome Messages

Settings related to the messages members and visitors see.

### Dashboard Welcome Message

Shown to members **after logging in** on their dashboard.

### Welcome Email

Sent to new members **after they complete registration**.

### Upgrade Email (Optional)

An optional email sent to members when they upgrade their membership level.

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
- **Booking** — Credits are consumed immediately when the member books the class. If they cancel (within the cancellation window), credits are restored.

### Hide Self-Cancellation

If enabled, members must **contact you** directly to cancel their subscriptions.

### Failed Payments Before Inactive

How many failed billing attempts will occur before a member is automatically marked **inactive**.

### Tax ID

If your jurisdiction requires tax collection, enter your tax ID here to enable automatic tax calculation on payments.

### Email on Payment Failure

Toggles whether or not to send an email to members when their payment fails asking them to update their payment method. Default is **on**.

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

## Birthday Reminders

Configure automated birthday notifications.

### Enable Birthday Reminders

Sends an email to you **7 days** and **1 day** before each member's birthday.  
> The reminder includes member names, emails, and days remaining.

### Additional Recipients

Comma-separated list of **other emails** that should receive birthday reminders.  
> Example: `staff@example.com, manager@example.com`

---

## Email Settings

Used to manage email sender information and notification recipients.

### Sender Name

This name will appear in the **"From" field** of all system-generated emails.

### Sender Email

The email address used for outgoing messages.  
> Must be a valid, verified address.  
> **Cannot** be a `@managememberships.com` email.

### Additional Payment Notification Recipients

A list of staff emails to alert when a member's payment fails.

### Email Template

Reusable content (such as headers or footers) for pre-filling email campaigns.

---

## Calendar & Display Settings

Settings that affect how the calendar and scheduling features are displayed.

### Side-by-Side Event Overlaps

When enabled, overlapping events on the calendar are shown side-by-side rather than stacked.

### Facility Closures

Block specific dates or recurring days on the calendar system-wide (such as holidays or planned outages).  
> Members will not be able to register or check in on these dates.

Click **Add Closure Date** to add a new closure. Each closure can include:
- **Start Date** and **End Date**
- **Recurring Day** (optional, for weekly closures)
- **Closure Reason**

---

## Public Store & Shipping

Settings for your public-facing product store.

### Enable Public Store

When enabled, visitors and members can browse and purchase products from your portal.

### Offer Shipping

When enabled, shipping options are available at checkout for physical products.

---

## Features & Integrations

Advanced features and third-party service connections.

### Multiple Locations

Enable support for managing multiple business locations.

### Auto-Add Free/Trial to CRM

Automatically add free and trial members to the prospect CRM system.

### Trello API Key

Your Trello API key for board integration.

### Trello Token

Your Trello token for authentication.

### Trello Board

Select which Trello board to sync with.

### Zapier Webhook URL

The webhook URL for Zapier integration triggers.

### Zapier API Key

Your Zapier API key for authentication.

### Generate New API Key

Click to generate a new API key for external integrations.
