export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">

      <div className="sidebar-top">

        <div className="logo">
          <div className="logo-icon">💰</div>
          <h2>Finance Tracker</h2>
          <p>Personal Finance Manager</p>
        </div>

        <div className="profile-card">
          <div className="avatar">👤</div>
          <h4>User</h4>
          <p>Administrator</p>
        </div>

        <nav className="menu">
          <button onClick={() => setPage("dashboard")}>
            🏠 Dashboard
          </button>

          <button onClick={() => setPage("transactions")}>
            💳 Transactions
          </button>

          <button onClick={() => setPage("reports")}>
            📊 Reports
          </button>
        </nav>

      </div>

      <div className="sidebar-footer">
        <p>Version 1.0</p>
        <small>Premium Finance Tracker</small>
      </div>

    </div>
  );
}