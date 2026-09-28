---
sidebar_position: 1
---

# Financial Transactions

You can view all incoming payments, fees, and net totals for your gym using the **Financial Transactions** report. This tool allows you to analyze your revenue with filtering and export capabilities.

## Getting Started

1. When you open the report, it automatically loads transactions for the **current month** — from the 1st through today — so you don't have to pick a date range just to see this month's activity.
2. To see a different period, change the **start date** and/or **end date** using the date pickers at the top of the page; the table reloads automatically once both dates are set.
3. The system will automatically correct the date range if your start date is after the end date.

## Filtering Options

### Membership Filter
Use the **Membership Filter** dropdown to focus on specific transaction types:
- **All Transactions** - Shows every transaction (default)
- **Include Monthly Only** - Shows only transactions with "monthly" in the description
- **Exclude Monthly** - Hides all transactions containing "monthly" in the description

### Hide $0 Transactions
Check the **Hide $0 Transactions** checkbox to remove any transactions with zero amounts from your view. This helps focus on revenue-generating activities.

## Transaction Table

The report displays transactions in a table format:

- **Date** - Transaction date in "MMM DD, YYYY" format
- **User** - Member name who made the transaction
- **Actions** - Quick links to cancel the member's subscription (see below)
- **Description** - Transaction description or type
- **Amount In** - Total amount charged to the customer
- **Fee** - Processing or platform fees deducted
- **Net Amount** - Your gym's final amount

Alternating row colors (gray/white) improve readability for large transaction lists.

### Cancel with Penalty / Cancel without Penalty

For any transaction tied to a member's active subscription, the Actions column shows two links: **Cancel with penalty** and **Cancel without penalty**. This is a quick way to cancel a subscription for a member whose card keeps declining, without having to look them up separately first.

Clicking either link asks you to confirm, then opens that member's own subscription page in a new tab. From there, you finish the cancellation the normal way — choosing to cancel immediately or at the end of their current billing period — exactly as if you had canceled from the member's page directly. Choosing "with penalty" or "without penalty" here just pre-selects that option for you on their page; nothing is canceled until you confirm it there.

These links only appear for staff with permission to manage memberships, and only for a transaction whose subscription hasn't already been canceled.

At the bottom of the table, you'll see totals for the selected date range:
- **Amount In** - Sum of all incoming payments
- **Fee** - Total processing fees
- **Net Amount** - Your total net revenue

## CSV Export

When transactions are loaded, a **Download CSV** button appears:

- All visible transactions (respects current filters)
- Complete transaction details including dates, users, descriptions, and amounts
- Totals row at the bottom for easy accounting
- Properly formatted currency values

Downloads are automatically named: `financial-transactions-YYYY-MM-DD-to-YYYY-MM-DD.csv`

> **Note:** Transactions made by the **owner account** are automatically excluded from reports.
