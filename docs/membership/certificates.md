---
sidebar_position: 6
sidebar_label: Certificates
---

# Certificates

Certificates are automatically generated when a member is marked as attended for a class. Each certificate is a branded PDF. For classes that have **Sync completion to ManageRegister** ticked, members are emailed their certificate in the normal attendance workflows, except with **Mark Past as Attended**, which creates certificates without sending emails. Members can also find all of their certificates at any time on the **My Certificates** page in the member portal.

---

## How Certificates Are Created

A certificate is created when a member's booking is marked as attended. No manual setup is required: every class works this way, whether or not it has **Sync completion to ManageRegister** ticked. Each booking gets one certificate, so marking the same booking attended again doesn't create a second one.

A booking is marked as attended in places such as:

- The **Attended** button on **Reports → Bookings → Class Registrations**
- Check-in screens such as the Class Calendar check-in and **Bulk Check-In**
- **Mark Past as Attended** on a member's page (see below)
- [Checking in from ManageRegister](../calendar/classes.md#checking-in-from-manageregister) (**Account Check**)

The kiosks do not create certificates.

### Mark Past as Attended

On a member's page, open **Activity & History → Completed Classes** and use the **Mark Past as Attended** button. It creates certificates but does not send any emails, so a member isn't sent one email for every old class.

---

## Emailing Certificates

When a certificate is created in the normal attendance workflows for a class with the setting turned on (see [Which Classes Send the Email](#which-classes-send-the-email)), the member is emailed it. Certificates created with **Mark Past as Attended** never send an email. When one is sent:

- The email is titled `Your certificate: <class name>`
- The certificate is attached as a PDF
- A **View your certificates** button takes the member to their **My Certificates** page

The email is sent once per booking. Marking the same booking attended again never sends a second one. A member with no email address gets nothing, and a child account uses its parent's email address.

### Which Classes Send the Email

The email is controlled by a class setting. Go to **Calendar → Classes**, edit the class, and in the **ManageRegister POS** section tick **Sync completion to ManageRegister**. Its help text reads: "If enabled, completed bookings for this class appear in ManageRegister, and members are emailed a certificate when it's issued."

- **Off by default.** A class with the box unticked sends no certificate emails.
- Certificates are still created for every class. Only the email depends on this setting.

:::warning Classes that already have this ticked
Ticking **Sync completion to ManageRegister** also turns on certificate emails. If a class was ticked only to feed ManageRegister, its members will now receive certificate emails too. The same setting controls whether completed bookings appear in ManageRegister, so unticking it stops both.
:::

---

## Certificate PDF

Each certificate is a downloadable PDF that includes:

- Your portal **logo** at the top
- Your **business name**
- A **gold border** with an official verification seal
- The **member's name**
- The **class name** and completion date
- A **Qualification earned** line under the "For successful completion of…" sentence
- The **instructor name** (if assigned)
- A unique **certificate number**

The qualification is the class name. There is no separate field to set.

The branding pulls from your portal settings automatically.

---

## Viewing Certificates

### Members

Members find their certificates on the **My Certificates** page in the member portal. The **My Certificates** link is in the top menu, right after **Member Dashboard** (and in the phone menu too). It is hidden when the member is logged out, and on [scoreboard-only](../scoreboard-only-accounts.md) portals.

The page lists only that member's own certificates, newest first. Each one shows:

- The class name
- The completion date
- The instructor (if there is one)
- The certificate number
- A **Download PDF** button, which opens the PDF in a new tab

A member with no certificates sees "No certificates yet. They appear here after you complete a class."

:::tip
If the page has been open for a long time (about two hours), a **Download PDF** button may show an "Invalid signature" error. Reload the page and click the button again.
:::

### Staff

Staff can see a member's certificates on the member's page under **Activity & History → Certificates**, with a PDF link for each one.

Certificate download links use signed URLs to prevent unauthorized access.

---

## ManageRegister Integration

Certificates are included in the ManageRegister member API response when using the `?include=register` parameter, allowing POS integrations to access certificate data.
