function Transactions({ transactions }) {

  return (
    <div className="transactions-container">

      <h1>💳 Transactions</h1>

      <div className="dishes-grid">

        {transactions.map((t) => (

          <div key={t.id} className="special-card">

            <div className="card-top">

              <h2>{t.title}</h2>

              <span className={`badge ${t.category}`}>
                {t.category}
              </span>

            </div>

            <div className="dish-details">

              <p>💰 ₹{t.amount}</p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Transactions;