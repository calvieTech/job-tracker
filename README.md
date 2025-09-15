# 📌 Job Tracker App

A simple, modern job application tracker to help you stay organized during your job hunt.
Track your applications, monitor progress, and stay on top of interviews — all in one place.

---

## 🚀 Features

- **Add Job Entries** – Save company, title, description, application date, and status.
- **Track Stages** – Easily update progress (Applied, Interviewing, Offer, Rejected).
- **Notes & Reminders** – Keep track of follow-ups and interview details.
- **Upload Links** – Store resume/cover letter links for quick access.
- **Search & Filter** – Quickly find applications by company, status, or role.
- **Dashboard Analytics** – Visualize applications per week, success rate, and more.

---

## 🛠 Tech Stack

| Layer       | Technology |
|------------|------------|
| **Frontend** | React (with CSS for styling) |
| **Backend**  | Express.js + Node.js |
| **Database** | MongoDB (Mongoose) |
| **Auth (Optional)** | JSON Web Tokens (JWT) |
| **Deployment** | Vercel (frontend) + Render/Heroku (backend) |

> 💡 **Beginner-friendly option:** Start with a **frontend-only version** using `localStorage` before connecting a database.

---

## 📊 Data Model

Example job entry schema:

```js
{
  id: "uuid",
  company: "Google",
  title: "Software Engineer",
  description: "Full-stack role focusing on React and Node.js",
  applicationDate: "2025-09-09",
  status: "Interviewing", // Applied, Interviewing, Offer, Rejected
  notes: "Phone screen scheduled for next week",
  link: "https://careers.google.com/job/12345"
}
