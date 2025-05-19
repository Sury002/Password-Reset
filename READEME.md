Password Reset Flow
The task is to implement correct password reset flow with email verification and proper update of new password in the database for web page.

🔄 Backend Flow
1️⃣ Registration
Register new user. If already existing, throw error message.

If valid, update in MongoDB database and navigate to login page.

2️⃣ Login
Authenticate existing user.

Throw error if:

Email is not registered

Password is incorrect

3️⃣ Forgot Password
User clicks "Forgot Password" link in login page.

System sends email with:

Reset password link

Unique JWT token (valid for 1 hour)

4️⃣ Reset Password
User enters new password with token verification.

If token matches:

Updates password in database (hashed)

Navigates to Login Page

If token invalid/expired: Throws error

🛠️ Technical Stack
Component	Technology Used
Frontend	React + Vite + Bootstrap
Backend	    Node.js + Express
Database	MongoDB Atlas
Email	    Nodemailer + Gmail SMTP
Deployment	Netlify (Frontend) + Render (Backend)

Security Features
Password hashing with bcryptjs
JWT token expiration (1 hour)
CORS restricted to frontend domains
Environment variables for sensitive data