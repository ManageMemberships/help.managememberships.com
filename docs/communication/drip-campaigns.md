---
sidebar_position: 3
---

# Drip Campaigns

Drip Campaigns allow you to create automated sequences of emails and/or SMS messages that are sent to prospects over time. They're ideal for nurturing leads, onboarding new members, or following up after events.

---

## Creating a Drip Campaign

Click **"New"** at the top to create a campaign.

### Campaign Details

#### **Name**
A descriptive name for the campaign (e.g., "Welcome Series", "Trial Follow-up").

#### **Description**
Describe the purpose of this campaign.

#### **Active**
Toggle the campaign on or off. Inactive campaigns will not enroll new prospects.

---

### Trigger Settings

#### **Trigger Type**
Choose how prospects get enrolled:
- **Manual** - Enroll prospects manually from the enrollments page
- **Automatic - When squeeze page is submitted** - Prospects are auto-enrolled when they submit a specific squeeze page

#### **Squeeze Page**
When using the automatic trigger, select which squeeze page submission triggers enrollment.

---

### Campaign Steps

Each campaign consists of one or more steps that are sent in sequence. Click **"Add Step"** to add a new step.

Each step includes:

#### **Delay**
How long to wait before sending this step (from the previous step or enrollment).

#### **Unit**
The time unit for the delay:
- **Minutes**
- **Hours**
- **Days**

#### **Channel**
How the message is delivered:
- **Email** - Rich text email with subject line. Supports variables: `{name}`, `{email}`, `{phone}`. Includes a link builder for creating registration or upgrade URLs with pre-filled membership levels and coupons.
- **SMS** - Plain text message (max 160 characters per segment). Supports the same variables.

#### **Active**
Toggle individual steps on or off without removing them.

---

## Campaign Statistics

The campaign table shows:

- **Name** and **Description**
- **Active** status
- **Trigger Type** (Auto: Squeeze Page or Manual)
- **Trigger Page** - The associated squeeze page (if applicable)
- **Steps** count
- **Enrolled** count
- **Completed** count
- **Rate** - Completion percentage

---

## Managing Enrollments

Click the **Enrollments** icon on any campaign to view and manage enrolled prospects, their progress through the campaign steps, and enrollment status.
