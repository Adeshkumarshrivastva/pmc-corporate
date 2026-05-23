import React from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";
import TestCompleteButton from "../components/TestCompleteButton";

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
        <TestCompleteButton onClick={handleClick}>Check</TestCompleteButton>
      </div>
    </div>
  );
}
