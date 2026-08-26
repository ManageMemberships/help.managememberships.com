---
sidebar_position: 13
---

# Trainer Availability

This section allows you to configure when trainers are available to be assigned to classes. It's essential for ensuring that classes are only scheduled when trainers are actually free, avoiding conflicts and no-shows.

---

## ✅ Who Appears in This Section?

Only users who are:
- Assigned the role of **Staff**, **Manager**, or **Accountant** (i.e. not a member)
- Marked as a **Trainer** (via the checkbox in the Staff settings)

---

## 🗓️ Setting Trainer Availability

You can define recurring weekly availability using:

### **Days of the Week**
Select one or more days a trainer is available.

### **Start Time** and **End Time**
Specify time ranges (e.g. 9:00 AM – 12:00 PM) the trainer is available on the selected days.

> 🧠 These time blocks are used to determine whether a trainer can be scheduled for a class.

Example:
- Monday, Wednesday, Friday
- 9:00 AM – 1:00 PM


---

## 🚫 Managing Exceptions

Trainers might occasionally be **unavailable** due to vacations, appointments, or personal days.

You can add **exceptions** under the **Unavailable Dates** section:

### Fields:
- **Date**: Start of unavailability
- **End Date** (optional): For multi-day absences
- **Reason**: Description or internal note (e.g., “Vacation”)
- **All Day**: Toggle to mark full-day (or multi-day) unavailability
- **Start/End Time**: Shown only if the absence is partial-day

> 📌 These exceptions override recurring availability and prevent the trainer from being scheduled.

---

## 🔁 How It’s Used in Class Scheduling

When you assign a trainer to a class:
- The system checks their **weekly availability** AND **exception list**
- Classes will **only appear as available** for that trainer if the schedules align
