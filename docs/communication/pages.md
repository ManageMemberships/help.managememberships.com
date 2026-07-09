---
sidebar_position: 5
---

# Pages

The Pages tool allows you to create and manage fully custom content pages on your member portal. These pages are useful for sharing gym rules, schedules, event info, or any static content. Each page can be made public or restricted to logged-in members.

---

## 🌐 Page URLs

Each page is available at:

> `your-subdomain.managememberships.com/{slug}`

For example, a page with the slug `about` will be live at:

> `your-subdomain.managememberships.com/about`

You can use these pages for content like gym policies, FAQs, staff bios, or event promotions.

---

## ➕ Creating a Page

Click **Create** in the Pages panel to open the page editor. You’ll see the following fields:

| Field          | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **Title**      | Page title. Auto-generates the slug if left blank.                          |
| **Slug**       | Determines the page URL. Must be unique for your subdomain.                 |
| **Image**      | Optional header image or banner, shown at the top of the page.              |
| **Content**    | Full rich-text editor with support for links, images, and formatting.       |
| **Member Only**| If enabled, only logged-in users can view the page.                         |
| **Published**  | Controls whether the page is live. You can save drafts by unpublishing.     |

---

## ✏️ Editing Pages

From the main table view, click **Edit** on any page row to open the editor in a slide-over panel. All fields are editable, including title, slug, and content. Changes are saved instantly.

You can also:

- **Toggle Published**: Make the page live or hide it
- **Toggle Member Only**: Restrict access to logged-in members

---

## 🔗 Embedding Waitlist Tags

You can embed waitlist interest tags directly inside a page. These convert to embedded forms in the portal. To use this, insert the following anywhere in your page content:

``{{your_topic}}``

Example:

``{{kickboxing}}``

This will insert a form that flags all submissions as interested in "kickboxing" within your waitlist tracking.

---

## 👁 View Pages

Each page row has a **View** button that opens the live page in a new tab. This helps verify formatting or test mobile layouts.

---

## 🗂 File Uploads and Attachments

- Page images are stored in:  
  `your-subdomain/pages/`

- File attachments added via the editor are stored in:  
  `your-subdomain/blog_attachments/`

---

## 🔐 Member-Only Pages

Enabling **Member Only** will block access unless the user is logged in. These pages are great for internal policies, members-only resources, or exclusive content.

---

## 📋 Table Overview

| Column         | Description                                            |
|----------------|--------------------------------------------------------|
| **Title**      | Page title (clickable)                                 |
| **Slug**       | URL-friendly identifier                                |
| **Published**  | Toggle for visibility                                  |
| **Member Only**| Toggle for access restriction                          |
| **Created At** | Date the page was created                              |

All columns are searchable and sortable.

---

Pages are a great way to expand your portal beyond memberships — use them to build a full, content-rich experience for your members.