---
sidebar_position: 11
sidebar_label: Privacy Controls
---

# Privacy & Visibility Controls

Privacy Controls let you restrict which resources and trainers are visible to different user types. When enabled, you can set per-resource visibility and hide sensitive staff from member-facing pages.

---

## Enabling Privacy Controls

1. Go to **Settings** (search for "privacy" to find it quickly)
2. Expand **Features & Integrations**
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

## Notes

- Resource visibility defaults to **Public** for existing resources
- Privacy Controls is a per-portal toggle — each portal can enable/disable independently
- The calendar caches results per role, so visibility changes may take up to 10 minutes to appear on the public calendar
