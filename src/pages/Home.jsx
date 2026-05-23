import React from "react";
import homeImage from "../assets/homepage.png";
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
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <div
        style={{
          marginTop: "90px",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <img
          src={homeImage}
          alt="home"
          style={{
            width: "100vw",
            height: "calc(100vh - 90px)",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          padding: "50px 40px",
          background: "#e9e8cc",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
          OUR PARTNERS
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[p1, p2, p3, p4].map((img, index) => (
            <div
              key={index}
              style={{
                width: "250px",
                height: "140px",
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
                style={{ maxWidth: "80%", maxHeight: "80%" }}
              />
            </div>
          ))}
        </div>

        <h2
          style={{
            fontSize: "32px",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          OUR SERVICES
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
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
                width: "260px",
                height: "180px",
                background: "#3e5f4f",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: "10px",
                fontSize: "20px",
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