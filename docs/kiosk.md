---
sidebar_position: 7
---

# Kiosk

The kiosk is a self-check-in screen used by members to register for classes and mark attendance quickly. It can be used by individual members or bundle (family) accounts.  It is always located at yourdomain.managememberships.com/kiosk 

---

## How to Check In

### 1. **Enter your Info**
Type in **your email**, **name**, or **phone number** into the kiosk input field. The system will try to match it to your account.

- If **no match** is found, you’ll see an error.
- If **multiple matches** are found, you’ll be asked to pick one.

### 2. **Confirm Subscription**
The system checks if you have an **active membership** or valid **trial status**. If not, you won’t be able to proceed.

---

## Bundle Accounts

If your account includes **family members or dependents**, you’ll see a list of linked users after logging in.

### What you can do:
- Select a member from your bundle to check them in.
- View membership level names for each linked user.
- See which classes are available to each user.

### Sub accounts checking in bundle members

If you are a **sub account** (e.g., a spouse linked to a primary account), you can also check in dependents on the primary account. When you enter your own email at the kiosk:

1. Your own check-in button appears at the top.
2. Bundle members from the primary account appear below — tap any of them to check that person in.

Bundle member check-ins are recorded against the primary account’s history and quota, exactly as if the primary account holder had checked them in.

---

## Agreements

If any **waivers or agreements** are pending, you’ll be prompted to sign them before you can check in. You’ll need to complete those before continuing.

---

## Check In Anyway (Overriding a Blocked Check-In)

When a check-in is blocked — either by the subscription check (*"Member does not have valid subscription"*) or by pending agreements — a yellow **Check In Anyway** button appears under the message.

Tapping it lets the member proceed past that block and continue to the normal class selection. If a member is blocked by both (no valid subscription *and* unsigned agreements), tap **Check In Anyway** on each message in turn — the kiosk remembers the first override while applying the second.

A few things to know:

- **It's recorded.** An overridden check-in is stamped with the reason it was overridden (`subscription_override`, `waiver_override`, or both), so it stays distinguishable from a normal check-in.
- **It's scoped to that member.** The override only applies to the member who was blocked, and it resets as soon as a new search is started or the panel is dismissed — it never carries over to the next person at the kiosk.
- **When to use it** — the front desk knows something the system doesn't yet: the member just paid cash, their renewal is being processed, or they'll sign the waiver after class. Use it as a bridge, then fix the underlying issue (record the payment, activate the subscription, or have them sign) so they aren't blocked again tomorrow.

---

## Available Classes

After validating your account:
- You’ll see a list of available classes **today**.
- The list is based on your gym’s time zone and your membership level.
- Only classes **within 10 minutes before or after the start time** will appear.

### Time Window
Check-in opens **10 minutes before** and closes **10 minutes after** the listed class time.

---

## Class Check-In

When a class is shown:

1. Tap the class name to check in.
2. You’ll see a message confirming successful check-in with your name and the class title.

---

## Common Messages

| Message                          | Meaning                                                              |
|----------------------------------|----------------------------------------------------------------------|
| `Member not found`               | Your input didn’t match any users. Try again.                        |
| `Multiple matches found`         | Choose from the list shown to continue.                             |
| `Member does not have valid subscription` | Your membership may be inactive or expired. Staff can tap **Check In Anyway** to override. |
| `You have agreements to sign`   | You need to sign documents before check-in. Staff can tap **Check In Anyway** to override. |
| `You are now checked in`        | Success! You’re marked present for your class.                      |