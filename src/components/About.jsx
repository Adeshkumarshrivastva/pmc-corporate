import aboutImage from "../assets/about.png";

function AboutSection() {
  return (
    <div
      style={{
        width: "100%",
        padding: "60px 40px",
        background: "#e9e8cc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1", minWidth: "300px" }}>
        <p style={{ color: "#2d5f5d", fontWeight: "600" }}>About us</p>

        <h2 style={{ fontSize: "36px", margin: "10px 0" }}>
          Positive Mind Care & Research Centre
        </h2>

        <p style={{ lineHeight: "1.8", color: "#555" }}>
          Positive Mind Care is a next-generation corporate wellness and workforce
          transformation partner, dedicated to enhancing employee wellbeing,
          engagement, and organizational performance. We work closely with
          organizations to design and implement holistic solutions that combine
          mental wellness, skill development, and workplace culture transformation.
          Our approach focuses on creating high-performing teams, improving
          productivity, and building a positive work environment through expert-led
          programs and measurable outcomes. With a strong emphasis on innovation and
          scalability, we empower organizations to unlock their full potential and
          drive sustainable growth.
        </p>
      </div>

      <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
        <img
          src={aboutImage}
          alt="about"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default AboutSection;