---
sidebar_position: 15
---

# Sending Addresses

**Sending Addresses** controls who your CRM emails come from. Instead of every email coming from your gym's general address, each staff member can send as themselves, like *harmon@yourgym.com*, and replies go straight back to them.

Find it under **Settings → Sending Addresses**. You need the **Manage Settings** permission.

---

## How it works

There are two steps:

1. **Verify your gym's domain** (recommended). Do this once, and every address on your domain can send as itself.
2. **Add your team's addresses**, and choose who each one belongs to.

Until you add any addresses, CRM emails come from your **gym default** sender, set in [Portal Settings](./portal-settings.md#email-settings).

---

## Step 1: Verify your domain

Verifying your domain lets email from addresses like *harmon@yourgym.com* land in the inbox and not in spam.

1. Type your domain (for example `yourgym.com`) and click **Add domain**.
2. You'll see four DNS records: one **TXT** record and three **CNAME** records. Each has a **Copy** button.
3. Sign in to wherever you manage your domain's DNS (GoDaddy, Cloudflare, Squarespace, Google Domains, Namecheap, etc.) and add each record exactly as shown.
4. Come back and click **Check now**. We also check automatically every 15 minutes.

Each record shows **✓ Found** once we can see it. When all four are found, the domain shows **Verified**.

> **Tip:** Some DNS providers add your domain to the end of the host name automatically. If yours does, enter only the part before `.yourgym.com`. For example, enter `_mm-verify`, not `_mm-verify.yourgym.com`.

> **How long does it take?** Usually under an hour, occasionally up to a day.

**What the records do:**

| Record | Purpose |
|---|---|
| TXT `_mm-verify.yourgym.com` | Proves the domain belongs to **your** gym |
| CNAME `…._domainkey.yourgym.com` (×3) | Signs your email so mail providers trust it and don't mark it as spam |

> **Already sending from your domain through us?** If we set your domain up for you in the past, contact support. We can switch it on without you adding any records.

---

## Step 2: Add addresses

Fill in the **Add address** form:

- **Email**: the address to send from.
- **Name shown to recipients**: what appears in the From line, for example *Harmon*.
- **Belongs to**: the staff member this address is for. It becomes their default when they send email from the CRM.
- **Shared**: tick this for team inboxes like *info@yourgym.com*, so any staff member can send as it.

### Addresses on your verified domain

Addresses on your verified domain are **ready immediately**. Email is sent **from** that address, and replies come back to it.

### Other addresses (Gmail, Outlook, etc.)

You can also add an address that isn't on your domain, like *harmon@gmail.com*:

1. We email that address a confirmation link.
2. Its owner clicks the link and presses **Confirm this address**.
3. The address shows **Ready (replies here)**.

These emails are sent **from your gym default address** but show the person's name, for example *Harmon (Your Gym)*, and **replies go to their Gmail**. Big mail providers reject email that claims to come from a Gmail address but was sent by someone else, so this is how those emails get delivered reliably.

If the link expires (after 7 days), click **Resend** next to the address.

---

## Who can send as which address

| Role | Can send as |
|---|---|
| Owner, Manager | Any ready address |
| Staff and other roles | Their own addresses, plus any marked **Shared** |

You can change who an address belongs to, or whether it's shared, from the addresses table at any time.

---

## Removing things

- **Remove an address** to stop anyone sending as it.
- **Remove a domain** to stop sending as its addresses. The addresses on it stay in your list, but each one has to confirm by email again before it can be used.

---

## Related

- [Prospect CRM: Sending email](../communication/prospect-crm.md#sending-email)
- [Portal Settings: Email Settings](./portal-settings.md#email-settings)
