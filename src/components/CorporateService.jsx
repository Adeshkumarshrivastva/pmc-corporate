import { Link } from "react-router-dom";

import essentialImg from "../assets/essential.png";
import intermediateImg from "../assets/intermidiate.png";
import advancedImg from "../assets/Advanced.png";

function CorporateService() {
  return (
    <div style={{ width: "100%", marginTop: "110px", padding: "60px" }}>
      
      {/* TITLE */}
      <h1 style={{ fontSize: "36px", textAlign: "center", marginBottom: "50px" }}>
        Corporate Services
      </h1>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
       
        {/* ESSENTIAL */}
        <div style={cardStyle}>
          <img src={essentialImg} style={imgStyle} alt="Essential" />
          <h2>Essential</h2>
         
        <Link to="/corporate/essential" style={btnStyle}>
  Explore More
</Link>
        </div>

        {/* INTERMEDIATE */}
        <div style={cardStyle}>
          <img src={intermediateImg} style={imgStyle} alt="Intermediate" />
          <h2>Intermediate</h2>
          <Link to="/corporate/intermediate" style={btnStyle}>
            Explore More
          </Link>
        </div>
        {/* ADVANCED */}
        <div style={cardStyle}>
          <img src={advancedImg} style={imgStyle} alt="Advanced" />
          <h2>Advanced</h2>
          <Link to="/corporate/advanced" style={btnStyle}>
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}
/* STYLES */
const cardStyle = {
  background: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
};

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px",
};

const btnStyle = {
  marginTop: "15px",
  display: "inline-block",
  padding: "10px 20px",
  background: "#2d5f5d",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "6px",
};

export default CorporateService;