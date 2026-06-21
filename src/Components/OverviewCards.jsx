function OverviewCards({ metrics = [] }) {
  return (
  <section className="card overview-section">
    <h2 className="section-title">
      Overview
    </h2>

    <div className="overview-grid">
      {metrics.map((metric) => (
        <div
          className="metric-card"
          key={metric.id}
        >
          <h3 className="metric-value">
            {metric.value}
          </h3>

          <p className="metric-label">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);
}

export default OverviewCards;