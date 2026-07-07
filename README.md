# 🎓 Skillora – Full Stack Course Selling Platform

Skillora is a full-stack MERN Course Selling Platform that allows users to explore, purchase, and manage online courses while providing administrators with a dedicated dashboard to create and manage course content.

Built with **React, Node.js, Express, MongoDB, JWT Authentication, and Tailwind CSS**.

---

## 🚀 Live Demo

🌐 Frontend: https://your-vercel-url.vercel.app

⚙️ Backend API: https://your-render-url.onrender.com

---

# ✨ Features

## 👤 User Features

- Secure User Authentication (JWT)
- User Signup & Login
- Browse Available Courses
- Search Courses
- Purchase Courses
- View Purchased Courses
- Protected Routes
- Responsive UI
- Modern Landing Page
- Testimonials Section
- FAQ Section

---

## 🛡️ Admin Features

- Admin Authentication
- Admin Signup & Login
- Secure Admin Dashboard
- Create New Courses
- Edit Existing Courses
- Delete Courses
- Dashboard Statistics
- Protected Admin Routes

---

# 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

### Deployment

- Vercel
- Render

---

# 📂 Project Structure

```
Skillora

├── Backend
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   ├── server.js
│   └── package.json
│
├── Frontend
│   ├── src
│   │   ├── admin
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
```

---

# 🔐 Authentication

Skillora uses **JWT Authentication** with Role-Based Access Control.

### User Authentication

- User Signup
- User Login
- Purchase Courses
- View Purchased Courses

### Admin Authentication

- Admin Signup
- Admin Login
- Create Courses
- Edit Courses
- Delete Courses


# 📌 API Endpoints

## User

| Method | Endpoint |
|---------|----------|
| POST | `/user/signup` |
| POST | `/user/signin` |
| GET | `/user/courses` |
| POST | `/user/purchase/:courseId` |
| GET | `/user/purchases` |

---

## Admin

| Method | Endpoint |
|---------|----------|
| POST | `/admin/signup` |
| POST | `/admin/signin` |
| GET | `/admin/courses` |
| POST | `/admin/create-course` |
| PUT | `/admin/courses/:id` |
| DELETE | `/admin/courses/:id` |

---

# 📈 Future Improvements

- 💳 Razorpay / Stripe Integration
- ⭐ Course Ratings & Reviews
- 📂 Course Categories
- ❤️ Wishlist
- 👤 User Profile
- 📹 Video Streaming
- 📜 Certificates
- 📧 Email Verification
- 🔑 Forgot Password

---

# 📚 What I Learned

- Full Stack MERN Development
- REST API Design
- JWT Authentication
- Role-Based Authorization
- Protected Routes
- CRUD Operations
- MongoDB & Mongoose
- React Hooks
- Axios Interceptors
- Tailwind CSS
- Deployment with Vercel & Render

---

# 👨‍💻 Author

**Amit Awasthi**

GitHub: https://github.com/amitawasthi11

LinkedIn: *(Add your LinkedIn profile here)*

---

# ⭐ Support

If you found this project useful, please consider giving it a **⭐ Star** on GitHub.
