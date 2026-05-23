import intermediateImg from "../assets/intermidiate.png";

function CorporateIntermediate() {
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
            src={intermediateImg}
            alt="Intermediate Package"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            Intermediate Package
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            The Intermediate Package is designed for organizations that want to
            strengthen their POSH compliance with structured training and reporting.
            It goes beyond basic setup and ensures better implementation.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            This package includes interactive training sessions, reporting tools,
            and improved compliance tracking for growing organizations.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Services Included</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ POSH Policy Review & Updates</li>
          <li>✔ Interactive Employee Training</li>
          <li>✔ Internal Committee Guidance</li>
          <li>✔ Complaint Handling Support</li>
          <li>✔ Reporting & Documentation</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Intermediate?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          Ideal for organizations that already have basic compliance but want to
          enhance awareness, tracking, and proper implementation.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Improved compliance management</li>
          <li>✔ Better employee awareness</li>
          <li>✔ Structured reporting system</li>
          <li>✔ Reduced risk of non-compliance</li>
        </ul>
      </div>
    </div>
  );
}

export default CorporateIntermediate;