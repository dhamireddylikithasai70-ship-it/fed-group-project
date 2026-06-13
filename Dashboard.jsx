import { useState } from "react";
import FinanceNavbar from "./FinanceNavbar";
import TransactionModal from "./TransactionModal";

function Dashboard({
  transactions,
  addTransaction,
  deleteTransaction
}) {

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalBalance = transactions.reduce(
    (sum, t) =>
      t.category === "Income"
        ? sum + Number(t.amount)
        : sum - Number(t.amount),
    0
  );

  const income = transactions
    .filter((t) => t.category === "Income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.category === "Expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  return (
    <>
      <FinanceNavbar
        openModal={() => setShowModal(true)}
        search={search}
        setSearch={setSearch}
      />

      <div className="cards">

        <div className="card">
          <h2>₹{totalBalance}</h2>
          <p>Balance</p>
        </div>

        <div className="card">
          <h2>₹{income}</h2>
          <p>Income</p>
        </div>

        <div className="card">
          <h2>₹{expense}</h2>
          <p>Expenses</p>
        </div>

      </div>

      <div className="dashboard-transactions">

        <h2>Recent Transactions</h2>

        {filteredTransactions.map((t) => (

          <div key={t.id} className="upcoming-card">

            <h3>{t.title}</h3>

            <p>₹{t.amount}</p>

            <span>{t.category}</span>

            <button
              className="delete-btn"
              onClick={() => deleteTransaction(t.id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

      {showModal && (
        <TransactionModal
          addTransaction={addTransaction}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Dashboard;