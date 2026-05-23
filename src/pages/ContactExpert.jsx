import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";

export default function ContactExpert() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fbff)",
        padding: "120px 20px 70px 20px",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          background: "#fff",
          borderRadius: "24px",
          padding: "50px 40px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <div style={{ position: "absolute", top: "24px", left: "24px" }}>
          <TestBackButton />
        </div>

        <div
          style={{
            width: "100px",
            height: "100px",
            background: "linear-gradient(135deg, #047857, #10b981)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 30px",
            fontSize: "48px",
          }}
        >
          📞
        </div>

        <h1
          style={{
            color: "#047857",
            fontSize: "32px",
            fontWeight: "800",
            marginBottom: "15px",
          }}
        >
          Talk to Our Workforce Expert
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "16px",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          Our experts are available 24×7 to help you with workforce productivity solutions
        </p>

        <div
          style={{
            background: "#f0fdf4",
            padding: "30px",
            borderRadius: "16px",
            marginBottom: "30px",
            border: "2px solid #10b981",
          }}
        >
          <p
            style={{
              color: "#6b7280",
              fontSize: "14px",
              marginBottom: "10px",
              fontWeight: "600",
            }}
          >
          </p>
          <a
            href="tel:+917668430576"
            style={{
              color: "#047857",
              fontSize: "36px",
              fontWeight: "bold",
              textDecoration: "none",
              display: "block",
              marginBottom: "10px",
            }}
          >
            7668430576
          </a>
          <p
            style={{
              color: "#10b981",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            ✓ Available 24×7
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <a
            href="tel:+917668430576"
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #047857, #10b981)",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "none",
              display: "block",
              textAlign: "center",
            }}
          >
            📞 Call Now
          </a>

          <button
            onClick={() => navigate("/")}
            style={{
              width: "100%",
              padding: "14px",
              border: "2px solid #047857",
              borderRadius: "12px",
              background: "#fff",
              color: "#047857",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
