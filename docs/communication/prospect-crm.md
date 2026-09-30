---
sidebar_position: 6
---

# Prospect CRM

The **Prospect CRM** is a customer relationship management tool for tracking potential members (leads/prospects) through your sales pipeline. It provides both a list view and a kanban board view for managing prospect stages.

Find it under **Communication → Prospects CRM**. Prospects can be added manually, or captured automatically from [Squeeze Pages](./squeeze-pages.md) and the [Chat Widget](../settings/portal-settings.md#chat-widget) on your public pages.

---

## Views

### List View
A searchable, sortable table of all prospects with their current status and details.

### Kanban Board
A drag-and-drop board view where prospects are organized by stage/status columns. Move prospects between stages by dragging their cards.

---

## Prospect Management

Each prospect record includes:
- Contact information (name, email, phone)
- Current stage/status
- Tasks and follow-up items
- Communication history
- Notes and activity timeline

---

## Importing from a spreadsheet

Click **Import CSV** at the top of the CRM board or list.

1. Save your spreadsheet as a CSV (in Excel: **File → Save As → CSV**). Need a starting point? Click **Download a template**.
2. Upload it, choose a **Source** for rows that don't have one, and optionally **assign everyone** to a staff member.
3. Click **Preview import**. Nothing is saved yet — you'll see who's ready to import and who was skipped, and why.
4. Click **Import** to add them.

**Columns** are matched for you: *Name* (or *First Name* + *Last Name*), *Email*, *Phone*, *Company*, *Source*, *Notes*, *Address*, *City*, *State*, *Zip*. Each row needs an email or a phone number.

**Skipped rows:** anyone already in your CRM (same email or phone), anyone listed twice in the file, and rows with no email and no phone. Up to 2,000 rows per file.

---

## Sources

Every prospect has a **source** — where they came from — shown as a badge on their card on the board. Pick from Website, Referral, Walk-in, **Class Participant**, Event, Social Media, Paid Ad, Partner or Other. Leads that arrive on their own (texts, Facebook, Google, Zapier, squeeze pages, imports) get their source set automatically.

---

## Who gets new leads

By default, leads that arrive on their own are rotated between your staff. You can send them all to one person, or leave them unassigned — and you can limit staff to seeing only their own prospects. See [Portal Settings → CRM & Automation](../settings/portal-settings.md#crm--automation).

---

## Tasks

Click **+ New Task** to add a follow-up. In **Related To**, start typing a name, email or phone number — members and prospects both appear, labeled so you can tell them apart.

---

## Stages

Customize your pipeline stages to match your sales process. Prospects move through stages as they progress from initial inquiry to membership signup.

---

## Sending email

Open a prospect and click **Send Email** next to their email address.

- **From**: choose who the email comes from. It defaults to your own address if you have one set up; otherwise the **gym default**. You'll see your own addresses, plus any your gym marked as shared. Owners and managers see every address. Set addresses up in [Sending Addresses](../settings/sending-addresses.md).
- **Subject** and **Message**: the message has a full editor for bold, lists, links, colors and more.
- **Personalize** with `{{first_name}}` or `{{name}}`. For example, `Hi {{first_name}},` becomes *Hi Chad,*.

Replies go to the address you sent from.

Each sent email appears on the prospect's **Activity Timeline**. Click **Show email** to see exactly what was sent, and who it came from.

If the prospect has already become a member, the email also shows in their email history on the member's page.

---

## Email opens and clicks

Every email you send from the CRM, and every drip campaign email, is tracked.

**On each sent email in the timeline:**

| Badge | Meaning |
|---|---|
| **Opened 3× · Sep 25, 2:14 PM** | Opened, how many times, and when it was last opened. Hover for the first-open time. |
| **Clicked** | They clicked a link. Hover to see which links. |
| **No open recorded** | We haven't seen an open. Many mail apps block images by default, so this isn't proof they didn't read it. |
| **Not tracked** | Sent before tracking was added. |

The top of the timeline has a summary, for example *Email: 5 sent · 3 opened · 1 clicked · last opened 2 hours ago*.

The first time a prospect opens an email, and the first time they click each link, an **Email Opened** or **Email Clicked** entry is added to their timeline and their lead score goes up.

> **About opens:** Apple Mail loads emails automatically for many iPhone users, which can register an "open" even if the person never looked at it. **Clicks are the stronger signal** that someone is interested.
