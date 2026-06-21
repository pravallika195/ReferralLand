function ShareReferral({ referral = {} }) {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="card share-section">
      <h2 className="section-title">
        Refer friends and earn more
      </h2>

      <div className="share-grid">
        <div className="share-item">
          <p className="share-label">
            YOUR REFERRAL LINK
          </p>

          <div className="share-input-group">
            <input
              className="form-input"
              type="text"
              value={referral.link || ""}
              readOnly
            />

            <button
              className="primary-btn"
              onClick={() => handleCopy(referral.link)}
            >
              Copy
            </button>
          </div>
        </div>

        <div className="share-item">
          <p className="share-label">
            YOUR REFERRAL CODE
          </p>

          <div className="share-input-group">
            <input
              className="form-input"
              type="text"
              value={referral.code || ""}
              readOnly
            />

            <button
              className="primary-btn"
              onClick={() => handleCopy(referral.code)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShareReferral;