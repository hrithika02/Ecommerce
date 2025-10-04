// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Contact from "./models/Contact.js"; 
import Razorpay from "razorpay";
import crypto from "crypto";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Nodemailer setup (optional)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

console.log("SMTP_USER:", process.env.SMTP_USER);
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "✅ Loaded" : "❌ Missing");

// Contact API
app.post("/api/payment/orders", (req, res) => {
  try {
    const { amount } = req.body;
    console.log("Received amount:", amount);

    const razorpayInstance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // in paise
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        console.error("Razorpay order error:", err);
        return res.status(500).json({ message: "Order creation failed", error: err });
      }
      console.log("Razorpay order created:", order);
      res.status(200).json({ data: order });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error", error: err });
  }
});


// Razorpay order creation
app.post("/api/payment/orders", (req, res) => {
  try {
    const { amount } = req.body;
    console.log("Amount received:", amount);

    const razorpayInstance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });

    const options = {
      amount: amount * 100, // in paise
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    razorpayInstance.orders.create(options, (err, order) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Order creation failed" });
      }
      res.status(200).json({ data: order });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/payment/verify", (req, res) => {
    try{
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const expectedSignature = crypto.createHmac('sha256', process.env.KEY_SECRET)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest('hex');

        if (expectedSignature === razorpay_signature) {
            return res.status(200).json({ success: true, message: "Payment verified successfully" });
        }
        else {
            return res.status(400).json({ success: false, message: "Invalid signature sent!" });
        }
    } catch(err){
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📩 Incoming contact:", req.body); // 👈 ADD THIS

    if (!name || !email || !message) {
      console.error("❌ Missing fields");
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log("✅ Contact saved in DB");

    // Send an email
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `New Contact Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      console.log("📧 Email sent successfully");
    } catch (mailErr) {
      console.error("❌ Email sending failed:", mailErr);
    }

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact API error:", err);
    res.status(500).json({ error: "Something went wrong!" });
  }
});



// Health check
app.get("/", (req, res) => {
  res.status(200).send("Server is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
