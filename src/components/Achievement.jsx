function Achievement() {
  const containerStyle = {
    width: "100%",
    background: "#2f4f46",
    color: "#fff",
    padding: "80px 40px 50px",
  };

  const statsBox = {
    flex: 1,
    textAlign: "center",
  };

  const numberStyle = {
    fontSize: "40px",
    fontWeight: "700",
  };

  const labelStyle = {
    marginTop: "10px",
    fontSize: "14px",
    opacity: 0.8,
  };

  return (
    <div style={containerStyle}>
      {/* Title */}
      <h2 style={{ textAlign: "center", fontSize: "32px" }}>
        Achievement
      </h2>

      {/* Description */}
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "15px auto 50px",
          fontSize: "14px",
          lineHeight: "1.6",
          opacity: 0.9,
        }}
      >
        International Medical College Hospital a bed multispecialty tertiary care referral hospital with 
        Outpatient and Inpatient services. It has world-class treatment
      </p>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "80px",
          gap: "20px",
        }}
      >
        <div style={statsBox}>
          <div style={numberStyle}>165+</div>
          <div style={labelStyle}>Support Given</div>
        </div>

        <div style={statsBox}>
          <div style={numberStyle}>254+</div>
          <div style={labelStyle}>Clients Rating</div>
        </div>

        <div style={statsBox}>
          <div style={numberStyle}>2M+</div>
          <div style={labelStyle}>Money Saved</div>
        </div>

        <div style={statsBox}>
          <div style={numberStyle}>145+</div>
          <div style={labelStyle}>Happy Clients</div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* Logo */}
        <div>
          <h3 style={{ marginBottom: "10px" }}>Positive</h3>
          <p style={{ opacity: 0.7 }}>Mind Care</p>
        </div>

        {/* Links */}
        <div>
          <h4>Useful Links</h4>
          <p>Our Services</p>
          <p>Corporate Services</p>
          <p>Posh</p>
          <p>PMC Academy</p>
          <p>Our Apps</p>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <p>contact@positivemindcare.com</p>
          <p>+91-8920530832</p>
          <p>
            804, Unitech Arcadia Mall, South City-II, Sector-49, Gurugram.
          </p>
        </div>

        {/* Social */}
        <div>
          <h4>Follow Us</h4>
          <div style={{ display: "flex", gap: "10px" }}>
            <span>F</span>
            <span>T</span>
            <span>I</span>
            <span>Y</span>
            <span>In</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;