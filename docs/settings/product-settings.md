---
sidebar_position: 10
---

# Product Settings

The **Product Settings** section allows you to manage your product catalog, including items synced from ManageRegister and manually added products. You can control inventory, pricing, visibility, and stock tracking from this page.

---

## Inventory Settings

### Do Not Decrement MR Inventory
When enabled, sales made through ManageMemberships will **not** reduce inventory counts in ManageRegister. This is useful if you manage stock separately between systems.

---

## Product Filters

Use the filters at the top of the product list to narrow results:

- **Search** - Search products by name
- **Min Price** / **Max Price** - Filter by price range
- **Min Stock** / **Max Stock** - Filter by stock quantity
- **Show Out of Stock** - Toggle to include products with zero stock

---

## Managing Products

### Add Manual Product
Click to create a product directly in ManageMemberships (not synced from ManageRegister).

### Sync ManageRegister
Click to pull the latest product data from your ManageRegister account.

---

## Product Fields

When creating or editing a product, the following fields are available:

| Field | Description |
|-------|-------------|
| **Product Name** | The display name of the product |
| **Description** | A description shown to buyers |
| **Options** | Choices the buyer makes before adding to the cart &mdash; see [Product Options](#product-options) |
| **Price** | The sale price |
| **Product Images** | One or more product photos |
| **Track Stock** | Enable inventory tracking |
| **Stock Quantity** | Current stock count (when tracking is enabled) |
| **In Stock** | Manual override for stock availability |
| **Display for Purchase** | Whether this product is visible and available for purchase on the portal |

---

## Product Options

Options are the choices a buyer makes before a product goes in the cart &mdash; size, colour, flavour, and so on.

Each option has a **name** on the left and its **choices** on the right, separated by commas:

| Name | Choices |
|------|---------|
| `Size` | `S, M, L, XL` |

You can add **more than one option** to a single product with **+ Add an option** (up to five). This is for products that need separate choices that don't move together &mdash; a clothing set where the shirt and the shorts are sized independently, for example:

| Name | Choices |
|------|---------|
| `Shirt Size` | `S, M, L, XL` |
| `Shorts Size` | `S, M, L, XL` |

The buyer picks one value from **every** option before **Add to Cart** becomes available, and each distinct combination is its own cart line &mdash; so *Shirt M / Shorts L* and *Shirt M / Shorts M* are tracked separately on the order.

Leave the name blank for a single unnamed list of choices. Products with no options at all skip the picker entirely and add to the cart in one click.

:::note
Existing products that used the older single comma-separated list keep working exactly as before &mdash; they show as one unnamed option, and nothing needs to be re-entered.
:::

---

## What Buyers See

On the storefront, clicking a product's image, name, or **Read more** opens a detail window with:

- the product photo
- the **full description**, untruncated (the product grid trims it to two lines to keep the cards even)
- every option picker
- a quantity selector, capped at the stock count when **Track Stock** is on

**Add to Cart** on the card itself adds the product immediately when it has no options, or opens the same window to collect the choices when it does.
