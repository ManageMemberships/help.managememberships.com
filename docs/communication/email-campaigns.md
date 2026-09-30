---
sidebar_position: 4
---

# Email Campaigns

Email Campaigns allow you to send branded email messages to your members. You can schedule campaigns for future delivery, target specific membership levels, and track engagement metrics.

---

## Viewing Campaigns

The campaign table shows all your email campaigns with:

- **Subject** - The email subject line
- **Schedule Send Time** - When the email is set to go out
- **Completed Send Time** - When the email was actually sent
- **Sent** - Number of emails delivered
- **Opened** - How many recipients opened it, for example *42 of 120*
- **Clicked** - How many recipients clicked a link, for example *9 of 120*

Campaigns sent before per-recipient tracking was added show an estimate marked **(est.)**.

> **About opens:** Apple Mail loads emails automatically for many iPhone users, which can count as an open even if the person never read it. Treat opens as an upper bound; clicks are the stronger signal.

### Actions
- **Recipients** - See exactly who opened and who clicked. Filter the list by **Opened**, **Clicked** or **No open**, and click a member's name to open their profile. Hover over a badge for open times and the links they clicked.
- **View** - Preview the rendered email in a slide-over panel
- **Edit Draft** - Edit campaigns that haven't been sent yet
- **Delete** - Remove a campaign

---

## Creating a Campaign

Click **"Create New"** at the top to open the campaign form.

### Campaign Fields

#### **Subject**
The email subject line that appears in the recipient's inbox.

#### **Schedule Send Time**
Pick the date and time for delivery. Defaults to the current time.

> **Tip:** To save as a draft, set the scheduled time far into the future.

#### **Body**
Rich text email content with full formatting support. Personalize it with:

- `{{first_name}}` - the recipient's first name (`Hi {{first_name}}` becomes *Hi Chad*)
- `{{name}}` - their full name

Both also work in the **Subject**.

#### **Membership Level**
Filter the member list by one or more membership levels.

#### **Selected Members**
Choose which members receive the email. Click **Select All** to include everyone in the selected membership level(s).

#### **Wait Lists**
Alternatively, send the email to waitlist contacts by topic instead of members.

---

## Draft Editing

For campaigns that haven't been sent yet, click **Edit Draft** to open a dedicated editor where you can refine the email content, adjust the recipient list, and update the scheduled send time.
