import essentialImg from "../assets/essential.png";

function CorporateEssential() {
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
            src={essentialImg}
            alt="Essential Package"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            Essential Package
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            The Essential Package is designed for organizations that are starting
            their POSH compliance journey. It provides the basic foundation required
            to ensure workplace safety and legal compliance.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            This package focuses on policy creation, awareness, and basic documentation
            support to help organizations meet minimum compliance requirements.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Services Included</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ POSH Policy Drafting</li>
          <li>✔ Basic Awareness Training</li>
          <li>✔ Compliance Checklist</li>
          <li>✔ Documentation Support</li>
          <li>✔ Initial Consultation</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Essential?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          It is perfect for small and medium organizations looking to establish
          a strong compliance base without complexity.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Quick setup</li>
          <li>✔ Cost-effective solution</li>
          <li>✔ Legal compliance foundation</li>
          <li>✔ Easy implementation</li>
        </ul>
      </div>
    </div>
  );
}

export default CorporateEssential;