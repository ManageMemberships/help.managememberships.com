---
sidebar_position: 3
---

# Agreements

Agreement templates define the waivers or contracts your members must agree to before activating their membership. Each agreement **must be associated with at least one membership level** — otherwise, users in that level **will not be prompted to sign any agreement**.

## ⚠️ Why This Matters

If a membership level has no associated agreement, new members signing up under that level will **not see any waivers or documents to sign**. This may result in **liability issues** or unverified enrollments.

---

## ➕ Creating a New Agreement

To create a new agreement:

1. Click the **"Create Agreement"** button at the top of the Agreement Templates table.
2. In the form that appears:
   - **Name**: Provide a clear, descriptive name (e.g., `Adult Waiver`, `Parental Consent Form`).
   - **Fillable Fields** (optional): Define fields that members must fill in when signing. See [Adding Fillable Fields](#adding-fillable-fields) below.
   - **Body**: Use the rich text editor to enter the full text of the agreement. You can format text, add links, and upload attachments. If you’ve defined fillable fields, you can insert them inline — see [Inserting Fields into the Agreement Body](#inserting-fields-into-the-agreement-body).
   - **Associated Membership Levels**: Select one or more membership levels that this agreement applies to.

> ✅ Members in the selected levels will be required to sign this agreement during registration or check-in.

---

## ✏️ Editing an Existing Agreement

To update an existing agreement:

- Click the **edit icon** next to any listed agreement.
- Modify the **name**, **body content**, **fillable fields**, or **associated membership levels** as needed.
- Changes apply immediately for any members who haven’t yet signed.

---

## Adding Fillable Fields

Fillable fields let you collect additional information from members directly within the agreement text. For example, you might need an emergency contact name, a date of birth, or a medical email address filled in right where it’s referenced in the waiver.

### Field Configuration

Each field has four settings:

| Setting | Description |
|---------|-------------|
| **Field Key** | A unique identifier used to place the field in the agreement body. Must use letters, numbers, dashes, or underscores only — no spaces. Examples: `emergency_contact`, `date_of_birth`. |
| **Display Label** | The human-readable label shown to the member as placeholder text when signing. Examples: `Emergency Contact Name`, `Date of Birth`. |
| **Type** | The kind of input the member will see. Options: **Text** (single line), **Long Text** (multi-line textarea), **Date** (date picker), **Email** (email input with validation). |
| **Required** | Toggle on (default) to make the field mandatory. Toggle off to make it optional — the member can leave it blank. |

### Adding a Field

1. In the agreement editor, find the **Fillable Fields** section.
2. Click the **+** button to add a new field row.
3. Fill in the **Field Key**, **Display Label**, **Type**, and **Required** toggle.
4. Repeat for as many fields as you need.
5. **Save the agreement** before inserting fields into the body — the editor needs the saved field keys to offer them as suggestions.

### Example Fields

| Field Key | Display Label | Type | Required |
|-----------|--------------|------|----------|
| `emergency_contact` | Emergency Contact Name | Text | Yes |
| `emergency_phone` | Emergency Contact Phone | Text | Yes |
| `medical_conditions` | Known Medical Conditions | Long Text | No |
| `participant_dob` | Participant Date of Birth | Date | Yes |
| `parent_email` | Parent/Guardian Email | Email | Yes |

---

## Inserting Fields into the Agreement Body

Once you’ve defined and saved your fillable fields, you can place them inline in the agreement text so they appear exactly where a member needs to fill them in.

### Method 1: Autocomplete (Recommended)

1. Place your cursor in the body editor where you want the field to appear.
2. Type <code>{'{{'}}</code> — an autocomplete dropdown will appear listing all your defined field keys.
3. Select the field you want to insert.
4. The editor inserts a merge tag that will render as an input when the member signs.

### Method 2: Manual Syntax

You can also type field placeholders manually using double curly braces:

```
{'{{ field_key }}'}
```

For example, in your agreement body you might write:

> I, \{\{ emergency_contact \}\}, agree to serve as the emergency contact for the above-named participant. I can be reached at \{\{ emergency_phone \}\}.

Both methods produce the same result when the member signs the agreement.

### How It Looks When Signing

When a member opens the agreement to sign:

- Each field placeholder is replaced with an inline input matching the field type (text box, textarea, date picker, or email input).
- Required fields are enforced — the member cannot submit without filling them in.
- Optional fields can be left blank.
- Inputs appear styled inline within the agreement text with a highlighted background so they’re easy to spot.

### How It Looks After Signing

On completed/viewed agreements:

- Filled fields display the member’s response inline with a subtle blue highlight.
- Empty optional fields show the label with "(empty)" in gray italic text.

---

## 📋 Publishing a New Version (Re-sign Requests)

When your agreement text changes — updated liability language, new policies, revised terms — you can publish a new version and require all active members to re-sign.

### How to Publish a New Version

1. Go to **Agreements & Waivers** in the owner dashboard.
2. Click the **"Publish New Version"** action on the agreement you want to update.
3. In the slide-over panel:
   - **Body** — edit the agreement text (pre-filled with the current version).
   - **Grace Period (days)** — how many days members have to sign before access is restricted (minimum 1, default 7).
4. Click **Publish**. The system:
   - Saves the new version (v1, v2, …) with the updated text.
   - Creates a re-sign request for every currently active member linked to that agreement's membership levels.
   - Sends each member an email with a direct link to sign.

### Member Experience

| State | Dashboard | Door Access |
|-------|-----------|-------------|
| Pending (within grace period) | Yellow banner with "Sign Now" button | Full access |
| Overdue (past deadline) | Red banner with "Sign Now" button | **Denied** (`denied-agreements`) |
| Signed | No banner | Full access |

Members who haven't signed by the deadline are held at their dashboard and denied at doors until they complete the re-sign. A reminder email is sent automatically 3 days before the deadline.

### Version History

The **Agreements & Waivers** table shows a **Latest Version** column with the current version number, publish date, and how many members have a pending re-sign request (e.g., `v2 — Jul 22, 2026 (14 pending re-sign)`).

On the **Member Details** page, each signed agreement shows a version badge (e.g., **v2**) so you can confirm which version a member signed.

### What Counts as "Active" for Re-sign Requests

Members with an `active` or `trialing` subscription on any level linked to the agreement (excluding paused or ended subscriptions) receive a re-sign request when a new version is published. Members who join after publication sign the latest version at registration and are not sent a separate re-sign request.

---

## 🔐 Important

Make sure every active **membership level** has an associated agreement. This ensures your business is protected and that members have agreed to all necessary terms.

