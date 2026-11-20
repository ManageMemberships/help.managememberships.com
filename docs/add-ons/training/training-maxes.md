---
sidebar_position: 5
---

# Training Maxes and Weight Ranges

If you plan weights as a share of each athlete's **training max**, Training can work out the weights for you. You base a program row on a **lift** and save each client's max for that lift. Each member then sees a **weight range** worked out from their own max.

This is optional. A weight you type on a set always wins.

:::note Beta
Training is marked **Beta** in the app, so things may change.
:::

---

## Lifts

Program rows are based on lifts, and training maxes are saved per lift. Every gym starts with **Squat**, **Bench** and **Deadlift**.

Owners and managers manage lifts on **Settings → Lifts**:

- **Add:** type a name in **New lift** and click **Add lift**. Names can be up to 40 characters.
- **Rename** a lift.
- Reorder lifts with the up and down arrows.
- **Archive** a lift. An archived lift can't be chosen for new rows or maxes, but rows and maxes that already use it keep working. Click **Restore** to bring it back.

Lifts can't be deleted.

---

## Basing a Program Row on a Lift

In the [program builder](programs.md), choose a lift under **Based on** and enter a multiplier in the **×** box. The multiplier can be 0.05 to 2. For example, *0.9* means 90% of the max, and 1 means the full max.

Lifts work on rows measured by **Weight** only. A set gets a calculated weight in one of two ways:

- **Reps and RPE:** whole reps (1 to 30) and a target **RPE** give a **weight range**. The builder shows the set's share of the lift, for example *76.2% of Bench*.
- **A typed percent:** a weight such as *70%* gives **one weight**. The builder shows the share with the multiplier, for example *63% of Bench* for 70% at × 0.9. See [A typed percent](#a-typed-percent).

To make an exercise start out based on a lift every time you add it, set its **Default lift** on the [Exercises](exercises.md#default-lift) tab.

---

## Saving a Client's Training Max

Trainers save maxes for their own clients. Owners and managers can save them for any client.

1. Open the client's page and click the **Maxes** tab.
2. In **Add a max**, choose the **Lift**, and enter the **Weight**, the **Unit** and the **From** date (today or earlier).
3. Click **Save max**.

The weight must be above 0 and up to 2,000 lb (907 kg), with up to 2 decimals.

**Each workout uses the max in effect on its date.** A new max changes the weights for workouts from its **From** date on. Earlier weeks keep the weights they had.

### The Training maxes card

Each lift shows its current max, who set it and when, for example *Bench 165 lb since Mon 16 Nov · set by Casey Coach on 19 Nov*. A lift with no max shows **Not set**.

Click **History (N)** to see every entry for the client, for example *Added by Casey Coach on 19 Nov*. A max that a coach saved from a [performance flag](performance-flags.md#update-max) is marked *· from a performance flag*.

### Deleting a max

A max can't be edited. To fix a wrong one, delete it and add the right one.

1. In **History**, click **Delete** on the entry.
2. When asked **Delete this max?**, click **Delete**.

Workouts that aren't saved yet use the max before it again. Saved workouts keep the max they were planned with. The entry stays in the history, greyed out with its weight struck through, as *Deleted by … on …*.

### Saved workouts keep their max

**A workout that's already saved keeps the max it was planned with.** Its planned weights are worked out with the maxes as they were when the member first saved it. A max you add later with an earlier **From** date, or a max you delete, doesn't change it. Saving the workout again doesn't change this either.

Only the max is kept. If you change your **Weight ranges** settings or the program's sets, saved workouts show the new planned weights too. What the member logged never changes.

### What members see

Members see their current maxes on **My progress**, in a **Training maxes** card: *Your coach sets these. Your planned weights are worked out from them.* They can't change them. See [For Members](for-members.md#my-progress).

---

## How a Range Is Worked Out

For each set based on a lift:

1. The **percent** comes from a standard RPE chart for the set's reps and target RPE, times the row's multiplier.
2. The **top** of the range is the max × that percent, **rounded up** to your rounding step.
3. The **bottom** of the range is your **Low end (%)** of that same weight, also rounded up.

**Example:** a Bench max of 400 lb, and a set of 5 reps at RPE 6. The chart gives 76.2%.

- 400 × 76.2% = 304.8, which rounds up to **305**
- 304.8 × 97% = 295.7, which rounds up to **300**

The member sees **300–305 lb**.

The range is in the same unit as the max and is never converted. If the bottom and top come out the same, only one number shows.

### A typed percent

On a row based on a lift, a weight typed as a percent, such as *70%* or *72.5%*, is that percent of the client's max, times the row's multiplier. Type it as a number followed straight by **%**, from above 0 up to 200%.

It gives **one weight**, rounded to the **nearest** step (not up), with no low end. A target RPE on the same set stays a target.

**Example:** a Squat max of 105 kg, a set typed *70%*, and a multiplier of 1. 105 × 70% = 73.5, which rounds to the nearest 2.5 kg: the member sees **72.5 kg**.

### When there's no calculated weight

| Situation | What shows |
|---|---|
| The coach typed a weight (not a percent) on the set | That weight (**Typed weight used** in the builder) |
| The client has no max for the lift yet | The share of the lift, for example *76.2% of Bench*, or the typed *70%*. On My Training the member sees *No Bench max yet. Ask your coach to set it.* |
| There's no typed percent, and the reps are text (like *amrap*) or there's no target RPE | No calculated weight |

### The member's weight boxes

On My Training, when nothing is saved yet for an exercise, each weight box **starts with the plan's weight**: the top of the range (*300–305 lb* fills **305**), a typed percent's weight, or a number the coach typed. These weights are grey, with *Grey weights are from your plan.*, until the member types over them.

**If the member saves without changing a box, that weight is logged.** It counts like any other weight, in PRs, charts and history.

A box is only filled when the planned weight is in the member's unit (lb or kg). Nothing is converted.

---

## AMRAP Estimated Max

When a member saves an [AMRAP set](programs.md#amrap-sets) on a row measured by **Weight**, Training shows an **estimated max**: roughly the most they could lift for one rep, judged from that set.

- The member sees it under the set on My Training, for example *Estimated max ~285 lb*.
- Coaches see it on the client's **Logs** tab after the set, for example *≈ 285 lb max*.

**How it's worked out:** the weight divided by the RPE chart's percent for the reps done, at the RPE the member logged (or RPE 10 if they logged none). It's **rounded down** to your rounding step, in the unit the set was logged in.

**Example:** 225 lb for 8 reps, no RPE logged. The chart gives 78.6% for 8 reps at RPE 10. 225 ÷ 78.6% = 286.3, which rounds down to **285 lb**.

There's no estimate for a set with no weight or bodyweight (*bw*), or with more than 12 reps.

:::note It's an estimate, not a tested max
The estimate is only shown. It never changes a training max, never plans a weight, and isn't used for PRs, bests, charts or "Last time". To change a max, save one on the client's **Maxes** tab.
:::

---

## Weight Range Settings

Owners and managers set these on **Settings → Weight ranges**:

| Setting | Choices | Default |
|---|---|---|
| **Low end (%)** | 80 to 100. The range goes from this percent of the weight up to the full weight. | 97 |
| **Rounding, lb** | 1, 2.5, 5 or 10 | 5 |
| **Rounding, kg** | 0.5, 1, 1.25, 2.5 or 5 | 2.5 |

The card says: *Weight ranges round up to the next step. A typed percent, such as 70%, rounds to the nearest step.* The same rounding step is used for the AMRAP estimated max, which rounds down.

The card shows a live example as you change these. Click **Save ranges**.

---

## Related

- [Programs and the Program Builder](programs.md)
- [A Client's Training Page](client-page.md)
- [Performance Flags and Flag Rules](performance-flags.md)
