---
sidebar_position: 1.2
---

# Sales Tax

The **Sales Tax** report shows how much sales tax you collected through ManageMemberships over any period, with your sales split into taxable and non-taxable. Use it when you file your sales tax return.

You'll find it under **Reports → Admin → Sales Tax**, next to Financial. You need the **View financial reports** permission and the Starter plan or higher.

:::note
This report covers payments taken in ManageMemberships: memberships, classes, events, packages, resource bookings and your online store. Sales rung up at the counter in ManageRegister are on ManageRegister's own [Sales Tax Report](https://help.manageregister.com/docs/report/sales-tax-report/). If you use both, add the two together for your return.
:::

## Picking a period

The report opens on the **current month**, from the 1st through today. To see a different period:

- click a shortcut: **This month**, **Last month**, **This quarter**, **Last quarter**, **This year** or **Last year**, or
- pick any **From** and **To** dates.

Dates follow your gym's time zone. If the start date is after the end date, the end date moves to match it.

## What it shows

### Totals

Four numbers across the top:

- **Tax collected**: the sales tax inside your payments for the period.
- **Taxable sales**: what you sold that had tax on it, *not counting the tax itself*.
- **Non-taxable sales**: what you sold with no tax on it.
- **Total collected**: everything members paid, tax included.

Taxable sales plus non-taxable sales plus tax collected equals total collected.

### By category

A table breaks those numbers down by kind of sale, with a total row at the bottom:

| Category | What's in it |
| --- | --- |
| **Memberships** | Sign-ups, renewals, cash memberships and pause fees |
| **Classes** | Class registrations |
| **Events** | Event registrations |
| **Store** | Online store orders and product purchases |
| **Other payments** | Everything else: packages, resource bookings, one-time charges, cash and register payments on invoices |
| **Refunds** | Invoice refunds, shown as negative amounts |

Each row also shows the number of payments, the amount collected and sales excluding tax.

### Payments with tax

Below the table is a list of every payment in the period that had tax on it: date, member, description, category, amount collected and tax. The screen lists the first 200. **Export CSV** has all of them.

## How refunds and failed payments are counted

The report counts money the same way as your dashboard and the [Financial Transactions](/docs/reports/financial) report:

- **Failed and pending payments** aren't counted.
- **A fully refunded payment** counts nothing, tax included.
- **A partly refunded payment** counts what the member still paid, and its tax is reduced by the same share. For example, refunding half of a $106.00 payment with $6.00 tax leaves $53.00 collected and $3.00 tax.
- **An invoice refund** shows under Refunds and takes that invoice's share of the tax back off.

Payments made by the **owner account** are left out, as on Financial Transactions.

## CSV export

Click **Export CSV** to download `sales-tax-YYYY-MM-DD-to-YYYY-MM-DD.csv`. It has:

1. the summary by category, with the totals row, and
2. one line per payment in the period (taxed or not): date, member, description, category, collected, sales excluding tax and tax.

## Where the tax comes from

Tax is charged when you turn on **Charge Tax** and set a **Tax Rate** in [Portal Settings](/docs/settings/portal-settings). Each payment records the tax inside it at the time it's taken. Changing your tax rate later doesn't change what past payments show.

:::info Payments before October 2026
Before October 2026, some payments were recorded without their tax even though tax was charged: Stripe renewals, package and resource bookings, invoice payments, and store orders. If an older period looks low, contact support and we can fill in the missing tax for your gym.
:::
