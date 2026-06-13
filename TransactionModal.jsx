import { useState } from "react";

function TransactionModal({ addTransaction, onClose }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
      alert("Amount should be positive");
      return;
    }

    addTransaction({
      title,
      amount,
      category
    });

    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="modal-box">

        <h2>💰 Add Transaction</h2>

        <form onSubmit={handleSubmit}>

          <label>Title</label>

          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Amount</label>

          <input
            type="text"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <label>Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Income</option>
            <option>Expense</option>
          </select>

          <div className="modal-buttons">

            <button type="submit" className="save-btn">
              Save
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default TransactionModal;