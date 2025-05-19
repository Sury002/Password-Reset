# Password Reset Flow Project

## Overview

This project implements a complete password reset flow with email verification and secure password update for a web application.

---

## Features

- **Forgot Password:**  
  Users can request a password reset link via email.  
  The link contains a unique JWT token valid for 1 hour.

- **Reset Password:**  
  Users enter a new password via the reset link.  
  Token verification ensures security and expiry handling.  
 
- **Security:**  
  - Password hashing with bcryptjs  
  - JWT tokens with 1-hour expiration  
  - CORS restricted to frontend domains  
  - Environment variables used for sensitive data  

---

## Tech Stack

- **Frontend:** React + Vite + Bootstrap  
- **Backend:** Node.js + Express  
- **Database:** MongoDB Atlas  
- **Email Service:** Nodemailer + Gmail SMTP  
- **Deployment:**  
  - Frontend: Netlify  
  - Backend: Render  

---

## Demo Links

- **Frontend:** [https://storied-sundae-fd4ddc.netlify.app](https://storied-sundae-fd4ddc.netlify.app)  
- **Backend:** [https://password-reset-4ul1.onrender.com](https://password-reset-4ul1.onrender.com)  

---

## License

This project is open source and free to use.
