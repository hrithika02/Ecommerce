// routes/contact.js
import express from "express";

const router = express.Router();

// simple route just for testing
router.post("/", (req, res) => {
  console.log("Request received:", req.body);
  res.json({ success: true, msg: "Contact route is working!" });
});

export default router;
