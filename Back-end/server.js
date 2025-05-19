require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();


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
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));