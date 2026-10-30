# Expense Tracker — Full-Stack React Project

Track income and expenses using React, Node.js, Express, and MongoDB.

## Features
- Dashboard showing balance, income, and expenses
- Add income or expense transactions
- Choose a category and date
- Search transactions by title/category
- Delete transactions
- Persist transactions in MongoDB when configured
- Demo mode works without MongoDB; demo data is temporary and resets when the server restarts

## Requirements
- Node.js 18+
- Optional: MongoDB local installation or MongoDB Atlas account

## Start backend
```bash
cd server
npm install
```
Copy `.env.example` to `.env`. Set `MONGO_URI` to your MongoDB connection string if you want persistent storage.

```bash
npm run dev
```
Backend runs at http://localhost:5000

## Start frontend
Open a second terminal:
```bash
cd client
npm install
npm run dev
```
Open the URL Vite displays, usually http://localhost:5173.

## MongoDB
Local MongoDB:
`MONGO_URI=mongodb://127.0.0.1:27017/expense_tracker`

For MongoDB Atlas, create a cluster and database user, allow your IP under Network Access, and put the connection string in `server/.env`.

## Structure
```text
expense-tracker-fullstack/
├── README.md
├── .gitignore
├── server/
│   ├── package.json
│   ├── .env.example
│   └── server.js
└── client/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx
        └── style.css
```

## API
- `GET /api/health`
- `GET /api/transactions`
- `POST /api/transactions`
- `DELETE /api/transactions/:id`

## Note
This is a learning/demo app. It does not connect to bank accounts, process payments, or provide financial advice. Do not commit `.env` to GitHub.
