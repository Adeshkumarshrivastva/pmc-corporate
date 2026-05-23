import React from "react";

export default function TestCompleteButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "16px 32px",
        borderRadius: "14px",
        border: "none",
        background: "linear-gradient(135deg,#065f46,#10b981)",
        color: "#fff",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 10px 24px rgba(6,95,70,0.28)",
      }}
    >
      {children || "Complete"}
    </button>
  );
}
