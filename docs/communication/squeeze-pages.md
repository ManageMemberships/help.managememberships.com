---
sidebar_position: 8
---

# Squeeze Pages

**Squeeze Pages** are public landing pages with a lead-capture form. When a visitor submits the form, they're automatically added to your [Prospect CRM](./prospect-crm.md) — and can optionally trigger email alerts and [Drip Campaign](./drip-campaigns.md) enrollment.

Find them under **Marketing → Squeeze Pages**.

---

## Collecting Leads (Events, Raffles, Ads)

A Squeeze Page is the right tool any time you want to collect names and contact info from people who are **not members yet**: a table at a community event, a raffle or giveaway, a free-trial offer, or an ad.

- People who fill it out become **prospects** in the [Prospect CRM](./prospect-crm.md), not members.
- Prospects **don't count toward your member numbers** and **don't need a waiver**.
- You can follow up from the CRM, or enroll them in a [Drip Campaign](./drip-campaigns.md) automatically.
- When a prospect joins, they convert to a member.

**Example: a raffle at a community event.** Create a Squeeze Page with name, email and phone fields and a line like "Enter to win a free month." Open the page link on a tablet at your table, or print it as a QR code with any free QR generator. Everyone who enters lands in your Prospect CRM, ready for follow-up.

:::tip
Don't use a hidden event or a registration form to collect leads. Those create **member** records, which inflate your member count and leave you with unsigned waivers.
:::

---

## Creating a Page

Click **"New Squeeze Page"**. A new active page is created and you're taken straight to the drag-and-drop page builder.

Each page is published at:

```
https://yourdomain/squeeze/{slug}
```

The **slug** and **title** can be edited directly in the builder toolbar, or from **Settings** on the list page.

---

## The Page Builder

The builder is a drag-and-drop editor. Drag blocks from the right-hand panel onto the canvas.

### Toolbar

- **Title** - Edit the page title inline
- **Slug** - Edit the page URL inline (must be unique)
- **Preview** - Opens the public page in a new tab (shows the last *saved* version)
- **Load Template** - Start from a pre-built layout: Gym Free Trial, Class Registration, Membership Promo, or General Lead Capture. Loading a template replaces your current content.
- **Save** - Publishes your changes

### Blocks

- **Lead Capture Form** - The most important block. Four styles (Simple Card, Dark, Underline Minimal, Compact Inline). The builder shows a preview of your configured form fields; the public page renders the real working form.
- **Headers, CTA, Testimonials, Pricing** - Pre-styled sections in four variants each
- **Layout** - 1-4 column sections
- **Images & Basic** - Images (hero, standard, square, circle), headings, and paragraphs

---

## Page Settings

On the list page, click **Settings** on any page to configure:

### Basic Information
- **Title**, **Slug**, and **Active** toggle. Inactive pages return a 404 to the public.

### Form Configuration
- **Button text** - Label on the form's submit button
- **Form fields** - The fields shown on the form. Standard fields (name, email, phone) map directly to the prospect record; custom fields are stored in the prospect's custom fields. Each field has a label, type (text, email, phone, text area), and required toggle.
- **Default Interested Membership** - Prospects from this page are tagged with interest in this membership level
- **Source tag** - Fallback source attribution when the visitor has no `utm_source` (see below)

### Design & Styling
Background, text, and button colors. Button colors apply to the form's submit button.

### Link Preview
- **Share Image** - The picture shown when the page's link is shared on Facebook, in a text message, or anywhere else that shows link previews. Best at 1200 × 630.
- Leave it empty and the preview uses the first picture on the page instead (usually your hero image), or your portal hero banner or logo if the page has no pictures.
- The preview also shows the page title and its subheadline (or the first line of text on the page).
- Facebook remembers previews. If you change the image after the link was already shared there, paste the link into Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) and click **Scrape Again**.

### After Submission
- **Thank you message** - Shown after submission (when no redirect is set)
- **Thank you redirect** - Optional URL to redirect to after submission
- **Email Alerts** - Add one or more email addresses to be notified whenever someone submits the form. Leave empty for no alerts.

---

## Lead Attribution

Each prospect's **source** is set from, in order of priority:

1. The `utm_source` query parameter on the visitor's URL (e.g. `/squeeze/free-trial?utm_source=facebook`)
2. The page's **Source tag** setting
3. `website` (default)

This makes it easy to track which ad campaign or channel produced each lead.

---

## Submission Handling

When a visitor submits the form:

1. A prospect is created in the CRM (or updated, if a prospect with the same email or phone already exists — repeat submissions boost their lead score)
2. The submission is logged on the prospect's activity timeline
3. New prospects are auto-assigned to staff
4. Email alerts are sent to any configured addresses
5. If a Drip Campaign is triggered by this page, the prospect is enrolled
6. The visitor sees your thank-you message or is redirected

Bot submissions are silently discarded via a honeypot field.

---

## Statistics

The list page shows per-page **Views**, **Submissions**, and **Conversion Rate**, plus totals across all pages.
