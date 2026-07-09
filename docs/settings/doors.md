---
sidebar_position: 3
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

## ⚠️ Deletion Protection

Doors that are associated with active memberships **cannot be deleted** until those associations are removed. This helps prevent accidental disruptions to your member access.

---

Need help getting your first door set up? Contact our support team to schedule your installation.
