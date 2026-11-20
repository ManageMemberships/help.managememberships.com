---
sidebar_position: 6.5
---

# Performance Flags and Flag Rules

When a member saves a workout, Training checks each set against its plan. If a set **clearly beat the plan**, it gets a **flag**, so you know that member's training max may be out of date.

- A flag never changes a training max by itself. A max only changes when a coach updates it.
- Members never see flags, and nobody is emailed or notified about them.

:::note Beta
Training is marked **Beta** in the app, so things may change.
:::

---

## The Flags Tab

Go to **Add-ons → Training → Flags**. The tab shows how many open flags you can see.

- **Trainers** see the flags of their own clients.
- **Owners and managers** see the flags of every coach's clients, with **Coach:** under each name.

Use the **Open** and **Handled** chips to switch lists, and **Search clients** to find a client by name or email. On a phone, the chips become a **Show** menu.

Open flags are listed newest workout first. Each flag shows:

- the athlete, with a link to their page
- the exercise and set, for example *Barbell Bench · Set 3*, and the workout's date and week
- the **rule** that raised it, as a labelled chip
- a short headline, for example *Implies ~250 lb · on file 235 lb* or *RPE 7 · RPE 9 planned*
- **Did** and **Planned**: what the member did against what was planned, for example *225 lb × 2 @ RPE 7*
- a sentence explaining why the set was flagged

Click **Open** to go to that workout on the client's **Logs** tab.

---

## Handling a Flag

Each open flag has three actions.

| Action | What it does |
|---|---|
| **Dismiss** | The flag moves to **Handled** and the max stays as it is. Use it when the flag doesn't matter. |
| **Acknowledge** | The flag moves to **Handled** as seen, and the max stays as it is. |
| **Update max** | Records a new training max for the flag's lift and moves the flag to **Handled**. See below. |

**Dismiss** and **Acknowledge** ask you to confirm first. Handled flags show who handled them and when, for example *Acknowledged by Casey Coach on 20 Nov*.

If another coach handled the flag first, you'll see **This flag was already handled** and nothing changes.

A handled flag can't be reopened.

### Update max

1. Click **Update max** on the flag.
2. Check the form:
   - The **Lift** is fixed to the flag's lift.
   - **On file now** shows the lift's current max.
   - The **Weight** starts with the estimate from the flagged set, but only when it's above the max on file. Otherwise it starts empty, with a note such as *This set's estimate (~235 lb) isn't above the max on file.*
3. Enter or change the **Weight**, the **Unit** and the **From** date (today by default, and not later than today).
4. Click **Save max**.

You'll see **Max updated**. The flag moves to **Handled** as *Acted by …*. On the client's **Maxes** tab, the new max is marked *from a performance flag*. Workouts that aren't saved yet use the new max. See [Training Maxes and Weight Ranges](training-maxes.md#saving-a-clients-training-max).

A flag that isn't linked to a lift has no **Update max**. It says *Not linked to a lift: update the max on the Maxes tab.*

---

## The Built-in Rules

Every gym starts with three rules, all turned on. You can turn each one off or change its number on the [Flag rules](#flag-rules) card.

| Rule | A set is flagged when | Default |
|---|---|---|
| **AMRAP above expectations** | An AMRAP set planned at a percent of the training max (for example *amrap* at *80%*) is done for at least this many reps, at that weight or heavier. | 10 reps |
| **Implies a higher max** | The set's estimated max is above the training max on file. The estimate is worked out from the weight, the reps (1 to 12) and the RPE the member logged (or RPE 10 if they logged none). | — |
| **Easier than prescribed** | The logged RPE is at least this far below the planned RPE, with the planned reps, at the planned weight or heavier. | 2 RPE |

The built-in rules only check sets that:

- are on a row measured by **Weight** and based on a **lift**
- belong to a member with a training max for that lift on the workout's date
- have a weight above 0

**Easier than prescribed** also needs a target RPE, a logged RPE and a planned weight it can work out. A weight typed as text, such as *bw*, gives no flag.

### One flag per set

A set gets **one flag at most**. The built-in rules are checked first, in the order above, then your gym's own rules, oldest first. The first rule that matches raises the flag.

If a member saves the workout again, its open flags are checked again. Flags a coach already handled don't change.

---

## Flag Rules

Owners and managers choose what raises a flag on **Add-ons → Training → Settings → Flag rules**. Other coaches can see the card, with *Only the gym's owner or a manager can change these.*

Changes apply from the **next saved workout**. Workouts saved before don't get new flags, and their flags don't change, until they're saved again.

### Built-in rules

Each built-in rule has an on/off switch. Two have a number:

| Rule | Field | Allowed |
|---|---|---|
| **AMRAP above expectations** | **Reps at least** | 1 to 50 |
| **Easier than prescribed** | **RPE gap** | 0.5 to 9, in half steps |

Click **Save built-in rules**.

### Adding your own rule

Your gym can have up to **20** rules of its own. The card shows how many you have, for example *3 of 20*.

1. Click **Add rule**.
2. Enter a **Name**, up to 60 characters. This is the name coaches see on the flag.
3. Under **What to flag**, choose one of the five kinds below.
4. Under **Applies to**, choose **All exercises**, **One exercise**, **One lift** or **One muscle group**, then choose which one.
5. Fill in the kind's fields. The box at the bottom shows the rule in plain words as you go.
6. Click **Save rule**.

You'll see **Rule added**. *It applies from the next saved workout.*

| What to flag | Its fields |
|---|---|
| **RPE lower than planned** | **Planned reps (optional)**: 1 to 30, where 1 means a single. **Planned RPE (optional)**. **Flag when the logged RPE is**: **Below the planned RPE by at least** a gap (0.5 to 9), or **At most** an RPE (1 to 10). |
| **Reps at a percent of the training max** | **Percent of the training max** (50 to 150) and **Reps at least** (1 to 50). The set counts at that percent or heavier. |
| **More reps than planned** | **Reps over the plan, at least** (1 to 20) |
| **AMRAP reps** | **Reps at least** (1 to 50). Tick **Only AMRAPs planned at a percent of the training max** to skip other AMRAPs. |
| **Estimated max above the training max** | **Percent above the training max, at least** (1 to 50) |

**RPE lower than planned** and **More reps than planned** also have **Only when the weight is at least the planned weight**, ticked by default. With it ticked, a set only counts when the member lifted at least the planned weight. A planned weight typed as text, such as *bw*, never counts. The option doesn't apply to exercises measured by reps.

What each kind can check:

- **Reps at a percent of the training max**, **Estimated max above the training max**, and **AMRAP reps** with the percent option ticked, need a row based on a lift and a training max, like the built-in rules.
- The other kinds also work on rows without a lift or a max.
- **More reps than planned** is the only kind that also checks exercises measured by **Reps**.
- Exercises measured by time or distance are never flagged.

**Applies to** lists exercises measured by weight or reps. **One lift** covers every program row based on that lift. **One muscle group** matches the muscle group of the exercise in your library. Upper and lower case don't matter, but the spelling must be the same, so *Chest* won't match *Pecs*.

### Examples

**A bench single that felt too easy.**

- **Name:** *Bench single at a low RPE*
- **What to flag:** **RPE lower than planned**
- **Applies to:** **One exercise**, *Barbell Bench*
- **Planned reps (optional):** 1
- **Planned RPE (optional):** 9
- **Flag when the logged RPE is:** **At most**, 7

The rule reads: *Barbell Bench · a single at RPE 7 or less when RPE 9 is planned, at the planned weight or heavier*.

**Three or more reps over the plan.**

- **What to flag:** **More reps than planned**
- **Applies to:** **All exercises**
- **Reps over the plan, at least:** 3

The rule reads: *All exercises · 3 or more reps over the plan, at the planned weight or heavier*.

:::tip
On a row based on a lift, the built-in rules are checked first. If one of them matches the set, the flag shows the built-in rule's name instead of yours.
:::

### Editing, turning off and archiving

- **Edit** changes a rule. The changes apply from the next saved workout.
- The switch turns a rule off or on. A rule that's off is marked **Off** and raises no new flags.
- **Archive** removes a rule from the card and stops it raising flags. You're asked **Archive \{name\}?** first.

**Flags keep the name of the rule that raised them**, even after the rule is renamed or archived. An archived rule can't be brought back. To use it again, add it again.

If a rule's exercise or lift has since been archived, the rule stops raising flags and its row says the exercise (or lift) *is no longer available*. Click **Edit** to choose another.

---

## Related

- [Training Maxes and Weight Ranges](training-maxes.md)
- [A Client's Training Page](client-page.md)
- [Recent Workouts, Comments and Needs Attention](follow-up.md)
