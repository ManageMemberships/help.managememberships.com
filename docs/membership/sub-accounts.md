---
sidebar_position: 7
sidebar_label: Sub-Accounts
---

# Sub-Accounts & Bundle Accounts

ManageMemberships supports two types of linked accounts: **Bundle Accounts** and **Sub-Accounts**.

The practical difference for a parent is where they can check their family in:

| | Kiosk | Parent's app |
|---|---|---|
| **Bundle account** | ✅ | ✅ |
| **Sub-account** | ✅ | Only after you turn on **App Check-In** (below) |

---

## Bundle Accounts

Bundle accounts are additional members added to a parent account **without their own login**. They share the parent's membership and billing. Common use: family memberships where the primary member manages everyone.

- Added from the member detail page > Account tab > Bundle Accounts
- Each bundle member gets a name and membership level
- They do not have their own email or password

---

## Adding a Subscription to a Bundle Member

When you add a bundle member, you'll be prompted to add a subscription for them. Since bundle members share the parent's billing, confirming creates one subscription **on the parent account**, linked to that bundle member so it shows up as theirs.

You can dismiss the prompt without adding a subscription. It won't come back on its own; add one later from the parent's own Subscriptions tab if needed.

---

## Removing a Bundle Member

Click **Remove** next to a bundle member to take them off the account. If they have a linked subscription from the flow above, you'll be prompted to cancel it at the same time.

If that subscription has pending invoices, the cancel prompt also offers to void them. If you don't, the system keeps trying to collect on those invoices even after the subscription is cancelled. Only staff with the *Manage Memberships* permission see this option.

---

## Sub-Accounts

Sub-accounts are child accounts **with their own login**. They have their own email, password, and can sign in independently, but are linked to a parent account.

- Added from the member detail page &gt; Account & Access &gt; Sub Accounts
- Can link an existing user or create a new one
- Each sub-account has its own class bookings, check-ins, and history

---

## Letting a Parent Check In a Sub-Account From the App

A sub-account can always check in at the kiosk. It does **not** appear in the parent's app until you enable it, because the app only offers the people listed on the parent's bundle.

This catches out gyms that have moved over from another system. Mindbody, for example, stores every child as its own separate client, so an import brings them in as sub-accounts — they work at the kiosk, and then a parent asks why their child isn't in the app.

To fix it, go to the parent's member detail page &gt; **Account & Access** &gt; **Sub Accounts**, and click **Enable App Check-In** next to the child. The child then appears in the parent's app straight away, and the button is replaced by a green **App check-in on** label.

**Nothing else about the child changes.** They keep their own login, their class bookings, their check-in history, their certificates and their achievements. The child is simply added to the parent's bundle as well, so the app can see them. Turning this on does not create a second membership or a second charge.

:::tip Have a whole roster to convert?
If an import left you with a lot of children as sub-accounts, contact support rather than clicking through them one at a time — there's a bulk tool that does the whole gym in one pass.
:::

---

## Adding a Subscription to a Sub-Account

When you link an existing user or create a new sub-account, you'll be prompted to add a subscription for them. Confirming creates two linked subscriptions:

- A real, credit-card-charging subscription **on the parent account** — the parent's card is billed, since that's typically whose payment method is on file.
- A linked, non-charging subscription **on the sub-account's own record**, so the sub-account shows an active membership of its own.

The two stay linked to each other.

You can dismiss the prompt without adding a subscription. It won't come back on its own; add one later from the sub-account's own Subscriptions tab if needed.

---

## Breaking Out a Sub-Account

The **Break Out** feature turns a sub-account into a standalone member who no longer belongs to the parent's account. This is useful when a child ages out of a family plan and needs their own login and waivers. Payment is needed only when they need their own subscription.

Only sub-accounts can be broken out. Bundle accounts have no login, so there is nothing to separate. If a minor will need their own login when they turn 18, add them as a sub-account from the start rather than as a bundle account.

Only staff with the *Manage Memberships* permission can do this (owners and managers always have it). Members can't break themselves out.

### How to break out a sub-account

1. Go to the parent's member detail page &gt; **Account & Access** &gt; **Sub Accounts**.
2. Click **Break Out** next to the person. Each row also has **Enable App Check-In** and **Delete**.
3. A confirmation appears: *Break out "[name]"?* It explains that they will get their own login, and will need to sign waivers and set up payment, and that their history will be preserved. Click **Break Out** to continue, or **Cancel** to stop.
4. A green message confirms that the person has been broken out into a standalone account and that a password reset email has been sent to their address.

Nothing is sent to the parent.

### What changes

- They leave the parent's account and become a standalone account. They stay **Active**, with the same membership level.
- Their old password is replaced, and they are signed out of the app.
- Their check-in history and other past activity are kept.
- Their signed agreements for their membership level are cleared, so they must sign them again.

The confirmation dialog says their history will be preserved. Check-ins and other past activity are kept, but signed agreements are the exception.

### What to do afterwards

**Tell the person to check their email.** They receive a standard password reset email at their own address, and the link is valid for 24 hours. The email doesn't mention the break-out, so let them know they should use it to set a password.

**Agreements.** When they log in, they are asked to sign any agreements they owe. You can also handle this from their own member page, in the **Agreements & Waivers** section: click **Sign**, or **Upload signed copy** if you have a paper copy.

**Subscription.** The member starts with no subscription of their own, unless one was linked to the sub-account. Add one from their **Subscriptions** tab, using **Add New Credit Card Subscription** or **Manual/Cash Subscription**. For a card subscription, first add the card under **Financial** with **Add New Card**.

**App check-in.** If **Enable App Check-In** was on for this person, their name stays listed under **Bundle Accounts** on the parent's account after the break-out. If they should no longer be checked in under the parent, click **Remove** next to their name there. This only takes the name off the parent's bundle; it doesn't change the broken-out member's own account.

### If the sub-account had a linked subscription

If the sub-account has a linked subscription from the flow above, a second dialog appears after the break-out: *Also cancel "[name]"'s subscription?* It explains that removing or breaking out a sub-account does not cancel the subscription automatically. Choose on purpose:

- **Cancel Subscription** ends that subscription and the parent's matching one.
- **Keep Subscription** leaves both running. The broken-out member keeps an active subscription, and the parent keeps being billed for it.

:::warning Choose on purpose
The sub-account keeps its own account afterward, so only cancel if you actually want their paid access to end. If you keep the subscription, remember the parent is still the one being charged.
:::

---

## Deleting a Sub-Account

Deleting a sub-account permanently removes the account and cannot be undone. To delete one, go to the parent's member detail page &gt; Account & Access &gt; Sub Accounts, and click the **Delete** button next to the child account.

If the sub-account has a linked subscription, you'll be prompted to cancel it here too — confirming cancels both the parent's charging subscription and the sub-account's own linked subscription together.
