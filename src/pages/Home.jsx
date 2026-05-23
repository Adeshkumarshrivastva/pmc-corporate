import React from "react";
import { useNavigate } from "react-router-dom";
import homeImage from "../assets/homepage.png";
import initialImage from "../assets/test/initial.png";
import advanceImage from "../assets/advanced/advance.png";

import p1 from "../assets/Athena.png";
import p2 from "../assets/pw.png";
import p3 from "../assets/sau.png";
import p4 from "../assets/universitry.png";
import AboutSection from "../components/About";
import POSHServices from "../components/PoshService"; 
import CorporateServices from "../components/CorporatService"; 
import MajorOffring from "../components/MajorOffring"; 
import ContactForm from "../components/ContactForm"; 
import Achievement from "../components/Achievement"; 


function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <div
        style={{
          marginTop: "110px",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <img
          src={homeImage}
          alt="home"
          style={{
            width: "100vw",
            height: "calc(100vh - 110px)",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Test Images Section - Right After Homepage Image */}
      <div
        style={{
          width: "100%",
          padding: "50px 40px",
          background: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "35px", color: "#2f4f46", fontWeight: "700" }}>
          Start Your Assessment
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Hidden Loss Calculator - Initial Image */}
          <div
            onClick={() => navigate("/hidden-loss")}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 10px 28px rgba(30, 58, 138, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={initialImage}
              alt="Hidden Loss Calculator"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "280px",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Advanced Productivity Test - Advance Image */}
          <div
            onClick={() => navigate("/advanced-test")}
            style={{
              background: "#fff",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 10px 28px rgba(4, 120, 87, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={advanceImage}
              alt="Advanced Productivity Test"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "280px",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "40px 40px",
          background: "#e9e8cc",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "25px" }}>
          OUR PARTNERS
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[p1, p2, p3, p4].map((img, index) => (
            <div
              key={index}
              style={{
                width: "220px",
                height: "120px",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <img
                src={img}
                alt="partner"
                style={{ maxWidth: "75%", maxHeight: "75%" }}
              />
            </div>
          ))}
        </div>

        <h2
          style={{
            fontSize: "28px",
            marginTop: "40px",
            marginBottom: "25px",
          }}
        >
          OUR SERVICES
        </h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            "Corporate Services",
            "School Services",
            "University Services",
            "Coaching Services",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "240px",
                height: "160px",
                background: "#3e5f4f",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <AboutSection />
      <POSHServices />
       <CorporateServices />
       <MajorOffring />
       <ContactForm />
       <Achievement/>
    </div>
  );
}
export default Home;