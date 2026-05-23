import externalImg from "../assets/external.png";

function ExternalCommittee() {
  return (
    <div style={{ width: "100%", marginTop: "110px", paddingBottom: "60px" }}>
      
      {/* HERO SECTION (SAME STYLE AS POSH) */}
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
            src={externalImg}
            alt="External Committee"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            External Committee Member Services
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            Our External Committee Member services provide independent and unbiased
            support to organizations for handling workplace complaints under the POSH Act.
            We ensure fair inquiry processes while maintaining complete confidentiality.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            Our experts act as external members in Internal Committees, helping maintain
            transparency, compliance, and professionalism throughout the investigation process.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION (SAME STYLE) */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Services Include</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Acting as External Committee Member</li>
          <li>✔ Handling workplace complaints professionally</li>
          <li>✔ Conducting unbiased investigations</li>
          <li>✔ Maintaining confidentiality & documentation</li>
          <li>✔ Ensuring POSH Act compliance</li>
          <li>✔ Supporting IC in decision-making</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Us?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          We provide experienced professionals who ensure neutrality and fairness in every case.
          Our structured approach helps organizations handle sensitive issues with confidence
          while maintaining compliance with legal standards.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Independent and unbiased decision-making</li>
          <li>✔ Strengthened POSH compliance</li>
          <li>✔ Reduced legal risks</li>
          <li>✔ Improved workplace trust & safety</li>
        </ul>
      </div>
    </div>
  );
}

export default ExternalCommittee;