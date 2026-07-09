---
sidebar_position: 8
---

# Squeeze Pages

**Squeeze Pages** are public landing pages with a lead-capture form. When a visitor submits the form, they're automatically added to your [Prospect CRM](./prospect-crm.md) — and can optionally trigger email alerts and [Drip Campaign](./drip-campaigns.md) enrollment.

Find them under **Communication → Squeeze Pages**.

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
