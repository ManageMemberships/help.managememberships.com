---
sidebar_position: 8
sidebar_label: Walk-In Queue
---

# Walk-In Queue

The Walk-In Queue manages customers waiting for service at your facility. It supports two queue types — **Shooting** and **Safety Briefing** — and is managed through ManageRegister as the source of truth.

---

## How It Works

1. **ManageRegister** adds customers to the queue when they check in at the POS
2. Staff manages queue status (calling, serving, completing) from either ManageRegister or the ManageMemberships dashboard
3. **Members** see their queue position on their portal dashboard in real-time

---

## Owner Dashboard

Go to **Members > Walk-In Queue** (`/owner/members/walk-in-queue`) to see the current queue.

The dashboard shows:
- **Two tabs**: Shooting and Safety Briefing, each with a waiting count
- **Queue entries** with name, party size, wait time, status, and action buttons
- **Status badges**: Waiting (gray), Called (yellow), Serving (green)
- **Actions**: Call Next, mark Serving, mark Done, No Show, Remove

The dashboard polls every 5 seconds to stay current with changes made from ManageRegister.

---

## Member View

When a member is in an active queue, they see a blue **"Your Queue Status"** box on their portal dashboard showing their queue type and position (e.g., "Shooting — Position 2 of 5"). This updates automatically every 10 seconds and disappears when they are removed from the queue.

---

## Queue Flow

A typical queue flow:

1. Customer arrives → ManageRegister adds them to the queue (**Waiting**)
2. Staff is ready → entry is marked **Called**
3. Customer approaches → entry is marked **Serving**
4. Service complete → entry is marked **Completed** (leaves active queue)

If a customer doesn't respond when called, they can be marked as **No Show**.
