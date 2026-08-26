---
sidebar_position: 9
---

# Dunning Templates

Dunning Templates let you customize the emails and SMS messages automatically sent to members when a payment fails. Each message corresponds to a retry stage — so members hear from you at the right moment with the right tone, without any manual effort on your part.

> **Note:** This feature is only visible when **Dunning Automation** is enabled in your portal settings.

---

## How Dunning Works

When a payment fails, the system automatically retries it on a schedule. Each retry is called a **stage**. As stages progress, the messaging gets more urgent:

| Stage | Days After Failure | Default Tone |
|-------|--------------------|--------------|
| 0 | Same day | Friendly notice |
| 3 | Day 3 | Gentle reminder |
| 7 | Day 7 | Access at risk |
| 14 | Day 14 | Access paused |
| 19 | Day 19 | We're here to help |
| 25 | Day 25 | Final notice |

Every email and SMS includes a secure link members can use to update their card — clicking it takes them directly to a payment update page where they can enter new card details and trigger an immediate retry.

---

## Editing Templates

Go to **Communication → Dunning Templates** to open the template editor.

Each stage has two templates:

- **Email** — Subject line and rich-text body
- **SMS** — Plain text message (keep it short; it goes as a text)

### Available Variables

Use these placeholders anywhere in the subject or body — they're replaced with real values when the message is sent:

| Variable | What It Inserts |
|----------|----------------|
| `{{member_name}}` | Member's full name |
| `{{amount}}` | Amount due (e.g. `49.00`) |
| `{{membership_name}}` | Name of their membership level |
| `{{gym_name}}` | Your gym's name |
| `{{card_update_link}}` | Secure link to update their payment method |

> **Tip:** Always include `{{card_update_link}}` — it's the primary call to action and lets members self-serve without calling you.

---

## Saving Templates

Click **Save Templates** at the bottom of the page. All stages save together in one action.

Templates are saved per portal, so each location manages its own messaging independently.

---

## Frequently Asked Questions

**Do I have to set up templates before enabling dunning?**
Default templates are pre-loaded when dunning is enabled. You can customize them at any time — your edits take effect on the next message that goes out.

**What happens if a member updates their card?**
The card update page automatically retries the outstanding invoice immediately after the new card is saved. If it succeeds, the dunning sequence stops and their access is restored.

**Can I disable messages for a specific stage?**
Not individually — but you can edit the body to be minimal if you'd prefer a lighter touch at certain stages.

**What happens at the end of the sequence?**
After the final stage (day 25), no further automatic retries occur. Depending on your settings, the member's access may be suspended and you'll need to resolve the balance manually.
