---
sidebar_position: 7
---

# Stripe Terminal

If your gym has a Stripe card reader, you can charge a card on it straight from your owner dashboard: walk-ins, a drop-in fee, a one-off purchase, anything you'd ring up at the front desk. The customer taps, inserts or swipes their card on the reader, and the payment is recorded in your Financial Transactions.

---

## Getting a Reader Set Up

The reader is linked to your gym by our team. To get started:

1. Get a Stripe Terminal reader for your front desk.
2. Contact us. We'll ask for your gym's address. Stripe needs it to register the reader to your location.
3. When we're ready, put the reader in pairing mode. It shows a short registration code on screen (three words, like `apple-banana-cherry`). Send us that code.

Once it's linked, a **Use Terminal** button appears at the top of your dashboard, next to **Refresh**. Payments go to the same Stripe account as the rest of your ManageMemberships payments.

---

## Who Can Use It

The **Use Terminal** button shows for the owner, managers, and any staff member with the *Manage Memberships* permission. It only appears once a reader has been linked to your gym.

---

## Charging a Card

1. On your dashboard, click **Use Terminal**.
2. Enter the **Amount** (for example `25` or `25.00`). The minimum is $0.50.
3. Enter a **Description**, such as *Drop-in class* or *Day pass*. This is what you'll see later in Financial Transactions.
4. Click **Charge**. The reader lights up and asks for a card.
5. Have the customer tap, insert or swipe. The screen says *Waiting for the customer to tap, insert or swipe…* until the card goes through.

When the payment succeeds you'll see *Charged $25.00. Recorded in Financial Transactions.* Click **New charge** to ring up the next one.

### If something goes wrong

- **Card declined.** The reason from the card's bank is shown, and nothing is charged. Ask for another card and start a new charge.
- **Changed your mind?** While it's waiting for a card, click **Cancel**. The reader stops asking and nothing is charged.
- **No card after 3 minutes.** The charge is canceled on its own so the reader isn't left waiting.
- **"Could not reach the card reader."** Check the reader is on and connected to the internet, then try again.

If the customer taps their card at the same moment you cancel, or the charge times out, the system checks with Stripe before reporting anything. A payment that actually went through is still recorded, so a sale is never lost and you won't be tempted to charge twice.

:::tip
If you ever see *"Couldn't confirm the payment with Stripe — checking again…"*, leave the window open. It keeps checking and records the payment as soon as Stripe answers. Don't start a second charge for the same sale until it finishes.
:::

---

## Where Terminal Payments Show Up

Every successful terminal payment appears in the [Financial Transactions](/docs/reports/financial) report:

- **Description** is what you typed when you charged it, so make it something you'll recognize later.
- **User** shows a dash (—). A terminal charge isn't attached to a member's account.
- **Fee** is the same processing fee as your other card payments through ManageMemberships.

Declined and canceled attempts aren't recorded, since no money moved.

---

## Good to Know

- A terminal charge is a **one-off payment**. It doesn't start a membership, pay an invoice, or save the card to anyone's account. To bill a member, use their Member Details page as usual.
- Payments are in US dollars.
