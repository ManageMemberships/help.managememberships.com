---
sidebar_position: 9
sidebar_label: Privacy Controls
---

# Privacy & Visibility Controls

Privacy Controls let you restrict which resources and trainers are visible to different user types. When enabled, you can set per-resource visibility and hide sensitive staff from member-facing pages. A separate setting lets you [hide why a resource is blocked](#hide-unavailable-reasons-from-staff) from regular staff.

---

## Enabling Privacy Controls

1. Go to **Settings** (search for "privacy" to find it quickly)
2. Expand **Privacy & Access**
3. Toggle on **Privacy Controls**

---

## Resource Visibility

Once Privacy Controls are enabled, each resource gets a **Visibility** dropdown in its edit form with three options:

| Visibility | Who Can See It |
|---|---|
| **Public** | Everyone, including guests not logged in |
| **Members Only** | Logged-in members, staff, and owners |
| **Staff Only** | Staff, managers, and owners only |

Visibility filtering applies to:
- The public calendar
- The resource booking page
- The ManageRegister resource API

---

## Sensitive Staff

When editing a staff member who has the **Trainer** checkbox enabled, a new option appears:

**Sensitive Staff (Hidden from Members)** — When checked, this trainer will not appear on the public Instructors page and their profile URL will return a 404 for non-staff users.

Staff and owners can still see sensitive trainers in all admin views.

---

## Hide Unavailable Reasons From Staff

When you block a resource with [Unavailable Dates](../calendar/resources.md), you can give a reason (for example, "ATF TRAINING"). By default, every staff member sees that reason on the resource calendar and in the Resource Report. Turn this setting on if only owners and managers should see it.

1. Go to **Settings** (search for "unavailable" to find it quickly)
2. Expand **Privacy & Access**
3. Toggle on **Hide Unavailable Reasons From Staff**

| Who | Setting off (default) | Setting on |
|---|---|---|
| **Owners, managers and admins** | Unavailable - ATF TRAINING | Unavailable - ATF TRAINING |
| **Other staff** | Unavailable - ATF TRAINING | Unavailable |
| **Members** | Never see reasons | Never see reasons |

This setting works on its own. You don't need to turn on **Privacy Controls** to use it.

---

## Notes

- Resource visibility defaults to **Public** for existing resources
- Privacy Controls is a per-portal toggle — each portal can enable/disable independently
- The calendar caches results per role, so visibility changes may take up to 10 minutes to appear on the public calendar
