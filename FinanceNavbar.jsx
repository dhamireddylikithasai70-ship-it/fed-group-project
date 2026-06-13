function FinanceNavbar({ openModal, search, setSearch }) {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <h1>💰 Finance Dashboard</h1>
        <p>Manage your income and expenses</p>
      </div>

      <div className="navbar-right">

        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="add-btn" onClick={openModal}>
          + Add Transaction
        </button>

      </div>

    </div>
  );
}

export default FinanceNavbar;