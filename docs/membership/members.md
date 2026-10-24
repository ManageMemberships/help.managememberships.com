---
sidebar_position: 1
---

# Members

This comprehensive member management system allows owners to handle all aspects of member accounts, from basic information to advanced billing features. Manage active and inactive members with powerful filtering, bulk actions, and detailed member profiles.

:::tip Quick Start
Use the search bar to quickly find members by name, email, or bundled member names. Apply filters to focus on specific member groups that need attention.
:::

---

## 📊 Overview Dashboard

The member overview provides at-a-glance insights into your membership base:

- **Total Active Members** - Current active subscription count
- **Payment Issues** - Members with failed payments requiring attention  
- **Pending Renewals** - Upcoming billing dates within the next 7 days
- **Agreement Status** - Members missing required agreement signatures

---

## 📋 Table Columns

| Column | Description | Default Visibility |
|--------|-------------|-------------------|
| 🖼️ **Profile Pic** | Member's profile photo | Hidden (saves space) |
| 👤 **Name** | Full name + bundled members listed below | ✅ Visible |
| 📦 **Bundled Members** | Hidden searchable column for bundle member names | Hidden |
| 💵 **Cash Member** | "Yes" for manually managed (non-subscription) members — can be toggled from the badge on the member details page | ✅ Visible |
| 📧 **Email** | Member's email address | Hidden |
| 🏷️ **Membership** | Current membership level name | ✅ Visible |
| 📈 **Subscription Status** | Active, Expired, Paused, Failed, Cash, etc. | ✅ Visible |
| ⚡ **Account Active** | Toggle for account activation status | ✅ Visible |
| ✍️ **Signed All** | Boolean showing if all agreements are complete | ✅ Visible |
| 📅 **Renewal Date** | Next billing date or last successful payment date | ✅ Visible |
| 📋 **Renewal Details** | Detailed renewal information with billing context | Hidden |
| 🔄 **Renewal Status** | `good`, `paused`, or `failed` status indicator | ✅ Visible |
| 📊 **Joined** | Time since joining (hover for exact date) | ✅ Visible |

---

## 🔍 Advanced Filtering System

:::info Filter Strategy
Use combination filters to create targeted member lists. For example: "Payment Failed" + "Membership Level: Premium" to focus on high-value members needing billing attention.
:::

### 🚨 Status Filters
- **💳 Payment Failed** – Members with failed payment attempts
- **⏸️ Paused Subscriptions** – Currently paused subscriptions (for a fuller list with resume dates and pause fees, see the [Paused Members](/docs/reports/paused-members) report)  
- **💵 Cash User** – Manually managed members
- **❌ Inactive** – Deactivated accounts
- **📝 Missing Agreements** – Unsigned required documents
- **⚽ Team Athlete** – Team-based member filter
- **⏳ Pending Approval** – Members awaiting approval for membership levels that require it

### 📊 Advanced Filters
- **👤 Role** – Filter by member role
- **🏷️ Membership Level** – Filter by specific membership tiers
- **📅 Renewal Date Range** – Target upcoming, current, or past renewals
- **🔄 Renewal Status** – Focus on `failed`, `paused`, or `good` statuses
- **✅ Signed All** – Members with complete agreement status
- **🔖 Has Subscription For** – Filter members who have an active subscription tied to one or more specific membership levels. Matches both primary subscription items and add-ons. Select multiple levels to find members with any of them. Paused, canceled, and expired subscriptions are excluded — only active or trialing subscriptions count.

---

## ⚡ Bulk Actions

> **Pro Tip:** Select multiple members using checkboxes to perform batch operations efficiently.

![Bulk Selection](/img/bulk2.png)

### Available Bulk Operations

| Action | Description | Use Case |
|--------|-------------|----------|
| 🏷️ **Mark as Athlete** | Set `is_athlete` flag to `true` | Team member tagging |
| ❌ **Unmark as Athlete** | Clear athlete designation | Remove team status |
| ✅ **Mark as Active** | Switch the selected accounts back on | Bulk account restoration |
| 🚫 **Mark as Inactive** | Switch the selected accounts off (billing is not stopped) | Members who should no longer have access |
| 📥 **Export Contact Info (CSV)** | Download contact details for the selected members | Mailing lists, class rosters, offline outreach |

:::tip Voiding pending invoices when marking members inactive
If any of the selected members have pending invoices, **Mark as Inactive** will also ask whether you want to void them. If you don't, the system keeps trying to collect on those invoices even though the members are now inactive. A partially paid invoice is never voided by this option, and it only appears for staff with the *Manage Memberships* permission.
:::

:::info Marking members inactive does not stop billing
The confirmation reads *"Members with an active subscription will keep being charged: marking them inactive doesn't stop it. To stop charges, pause or cancel the subscription on each member's Subscriptions tab."* The void option is the checkbox **Also void pending invoices for these members**. In the members list, with several members selected, **Mark as Active** asks you to confirm; the **Active** toggle on a single member's page does not. Neither action sends an email to the member.
:::

![Bulk Actions Menu](/img/bulk1.png)

---

## 🛠️ Member Profile Management

### 🎯 Quick Actions

#### 🟩 Manual Check-In
- Select member or bundled sub-members
- Assign to specific classes
- Track attendance history
- Apply quota usage automatically

#### ⚙️ Comprehensive Edit Panel
Access the full member management interface with organized sections:

#### ⚡ Active / Inactive Toggle
At the top of the member details page, the **Active** toggle switches the member's account on or off. You need the *Manage Memberships* permission (owners and managers always have it).

- **Turning a member Active** — takes effect immediately and sends no email to the member. In the members list, with several members selected, **Mark as Active** asks you to confirm; the **Active** toggle on a single member's page does not.
- **Turning a member Inactive** — a dialog titled *Mark [member name] inactive?* opens:
  - If the member has pending invoices, it says how many and warns that the system keeps trying to collect payment even though the member is inactive. Choose **Mark Inactive & Void Invoices** or **Mark Inactive, Keep Invoices**.
  - If there are no pending invoices, the only choice is **Mark Inactive**.
  - If the member has a subscription that bills them, the dialog adds *"Billing continues: marking them inactive doesn't stop their subscription. To stop charges, pause or cancel it on the Subscriptions tab."*
  - **Cancel** closes the dialog without changing anything.
- A partially paid invoice is never voided by this option.
- No email is sent to the member when you turn them inactive.
- If the member has notes, ManageRegister also shows them in its inactive pop-up. See [Member Notes](#-member-notes).

#### 🧭 Inactive vs Paused vs Canceled
Inactive and paused are easy to mix up. They are separate things:

| | **Inactive** | **Paused** |
|---|---|---|
| **Applies to** | The member's whole account | One subscription |
| **What it means** | The account is switched off | Billing is on hold, and the account stays **Active** |
| **Door, kiosk and class, event or resource bookings** | Blocked | Blocked |
| **Billing** | Carries on. Marking a member inactive does not stop their subscription | The regular charge stops. A pause fee may apply |
| **How it starts** | You switch **Active** off or use **Mark as Inactive**, or the system does it when payments keep failing (**Failed Payments Before Inactive**) | You click **Pause** on the Subscriptions tab |
| **How it ends** | You switch **Active** back on, or a successful payment can do it (see below) | **Resume Now**, or automatically on the **Resume on** date |

Canceled is different again: it ends one subscription for good. Inactive and paused members still have their subscriptions.

Inactive and paused members can still log in, see their account, update their card and pay invoices.

**Reactivating an inactive member:** switch **Active** back on (no confirmation and no email). After a successful payment, the system can switch the account back on by itself. It does not do this if staff switched the account off by hand. In that case only staff can switch it back on.

#### 💵 Cash / Card Billing Toggle
Next to the Active/Inactive status at the top of the member details page, a badge shows the member's billing type: **Cash Member** or **Card Billing**.

- **Click the badge** to toggle between the two billing types (a confirmation is shown before the change is applied)
- **Safe to use** — the toggle only changes how the member is classified; it does **not** modify their subscriptions, payment methods, or billing dates
- **Audit logged** — every change is recorded in the member's audit log
- **When to use it** — handy when a member was set up with the wrong billing type, e.g. imported as a cash member but actually paying by card
- Requires the *Manage Memberships* permission

#### 🎓 Staff Access Toggle
Also on the Overview tab, a **Staff Access** toggle next to Active lets you promote a member to staff or convert a staff member back to a regular member — without deleting the account.

- **Promote to staff** — sets the account's role to Staff and applies the default Staff permission set, the same defaults used when adding a new staff member from the [Staff](/docs/settings/staff) page
- **Demote to member** — clears the account's permissions immediately and converts the role back to Member
- **Membership is untouched either way** — the member's membership level and subscription are never changed by this toggle, since staff status is independent of billing
- **Member ↔ Staff only** — this toggle only switches between Member and Staff. To change someone to Manager or Accountant, or to fine-tune their permissions, use the [Staff](/docs/settings/staff) page's Edit action instead
- **Confirmation required** — a modal confirms the change before it's applied
- **Not available for your own account** — you can't change your own staff status from here
- Requires the *Manage Staff* permission

#### 📝 Member Notes
The **Member Notes** card on the Overview tab keeps internal notes about a member, such as conversations, special arrangements or anything your staff needs to know.

- **A history, not a single field** — each note is saved with the staff member who wrote it and the date and time
- **Add a note** — type in **Add New Note** and click **Save Note**
- **Edit or delete** — staff with permission see **Edit** and **Delete** next to each note. Deleting asks you to confirm and can't be undone. An edited note is marked *edited*
- **Permission** — you need the *Manage Memberships* permission and an active account to add, edit or delete notes
- **Staff only** — notes are internal. The card says members never see them
- **Audit logged** — editing or deleting a note is recorded in the member's audit log. Adding a note is not, but every note keeps its author and date
- **Shown in ManageRegister** — ManageRegister gets the member's newest 3 notes (long text is cut at 500 characters) and shows them at the POS as a pop-up the cashier must acknowledge, and as a banner on the sale. The register can take about a minute to show a change. A note typed in ManageRegister for a ManageMemberships member is saved here as a new note

#### 🏆 Award Points
The **Award Points** section on the Overview tab lets staff manually award points and review the member's point history.

- **Award manually** — enter an amount and an optional reason (e.g. "Shared us on Instagram") and click **Award**
- **Full history** — every point transaction is listed: amount, source (check-in, class attended, first class booking, trigger, or manual), reason, who awarded it, and when
- **Audit logged** — manual awards are recorded in the member's audit log with the before/after balance
- Points are earned automatically from check-ins and class attendance — see [Points & Leaderboard](./points-leaderboard.md) for configuration

---

## 💳 Subscription & Billing Management

### 📊 Subscription Overview
- **Current Subscriptions** - Active membership tiers and billing cycles
- **Subscription Items** - Add-ons like lockers, towels, personal training
- **Billing History** - Complete payment and invoice timeline

### ➕ Adding Subscriptions

#### Single Subscription
1. **Select Membership Level** from available tiers
2. **Choose Pricing** - Full price or half-off discounts
3. **Quota Assignment** - Direct quota to main or child accounts
4. **Immediate Billing** - Prorated charges processed instantly

#### Adding Multiple Subscriptions at Once
You can add several subscriptions in a single action without repeating the form:

1. Open the member's **Subscriptions** tab and expand the **Add Subscription** panel
2. Click **+ Add Row** to add another subscription line
3. For each row, select a **Membership Level**, set the **Quantity**, optionally pick a **Coupon**, and enable a **Trial** with an end date if needed
4. Click **Add All (N)** to submit every row at once

Each subscription is processed independently — if one row is invalid (missing membership level, bad trial date), the whole batch is rejected before any are created, so you won't end up with a partial result.

:::tip
The row count and per-row quantity are both capped at 10. If a membership level includes a check-in quota, it is applied immediately for each row dispatched.
:::

### 🔧 Subscription Modifications
- **Add Items** - Attach recurring services with prorated billing
- **Remove Items** - Cancel add-ons with immediate adjustment
- **Pause/Resume** - Temporary subscription holds, with an optional pause fee (see [Pausing a Subscription](#pausing-a-subscription))
- **Cancel** - End at the end of the paid period, or immediately, with or without a penalty fee

### ❌ Cancelling a Subscription

Click **Cancel** on the subscription you want to end. You'll be asked *how* it should end:

| Option | What happens |
|---|---|
| **At end of paid period** | The member keeps access through the period they've already paid for, then the subscription stops. No further billing. The date is worked out for you and shown on the button — you don't need to look it up or type it in. |
| **End immediately (today)** | Access stops right now, including any time already paid for. |

You can also tick **Charge the cancellation penalty fee** with either option. The amount comes from the penalty settings on the member's membership level.

If the subscription has pending invoices, you can also tick **Void pending invoices for this subscription**. If you don't, the system keeps trying to collect on those invoices even after the subscription is cancelled. This only appears when there's something to void, and only for staff with the *Manage Memberships* permission — and it only affects invoices tied to this specific subscription, so a member's other subscriptions are untouched. A partially paid invoice, or the cancellation penalty invoice this same cancellation may create, is never voided.

:::tip Which one should I pick?
**At end of paid period** is almost always the right choice, and it's selected by default. It's what a member expects when they say "cancel" — they've paid through a date, so they keep access until it. Ending immediately takes away time the member already paid for, so save it for situations where you genuinely need to cut access off today.
:::

:::info "End immediately" is the only option available
That means we don't have a paid-through date on file for this subscription — most often on a cash membership where no next invoice date has been set.

If the member *has* paid beyond today, close the box, use **Update Next Invoice** to set the date they're paid through, then cancel again. The period-end option will then be available with the right date.
:::

:::warning Cancel vs. Pause
**Cancelling** ends the subscription for good — you'd need to create a new one to bring the member back. **Pausing** is a temporary hold you can lift at any time. If a member is coming back after a few weeks away, pause them instead.
:::

:::tip Quick End button
Each subscription row also has a quick **End** button that cancels immediately without opening the popup above. If that subscription has pending invoices, clicking it now asks whether to void them first, the same way; otherwise it still cancels immediately with no prompt, just as before.
:::

### 📅 Updating Billing Dates & Pausing Subscriptions

You can modify a member's next billing date or pause their subscription directly from the subscription details panel.

<div style={{position: "relative", paddingBottom: "calc(66.66666666666666% + 27px)", height: 0, width: "100%"}}>
  <iframe src="https://demo.managememberships.com/demo/cmohs6r6m3ft4za2i9pp5vlvb" loading="lazy" title="Modify Subscription Billing Dates &amp; Pausing" allow="clipboard-write" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} />
</div>

#### Updating the Next Invoice Date
If you want to keep a member's account active but delay their next charge:
1. Navigate to the member's **Subscriptions** tab
2. Click **Update Next Invoice** on the subscription
3. Select the new billing date
4. Click **Save** to confirm the change

:::tip When to Use
Updating the billing date is ideal when a member needs a short break but you want to keep their account active and their access uninterrupted.
:::

#### Pausing a Subscription
If a member needs to temporarily stop their subscription entirely, staff with the *Manage Memberships* permission can pause it (owners and managers always have it). Members can't pause their own subscriptions. Cash subscriptions can't be paused.
1. Navigate to the member's **Subscriptions** tab
2. Click the **Pause** button on the subscription. A dialog titled *Pause "[subscription name]"* opens and says *"Billing will be paused. Optionally pick a date to automatically resume."*
3. Under **Resume on (optional)**, optionally pick a date to automatically restart billing. The hint says *"Leave blank to pause indefinitely."* If you leave it blank, the pause lasts until you resume the subscription yourself.
4. If a pause fee applies, an orange line shows it, for example *"The member will be charged $15.00 per month while paused, starting on Nov 02, 2026."* (It says *per billing period* on plans that aren't monthly, and *starting on their next billing date* when the date isn't known yet.) A free pause shows no fee line.
5. Click **Confirm Pause** to apply, or **Cancel** to close the dialog without pausing.

After you confirm, you'll see a message like *"Subscription paused — will auto-resume on Nov 30, 2026. A pause fee of $15.00 per month will be charged starting Nov 02, 2026. May take a few seconds; hit Refresh on the left."* The auto-resume and pause-fee parts only appear when they apply.

:::info Pause vs. Update Billing Date
**Pausing** stops the regular charge and blocks door, kiosk and booking access, but the member's account stays **Active**. **Updating the billing date** keeps the subscription active and the member's access intact, it just delays when they're next charged.
:::

:::note Maximum pause length
If your **Portal Settings** set a **Maximum Pause Length (months)**, the dialog says **Resume on (required)**, only allows dates within that many months, and adds *"A pause can last at most N months."* See [Portal Settings](/docs/settings/portal-settings#maximum-pause-length-months).
:::

:::info What a paused member can and can't do
A paused member's account stays **Active**. They can still log in, see their account, update their card and pay invoices. But door access, kiosk check-in and bookings for classes, events and resources in the portal or app are refused until the pause ends. No email or text is sent to the member when a pause starts, ends or resumes automatically, so let them know yourself.
:::

#### Resuming a Paused Subscription
A paused subscription's card shows a red **Paused** badge, or **Paused until [date]** when a resume date is set. From the card you can:

- **Resume Now** – ends the pause right away.
- **Set Resume Date** (shown as **Edit Resume Date** once a date is set) – pick an **Auto-resume on** date and click **Save**. Click **Clear** to remove the date and keep the member paused until you resume them yourself. (A pause that was started under a Maximum Pause Length always keeps a resume date, so **Clear** isn't offered for it.)

If a resume date is set, the subscription also resumes by itself overnight on that date.

When a member resumes, either way, billing continues on their **original billing day**, not on the day they resumed. The cycles they were paused for are skipped. For example, a member who is billed on the 2nd and resumes on the 19th is next billed on the 2nd of the following month.

#### Pause Fee
If you charge a pause fee (set on each membership level and turned on in Portal Settings; see [Membership Levels](/docs/membership/membership-levels) and [Portal Settings](/docs/settings/portal-settings#charge-a-pause-fee)), a paused member is charged it while they're paused. Their regular membership charge stops for the whole pause, and nothing is billed later to make up for it.

- **When:** on the member's normal billing day, once each billing period (not every day). A monthly plan is charged every month, a quarterly plan every 3 months.
- **How:** as its own invoice, charged to the member's saved card through your gym's payment processor.
- **How much:** the **Pause Fee ($)** of the level the subscription is on, locked in on the day the pause starts. Changing the level's fee or the Portal Settings later does not change a pause that has already started.
- **One fee per subscription**, not per person. A paused subscription is charged one fee however many people or units it covers.
- **Where you see it:** the paused subscription's card shows, for example, *Pause fee $5.00 per month, next Nov 02, 2026*. The charge appears in [Financial Transactions](/docs/reports/financial) with a description that starts with **Pause fee**, and as an invoice on the member's account.
- **If it fails:** a failed pause fee is retried like any other failed payment. It also counts toward **Failed Payments Before Inactive**, so the member can end up marked inactive.

---

## 💰 Credit Balance Management

:::warning Important
All credit transactions are automatically logged for audit purposes.
:::

### 💡 Credit System Overview
The credit system allows you to:
- Add prepaid credits to member accounts
- Apply credits automatically to future invoices
- Track credit usage and balance history
- Provide customer service flexibility

### 📈 Current Balance Display
- **Positive Balance** - Shows available credit amount in green
- **Zero Balance** - Indicates no credits available
- **Real-time Updates** - Balance refreshes after each transaction

### ➕ Adding Credits

- **Amount Range:** $0.01 - $10,000.00
- **Common Uses:** Admin-added credits, refunds, promotional credits

#### Credit Addition Process:
1. **Enter Amount** - Specify dollar amount (minimum $0.01)
2. **Confirm** - Verify the credit purpose and amount
3. **Applied Immediately** - Credit is added to the member's balance right away

### ➖ Removing Credits

:::note Manual billing members only
The Remove Credits controls are only available for manual billing members. For Stripe-billed members, manage credits directly in Stripe.
:::

You can reduce a member's credit balance two ways:

| Action | When to use |
|--------|-------------|
| **Remove Credits** | Deduct a specific dollar amount (e.g. correct an overage) |
| **Clear balance to $0** | Zero out the entire balance at once |

#### Remove Credits process:
1. Enter the dollar amount to deduct in the **Amount to Remove** field
2. Click **Remove** — a confirmation modal appears showing the exact amount
3. Confirm to apply; the balance updates immediately

#### Clear balance to $0:
- Click the **Clear balance to $0** link (only visible when balance > 0)
- Confirm in the modal — the entire balance is removed in one action
- Bypasses the $10,000 per-submission cap since accumulated balances can exceed that limit

:::warning Audit trail
Both remove and clear actions write a `manual_credit_removed` audit entry recording the old balance, new balance, amount removed, and the staff member who performed the action.
:::

### 📊 Credit Usage
- **Automatic Application** - Credits used for future invoices
- **Priority Billing** - Credits applied before payment methods
- **Transparent Tracking** - All usage logged in transaction history

---

## 👥 Account Relationships

### 👨‍👩‍👧‍👦 Sub-Accounts (With Login Access)
Perfect for family members who need independent portal access:

- **Individual Logins** - Separate credentials for each family member
- **Shared Benefits** - Access to primary account's membership benefits
- **Independent Profiles** - Personal check-in history and preferences
- **Email Management** - Automatic welcome emails with password reset links

#### Creating New Sub-Accounts:
1. **Name & Email** - Required contact information
2. **Relationship** - Define family connection (spouse, child, etc.)
3. **Automatic Setup** - System generates secure login credentials
4. **Welcome Email** - Password reset link sent automatically

#### Linking Existing Members as Sub-Accounts:
Link existing members to create family account relationships while preserving their login credentials and history:

- **Search Existing Members** - Type name or email to find members
- **Preserve History** - Maintains check-in records, agreements, and account data
- **Automatic Membership Sync** - Sub-account inherits parent's membership level
- **Flexible Relationships** - Optionally define relationship type (spouse, child, etc.)
- **Instant Connection** - Link takes effect immediately

**Linking Process:**
1. **Search Bar** - Enter member name or email (minimum 2 characters)
2. **Select Member** - Choose from filtered results (max 10 shown)
3. **Define Relationship** - Optionally specify connection type
4. **Confirm Link** - Member becomes sub-account with preserved login

**Requirements & Restrictions:**
- Target member must not already have a parent account
- Target member must be in the same portal
- Member cannot link to themselves
- Existing member cannot be re-linked if already a sub-account

:::info Linking vs Creating
**Link Existing Members** when they already have an account with history you want to preserve. **Create New Sub-Accounts** for family members who don't have existing accounts.
:::

#### Breaking Out a Sub-Account
When a sub-account needs to become a standalone member (for example, a child who has aged out of a family plan), staff with the *Manage Memberships* permission can click **Break Out** in the Sub Accounts table under **Account & Access** on the member's page.

The person gets their own login, keeps their history, and has to sign their agreements again. They start without a subscription of their own unless a linked subscription was kept. If they need one, plan to set one up. See [Breaking Out a Sub-Account](./sub-accounts.md#breaking-out-a-sub-account) for the full steps and what to do afterwards.

### 📦 Bundle Accounts (Name-Only Access)
Ideal for tracking multiple members under one billing account:

- **No Login Required** - Simple name-based tracking
- **Membership Assignment** - Each bundle member can have different membership levels
- **Shared Billing** - All members bill to primary account
- **Easy Management** - Add/remove bundle members instantly

#### Bundle Member Management:
1. **Add Members** - Name and membership level selection
2. **Flexible Levels** - Different membership tiers per bundle member
3. **Instant Updates** - Changes take effect immediately
4. **Agreement Tracking** - Separate agreement requirements per member

:::tip Account Type Selection
- Choose **Sub-Accounts** when family members need app access and individual profiles
- Choose **Bundle Accounts** for simple name tracking without login complexity
:::

---

## 📄 Agreement & Document Management

### 📋 Agreement Types
- **Membership Agreements** - Standard terms and conditions
- **Liability Waivers** - Required safety documentation  
- **Bundle Agreements** - Separate documents for bundle members
- **Custom Forms** - Facility-specific requirements

### ✅ Completion Tracking
- **Signed Status** - Green checkmarks for completed agreements
- **Missing Documents** - Red alerts for outstanding requirements
- **Bundle Tracking** - Individual agreement status for each bundle member
- **Date Stamps** - Complete signature timeline

### 🖊️ Digital Signing
- **One-Click Access** - Direct links to signing interface
- **Multi-Party Support** - Handle bundle member signatures
- **PDF Generation** - Automatic document creation and storage
- **History** - Complete signing history with timestamps

---

## 💬 Communication Center

### 📧 Email Management
- **Send Individual Emails** - Choose who it's from (your own address, a shared one, or the gym default), format it with the editor, and personalize it with `{{first_name}}`. See [Sending Addresses](../settings/sending-addresses.md)
- **Email History** - Complete conversation timeline
- **Template System** - Pre-built message templates
- **Open & Click Tracking** - Each email shows whether it was opened (and how many times), when it was last opened, and whether any links were clicked. Hover a badge for details.

### 📱 SMS Messaging

:::note Plan Restrictions
Sending text messages and viewing the send text form requires a **Core**, **Growth**, or **Premium** plan. Text message history is visible on all plans if messages exist.
:::

#### Sending Texts
From a member's profile, you can send an individual text message directly:
1. Navigate to the member's **Activity** section
2. Type your message in the text area (160-character limit with a live character counter)
3. Click **Send Text**

The system checks that the member has a phone number on file and has not opted out before sending.

#### Receiving Texts
When a member replies to a text message, the system automatically:
- **Logs the message** in the member's text message history with a "Received" label
- **Notifies the portal owner** via email with the member's name, phone number, message content, and a direct link to the member's profile. The email reply-to is set to the member's email for easy follow-up.
- **Notifies the admin** with additional domain context

If a member's phone number exists across multiple portals, the system will skip processing and alert the admin to avoid cross-tenant issues.

#### Text Message History
The Activity section displays a complete two-way conversation log in a table with:
- **Date** — When the message was sent or received
- **Direction** — A color-coded badge: blue for **Received**, green for **Sent**
- **Message** — The full message content

#### Opt-Out Handling
When a member replies **STOP**, the system automatically:
- Marks them as opted out so no future texts are sent
- Removes their phone number from any prospect records
- Sends a confirmation reply: *"Thank you for opting out. You will no longer receive messages from us."*
- Notifies the admin

Delivery failures (e.g., invalid numbers, carrier blocks) also automatically opt the member out to prevent repeated failed sends.

---

## 💰 Financial Management

### 🧾 Invoice System
- **Generate Invoices** - Create custom billing statements
- **Payment Processing** - Accept online payments
- **Mark Paid** - Mark a pending invoice as fully paid in one click, no charge attempted
- **Record Payment** - Log a partial cash payment against an invoice's remaining balance; the invoice shows the updated balance still owed until it's paid in full
- **Void** - Stop collection on a pending invoice; it's marked "Voided" and the system no longer tries to collect it. You can void one directly, or choose to void them when marking a member Inactive or cancelling a subscription (see above)
- **Refund Processing** - Handle payment reversals

### 💳 Payment Methods
- **Credit Card Management** - Add, update, delete payment methods
- **Default Payment** - Set primary billing method
- **Secure Processing** - Payment data is handled securely
- **Payment History** - Complete transaction timeline

### 📊 Transaction History
- **Complete Records** - All payments, refunds, and credits
- **Searchable History** - Filter by date, amount, or type
- **Export Capabilities** - Download transaction reports
- **Audit Compliance** - Detailed financial tracking

---

## 📈 Analytics & Reporting

### 🔄 Renewal Management
Understanding renewal timing is crucial for retention:

#### **Renewal Date Logic:**
- **Active Subscriptions** → Next scheduled billing date
- **Failed Payments** → Last successful payment date
- **Paused Subscriptions** → Date when pause ends

#### **Renewal Status Categories:**
- 🟢 **Good** - Active and current with successful payments
- 🟡 **Paused** - Temporarily suspended, not billing for the membership (a pause fee may apply)
- 🔴 **Failed** - Payment issues requiring immediate attention

### 📊 Check-In Analytics
- **Attendance Tracking** - Complete visit history
- **Class Preferences** - Most attended class types
- **Usage Patterns** - Peak usage times and frequency
- **Quota Management** - Remaining visits and expiration dates

---

## ⚡ Header Actions

:::note Plan Restrictions
Some features are available only on paid plans. Upgrade to access full functionality.
:::

### 💵 Cash Member Registration
For walk-in members or those preferring offline payment:
- **Manual Entry** - Bypass online registration process
- **Flexible Terms** - Custom membership durations
- **Immediate Access** - Instant account activation
- **Payment Tracking** - Record offline payments

### 💰 Collect Cash Payments
Streamlined cash transaction recording:
- **Quick Entry** - Fast payment processing
- **Receipt Generation** - Automatic payment confirmations
- **Tax Handling** - Proper tax calculation and reporting
- **Balance Updates** - Immediate account credit application

### 📥 Export CSV
Download member contact info as a spreadsheet.

**Export CSV** in the header exports **every member matching your current search and filters** — so filter the list first, then export. To export only specific people instead, tick their checkboxes and use the **Export Contact Info (CSV)** bulk action.

Either way you get a file named `members-YYYY-MM-DD.csv` containing:

| Column | Notes |
|---|---|
| Name, Email, Phone | Phone falls back to the secondary number when no mobile is on file |
| Address, City, State, Zip | Blank where the member hasn't provided them |
| Membership Level | Blank for members without a level |
| Role | Member, staff, manager, or accountant |
| Account Active | Yes or No |
| Joined | The date the account was created |

The export never includes your own account or other portals' members, and exporting with no matching members shows a warning instead of downloading an empty file.

:::note
Exports are logged for security review, including who exported and how many records. Member contact details are personal data — handle the file accordingly and delete it when you're done.
:::

---

## 🚀 Best Practices

### 🎯 Workflow Optimization
1. **Daily Review** - Check failed payments and renewal alerts
2. **Weekly Cleanup** - Process pending agreements and inactive accounts
3. **Monthly Analysis** - Review renewal trends and member retention
4. **Quarterly Planning** - Analyze membership level performance

### 📋 Member Retention Strategies
- **Proactive Communication** - Contact members before payment failures
- **Flexible Options** - Offer pauses instead of cancellations
- **Credit Incentives** - Use credit system for customer service wins
- **Agreement Compliance** - Ensure all legal requirements are met

### 🔧 System Maintenance
- **Regular Backups** - Protect member data with frequent backups
- **Security Updates** - Keep payment systems current and secure
- **Performance Monitoring** - Track system response times and uptime
- **Staff Training** - Ensure team understands all features and workflows

---

:::success Need Help?
Visit our [Help Center](https://help.managememberships.com/docs/membership/members) for detailed guides on sub-accounts vs bundle accounts, or contact support for personalized assistance.
:::
