---
sidebar_position: 2
---

# Membership Levels

The **Membership Levels** section allows you to define the different types of subscriptions or plans available to members in your organization. Each level controls pricing, billing interval, and visibility within the member portal.

---

## 📊 Overview Table

The table shows all membership levels for your business. Columns include:

| Column            | Description |
|-------------------|-------------|
| **Name**          | The name of the membership level (e.g., "Monthly", "Family Pass"). |
| **Price**         | The cost of the membership, formatted as a dollar amount (e.g., `$29.99`). |
| **Billing Interval** | How often the membership renews (e.g., `monthly`, `yearly`). |
| **Active**        | A toggle indicating whether the membership is currently active or hidden from public view. |

---

## 🔍 Filtering Memberships

Use the **Active** filter at the top of the table to narrow results:
- **Active** – Show only active plans
- **Inactive** – Show only disabled plans
- **All** – Show all membership levels

---

## ✏️ Editing a Membership Level

Click the **edit icon** on any row to open a slide-over form where you can update:
- Name
- Price
- Billing interval
- Other fields described below

---

## 🗑️ Deleting a Membership Level

You can delete a membership level only if **no users are currently assigned to it**.

If the level is in use:
- A warning notification appears:  
  > "Can not delete memberships associated with a member"

---

## ➕ Creating a Membership Level

Membership levels define the structure of your offerings, including pricing, billing frequency, trial logic, and bundling options. These configurations determine how members are billed and what options are available to them during sign-up or renewal.

---

### 🧾 Required Fields

#### **Name**
- A unique name for this membership (e.g., `Monthly Adult`, `Quarterly Family`).

---

#### **Free Membership**
- Indicates this level is free.
- When enabled:
  - Billing options are hidden.
  - Price is automatically set to `$0`.
  - Billing interval defaults to monthly.
- Free users (on the Free SaaS plan) are **required** to mark memberships as free.

---

#### **Trial Membership**
- Enables a trial period where the member is not billed immediately.
- If checked, the following field appears:
  - **Number of periods for free** – The number of days/weeks/months the member can use the membership for free before billing begins.

---

#### **Price**
- Numeric field that sets the base price of the membership.
- Must be `$0` or `$1+`.
- ❗ Once created, the price is **read-only** and cannot be changed.

---

#### **Signup Fee**
- One-time fee charged in addition to the base price during initial signup.

---

#### **Description**
- Rich text description of the membership level. Shown to prospective members during registration.

---

#### **Associated Agreements**
- Specify which agreements must be signed for this membership level.  You will see a warning if there are no agreements.

---

#### **Min/Max Age**
- Optional fields to restrict who can purchase this membership.
- Must have birthday collection enabled in portal settings to work.

---

#### **Billing Interval**
- How often this membership bills:
  - `Day`, `Week`, `Month`, `Quarter`, `Semi-Annual`, or `Yearly`
- ❗ Once created, this cannot be changed.
- Only shown if the membership is not marked as free.

---

#### **Max Billing Cycles**
- Optional field that limits how many times the member is billed.
- Example: if set to `6` on a $30/month plan, the member will be billed **$30 monthly for 6 months**, then the subscription will **automatically cancel**.
- Useful for limited-term memberships without requiring manual cancellation.

---

#### **Advance Booking Limit**
- Optional field that limits how many classes a member on this level can book more than 7 days in advance per month.
- Same-week bookings (within 7 days) are always unlimited.
- Resets at the start of each calendar month.
- Leave blank for no limit.

---

### 💲 Additional Pricing Options

#### **Additional Price Options**
- Use this section to offer **alternate billing intervals** with their own pricing (e.g., quarterly or yearly discounts).
- Each option includes:
  - Billing interval (e.g., yearly)
  - Price in USD
  - Promotional text (optional, e.g. : 1 month free)
- Great for encouraging **longer commitments with discounts**.

---

### 🔁 Renewal & Expiration Options

#### **Annual Renewal**
- If enabled, members must **re-sign waivers or agreements each year**.
- This is useful for legal compliance in environments like gyms or schools.
- When checked, an optional field appears:
  - **Months Penalty** – Number of months to penalize if a user cancels early.

#### **Is Recurring**
- Indicates whether this membership auto-renews (i.e., subscription).
- If disabled, you can set:
  - **Expiration Days** – How long the membership lasts before expiring.

#### **After Expiration, Convert Members To**
- Optional: automatically move members to another membership level when their subscription on this level expires.
- Great for trial-style offers — e.g., a **"10 days for $10"** level that automatically upgrades to **Unlimited** when it expires, or downgrading lapsed members to a Drop-In level.
- Billing follows the **target** level:
  - **Recurring with a price** – A new subscription is created and the member's card on file is charged that night. Recurring billing starts from the day of conversion (prorated on calendar-billing portals). **No signup fee is charged.** Failed charges follow the normal failed-invoice retry flow.
  - **Free** – The member is moved and keeps an active (unbilled) membership. No charge.
  - **Non-recurring (drop-in / day pass)** – The member is just moved. **No charge is ever made** — they pay per visit as usual.
- Conversions run nightly. Members who already signed up for another membership on their own are skipped, and only recently expired memberships are converted — turning this on does **not** retroactively convert members who expired long ago.
- Pair it with the **"On Membership Auto-Conversion"** instant trigger (Communication → Triggers) to email or text the member (or staff) when a conversion happens. Template variables: `old_level`, `new_level`, and `price`.

#### **Number of Check-ins / Class Credits**
- Sets a fixed allowance of check-ins or class bookings for the membership.
- This number is added to the member’s **check-in quota** and is deducted when registering for classes.
- Works with **both recurring and non-recurring memberships**:
  - **Recurring memberships**: The quota automatically resets each billing cycle when the invoice is paid. For example, a $29/month plan with 4 class credits gives the member 4 fresh credits every month.
  - **Non-recurring memberships**: The quota is assigned once on purchase and does not reset.
- Useful for:
  - Monthly plans with limited class access (e.g., "Basic: 4 classes/month")
  - Punch cards and fixed-session programs
  - Private training packages

#### **Additive Credits (Class Pack)**
- Visible when class credits are enabled on any membership type.
- When enabled, purchasing this membership **adds** credits to the member’s existing balance instead of replacing it.
- Example: A member has 5 credits remaining and purchases a "10 Swim Credits" pack — they now have **15 credits**.
- When disabled, the member’s credit balance is reset to the new total (e.g., 5 remaining becomes 10, not 15).
- For recurring memberships with additive credits, each billing cycle adds a fresh allotment on top of any remaining credits.

#### **Credits Never Expire**
- Visible when class credits are enabled on any membership type.
- When enabled, the member’s credits have no expiration date.
- When disabled, credits expire based on the **Expiration Days** setting (for non-recurring) or reset on next billing cycle (for recurring).

---

### 🔒 Approval Options

#### **Requires Approval**
- When enabled, new members must be approved by an owner/manager before payment is collected. Members will see the price but won't enter payment info until approved.
- **Note:** Approval-only memberships do not support multi-member or bundled signups. Those options are automatically disabled when Requires Approval is on.
- Only available for paid (non-free) memberships.

---

### 👀 Visibility Options

#### **Publicly Visible**
- Controls whether this membership level appears on the public registration page.

#### **Public Link**
- If editing an existing membership, this will show the **registration link** users can use to sign up for it.

---

### 👨‍👩‍👧 Multi-Member & Bundling Options

> 🔐 These are only available to paid SaaS accounts.

#### **Multi-Member**
- Enables charging for **multiple people under one plan** (e.g., family plan).
- They will be billed for the monthly amount * the number of members.  e.g. 3x$30/mo would be $90/mo
- Adds these fields:
  - **Minimum Additional Members** – Minimum number of extra members.
  - **Maximum Additional Members** – Cap on how many can be added.

#### **Flat Rate Pricing**
- Only visible when **Multi-Member** is enabled.
- When enabled, the price is the total group cost (not per-person) regardless of how many members are in the group.

#### **Allow Bundles**
- Enables bundling this membership with other levels.
- Useful when members want to purchase **add-ons** (e.g., `Monthly Membership + Coaching`).
- If enabled:
  - A multi-select appears to choose which other memberships can be bundled.

---

### 🧾 Custom Fields

#### **Custom Fields**
- Use this section to collect extra information at signup.
- Key-value input allows fields like:
  - `emergency_contact` → "Emergency Contact Name"
  - `allergies` → "Known Allergies"

These fields will show up on the member form and can be referenced in exports or internal views.

---

### ✅ Best Practices

- Always provide at least one **billing interval** and price (or mark it as free).
- Use **Additional Price Options** to encourage long-term signups with savings.
- If legally required, enable **Annual Renewal** to keep signed agreements up to date.
- Consider **bundling** only where it simplifies the purchasing experience for your members.

---

## 🔀 Reordering Membership Levels

To reorder how resources appear (e.g., in dropdowns or booking interfaces), click the **up/down arrow icon** in the top-left corner of the table, then **drag and drop** the rows into your preferred sequence. When done, **click the checkbox** to save the new order.

---

## ✅ Best Practices

- Keep membership names clear and recognizable (e.g., "Adult Monthly", "Family Annual").
- Use the **active toggle** to hide legacy plans without deleting them.
- Always associate an agreement template with each membership (see [Agreement Templates](./agreements/)).
