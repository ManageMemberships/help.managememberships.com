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

To get a weight range, a set needs whole reps (1 to 30) and a target **RPE**. The builder then shows the set's share of the lift, for example *76.2% of Bench*.

To make an exercise start out based on a lift every time you add it, set its **Default lift** on the [Exercises](exercises.md#default-lift) tab.

---

## Saving a Client's Training Max

1. Open the client's page and click the **Maxes** tab.
2. In the add form, choose the **Lift**, and enter the **Weight**, the **Unit** and the **From** date (today or earlier).
3. Click **Save max**.

Earlier maxes stay as history. Click **History** to see them, or **Delete** to remove one that's wrong.

**Each workout uses the max in effect on its date.** A new max changes the weights for workouts from its **From** date on. Earlier weeks keep the weights they had.

Members can see their maxes on **My progress**, but can't change them.

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

### When there's no range

| Situation | What shows |
|---|---|
| The coach typed a weight on the set | That weight (**Typed weight used** in the builder) |
| The client has no max for the lift yet | The share of the lift, for example *76.2% of Bench* |
| The reps are text (like *amrap*), or there's no target RPE | No calculated weight |

---

## Weight Range Settings

Owners and managers set these on **Settings → Weight ranges**:

| Setting | Choices | Default |
|---|---|---|
| **Low end (%)** | 80 to 100. The range goes from this percent of the weight up to the full weight. | 97 |
| **Rounding, lb** | 1, 2.5, 5 or 10 | 5 |
| **Rounding, kg** | 0.5, 1, 1.25, 2.5 or 5 | 2.5 |

The card shows a live example as you change these. Click **Save ranges**. Rounding always goes up.

---

## Related

- [Programs and the Program Builder](programs.md)
- [A Client's Training Page](client-page.md)
