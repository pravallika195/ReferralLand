function ServiceSummary({ serviceSummary = {} }) {
  return (
  <section className="card summary-section">
    <h2 className="section-title">
      Service summary
    </h2>

    <div className="summary-content">
      <div className="summary-item">
        <span className="summary-label">SERVICE</span>
        <p className="service">{serviceSummary.service}</p>
      </div>

     <div className="summary-item">
        <span className="summary-label">YOUR REFERRALS</span>
        <p>{serviceSummary.yourReferrals}</p>
      </div>

      <div className="summary-item">
        <span className="summary-label">ACTIVE REFERRALS</span>
        <p>{serviceSummary.activeReferrals}</p>
      </div>

      <div className="summary-item">
        <span className="summary-label">TOTAL REF.EARNINGS</span>
        <p>{serviceSummary.totalRefEarnings}</p>
      </div>
    </div>
  </section>
);
}

export default ServiceSummary;