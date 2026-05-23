import filingImg from "../assets/poshAnnual.png";

function PoshAnnual() {
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
            src={filingImg}
            alt="POSH Annual Filing"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            POSH Annual Filing
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            POSH Annual Filing is a mandatory requirement under the POSH Act,
            where organizations must submit annual reports detailing complaints,
            actions taken, and compliance status to the appropriate authority.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            Our experts help organizations prepare accurate and timely reports,
            ensuring full compliance while minimizing errors and delays.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Services Include</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Preparation of annual POSH reports</li>
          <li>✔ Data compilation and documentation</li>
          <li>✔ Ensuring legal compliance</li>
          <li>✔ Filing reports with authorities</li>
          <li>✔ Review and validation of records</li>
          <li>✔ Guidance on reporting formats</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Us?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          We ensure error-free and timely filing with complete confidentiality.
          Our team understands regulatory requirements and helps organizations
          stay compliant without hassle.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Timely compliance with POSH regulations</li>
          <li>✔ Reduced risk of penalties</li>
          <li>✔ Accurate and well-documented reports</li>
          <li>✔ Peace of mind for organizations</li>
        </ul>
      </div>
    </div>
  );
}

export default PoshAnnual;