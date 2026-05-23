import { useState } from "react";
import { createZohoLead, isZohoConfigured } from "../utils/zoho";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginTop: "6px",
    borderRadius: "6px",
    border: "1px solid #d0d0d0",
    background: "#d3d3d3",
    outline: "none",
    fontSize: "14px",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Validation
    if (!formData.firstName || !formData.email || !formData.phone) {
      setStatus({
        type: "error",
        message: "Please fill all required fields",
      });
      setLoading(false);
      return;
    }

    try {
      // Check if Zoho is configured
      if (isZohoConfigured()) {
        // Submit to Zoho CRM
        await createZohoLead({
          firstName: formData.firstName,
          lastName: formData.lastName,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: "Website Contact Form",
        });

        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        // Fallback: Just show success (or implement email sending)
        console.log("Form Data:", formData);
        setStatus({
          type: "success",
          message: "Thank you! Your message has been received.",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#dcd8b5",
        padding: "80px 20px",
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          color: "#2f4f46",
          marginBottom: "50px",
          fontWeight: "600",
        }}
      >
        Get in Touch with Us
      </h2>

      {/* Zoho Status */}
      {!isZohoConfigured() && (
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto 20px",
            padding: "12px",
            background: "#fff3cd",
            border: "1px solid #ffc107",
            borderRadius: "6px",
            color: "#856404",
            fontSize: "14px",
          }}
        >
          ⚠️ Zoho CRM: Not configured. Form data will be logged to console.
        </div>
      )}

      {/* Status Message */}
      {status.message && (
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto 20px",
            padding: "12px",
            background: status.type === "success" ? "#d4edda" : "#f8d7da",
            border: `1px solid ${status.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
            borderRadius: "6px",
            color: status.type === "success" ? "#155724" : "#721c24",
            fontSize: "14px",
          }}
        >
          {status.message}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {/* Row 1 */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginBottom: "25px",
          }}
        >
          <div style={{ flex: 1 }}>
            <label>
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name here"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ flex: 1 }}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name here"
              style={inputStyle}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginBottom: "25px",
          }}
        >
          <div style={{ flex: 1 }}>
            <label>
              Email Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Add email"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ flex: 1 }}>
            <label>
              Phone No <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No."
              style={inputStyle}
              required
            />
          </div>
        </div>

        {/* Textarea */}
        <div style={{ marginBottom: "25px" }}>
          <label>Comments / Questions</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Comments"
            style={{
              ...inputStyle,
              height: "150px",
              resize: "none",
            }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            background: loading ? "#6b8b7f" : "#2f4f46",
            color: "#fff",
            padding: "12px 28px",
            border: "none",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;