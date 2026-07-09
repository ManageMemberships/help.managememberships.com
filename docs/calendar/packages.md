---
sidebar_position: 3
---

# Packages

The **Packages** section allows you to define and manage time-based access blocks that bundle multiple resources or sessions together. These can be configured to operate only on certain days or times and are ideal for things like facility rental blocks, wellness bundles, or special access deals.

---

## 📊 Overview Table

The packages table lists all configured packages for your location.

| Column          | Description |
|------------------|-------------|
| **Name**         | The title of the package. |
| **Days**         | The days of the week when the package is valid. |
| **Start Time**   | The daily starting time for package availability. |
| **End Time**     | The daily ending time for package availability. |

---

## ➕ Creating a Package

Click the **"Create"** button to open a slide-out form panel.

### 📅 Required Fields

#### **Name**
- A unique label that describes the package (e.g., "Weekend Wellness Pass").

#### **Slug**
- URL-friendly identifier for the package. Auto-generated from the name but can be customized.

#### **Price**
- The cost of the package.

#### **Description**
- Rich text description of what the package includes and any relevant details.

#### **Start & End Time**
- The time window each day when the package can be redeemed.

#### **Days**
- Select which days of the week this package is available.

---

## 🧳 Resource Integration

Packages are generally used in coordination with resources. While this setup may vary based on your implementation, common use cases include:

- Allowing access to a group of resources under one price.
- Offering time-limited use of otherwise independent sessions.

You can build logic in your booking system to check if a user’s selected time falls within a package’s time block.

---

## 💸 Membership Discounts

Packages support membership-level discounts, allowing you to offer reduced pricing for specific membership tiers.

- **Discount Type**: Choose between **% Off** (percentage) or **$ Off** (flat dollar amount).
  - **% Off**: Enter a percentage (0-100) to discount.
  - **$ Off**: Enter a fixed dollar amount to subtract from the package price.

---

## 📝 Editing & Deleting Packages

Click the **edit icon** on any row to modify the package. All fields can be adjusted in real time.

To delete a package:
- Click the trash can icon.
- There are currently no dependency restrictions, but best practice is to ensure no active bookings rely on the package before deletion.

---

## ✅ Best Practices

- Keep package names clear and consistent.
- Avoid overlapping packages with the same days and time to prevent booking conflicts.