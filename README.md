# 🔐 Password Reset Flow Project

A full-stack application implementing a secure password reset flow with email verification, user registration, and login functionality.

---

## 🚀 Features

### ✅ Register
- Users can create a new account using their email and password.
- Passwords are securely hashed using **bcryptjs** before being stored in the database.

### 🔓 Login
- Registered users can log in with their credentials.
- Upon successful login, the backend returns a token for session management (can be extended).
- Invalid credentials return appropriate error messages.

### 📧 Forgot Password
- Users can request a password reset link via email.
- The email contains a unique **JWT token** valid for **1 hour**.

### 🔁 Reset Password
- Users can securely reset their password using the link from the email.
- Token verification ensures security and expiration handling.

### 🔒 Security
- Password hashing using **bcryptjs**
- Secure JWT tokens with **1-hour expiration**
- **CORS** is restricted to trusted frontend domains
- Environment variables handle all sensitive configuration

---

## 🛠 Tech Stack

- **Frontend:** React + Vite + Bootstrap  
- **Backend:** Node.js + Express  
- **Database:** MongoDB Atlas  
- **Email Service:** Nodemailer + Gmail SMTP  
- **Deployment:**  
  - Frontend: **Netlify**  
  - Backend: **Render**

---

## 🌐 Live Demo

- 🔗 Frontend: [https://storied-sundae-fd4ddc.netlify.app](https://storied-sundae-fd4ddc.netlify.app)  
- 🔗 Backend: [https://password-reset-4ul1.onrender.com](https://password-reset-4ul1.onrender.com)

---

## 📄 License

This project is **open source** and free to use.
