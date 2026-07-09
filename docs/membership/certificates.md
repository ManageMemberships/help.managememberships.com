---
sidebar_position: 6
sidebar_label: Certificates
---

# Certificates

Certificates are automatically generated when a member is marked as attended in a class report. Each certificate is a branded PDF that members can view and download from their profile.

---

## How Certificates Are Created

When staff marks a member as **Attended** on a class report, a certificate is automatically generated for that class. No manual setup is required — every attended class produces a certificate. Duplicate certificates are prevented automatically.

---

## Certificate PDF

Each certificate is a downloadable PDF that includes:

- Your portal **logo** at the top
- Your **business name**
- A **gold border** with an official verification seal
- The **member's name**
- The **class name** and completion date
- The **instructor name** (if assigned)
- A unique **certificate number**

The branding pulls from your portal settings automatically.

---

## Viewing Certificates

**Members** can find their certificates on their Profile > Activity > Certificates section. Each entry shows the class name, date, instructor, and a PDF download link.

**Staff** can also view a member's certificates from the member detail page in the owner dashboard under Activity > Certificates.

Certificate download links use signed URLs to prevent unauthorized access.

---

## ManageRegister Integration

Certificates are included in the ManageRegister member API response when using the `?include=register` parameter, allowing POS integrations to access certificate data.
