---
sidebar_position: 4
---

# Doors

If your business uses one or more of our **Access Control Systems**, this section allows you to manage and monitor your connected doors.

---

## 🛠️ Setup & Configuration

When we install the access control hardware on your doors, we also help configure them inside your dashboard. Each door can be given a:

- **Name** (e.g. “Main Entrance” or “Back Gym Door”)
- **Description** (optional notes)
- **Access Schedule** – specific open/close times or set to "All Hours"
- **Membership Levels** – restrict which members are allowed to access which doors

> 📝 After installation, you can rename, edit, or remove doors as needed.

---

## ⏰ Door Schedules

You can choose to allow access:
- **During All Hours** (e.g. 24/7 access)
- Or within a **set daily time range** (e.g. 8:00 AM to 9:00 PM)

If you choose a custom schedule, make sure to set both:
- `Open Time`
- `Close Time`

---

## 🧾 Member Access Logs

Once your access system is active:
- You can **view real-time logs** of who scans in and at what time.
- This data is useful for attendance tracking, security, or resolving disputes.

---

## 🔐 Membership-Level Restrictions

Each door can be assigned to specific **Membership Levels**. Only users in those levels will be granted access to the door.

> For example, a “Private Training Room” might only be accessible to “Premium” or “Trainer” level members.

---

## 🔍 Door Access Debugger

At the bottom of the Doors settings page, you'll find the **Door Access Debugger**. This tool lets you test why a specific member is being granted or denied access to a door — without needing to contact support.

### How to use it

1. **Search for a member** by name or email
2. **Select a door** from the dropdown
3. Click **Test Access**

The debugger runs through every access check in order and shows you exactly what passed or failed:

| Check | What it verifies |
|-------|-----------------|
| **Door exists** | The selected door is configured for your account |
| **User exists** | The member was found in your system |
| **Door hours** | Whether the current time falls within the door's open/close schedule (skipped if 24/7) |
| **Staff bypass** | Owners, managers, and staff always get access when active |
| **Membership level** | Whether the member's membership level (including add-on subscriptions) matches the door's allowed levels |
| **Valid subscription** | Whether the member has an active, non-paused, non-expired subscription with no failed payments |
| **Agreements signed** | Whether the member has signed all required agreements for their membership level |
| **User active** | Whether the member's account is marked as active |

The result shows **Granted** or **Denied** with the specific reason, so you can quickly resolve access issues.

### Renewal Status & Door Access

Door access checks whether a member's subscription has failed payments by looking at the **renewal status**. This status now updates automatically whenever a payment is settled (Stripe or manual billing), so members regain access immediately after paying.

If a member just paid but is still showing as denied, you can force a refresh from their profile:

1. Go to **Members > [Member Name] > Subscriptions**
2. Click the **Refresh Renewal** button in the top-right of the subscriptions section
3. The renewal status will re-sync with Stripe and update immediately

---

## 📲 Denied Scan Notifications

When a known member scans a door and is denied, they are automatically notified with a specific reason — no action required on your end.

**How it works:**
- If the member has a phone number and has not opted out of texts, they receive an SMS
- If they have opted out or have no phone number on file, they receive a branded email instead
- Notifications are rate-limited to **once per member per door per 24 hours** to avoid spam

**What the message says (by denial reason):**

| Reason | Message sent to member |
|--------|----------------------|
| Membership not active | "Your scan at [Door] was blocked — your membership is not currently active. Visit [portal] to resolve this." |
| Payment issue | "Your scan at [Door] was blocked — your membership may have a payment issue. Visit [portal] to resolve this." |
| Facility closed | "Your scan at [Door] was blocked — the facility is currently closed. Visit [portal] or contact us for help." |
| Unsigned agreements | "Your scan at [Door] was blocked — you have unsigned agreements on file. Visit [portal] to resolve this." |

Members can log in directly at your portal URL to update their payment method, sign agreements, or contact you for help.

---

## ⚠️ Deletion Protection

Doors that are associated with active memberships **cannot be deleted** until those associations are removed. This helps prevent accidental disruptions to your member access.

---

Need help getting your first door set up? Contact our support team to schedule your installation.
