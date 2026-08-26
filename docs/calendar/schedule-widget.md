---
sidebar_position: 6
---

# Schedule Widget

The **Schedule Widget** lets you embed your class schedule directly into any external website — Wix, Squarespace, WordPress, or anywhere else that accepts an `<iframe>`. Members can browse and book classes without ever leaving your own site.

---

## Accessing the Widget Builder

Go to **Schedule → Schedule Widget** in the owner navigation. The builder lets you configure the widget and generates a copy-paste embed code.

---

## Configuration Options

| Option | Description |
|--------|-------------|
| **Calendar view** | **List** (default) — shows upcoming classes in a clean list. **Week** — a 7-day time grid. **Month** — a full month grid. |
| **Show on widget** | Choose which content types appear: **Classes** and/or **Events**. Classes is on by default. |
| **Accent color** | The color used for buttons and event highlights. Defaults to blue (`#2563eb`). Pick any color to match your brand. |
| **Widget height** | Height of the iframe in pixels (300–1200 px). Adjust until the preview looks right for your page layout. |

---

## Embedding the Widget

1. Configure the options above until the **Preview** looks how you want.
2. Click **Copy** next to the embed code.
3. Paste the `<iframe>` code into your website's HTML editor.

The widget is responsive — it fills whatever width you give it.

:::tip Wix / Squarespace
Both platforms have an "HTML" or "Embed" block. Add one of those to your page and paste the code inside it.
:::

---

## How Booking Works

When a member clicks a class in the widget, a pop-up appears with the class details and a **Book Now** button. Clicking it opens the booking page on ManageMemberships in a new tab, so the checkout flow doesn't break out of your website.

---

## Direct Embed URL

If you'd prefer to build the URL yourself (e.g. for a custom integration), the embed endpoint is:

```
https://YOUR-SUBDOMAIN.managememberships.com/embed/schedule
```

Supported query parameters:

| Parameter | Values | Default |
|-----------|--------|---------|
| `view` | `list`, `week`, `month` | `list` |
| `types` | Comma-separated: `class`, `event` | `class` |
| `accent` | Any hex color, e.g. `%232563eb` | `#2563eb` |
