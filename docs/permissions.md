---
sidebar_position: 8
---

# Access Permissions

This documentation outlines what navigation items are available to users based on their `role` and `subscription level`. The following roles and levels are supported:

**Roles**:
- `owner`
- `manager`
- `staff`
- `accountant`

**Subscription Levels**:
- `free`
- `basic`
- `growth`
- `premium`

---

## Navigation Access Matrix

| Feature / Nav Item            | Role Restrictions         | Subscription Level Requirements   |
|------------------------------|---------------------------|-----------------------------------|
| Dashboard                    | Any                       | Any                               |
| Members                      | Not `accountant`          | Any                               |
| Membership Levels            | Not `staff`, Not `accountant` | Any                           |
| Agreements                   | Not `staff`, Not `accountant` | Any                           |
| Portal Settings              | Not `staff`               | Any                               |
| Staff                        | Not `staff`               | Not `free`                        |
| Digital Cards                | Not `staff`               | `growth` or `premium`             |
| Doors                        | Not `staff`               | `growth` or `premium`             |
| Trainer Availability         | Any                       | Not `free` or `basic`             |
| Text Campaigns               | Not `staff`               | `premium`                         |
| Email Campaigns              | Not `staff`               | `premium`                         |
| Blog                         | Not `staff`               | Any                               |
| Pages                        | Not `staff`               | Any                               |
| Waitlist Responses           | Not `staff`               | `premium`                         |
| Financial Transactions       | Not `staff`               | Any                               |
| Event Registrations          | Not `accountant`          | `growth` or `premium`             |
| Check In Report              | Not `accountant`          | `growth` or `premium`             |
| Class Registrations          | Not `accountant`          | `growth` or `premium`             |
| Resources Report             | Not `accountant`          | `premium`                         |
| Door Access                  | Not `accountant`          | `premium`                         |
| Paused Members (Reports)     | Needs the *View Subscription Reports* permission: always for owners and managers, by default for `accountant`, for `staff` only if granted | Not `free` |
| Events                       | Not `accountant`          | `growth` or `premium`             |
| Classes                      | Not `staff`               | Not `free` or `basic`             |
| Packages                     | Not `staff`               | `premium`                         |
| Resources                    | Not `staff`               | `premium`                         |

---

## Notes

- Users with role `accountant` have the most limited access.
- `staff` users can see members but not manage membership levels or campaigns.
- Subscription-based gating applies mostly to `growth` and `premium` plans for advanced features like campaign tools, digital access, or scheduling resources.
- Some feature access is gated behind both role and level.

Keep this matrix updated when adding new menu items or changing access control logic.
