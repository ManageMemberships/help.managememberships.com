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
- **⏸️ Paused Subscriptions** – Currently paused subscriptions  
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

---

## ⚡ Bulk Actions

> **Pro Tip:** Select multiple members using checkboxes to perform batch operations efficiently.

![Bulk Selection](/img/bulk2.png)

### Available Bulk Operations

| Action | Description | Use Case |
|--------|-------------|----------|
| 🏷️ **Mark as Athlete** | Set `is_athlete` flag to `true` | Team member tagging |
| ❌ **Unmark as Athlete** | Clear athlete designation | Remove team status |
| ✅ **Mark as Active** | Reactivate suspended accounts | Bulk account restoration |
| 🚫 **Mark as Inactive** | Suspend accounts (non-destructive) | Temporary deactivation |

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

#### 💵 Cash / Card Billing Toggle
Next to the Active/Inactive status at the top of the member details page, a badge shows the member's billing type: **Cash Member** or **Card Billing**.

- **Click the badge** to toggle between the two billing types (a confirmation is shown before the change is applied)
- **Safe to use** — the toggle only changes how the member is classified; it does **not** modify their subscriptions, payment methods, or billing dates
- **Audit logged** — every change is recorded in the member's audit log
- **When to use it** — handy when a member was set up with the wrong billing type, e.g. imported as a cash member but actually paying by card
- Requires the *Manage Memberships* permission

---

## 💳 Subscription & Billing Management

### 📊 Subscription Overview
- **Current Subscriptions** - Active membership tiers and billing cycles
- **Subscription Items** - Add-ons like lockers, towels, personal training
- **Billing History** - Complete payment and invoice timeline

### ➕ Adding Subscriptions
1. **Select Membership Level** from available tiers
2. **Choose Pricing** - Full price or half-off discounts
3. **Quota Assignment** - Direct quota to main or child accounts
4. **Immediate Billing** - Prorated charges processed instantly

### 🔧 Subscription Modifications
- **Add Items** - Attach recurring services with prorated billing
- **Remove Items** - Cancel add-ons with immediate adjustment
- **Pause/Resume** - Temporary subscription holds
- **Cancel** - With or without penalty fees

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
If a member needs to temporarily stop their subscription entirely:
1. Navigate to the member's **Subscriptions** tab
2. Click the **Pause** button on the subscription
3. Optionally enter a **resume date** to automatically restart billing
4. Click **Confirm Pause** to apply

:::info Pause vs. Update Billing Date
**Pausing** makes the subscription inactive — the member loses access while paused. **Updating the billing date** keeps the subscription active and the member's access intact, it just delays when they're next charged.
:::

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
- **Send Individual Emails** - Direct member communication
- **Email History** - Complete conversation timeline
- **Template System** - Pre-built message templates
- **Delivery Tracking** - Confirmation of email receipt

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
- **Manual Payments** - Record cash/check transactions
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
- 🟡 **Paused** - Temporarily suspended, not currently billing
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
