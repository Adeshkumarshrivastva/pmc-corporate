import cloudImg from "../assets/poshCloud.png";

function PoshCloud() {
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
            src={cloudImg}
            alt="POSH Cloud Platform"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            POSH Compliance Cloud Platform
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            Our POSH Compliance Cloud Platform is a secure and scalable solution
            designed to simplify workplace compliance management. It enables
            organizations to manage complaints, track cases, and maintain records
            efficiently in a centralized system.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            With real-time access and automated workflows, the platform ensures
            transparency, accuracy, and full compliance with POSH regulations.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Platform Features</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Complaint management system</li>
          <li>✔ Case tracking and status updates</li>
          <li>✔ Secure document storage</li>
          <li>✔ Automated notifications and alerts</li>
          <li>✔ Dashboard and analytics</li>
          <li>✔ Role-based access control</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Use Our Platform?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          Our cloud-based platform eliminates manual processes and provides a
          structured system for managing POSH compliance. It helps organizations
          maintain proper documentation, reduce errors, and ensure timely action
          on all cases.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Centralized compliance management</li>
          <li>✔ Increased efficiency and transparency</li>
          <li>✔ Reduced paperwork and manual effort</li>
          <li>✔ Better decision-making with insights</li>
        </ul>
      </div>
    </div>
  );
}

export default PoshCloud;