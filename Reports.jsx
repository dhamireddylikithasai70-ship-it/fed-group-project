function Reports({ transactions }) {

  const income = transactions
    .filter((t) => t.category === "Income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.category === "Expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const savings = income - expense;

  return (
    <div className="specials-container">

      <div className="page-header">
        <h1>📊 Reports</h1>
        <p>Financial Summary</p>
      </div>

      <div className="cards">

        <div className="card">
          <h2>₹{income}</h2>
          <p>Total Income</p>
        </div>

        <div className="card">
          <h2>₹{expense}</h2>
          <p>Total Expenses</p>
        </div>

        <div className="card">
          <h2>₹{savings}</h2>
          <p>Savings</p>
        </div>

      </div>

    </div>
  );
}

export default Reports;