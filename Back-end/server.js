require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
const sendEmail = require("./utils/sendEmail");


app.use(cors({
  origin: ["https://your-frontend.netlify.app", "http://localhost:5173"]
}));

app.use(express.json());


app.get("/", (req, res) => {
  res.json({ 
    status: "Backend is running", 
    endpoints: {
      forgotPassword: "POST /api/auth/forgot-password",
      resetPassword: "POST /api/auth/reset-password/:token"
    }
  });
});


connectDB();
app.use("/api/auth", require("./routes/authRoutes"));
const PORT = process.env.PORT || 5000;

app.get("/test-email", async (req, res) => {
  try {
    await sendEmail("your@gmail.com", "Test Email", "<h1>Test Email</h1>");
    res.send("Email sent successfully!");
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).send("Failed to send email: " + err.message);
  }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));