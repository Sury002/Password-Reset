const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    debug: true,  
  });

  try {
    await transporter.sendMail({
      from: `"Password Reset" <${process.env.EMAIL}>`,
      to,
      subject,
      html,
    });
    console.log("Email sent to:", to);
  } catch (err) {
    console.error("Email failed:", err);
    throw err;
  }
};

module.exports = sendEmail;