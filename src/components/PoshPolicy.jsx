import poshImg from "../assets/posh.png"; 

function PoshPolicy() {
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
            src={poshImg}
            alt="POSH"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            POSH Policy Creation & Review
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            The Prevention of Sexual Harassment (POSH) policy is a critical
            framework that ensures a safe, respectful, and inclusive workplace.
            Our POSH Policy Creation & Review services help organizations build
            strong compliance systems aligned with legal standards while
            fostering a culture of dignity and equality.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            We design customized POSH policies tailored to your organization’s
            structure and industry, ensuring clarity, compliance, and effective
            implementation.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Services Include</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Drafting customized POSH policies</li>
          <li>✔ Reviewing existing policies for compliance</li>
          <li>✔ Ensuring alignment with legal guidelines</li>
          <li>✔ Creating Internal Committee frameworks</li>
          <li>✔ Employee awareness and training modules</li>
          <li>✔ Documentation and reporting support</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Us?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          We bring expertise, confidentiality, and a deep understanding of
          workplace dynamics to help organizations maintain a safe environment.
          Our team ensures that your policies are not only legally compliant but
          also practical and easy to implement.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Legal compliance with POSH Act</li>
          <li>✔ Safer workplace environment</li>
          <li>✔ Increased employee trust</li>
          <li>✔ Reduced organizational risk</li>
        </ul>
      </div>
    </div>
  );
}

export default PoshPolicy;