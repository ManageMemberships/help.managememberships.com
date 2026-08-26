---
sidebar_position: 9
---

# Membership Widget

The **Membership Widget** lets you embed your membership options directly on any external website — your Wix, Squarespace, WordPress, or custom site. Visitors see your plans, pricing, and descriptions without leaving your page, and click **Sign Up** to go straight to your portal registration.

---

## Opening the Widget Builder

1. Go to **Members → Membership Widget** in the owner navigation
2. Configure the options on the left
3. Copy the embed code and paste it into your website

:::note
Access requires the **Manage Memberships** permission.
:::

---

## Options

| Option | Description |
|--------|-------------|
| **Accent color** | Controls the color of price badges and Sign Up buttons. Pick a color that matches your brand. |
| **Show membership descriptions** | Toggle on to include the description text from each membership level. Toggle off for a more compact look. |
| **Widget height** | Set the iframe height in pixels (200–1200 px). Adjust until the preview looks right for your layout. |

---

## Embed Code

Once you've configured the options, copy the `<iframe>` snippet from the **Embed Code** box and paste it into your website wherever you want the membership options to appear.

The snippet looks like:

```html
<iframe
  src="https://yoursubdomain.managememberships.com/embed/memberships?accent=%232563eb&show_desc=1"
  width="100%"
  height="500"
  frameborder="0"
  style="border:0;border-radius:8px;"
  allowfullscreen
></iframe>
```

---

## Live Preview

The bottom of the builder shows a live preview of exactly what your visitors will see. Changes to options update the preview in real time before you copy the code.

---

## What Members See

- Each active membership level is shown as a card with its name, price, and billing interval
- Multiple pricing options (e.g. monthly / quarterly / annual) are listed if configured
- A one-time signup fee is noted beneath the price when applicable
- Clicking **Sign Up** opens your portal registration page in a new tab, pre-selecting that membership level

:::tip
Only **active** membership levels appear in the widget. If you want to hide a plan from the widget, mark it inactive in **Members → Membership Levels**.
:::
