import schoolImg from "../assets/school-service.png";

function SchoolService() {
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
            src={schoolImg}
            alt="School Service"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            School Services
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            Our School Services are designed to create safe, respectful,
            and inclusive learning environments for students, teachers,
            and staff members. We help educational institutions implement
            effective awareness, compliance, and safety systems.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            Through structured training programs, policy support, and
            preventive measures, we assist schools in maintaining
            discipline, awareness, and legal compliance.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Services Include</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ POSH Awareness Programs for Schools</li>
          <li>✔ Student Safety & Protection Training</li>
          <li>✔ Teacher & Staff Awareness Sessions</li>
          <li>✔ Policy Creation & Review</li>
          <li>✔ Complaint Handling Support</li>
          <li>✔ Compliance & Documentation Assistance</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Us?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          We understand the unique challenges educational institutions face.
          Our team provides customized solutions that promote a secure and
          positive environment while ensuring compliance with regulations.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Safer school environment</li>
          <li>✔ Increased awareness among students & staff</li>
          <li>✔ Improved institutional compliance</li>
          <li>✔ Better trust & reputation</li>
        </ul>
      </div>
    </div>
  );
}

export default SchoolService;