---
sidebar_position: 4
---

# Discount Codes

The **Discount Codes** section allows you to create and manage promotional codes that members can apply during registration or membership signup. Discounts can be percentage-based or fixed dollar amounts, and can be restricted to specific membership levels.

---

## Overview Table

The discount codes table shows all configured codes with:

| Column | Description |
|--------|-------------|
| **Code** | The unique discount code (e.g., SUMMER25). Click to copy. |
| **Name** | Internal name for identifying the discount |
| **Type** | Percentage off or fixed dollar amount |
| **Amount** | The discount value (% or $) |
| **Duration** | How long the discount applies to the subscription |
| **Uses** | Current usage count (and max if set) |
| **Active** | Whether the code is currently usable |
| **Expires At** | Expiration date, if set |

### Filters
- **Active** - Show only active or inactive codes
- **Type** - Filter by percentage or fixed dollar amount
- **Duration** - Filter by discount duration

---

## Creating a Discount Code

Click **"New Discount Code"** to open the creation form.

### Basic Information

#### **Code**
A unique code customers will enter (e.g., SUMMER25). Automatically converted to uppercase.

#### **Name**
An internal name for this discount (e.g., "Summer 2025 Promotion").

#### **Description**
Optional description shown to customers.

### Discount Details

#### **Type**
- **Percentage Off** - Discount is a percentage of the subscription price
- **Fixed Dollar Amount** - Discount is a flat dollar amount

#### **Amount**
The discount value. For percentages, enter 0.01 to 100. For fixed amounts, enter the dollar value.

#### **Duration**
How long the discount applies to the member's subscription:
- **One Payment Cycle** - Applied only to the first payment
- **3 Months** - Applied for 3 billing cycles
- **6 Months** - Applied for 6 billing cycles
- **12 Months** - Applied for 12 billing cycles
- **Lifetime of Membership** - Applied for as long as the member remains subscribed

### Membership Restrictions

#### **Allowed Membership Levels**
Select which membership levels this discount can be used with. Leave empty to allow for all membership levels.

### Usage Limits

#### **Max Uses**
Maximum number of times this code can be redeemed across all members. Leave empty for unlimited.

#### **Expires At**
When this discount code expires. Leave empty for no expiration.

#### **Active**
Toggle to enable or disable the discount code.

---

## Managing Discount Codes

### View Users
For codes that have been used, click **View Users** to see which members applied the code, when it was first applied, and how many times.

### Activate / Deactivate
Quickly toggle a discount code on or off without deleting it.

### Delete
Discount codes with active subscriptions using them **cannot be deleted**. You must deactivate them instead.

---

## Using a Code on Your Homepage

If your homepage has a Membership Levels widget, you can have its **Join Now** buttons carry one of your codes, so visitors arrive at registration with the code already filled in. See [Coupon Code](../settings/homepage-builder.md#coupon-code) in the Homepage Builder guide.
