import React from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";

export default function HiddenLossStart() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/hidden-loss/details");
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fbff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "24px", left: "24px" }}>
        <TestBackButton />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
          padding: "32px",
          borderRadius: "32px",
          background: "rgba(255,255,255,0.94)",
          boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
          maxWidth: "360px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#0f172a",
            fontSize: "22px",
            fontWeight: 800,
            textAlign: "center",
            maxWidth: "320px",
          }}
        >
         For checking your loss
        </div>
        <button
          onClick={handleClick}
          style={{
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(30, 58, 138, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(30, 58, 138, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(30, 58, 138, 0.3)";
          }}
        >
          Check
        </button>
      </div>
    </div>
  );
}
