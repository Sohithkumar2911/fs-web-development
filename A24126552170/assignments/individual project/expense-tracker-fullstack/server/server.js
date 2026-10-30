require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const transactionSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  type: { type: String, enum: ["income", "expense"], required: true },
  category: { type: String, required: true, trim: true },
  amount: { type: Number, required: true, min: 0.01 },
  date: { type: Date, required: true, default: Date.now }
});
const Transaction = mongoose.model("Transaction", transactionSchema);

const demoTransactions = [
  { _id: "demo-1", title: "Monthly salary", type: "income", category: "Salary", amount: 32000, date: "2026-10-01" },
  { _id: "demo-2", title: "Groceries", type: "expense", category: "Food", amount: 1850, date: "2026-10-04" },
  { _id: "demo-3", title: "Bus pass", type: "expense", category: "Transport", amount: 650, date: "2026-10-08" },
  { _id: "demo-4", title: "Freelance work", type: "income", category: "Other income", amount: 4500, date: "2026-10-12" },
  { _id: "demo-5", title: "Internet bill", type: "expense", category: "Bills", amount: 799, date: "2026-10-16" }
];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", database: mongoose.connection.readyState === 1 ? "connected" : "demo mode" });
});

app.get("/api/transactions", async (req, res) => {
  try {
    const items = mongoose.connection.readyState === 1
      ? await Transaction.find().sort({ date: -1, _id: -1 })
      : [...demoTransactions].sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Could not load transactions." });
  }
});

app.post("/api/transactions", async (req, res) => {
  try {
    const title = String(req.body.title || "").trim();
    const type = String(req.body.type || "");
    const category = String(req.body.category || "").trim();
    const amount = Number(req.body.amount);
    const date = req.body.date;

    if (title.length < 2 || !["income", "expense"].includes(type) || !category ||
        !Number.isFinite(amount) || amount <= 0 || amount > 100000000 ||
        !date || Number.isNaN(Date.parse(date))) {
      return res.status(400).json({ message: "Enter a title, type, category, positive amount, and valid date." });
    }

    const item = { title, type, category, amount: Math.round(amount * 100) / 100, date: new Date(date) };
    if (mongoose.connection.readyState === 1) {
      const saved = await Transaction.create(item);
      return res.status(201).json(saved);
    }
    const saved = { ...item, _id: randomUUID(), date: date.slice(0, 10) };
    demoTransactions.unshift(saved);
    return res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not save transaction." });
  }
});

app.delete("/api/transactions/:id", async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const removed = await Transaction.findByIdAndDelete(req.params.id);
      if (!removed) return res.status(404).json({ message: "Transaction not found." });
    } else {
      const index = demoTransactions.findIndex((item) => item._id === req.params.id);
      if (index < 0) return res.status(404).json({ message: "Transaction not found." });
      demoTransactions.splice(index, 1);
    }
    res.json({ message: "Transaction deleted." });
  } catch (error) {
    res.status(400).json({ message: "Invalid transaction ID." });
  }
});

async function start() {
  if (process.env.MONGO_URI) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected");
    } catch (error) {
      console.error("MongoDB connection failed; starting in demo mode:", error.message);
    }
  } else {
    console.log("MONGO_URI not set; starting in demo mode.");
  }
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}
start();
