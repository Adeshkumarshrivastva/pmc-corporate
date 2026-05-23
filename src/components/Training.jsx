import trainingImg from "../assets/training.png";

function PoshTraining() {
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
            src={trainingImg}
            alt="POSH Training"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            POSH Training
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            POSH Training plays a crucial role in creating awareness about workplace
            harassment and ensuring a safe and respectful environment for all employees.
            Our training programs are designed to educate employees and management about
            their rights, responsibilities, and legal obligations under the POSH Act.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            We deliver engaging and interactive training sessions that help organizations
            build a culture of respect, inclusivity, and zero tolerance towards harassment.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Our Training Includes</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Awareness sessions for employees</li>
          <li>✔ Specialized training for Internal Committee (IC)</li>
          <li>✔ Case studies and real-life scenarios</li>
          <li>✔ Legal guidelines under POSH Act</li>
          <li>✔ Do’s and Don’ts at workplace</li>
          <li>✔ Interactive Q&A sessions</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose Our Training?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          Our training programs are practical, engaging, and tailored to your organization’s
          needs. We ensure that employees clearly understand workplace behavior standards
          while empowering them to speak up against harassment.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Increased awareness and sensitivity</li>
          <li>✔ Safer and respectful workplace culture</li>
          <li>✔ Reduced complaints and conflicts</li>
          <li>✔ Strong legal compliance</li>
        </ul>
      </div>
    </div>
  );
}

export default PoshTraining;