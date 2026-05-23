import coachingImg from "../assets/coaching-service.png";

function CoachingService() {
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
            src={coachingImg}
            alt="Coaching Service"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            Coaching Services
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            Our Coaching Services are specially designed for coaching institutes
            and training centers to create safe, respectful, and professional
            learning environments for students and staff members.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            We help coaching institutes implement awareness programs,
            compliance systems, and preventive measures that ensure
            discipline, safety, and trust within the institution.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Services Include</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Awareness & Safety Programs</li>
          <li>✔ POSH Training for Institutes</li>
          <li>✔ Faculty & Student Sessions</li>
          <li>✔ Policy Creation & Guidance</li>
          <li>✔ Complaint Handling Support</li>
          <li>✔ Compliance & Documentation Assistance</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Us?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          We understand the operational challenges of coaching institutes and
          provide customized compliance and awareness solutions that help
          maintain a secure and positive educational atmosphere.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Safer learning environment</li>
          <li>✔ Increased awareness among students & faculty</li>
          <li>✔ Better institutional compliance</li>
          <li>✔ Improved reputation & trust</li>
        </ul>
      </div>
    </div>
  );
}

export default CoachingService;