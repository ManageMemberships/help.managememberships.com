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
| **Calendar view** | **List** (default) — shows upcoming classes in a clean list. **Week** — a 7-day time grid. **Month** — a full month grid. **Next dates for one class** — a short list of one class's upcoming dates, each with its own Book button (see [below](#next-dates-for-one-class)). |
| **Show on widget** | Choose which content types appear: **Classes** and/or **Events**. Classes is on by default. |
| **Accent color** | Colors the events on the calendar, the navigation buttons, and the Book button. Defaults to blue (`#2563eb`). Pick any color to match your brand. |
| **Widget height** | Height of the iframe in pixels (300–1200 px). Adjust until the preview looks right for your page layout. |

---

:::note Styling the widget from your own site
The widget loads inside an iframe, which means your website's stylesheet can't reach the calendar inside it — you can style the iframe itself (its size, border, or the space around it) but not the events, text, or the pop-up. Everything inside is controlled by the builder options above and the URL parameters at the bottom of this page.

If you need a color the builder doesn't cover, tell us what you're trying to match and we'll look at adding it.
:::

---

## Next dates for one class

Use this to put a class's next few dates right next to that class on your own website, for example on a training page with one card per class. Each date has its own **Book** button, so nobody has to dig through the calendar.

1. Set **Calendar view** to **Next dates for one class**.
2. Pick the **Class**.
3. Set **Dates to show** (1–10, default 3).
4. Copy the embed code and paste it into that class's section on your site. Make one widget per class.

What it shows:

- **The next open dates**, oldest first, with the time and a **Book** button that opens that date's booking page.
- **Full dates** in between are listed as **Full** with a **Join Waitlist** button. They don't count toward **Dates to show**, so you always get that many bookable dates.
- **Seats left** on each date, if the class has [Show seats left](./classes.md#show-seats-left) turned on.
- **A See all dates link** under the list, to every date the class runs.

Dates that have already started, and dates whose registration has closed, drop off on their own. The list looks up to a year ahead, so a schedule you post a year out works, and it updates within a few minutes of each booking.

Only active classes that aren't hidden from the public calendar can be picked.

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

For the **Next dates for one class** widget, the endpoint is:

```
https://YOUR-SUBDOMAIN.managememberships.com/embed/class-dates/CLASS-SLUG
```

| Parameter | Values | Default |
|-----------|--------|---------|
| `count` | Number of open dates to show, 1–10 | `3` |
| `accent` | Any hex color, e.g. `%232563eb` | `#2563eb` |

`CLASS-SLUG` is the last part of the class's **Public View Link**.
