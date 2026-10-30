import { useEffect, useMemo, useState } from "react";

const API = "http://localhost:5000/api";
const categories = {
  income: ["Salary", "Other income", "Freelance", "Gift"],
  expense: ["Food", "Transport", "Bills", "Shopping", "Education", "Health", "Other"]
};
const money = (value) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 }).format(value);
const today = () => new Date().toLocaleDateString("en-CA");

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({ title: "", type: "expense", category: "Food", amount: "", date: today() });

  async function loadTransactions() {
    try {
      const response = await fetch(`${API}/transactions`);
      if (!response.ok) throw new Error();
      setTransactions(await response.json());
    } catch {
      setMessageType("error");
      setMessage("Cannot connect to backend. Start the server from the server folder.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { loadTransactions(); }, []);

  const income = transactions.filter((item) => item.type === "income").reduce((sum, item) => sum + Number(item.amount), 0);
  const expenses = transactions.filter((item) => item.type === "expense").reduce((sum, item) => sum + Number(item.amount), 0);
  const balance = income - expenses;
  const visible = useMemo(() => transactions.filter((item) => {
    const matchesSearch = `${item.title} ${item.category}`.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (filter === "all" || item.type === filter);
  }), [transactions, search, filter]);

  function updateForm(event) {
    const { name, value } = event.target;
    if (name === "type") {
      setForm({ ...form, type: value, category: categories[value][0] });
    } else setForm({ ...form, [name]: value });
  }

  async function addTransaction(event) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const response = await fetch(`${API}/transactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, amount: Number(form.amount) })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not add transaction.");
      setTransactions((current) => [data, ...current]);
      setForm({ title: "", type: "expense", category: "Food", amount: "", date: today() });
      setMessageType("success");
      setMessage("Transaction added successfully.");
    } catch (error) {
      setMessageType("error");
      setMessage(error.message || "Could not connect to backend.");
    } finally {
      setSaving(false);
    }
  }

  async function deleteTransaction(item) {
    if (!window.confirm(`Delete "${item.title}"?`)) return;
    try {
      const response = await fetch(`${API}/transactions/${encodeURIComponent(item._id)}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Could not delete transaction.");
      setTransactions((current) => current.filter((row) => row._id !== item._id));
      setMessageType("success");
      setMessage("Transaction deleted.");
    } catch (error) {
      setMessageType("error");
      setMessage(error.message || "Could not connect to backend.");
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">P</span><span>Penny<span>wise</span><small>PERSONAL FINANCE TRACKER</small></span></a>
        <span className="demo-pill"><i></i> Personal dashboard</span>
      </header>

      <main>
        <section className="intro"><div><span className="eyebrow">YOUR MONEY, MADE SIMPLE</span><h1>Know where your<br /><em>money goes.</em></h1><p>Keep track of what comes in and what goes out, all in one clear view.</p></div><div className="intro-art"><div className="art-circle">₹</div><span className="art-dot dot-one"></span><span className="art-dot dot-two"></span><span className="art-line"></span></div></section>

        <section className="stats">
          <article className="stat balance"><span className="stat-label">TOTAL BALANCE</span><div className="stat-top"><span className="stat-icon">₹</span><span className="stat-tag">Overview</span></div><strong>{money(balance)}</strong><small>Income minus expenses</small></article>
          <article className="stat"><span className="stat-label">TOTAL INCOME</span><div className="stat-top"><span className="stat-icon income-icon">↗</span><span className="mini-label">Money in</span></div><strong>{money(income)}</strong><small>All recorded income</small></article>
          <article className="stat"><span className="stat-label">TOTAL EXPENSES</span><div className="stat-top"><span className="stat-icon expense-icon">↘</span><span className="mini-label">Money out</span></div><strong>{money(expenses)}</strong><small>All recorded expenses</small></article>
        </section>

        <section className="content-grid">
          <section className="panel transactions">
            <div className="panel-head"><div><span className="eyebrow">ACTIVITY</span><h2>Recent transactions</h2></div><span className="count">{transactions.length} total</span></div>
            {message && <p className={`notice ${messageType}`} role="status">{message}</p>}
            <div className="tools"><label className="search"><span>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search transactions..." /></label><select value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Filter transactions"><option value="all">All types</option><option value="income">Income</option><option value="expense">Expenses</option></select></div>
            {loading ? <p className="empty">Loading transactions...</p> : visible.length === 0 ? <p className="empty">No transactions found. Add one using the form.</p> : <div className="transaction-list">{visible.map((item) => <article className="transaction" key={item._id}><span className={`transaction-icon ${item.type}`}>{item.type === "income" ? "↗" : "↘"}</span><div className="transaction-main"><strong>{item.title}</strong><small>{item.category} · {new Date(item.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })}</small></div><div className="transaction-end"><strong className={item.type}>{item.type === "income" ? "+" : "−"}{money(Number(item.amount))}</strong><button onClick={() => deleteTransaction(item)} aria-label={`Delete ${item.title}`}>Delete</button></div></article>)}</div>}
          </section>

          <section className="panel add-panel">
            <div className="panel-head"><div><span className="eyebrow">NEW ENTRY</span><h2>Add transaction</h2></div><span className="form-symbol">＋</span></div>
            <form onSubmit={addTransaction}>
              <div className="type-switch"><button type="button" className={form.type === "expense" ? "selected expense-select" : ""} onClick={() => setForm({ ...form, type: "expense", category: "Food" })}>↘ Expense</button><button type="button" className={form.type === "income" ? "selected income-select" : ""} onClick={() => setForm({ ...form, type: "income", category: "Salary" })}>↗ Income</button></div>
              <label>TRANSACTION TITLE<input name="title" required minLength="2" value={form.title} onChange={updateForm} placeholder="e.g. Weekly groceries" /></label>
              <label>AMOUNT (₹)<div className="amount-input"><span>₹</span><input name="amount" type="number" min="0.01" max="100000000" step="0.01" required value={form.amount} onChange={updateForm} placeholder="0.00" /></div></label>
              <label>CATEGORY<select name="category" value={form.category} onChange={updateForm}>{categories[form.type].map((category) => <option key={category}>{category}</option>)}</select></label>
              <label>DATE<input name="date" type="date" required value={form.date} onChange={updateForm} /></label>
              <button className="submit" disabled={saving}>{saving ? "Saving..." : "＋ Add transaction"}</button>
            </form>
            <p className="form-foot">Your entries update the dashboard totals automatically.</p>
          </section>
        </section>
      </main>
      <footer><a className="brand footer-brand" href="#"><span className="brand-mark">P</span><span>Penny<span>wise</span></span></a><span>Track thoughtfully. Spend mindfully.</span></footer>
    </div>
  );
}
