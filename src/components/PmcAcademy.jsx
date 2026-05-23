import academyImg from "../assets/pmc-academy.png";

function PmcAcademy() {
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
            src={academyImg}
            alt="PMC Academy"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            PMC Academy
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            PMC Academy is dedicated to empowering individuals and organizations
            through professional learning, awareness programs, and skill
            development initiatives designed for modern workplaces and institutions.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            Our academy provides structured training programs, workshops,
            certifications, and awareness sessions that help learners build
            confidence, knowledge, and professional excellence.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Programs Include</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Professional Skill Development</li>
          <li>✔ POSH Awareness & Certification</li>
          <li>✔ Corporate Training Programs</li>
          <li>✔ Workshops & Seminars</li>
          <li>✔ Leadership & Communication Training</li>
          <li>✔ Online Learning & Certification</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose PMC Academy?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          PMC Academy focuses on practical learning experiences and industry
          relevant training programs that help participants improve their
          knowledge, workplace awareness, and professional growth.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Practical & industry-focused learning</li>
          <li>✔ Professional certification opportunities</li>
          <li>✔ Enhanced workplace skills</li>
          <li>✔ Career growth & development</li>
        </ul>
      </div>
    </div>
  );
}

export default PmcAcademy;