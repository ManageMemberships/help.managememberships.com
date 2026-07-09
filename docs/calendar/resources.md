---
sidebar_position: 4
---

# Resources

The **Resources** section allows you to define and manage rentable or schedulable resources like rooms, equipment, or facilities. These can be set up with availability rules, pricing, duration, and optional trainer requirements.

---

## 📊 Overview Table

The table shows all resource entries configured for your business. You can:

- **Sort** by name, price, days available, and active status
- **Reorder** resources using drag-and-drop to customize their display order

| Column            | Description |
|-------------------|-------------|
| **Name**          | Resource name (e.g., Private Room A, Ice Bath). |
| **Price**         | Cost per reservation. |
| **Days Available**| Days the resource is offered. |
| **Is Active**     | Indicates whether the resource is enabled and visible. |
| **Hidden from Calendar** | Whether the resource is hidden from the public calendar. |

---

## ➕ Creating a New Resource

Click **"New Resource"** to open the resource editor panel.

### 📅 Required Fields

#### **Name**
- The title of the resource (e.g., “Private Sauna”).

#### **Image**
- Required image that helps visually identify the resource.

#### **Description**
- Rich text description shown during booking.

#### **Start & End Date**
- Defines when the resource becomes available.
- Leave end date blank if ongoing.

#### **Start & End Time**
- Daily availability window.

#### **Price**
- Cost per booking.

#### **Duration**
- How long a single booking lasts.

#### **Max Participants**
- Maximum number of people per booking session.

#### **Minimum Booking Lead Time (Hours)**
- Set the minimum number of hours in advance a member must book this resource.
- For example, setting this to 2 means members cannot book a slot starting less than 2 hours from now.
- Set to 0 (default) for no restriction.

---

## 🏷️ Booking Options

If your resource has multiple pricing tiers (e.g., "Single Rider - $100" and "Double Rider - $200"), use **Booking Options** to define them.

- Click **Add Option** to create an option with a **name** and **price**.
- When options are configured, members must select one before choosing a timeslot.
- The selected option and its price are shown on the booking confirmation page, in email notifications, and in Trello cards (if configured).
- **Membership discounts** apply to option prices the same way they apply to the base price.
- If no options are added, the **Price** field is used as the single booking price (existing behavior).

---

## ⚙️ Scheduling Details

#### **Days Available**
- Select which weekdays the resource can be booked.
- When you add or remove a day, the **Operating Hours** section below automatically updates to match.

#### **Operating Hours**
- Automatically populated when you select days above. Each newly added day defaults to **9:00 AM - 5:00 PM**.
- Adjust individual day times as needed (e.g., a later start on Sundays).
- Removing a day from **Days Available** also removes its operating hours entry.
- You can still manually add or modify entries if needed.

#### **Unavailable Dates**
- Define exceptions when the resource is not available, with a reason and time range.

---

## 👤 Trainer & Restrictions

#### **Trainers**
- If a trainer or supervisor is required for this resource (e.g., spotter for weight room), you can select one or more here.

---

## 💸 Membership Controls

#### **Membership Levels**
- Only users with these membership levels will be able to see or book the resource.

#### **Membership Discounts**
- Offer discounts to members of specific levels.
- **Discount Type**: Choose between **% Off** (percentage) or **$ Off** (flat dollar amount).
  - **% Off**: Enter a percentage (0-100). For example, 50% off a $20 resource = $10.
  - **$ Off**: Enter a fixed dollar amount to subtract. For example, $10 off a $15 resource = $5.00. This avoids rounding issues that can occur with repeating percentages (e.g., 66.67% off).
- You can set different discount types per membership level.

---

## 📝 Editing & Reordering

Click the **edit icon** on any row to update that resource. All changes are live once saved.

You can adjust:
- Pricing
- Days and hours
- Visibility
- Membership rules
- Description and attachments

To reorder how resources appear (e.g., in dropdowns or booking interfaces), click the **up/down arrow icon** in the top-left corner of the table, then **drag and drop** the rows into your preferred sequence. When done, **click the checkbox** to save the new order.


---

## ✅ Best Practices

- Use **Unavailable Dates** to block off days for maintenance or events.
- Attach **trainers** only if the resource requires supervision.
- Reorder resources to prioritize the most-used ones at the top.

---

## Public View Link

When editing a resource, a **Public View Link** is displayed showing the direct URL to this resource's public booking page. This link can be shared with members or embedded on your website.

---

## 👁️ Guest Viewing

Resource pages are publicly accessible — visitors do not need to be signed in to view available dates, times, and pricing. This works the same way as classes, packages, and events.

- **Guests** see all available timeslots but are prompted to **sign in or create an account** to book.
- **Members** see timeslots with direct booking links, filtered by their membership level access.

This makes it easy to share resource links on social media, your website, or in marketing emails without requiring login first.

---

## ⏳ Past Resource Notices

- If a resource's end date has passed and no future dates are available, a **"This resource has passed"** notice is shown instead of an empty schedule.
- If a member navigates to a past date on the date-based resource listing, a notice indicates that bookings are no longer available for that date.