import franchiseImg from "../assets/pmc-franchise.png";

function PmcFranchise() {
  return (
    <div style={{ width: "100%", marginTop: "110px", paddingBottom: "60px" }}>
      
      {/* HERO SECTION */}
      <div
        style={{
          display: "flex",
          padding: "80px 60px",
          gap: "40px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src={franchiseImg}
            alt="PMC Franchise"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            PMC Franchise
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            PMC Franchise offers entrepreneurs and professionals an opportunity
            to partner with a trusted brand focused on awareness, compliance,
            training, and professional development services.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            Our franchise model is designed to provide complete business support,
            operational guidance, and growth opportunities to help franchise
            partners build successful and sustainable ventures.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Franchise Opportunities Include</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Training & Business Support</li>
          <li>✔ Brand & Marketing Assistance</li>
          <li>✔ Operational Guidance</li>
          <li>✔ Awareness & Compliance Programs</li>
          <li>✔ Professional Development Services</li>
          <li>✔ Growth & Expansion Opportunities</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Partner With PMC?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          PMC provides a strong support system, proven operational processes,
          and professional expertise that help franchise partners establish
          and grow their business with confidence.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Trusted brand association</li>
          <li>✔ Business growth opportunities</li>
          <li>✔ Complete training & support</li>
          <li>✔ Long-term professional partnership</li>
        </ul>
      </div>
    </div>
  );
}

export default PmcFranchise;