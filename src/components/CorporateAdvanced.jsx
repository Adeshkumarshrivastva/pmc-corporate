import { useNavigate } from "react-router-dom";
import advancedImg from "../assets/Advanced.png";

function CorporateAdvanced() {
  const navigate = useNavigate();
  
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
            src={advancedImg}
            alt="Advanced Package"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            Advanced Package
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            The Advanced Package is a complete end-to-end POSH compliance solution
            designed for organizations that require comprehensive support,
            automation, and expert guidance.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            It includes full compliance management, advanced reporting,
            investigation support, and continuous monitoring to ensure your
            organization remains fully compliant at all times.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Services Included</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Complete POSH Policy Management</li>
          <li>✔ Advanced Employee & IC Training</li>
          <li>✔ End-to-End Complaint Handling</li>
          <li>✔ Investigation Support</li>
          <li>✔ Analytics & Reporting Dashboard</li>
          <li>✔ Continuous Compliance Monitoring</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Advanced?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          Best suited for large organizations or those looking for a fully
          managed compliance system with minimal manual effort and maximum
          efficiency.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ End-to-end compliance coverage</li>
          <li>✔ Automated workflows</li>
          <li>✔ Data-driven insights</li>
          <li>✔ Reduced legal and operational risk</li>
        </ul>
      </div>
    </div>
  );
}

export default CorporateAdvanced;