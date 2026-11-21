---
sidebar_position: 1
---

# Programs and the Program Builder

A **program** is a plan of 1 to 6 weeks. **Each week has its own plan**: its workout days, the exercises on each day, and the sets for each exercise. Any coach can build and edit any program in your gym.

:::note Beta
Training is marked **Beta** in the app, so things may change.
:::

---

## The Programs List

Go to **Add-ons → Training**. The **Programs** tab lists your gym's programs, sorted by name. Use **Search programs** to find one by name or description.

Each program shows:

- its length and workouts per week, for example *4 weeks · 3 workouts a week*
- a Mon to Sun strip of week 1, with each day's title, **Workout**, or **Rest**
- how many **members** are on it, with their initials
- when it was last **Updated**

| Button | What it does |
|---|---|
| **Edit** | Opens the program builder. |
| **Assign** | Opens the Assign dialog. See [Assigning a Program](clients.md#assigning-a-program). |
| **Duplicate** (copy icon) | Makes a copy called *\{name\} (copy)*, with every week, day, exercise and set, and opens it. Nobody is assigned to the copy. |
| **⋯ → Delete** | Asks **Delete \{name\}?**, then removes the program. Members who had it before keep their history. |

A program that someone is on right now can't be deleted. You'll see **This program is assigned right now**. Assign those members another program first.

---

## Creating a Program

1. Click **New program**.
2. Fill in the details:
   - **Program name**, up to 120 characters.
   - **Length**, from **1 wk** to **6 wk**. New programs start at 4 weeks.
   - **Description (optional)**.
3. Build week 1's days, exercises and sets (see below).
4. Click **Save program**.

When you first save, **weeks 2 onward start as a copy of week 1**. After that, you can change each week on its own.

---

## Weeks

Once a program is saved and is longer than one week, tabs for **Week 1**, **Week 2** and so on appear at the top. You edit **one week at a time**.

- If you change a week and then open another one, you're asked **Save Week \{n\} first?** Choose **Save**, **Discard** or **Stay**.
- **Making a program longer** adds the new weeks as copies of the current last week.
- **Making it shorter** deletes the plans of the weeks you cut when you save. Logged workouts are not affected. You can't make a program shorter than the last week a member has logged.

### Copy week

Use **Copy week** to copy the week you're on into later weeks, for example to build a whole block from week 1.

1. Open the week you want to copy and click **Copy week**.
2. Under **Copy to**, pick the weeks to replace, or click **All later weeks**. Weeks that members have already logged are marked **has logs** and can't be picked.
3. Under **RPE, each week**, choose **No change**, **+0.5** or **+1**.
4. When asked **Replace … with week \{n\}?**, click **Copy week**.

With **+0.5**, the target RPE goes up by 0.5 in the next week, by 1 in the week after, and so on, never above 10. Sets without an RPE stay blank. Only RPE changes.

If you have unsaved changes, you're asked to save the week first.

---

## Workout Days

Each week shows seven day tiles, Mon to Sun. A day with no workout reads **Rest day**.

- **Add a workout:** click a rest day, then **Add workout**. Each weekday can have one workout.
- **Title:** give the day a title such as *Lower body*. It's optional, up to 80 characters.
- **lb / kg:** sets the unit for the day's weights. It changes the label only and doesn't convert the numbers.
- **Copy day:** copies this day's workout to another day of the same week. If that day already has a workout, you're asked **Replace \{day\}'s workout?**
- **Day options (⋮):**
  - **Rename**
  - **Copy to…**
  - **Move to…** (only to an empty day)
  - **Delete day**

Members' logs always stay as history when you replace, move or delete a day.

---

## Exercises

1. Click **Add exercise** and search your exercise library (**Search your exercises**). You can filter by **Equipment** or **Muscle**.
2. Pick the exercise. It starts with 3 sets of 10 reps. If it isn't in the library, click **+ Add custom exercise "…"** to add it to your gym's library.

On each exercise you can:

- choose how it's **Measured by** (see below)
- **Swap** it for another exercise
- play its demo with **Play video**, if it has one
- add a **Note (optional)** that members see, up to 255 characters
- reorder it by dragging the handle, or with **Move up** and **Move down**
- **Remove exercise**

A day can have up to 30 exercises.

### Measured by

Each exercise row is measured one of four ways. A new row starts with the exercise's own setting from the [Exercises](exercises.md#measured-by) tab, and you can change it on the row with **Measured by**.

| Measured by | Members log |
|---|---|
| **Weight** | Sets × reps @ weight |
| **Reps** | Sets × reps, with no weight, for example push-ups |
| **Time** | Sets × a time, for example a plank |
| **Distance** | Sets × a distance, for example a row. Choose **m**, **km** or **mi** on the row. Numbers are never converted between units. |

If changing a row's type would clear values you typed, you're asked **Change how \{exercise\} is measured?** first. The number of sets, rest and RPE always stay. Between Weight and Reps, the reps stay too.

Lifts and percentages work on **Weight** rows only, and the day's **lb / kg** switch only changes Weight rows.

---

## Sets

Each set is its own row, so one set can differ from the others, for example a heavier last set. The columns depend on how the row is measured.

| Column | What you can enter |
|---|---|
| **Reps** | Weight and Reps rows. A whole number from 1 to 100, or short text such as *amrap*, *10 each side* or *8-12* (up to 20 characters). |
| **Weight** | Weight rows. A number up to 2,000 lb (907 kg) with up to 2 decimals, or short text such as *bw*, *70%* or *light*. Leave it empty for no weight. On a row based on a lift, *70%* means 70% of the member's training max (see [Basing a row on a lift](#basing-a-row-on-a-lift)). |
| **Time** | Time rows. Seconds (*45*) or minutes and seconds (*1:30*), up to 99:59. Members see it as *45 sec* or *1:30*. |
| **Distance** | Distance rows. A number above 0 with up to 2 decimals, up to 100,000 m, 100 km or 100 mi. |
| **Rest** | A time like *2:00*, or a number of seconds, up to 60:00 |
| **RPE** | The target effort, from 1 to 10 in half steps (like 7.5), where 10 means no reps left. Optional. |

Click **Add set** to add a set (it copies the last one), or **✕** to remove one. An exercise has 1 to 20 sets.

Members see the plan in one line, for example *3 × 8 @ 135 lb* or *3 sets · 8/8/6*.

### Quick fill

Type the sets in the **Quick fill** box and click **Fill**, or press Enter:

| You type | You get |
|---|---|
| `5x5` | 5 sets of 5 reps |
| `5x5 @135` | 5 sets of 5 at 135 |
| `4x8 60` | 4 sets of 8, with 60 seconds rest |
| `5x5 @60kg` | 5 sets of 5 at 60 kg |
| `3 x amrap @ bw` | 3 sets of amrap at bodyweight |
| `5x5 @135 rpe8` | 5 sets of 5 at 135, RPE 8 |
| `3x15` | On a Reps row: 3 sets of 15 reps |
| `3x0:45` | On a Time row: 3 sets of 45 seconds |
| `5x100m` | On a Distance row: 5 sets of 100 m |
| `3x1.5km` | On a Distance row: 3 sets of 1.5 km |

You can write the "x" as `x`, `×` or `*`. A weight or RPE only changes the sets when you type one. `@0` clears the weight.

### AMRAP sets

To plan a set as **AMRAP** (as many reps as possible), type *amrap*, *amrap+*, *max* or *max reps* in its **Reps** box. Upper and lower case don't matter. For example, Quick fill `3 x amrap @ 135`.

The member enters the reps they did. On a Weight row, a saved AMRAP set also shows an **estimated max**. See [AMRAP estimated max](training-maxes.md#amrap-estimated-max).

### Basing a row on a lift

If you plan weights from each athlete's training max, choose a lift under **Based on** and enter a multiplier in the **×** box. The multiplier can be 0.05 to 2, for example 0.9.

A set gets a calculated weight in one of two ways:

- **Reps and RPE:** whole reps (1 to 30) and a target **RPE**. The set shows its share of the lift, such as *76.2% of Bench*. A member with a training max for the lift sees a **weight range** worked out from it.
- **A typed percent:** a weight such as *70%* or *72.5%*. The set shows its share of the lift with the multiplier, for example *63% of Bench* for 70% at × 0.9. A member with a training max sees **one weight** worked out from it.

A member without a max for the lift sees the share of the lift instead.

If a set has neither, the row says *Sets with no RPE or % get no calculated weight.*

Any other weight you type on a set always wins (**Typed weight used**). See [Training Maxes and Weight Ranges](training-maxes.md).

### Supersets

To group exercises that are done back to back, click **Link as superset** between two neighbouring exercises. The group is labelled **Superset A · 2 exercises**, and you can link more. Click **Unlink** to split them.

Members see the group together, with *Do these back to back: one set of each, then the next set.* They still log each exercise on its own.

---

## Saving

The top bar shows **Unsaved changes** or **Saved**.

- Click **Save program** to save. If something needs fixing, you'll see **Some fields need a look**. Nothing is saved until you fix the marked fields.
- Click **Discard** to drop your changes.
- If you try to leave the page with unsaved changes, you're asked **Leave without saving?**
- If another coach saved the program while you had it open, you're asked to **Reload** it. Your unsaved changes are lost.

**Saving changes the program for everyone on it.** The **On this program** card shows how many members that is: *Saving updates their next workouts. Logged workouts don't change.* To change the plan for one member only, use [Edit plan](client-page.md#edit-plan-personal-plans).

Click **Assign to more members** to open the Assign dialog. If you have unsaved changes, clients get the saved version.

---

## Related

- [Exercise Library and Demo Videos](exercises.md)
- [Clients and Assigning Programs](clients.md)
- [Training Maxes and Weight Ranges](training-maxes.md)
