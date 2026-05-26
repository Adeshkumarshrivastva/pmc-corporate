import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";

function AdvancedTestDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // ===== BACKEND INTEGRATION - COMMENTED FOR STATIC DEPLOYMENT =====
      // const response = await fetch("http://localhost:3002/api/test-details", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ ...formData, testType: 'advanced-test' }),
      // });

      // const data = await response.json();

      // if (data.success) {
      //   // Save user details in localStorage for later use
      //   localStorage.setItem("testUserDetails", JSON.stringify(formData));
        
      //   // Save a dummy productivity score for dialog page
      //   const dummyScore = {
      //     finalScore: 65,
      //     totalScore: 52,
      //   };
      //   localStorage.setItem("productivityScore", JSON.stringify(dummyScore));
        
      //   // Navigate to Dialog page (watch animation)
      //   navigate("/advanced-test/dialog");
      // } else {
      //   setError(data.message || "Failed to submit details");
      // }
      // ===== END BACKEND INTEGRATION =====

      // STATIC VERSION - Direct navigation without backend
      localStorage.setItem("testUserDetails", JSON.stringify(formData));
      
      const dummyScore = {
        finalScore: 65,
        totalScore: 52,
      };
      localStorage.setItem("productivityScore", JSON.stringify(dummyScore));
      
      // Simulate loading
      setTimeout(() => {
        navigate("/advanced-test/dialog");
      }, 500);

    } catch (err) {
      console.error("Error submitting details:", err);
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fbff)",
        padding: "120px 20px 70px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "auto",
          background: "#fff",
          borderRadius: "28px",
          padding: "45px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ marginBottom: "24px" }}>
          <TestBackButton />
        </div>

        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h1
            style={{
              color: "#047857",
              marginBottom: "12px",
              fontSize: "36px",
            }}
          >
          </h1>
          <p
            style={{
              color: "#047857",
              fontSize: "16px",
              lineHeight: "1.6",
              fontWeight: "600",
            }}
          >
           please fill these details
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Name */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #dbe4f0",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@company.com"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #dbe4f0",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                pattern="[0-9+\s-]+"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #dbe4f0",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#333",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="Your company name"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #dbe4f0",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {error && (
            <p
              style={{
                color: "#b91c1c",
                marginTop: "16px",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              marginTop: "28px",
              padding: "16px",
              border: "none",
              borderRadius: "14px",
              background: loading
                ? "#94a3b8"
                : "linear-gradient(135deg, #1e3a8a, #2563eb)",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {loading ? "Submitting..." : "Continue to Test"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdvancedTestDetails;
