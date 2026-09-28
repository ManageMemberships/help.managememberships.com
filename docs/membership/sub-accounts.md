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

---

## Sub-Accounts

Sub-accounts are child accounts **with their own login**. They have their own email, password, and can sign in independently, but are linked to a parent account.

- Added from the member detail page > Account tab > Sub-Accounts
- Can link an existing user or create a new one
- Each sub-account has its own class bookings, check-ins, and history

---

## Letting a Parent Check In a Sub-Account From the App

A sub-account can always check in at the kiosk. It does **not** appear in the parent's app until you enable it, because the app only offers the people listed on the parent's bundle.

This catches out gyms that have moved over from another system. Mindbody, for example, stores every child as its own separate client, so an import brings them in as sub-accounts — they work at the kiosk, and then a parent asks why their child isn't in the app.

To fix it, go to the parent's member detail page > **Account** tab > **Sub-Accounts**, and click **Enable App Check-In** next to the child. The child then appears in the parent's app straight away, and the button is replaced by a green **App check-in on** label.

**Nothing else about the child changes.** They keep their own login, their class bookings, their check-in history, their certificates and their achievements. The child is simply added to the parent's bundle as well, so the app can see them. Turning this on does not create a second membership or a second charge.

:::tip Have a whole roster to convert?
If an import left you with a lot of children as sub-accounts, contact support rather than clicking through them one at a time — there's a bulk tool that does the whole gym in one pass.
:::

---

## Adding a Subscription to a Sub-Account

When you link an existing user or create a new sub-account, you'll be prompted to add a subscription for them. Confirming creates two linked subscriptions:

- A real, credit-card-charging subscription **on the parent account** — the parent's card is billed, since that's typically whose payment method is on file.
- A linked, non-charging subscription **on the sub-account's own record**, so the sub-account shows an active membership of its own.

The two stay linked, so cancelling one cancels both automatically — see Breaking Out and Deleting below.

You can dismiss the prompt without adding a subscription. It won't come back on its own; add one later from the sub-account's own Subscriptions tab if needed.

---

## Breaking Out a Sub-Account

The **Break Out** feature promotes a sub-account into a fully independent member. This is useful when a child ages out of a family plan or needs their own standalone membership.

When you break out a sub-account:

1. The child is detached from the parent account
2. All existing history is preserved (class bookings, check-ins, certificates, etc.)
3. Their agreement count is reset so they can sign new waivers
4. A **password reset email** is sent to their email address
5. An audit log entry is created documenting the breakout

If the sub-account has a linked subscription from the flow above, you'll also be prompted to cancel it. Confirming cancels both the parent's charging subscription and the sub-account's own linked subscription together. The sub-account keeps its own account afterward, so only confirm this if you actually want their paid access to end.

To break out a sub-account, go to the parent's member detail page > Account tab > Sub-Accounts, and click the **Break Out** button next to the child account.

---

## Deleting a Sub-Account

Deleting a sub-account permanently removes the account and cannot be undone. To delete one, go to the parent's member detail page > Account tab > Sub-Accounts, and click the **Delete** button next to the child account.

If the sub-account has a linked subscription, you'll be prompted to cancel it here too — confirming cancels both the parent's charging subscription and the sub-account's own linked subscription together.
