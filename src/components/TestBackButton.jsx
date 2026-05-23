import React from "react";
import { useNavigate } from "react-router-dom";

export default function TestBackButton({ label = "Back" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      style={{
        padding: "10px 18px",
        borderRadius: "12px",
        border: "none",
        background: "#e2e8f0",
        color: "#1f2937",
        fontSize: "15px",
        fontWeight: 600,
        cursor: "pointer",
        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.08)",
      }}
    >
      ← {label}
    </button>
  );
}
