---
sidebar_position: 3
---

# Digital Cards


Your business can offer members a **digital membership card** that they can store in their **Apple Wallet** or **Google Pay**. These cards are fully branded with your logo, colors, and optional footer design.

---

## 📲 What Does the Digital Card Do?

Once configured, each member receives a **personalized membership card** that:

- Can be added to their **Apple Wallet (iPhone)** or **Google Pay (Android)**
- Displays their **name**, your business **branding**, and other key details
- Includes a **QR code** that can be scanned for:

  - ✅ **Access control** at doors equipped with QR scanners
  - ✅ **Class check-ins** at the kiosk tablet

---

## 🧠 How It Works

1. **Set Up Your Branding**  
   In the Card Management area, you can:
   - Choose a background color
   - Upload a square logo (1:1 ratio recommended)
   - Upload an optional footer graphic

2. **Generate Test Cards**  
   Use the “Test URL” feature to preview how the card appears in Google Pay and Apple Wallet.

3. **Members Automatically Receive Their Card**  
   After setup, each member can access their digital card from their portal or receive a link via email/text.

---

## 🔐 Integration With Access Control

If you're using our **door access system with QR code scanners**, the digital card lets members unlock doors by simply scanning their wallet pass.

---

## 📆 Class Check-Ins

You can also place a QR scanner at your **self-check-in kiosk**, allowing members to scan their card and register attendance for scheduled classes.

---

## 🔑 QR Code Types

Card Management lets you choose what your members' QR codes actually contain. All three types work at doors and kiosks.

| Type | What the QR contains | Best for |
|------|----------------------|----------|
| **Email (legacy)** | The member's email address | Default — how cards have always worked |
| **Static** | An opaque, non-guessable token | Better security with no member impact — codes reveal nothing about the member and can't be guessed from a known email |
| **Dynamic** | A rotating code that changes every hour | Maximum security — a photographed or shared QR code stops working within the hour |

### Things to know

- **Existing portals stay on Email** — nothing changes until you change this setting.
- **Apple Wallet doesn't support rotating codes.** In Dynamic mode, Apple Wallet passes are unavailable — iPhone members scan the QR code from their member dashboard (or the mobile app) instead. Google Wallet cards fall back to a static, non-expiring code.
- **The mobile app always shows the right code** for your portal's setting and refreshes automatically in Dynamic mode.

### Allow Legacy Email QR Codes at Doors

When you switch from Email to Static or Dynamic, wallet cards your members added **before** the switch still contain their old email-based code. The **"Allow legacy email QR codes at doors"** toggle (on by default) keeps those old cards working during the transition.

Once your members have re-added their wallet cards or use the mobile app, turn the toggle off to fully retire email-based codes — after that, anyone scanning an old email QR is denied (and the attempt appears in your Door Access report as `denied-legacy-email`).

:::tip Recommended rollout
Switch the QR type, leave legacy email codes **enabled** for a few weeks, remind members to re-add their wallet cards, then disable legacy codes.
:::

---

## 🎨 Customization Options

| Field              | Description                                      |
|--------------------|--------------------------------------------------|
| **Background Color** | The primary color of the card background.        |
| **Display Name**     | The name or label shown on the card (e.g. Gym Name). |
| **Logo**             | Your business logo. Recommended 1:1 aspect ratio. |
| **Footer**           | Optional image shown at the bottom of the card.  |

