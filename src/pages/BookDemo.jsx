import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";

function BookDemo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    designation: "",
    workEmail: "",
    mobileNumber: "",
    companySize: "",
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
      // const response = await fetch("http://localhost:3002/api/book-demo", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      // const data = await response.json();

      // if (data.success) {
      //   alert("Demo booking successful! Our team will contact you soon.");
      //   navigate("/");
      // } else {
      //   setError(data.message || "Failed to book demo");
      // }
      // ===== END BACKEND INTEGRATION =====

      // STATIC VERSION - Direct success without backend
      setTimeout(() => {
        alert("Demo booking successful! Our team will contact you soon.");
        navigate("/");
      }, 500);

    } catch (err) {
      console.error("Error booking demo:", err);
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
          maxWidth: "700px",
          margin: "89px",
          background: "#fff",
          borderRadius: "24px",
          padding: "40px",
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
              fontSize: "32px",
              fontWeight: "800",
            }}
          >
            Book Your Demo
          </h1>
          <p
            style={{
              color: "#6b7280",
              fontSize: "16px",
              lineHeight: "1.6",
              fontWeight: "600",
            }}
          >
            Schedule an On-Site Workforce Intelligence Demo
          </p>
          <p
            style={{
              color: "#047857",
              fontSize: "14px",
              marginTop: "8px",
            }}
          >
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Full Name */}
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
                name="fullName"
                value={formData.fullName}
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

            {/* Designation */}
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
                Designation *
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                placeholder="Your job title/designation"
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

            {/* Work Email */}
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
                Work Email *
              </label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
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

            {/* Mobile Number */}
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
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
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

            {/* Company Size */}
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
                Company Size *
              </label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid #dbe4f0",
                  fontSize: "16px",
                  outline: "none",
                  boxSizing: "border-box",
                  cursor: "pointer",
                }}
              >
                <option value="">Select company size</option>
                <option value="1-50">1-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
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
                : "linear-gradient(135deg, #047857, #10b981)",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {loading ? "Booking..." : "📅 Book Demo Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookDemo;
