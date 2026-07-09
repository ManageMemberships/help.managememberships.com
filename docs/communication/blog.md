---
sidebar_position: 2
---

# Blog

The Blog Management tool allows you to publish content to your member portal via a simple interface. You can create posts, include images and rich content, restrict visibility to members only, and control whether the blog is enabled or disabled entirely.

This tool is available in the **owner dashboard** for businesses using the member portal system.

---

## 📢 Enabling or Disabling the Blog

You can enable or disable blog functionality for your portal by clicking either:

- **Enable Blog Posting** – Turns on the blog feature for your subdomain  
- **Disable Blog Posting** – Turns it off and hides the `/blog` page entirely

These actions appear as buttons in the blog admin interface and require confirmation.

---

## ✍️ Creating a Blog Post

Click **Create** to open the blog post editor. The following fields are available:

| Field         | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **Title**     | Title of your blog post. Automatically generates a slug.                   |
| **Slug**      | URL-friendly version of the title. Must be unique for your subdomain.      |
| **Image**     | Optional featured image (uploaded and stored per subdomain).               |
| **Content**   | Rich text content editor with support for images and file attachments.     |
| **Member Only** | If enabled, post will only show to logged-in members.                    |
| **Tags**      | Categorize your post with existing tags or create new ones.                |
| **Published** | Controls whether the post is publicly visible.                             |

---

### 📩 Waitlist Interest Tags

You can embed a waitlist interest tag directly into a blog post by inserting:

``{{ your_topic }}``

For example, typing `{{yoga}}` will embed an interest form that flags responses as interested in "yoga". These responses appear in the **Waitlist** section of your admin dashboard.

---

## 🧾 Managing Blog Posts

Each blog post in the table view shows:

- **Title**
- **Slug**
- **Published** (toggle)
- **Member Only** (toggle)
- **Created At**

### Actions available:

| Action         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **Edit**       | Opens a side panel with the full edit form                                 |
| **View**       | Opens the live blog post in a new tab (based on your subdomain and slug)   |
| **Toggle Published** | Instantly un/publish the post inline                                  |
| **Toggle Member Only** | Restrict or unrestrict post visibility to members                   |

---

## 🌐 Blog URL Structure

Once enabled, your blog is available at:

> `your-subdomain.managememberships.com/blog`

Individual posts live at:

> `your-subdomain.managememberships.com/blog/{slug}`


---

## 🔐 Member-Only Posts

If you mark a post as **member only**, it will only be visible to logged-in users of your portal. Logged-out visitors will not see it listed or be able to access the URL directly.

---

## 📁 File Uploads and Attachments

- Blog images are stored under:  
  `your-subdomain/blog/`
  
- File attachments added via the Rich Editor are stored under:  
  `your-subdomain/blog_attachments/`

You can safely upload PDFs, images, and other media directly into your posts.
