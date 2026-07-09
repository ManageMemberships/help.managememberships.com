---
sidebar_position: 2
---

# Staff

You can invite additional users to help manage your business through the **Staff** section of your dashboard. Each staff member has a defined **role** that controls what they can access and do in the system.

---

## 👩‍💼 Available Roles

| Role | Permissions |
|---|---|
| **Manager** | Full access to the system, same as an owner except they cannot delete the owner. |
| **Staff** | Can manage member profiles and view member related data. They cannot change the Calendar section such as creating or editing classes or shifts. |
| **Accountant** | Access to financial reporting such as income, transactions, and payment records. Cannot edit members and cannot view the calendar. |

You can assign or change roles by editing a staff member from the Staff list.

---

## 🔒 Permissions

Roles give you a quick starting point. For **Staff** and **Accountant** you can fine tune access with the **Permissions** checklist.

* Open **Staff**, click **Edit** on a user
* If the user is **Staff** or **Accountant**, you will see a **Permissions** section
* Check the items you want this user to access
* Save

Owners and Managers always have full access, so the **Permissions** checklist is hidden for those roles.

**Default behavior**

* When creating a **Staff** or **Accountant**, the checklist is prefilled using the default set for that role
* When editing an existing user, the checklist shows whatever was previously saved
* Owners and Managers ignore custom permissions

> Tip: The labels in the checklist come from your system’s permission list. If you add new features later, new permission labels can appear here.

---

## 🧑‍🏫 Trainer availability

If you want a staff member to be bookable or assignable to a class as a trainer, enable:

**Trainer or Available for Classes**

Once enabled, additional fields appear:

* **Trainer Headshot** — Upload a profile photo (1:1 crop, max 2MB). This photo is displayed on the class booking page and the public Instructors page so members can see who is teaching.
* **Trainer Bio / Expertise** — A short description of the trainer's background, certifications, and specialties (max 500 characters). Example: *"Expertise: Wrestling, Boxing. 12 years coaching experience. Former amateur boxing champion."*
* **Sensitive Staff (Hidden from Members)** — When checked and [Privacy Controls](/docs/settings/privacy-controls) are enabled, this trainer will not appear on the public Instructors page and their profile will return a 404 for non-staff users. Staff and owners can still see them in admin views.
* An **Availability** section appears when editing that staff member
* You can define time blocks such as Monday Wednesday Friday 9am to 12pm
* The user can only be assigned during their available times

Trainers who are unavailable will not appear for scheduling during conflicting times.

### Public Instructors Page

Your member portal includes an **Instructors** page at `/instructors` that displays all active trainers with their headshot, bio, and the classes they teach. Members can click any trainer to see their full profile and browse their class schedule. Each class view page also links to the assigned trainer's profile and shows a "See all instructors" link.

---

## 🕒 Has Shifts

Turning this on allows the user to be assigned to shifts in ManageShifts.

Turning this off hides the user from shift assignment.

---

## ✏️ Editing rules and safeguards

* You cannot change your own **Role** field while editing your own account
* Owners and Managers do not use the **Permissions** checklist
* Deleting a staff member is available from the row actions in the table

---

## 👤 Adding new staff

You can add staff from your dashboard in **Staff**.

* Free plans cannot add staff
* Basic plans allow up to two additional staff members
* All other plans have no staff limits

During creation you will set **Name**, **Email**, **Role**, and **Password**. For Staff and Accountant you can also set **Permissions** and whether they are a **Trainer**.

The staff table shows each user's **Name**, **Email**, and **Role**. You can **Edit** or **Delete** staff members from the table row actions.
