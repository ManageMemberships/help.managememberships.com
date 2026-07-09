---
sidebar_position: 5
---

# Instructors Page

Your member portal includes a public **Instructors** page that showcases your training staff. Members (and guests) can browse trainer profiles and see what classes each trainer teaches.

---

## Accessing the Instructors Page

The instructors page is available at:

```
https://yoursubdomain.managememberships.com/instructors
```

No login is required — this is a public page visible to anyone visiting your portal.

---

## What Members See

### Instructors Index (`/instructors`)

A grid of cards showing each active trainer with:

- **Headshot** — the trainer's uploaded photo (or an initial avatar if no photo is set)
- **Name**
- **Bio preview** — first few lines of their expertise/bio
- **Class tags** — badges showing which classes they teach
- **"View profile" link**

### Trainer Profile (`/instructors/{id}`)

Clicking a trainer card opens their full profile page with:

- **Large photo** displayed alongside their details
- **Full bio/expertise** text
- **Classes section** — all classes assigned to this trainer, each showing:
  - Class name (clickable — links to the class booking page)
  - Schedule (days and times)
  - Description preview
  - Price, duration, and max capacity

---

## Linking From Class Pages

When a member views a class booking page (e.g., `/classes/view/boxing-fundamentals/2026-06-15`), the assigned trainer's profile appears below the class description with:

- Trainer headshot and name (clickable — links to their profile)
- Trainer bio
- **"See all instructors"** link at the bottom

---

## Setup Requirements

For a trainer to appear on the instructors page:

1. The user must be a **Staff**, **Manager**, or **Accountant** (not a member)
2. The **"Trainer / Available for Classes"** checkbox must be enabled in their Staff settings
3. The user must be **active**
4. For the best presentation, upload a **Trainer Headshot** and fill in the **Trainer Bio** field (both available in Staff > Edit when the Trainer checkbox is on)
5. The trainer must be **assigned to at least one class** for class tags to appear

---

## Tips

- Use high-quality square photos for headshots — they're cropped to a circle on the index and displayed large on the profile page
- Keep bios concise but specific — mention certifications, years of experience, and specialties
- The instructors page is a great link to include in your portal navigation, email campaigns, or social media to showcase your team
