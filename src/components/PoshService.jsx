import React, { useState } from "react";
import poshImage from "../assets/PoshService.png";

function POSHServices() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "POSH Policy Creation & Review",
      desc: "We help organizations create and review POSH policies to ensure compliance and a safe workplace environment.",
    },
    {
      title: "External Committee Member Services",
      desc: "Provide trained external members for Internal Committees as per POSH Act requirements.",
    },
    {
      title: "POSH Training",
      desc: "Conduct awareness and sensitization sessions for employees and IC members.",
    },
    {
      title: "POSH E-learning Program",
      desc: "Interactive online modules for continuous POSH learning and compliance.",
    },
    {
      title: "POSH Compliance Cloud Platform",
      desc: "Manage complaints, reports, and compliance digitally with our platform.",
    },
    {
      title: "POSH Annual Filing",
      desc: "Assist in preparing and submitting annual compliance reports smoothly.",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "60px 40px",
        background: "#e9e8cc",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "20px" }}>
        POSH SERVICES DETAILS
      </h2>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src={poshImage}
            alt="posh"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        <div style={{ flex: "1", minWidth: "300px" }}>
          {services.map((item, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <div
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                style={{
                  background: "#fff",
                  padding: "15px",
                  cursor: "pointer",
                  borderLeft: "6px solid #2d5f5d",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </div>

              {openIndex === index && (
                <div
                  style={{
                    padding: "12px 15px",
                    background: "#f5f5f5",
                    color: "#555",
                  }}
                >
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default POSHServices;