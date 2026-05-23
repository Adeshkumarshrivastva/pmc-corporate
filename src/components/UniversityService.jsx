import universityImg from "../assets/university-service.png";

function UniversityService() {
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
            src={universityImg}
            alt="University Service"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            University Services
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            Our University Services are designed to help colleges and
            universities create safe, inclusive, and respectful campus
            environments for students, faculty, and staff members.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            We provide awareness programs, policy support, compliance
            management, and preventive measures that strengthen institutional
            safety and promote responsible campus culture.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Services Include</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Campus Safety Awareness Programs</li>
          <li>✔ POSH Training for Universities</li>
          <li>✔ Faculty & Student Workshops</li>
          <li>✔ Policy Creation & Review</li>
          <li>✔ Complaint Handling & Guidance</li>
          <li>✔ Compliance & Documentation Support</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Us?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          We understand the diverse environment of universities and provide
          practical solutions that help institutions maintain safety,
          compliance, and trust among students and faculty members.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Safer and inclusive campus environment</li>
          <li>✔ Increased awareness & responsibility</li>
          <li>✔ Better institutional compliance</li>
          <li>✔ Stronger trust among students & faculty</li>
        </ul>
      </div>
    </div>
  );
}

export default UniversityService;