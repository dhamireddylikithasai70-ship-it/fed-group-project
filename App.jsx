import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Reports from "./Reports";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  const defaultTransactions = [
    {
      id: 1,
      title: "Salary",
      amount: 85000,
      category: "Income"
    },
    {
      id: 2,
      title: "Food",
      amount: 500,
      category: "Expense"
    },
    {
      id: 3,
      title: "Shopping",
      amount: 1200,
      category: "Expense"
    }
  ];

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : defaultTransactions;
  });

  const [page, setPage] = useState("dashboard");

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      { id: Date.now(), ...newTransaction }
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    );
  };

  return (
    <ErrorBoundary>
      <div className="app-container">
        <Sidebar setPage={setPage} />

        <main className="main-content">

          {page === "dashboard" && (
            <Dashboard
              transactions={transactions}
              addTransaction={addTransaction}
              deleteTransaction={deleteTransaction}
            />
          )}

          {page === "transactions" && (
            <Transactions
              transactions={transactions}
            />
          )}

          {page === "reports" && (
            <Reports
              transactions={transactions}
            />
          )}

        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;