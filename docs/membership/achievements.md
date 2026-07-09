---
sidebar_position: 5
---

# Achievements

The achievement system lets you create visual badges that track member progress toward goals. Staff manually mark segments complete as members hit milestones — no automation, just a simple way to recognize effort and keep members engaged.

:::tip Quick Start
Go to **Membership → Achievements** to create your first achievement. Choose a badge shape, set the number of segments, and optionally label each segment. Then assign it to members and track their progress.
:::

---

## Creating an Achievement

Click **Create** on the Achievements page to open the form.

| Field | Description |
|-------|-------------|
| **Name** | The achievement name members will see (e.g. "BJJ Fundamentals", "100 Classes") |
| **Description** | Optional text shown below the badge on the member portal |
| **Active** | Toggle to show/hide the achievement from members |
| **Badge Shape** | Choose from Shield, Medal, Belt, Badge, or upload a Custom SVG |
| **Default Badge Color** | The fill color for completed segments (defaults to gold) |
| **Number of Segments** | How many pieces the badge is divided into (2–12) |
| **Segment Labels** | Optional names for each segment (e.g. "Attend 10 classes", "Pass guard test") — these are guidance for staff |
| **Segment Colors** | Optional per-segment colors — leave blank to use the default badge color |

---

## Badge Shapes

Four built-in shapes are available:

- **Shield** — segments divide horizontally or into quadrants
- **Medal** — circular with pie-slice segments
- **Belt** — horizontal bar divided into equal sections (great for martial arts belt progression)
- **Badge** — star/rosette shape with pie segments

### Custom SVG Upload

Upload your own SVG file for a fully custom badge. For segment support, add `id="segment-1"`, `id="segment-2"`, etc. to elements in your SVG. The system will color completed segments and gray out incomplete ones.

If no segment IDs are found, the badge displays as all-or-nothing: full color when complete, grayed out when incomplete.

---

## Segment Colors

Each achievement has a **default badge color** that applies to all completed segments. You can also set **individual colors per segment** for multi-color badges.

Example uses:
- A belt achievement where segments go white → yellow → green → brown → black
- A fundraising badge where each tier gets a different color
- A skills badge where technique categories have distinct colors

If a segment has no custom color set, it falls back to the default badge color.

---

## Managing Member Progress

Click **Manage Progress** on any achievement to see enrolled members and their segment status.

From this view you can:
- **Enroll members** in the achievement
- **Mark segments complete** — check off individual segments as members earn them
- **View progress** — see which segments each member has completed

Segments are completed manually by staff. There is no automatic completion based on attendance or other triggers — this gives you full control over when a member earns each segment.

---

## Member Portal View

Members see their achievements on the **Achievements** page in the member portal, and a summary on their dashboard.

Each achievement card shows:
- The badge SVG with completed segments filled in color and incomplete segments grayed out
- The achievement name and description
- A progress bar showing segments completed out of total
- A checklist of segment labels (if set) with checkmarks for completed ones
- A "Completed" badge with the date when all segments are done

---

## Permissions

The **manage_achievements** permission controls access to the Achievements page in the owner dashboard. Staff without this permission will not see the menu item.

---

## Tips

- **Martial arts belts** — use the Belt shape with segment colors matching your belt system
- **Class milestones** — create achievements like "50 Classes", "100 Classes" with segments at intervals
- **Skills checklists** — use segment labels to list specific techniques or requirements
- **Keep it visible** — active achievements appear on the member dashboard, which helps with motivation and retention
