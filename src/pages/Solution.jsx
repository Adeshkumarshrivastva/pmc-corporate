import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";
import advance1 from "../assets/advanced/advance1.jpeg";
import advance2 from "../assets/advanced/advance2.jpeg";
import advance3 from "../assets/advanced/advance3.jpeg";
import advance4 from "../assets/advanced/advance4.jpeg";

export default function Solution() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const images = [advance1, advance2, advance3, advance4];

  React.useEffect(() => {
    if (!isAutoRotating) return;
    
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, [isAutoRotating, images.length]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fbff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px 70px 20px",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "140px",
          left: "24px",
          zIndex: 1,
        }}
      >
        <TestBackButton />
      </div>

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "#fff",
          borderRadius: "28px",
          padding: "40px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1
            style={{
              color: "#047857",
              marginBottom: "12px",
              fontSize: "32px",
              fontWeight: "800",
            }}
          >
            Our Solution Package
          </h1>
          <p
            style={{
              color: "#6b7280",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            Comprehensive workforce Profitability improvement solutions
          </p>
        </div>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h3
            style={{
              color: "#047857",
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            ATTENTION PLEASE
          </h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <button
              onClick={() => {
                setIsAutoRotating(false);
                setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
                setTimeout(() => setIsAutoRotating(true), 5000);
              }}
              style={{
                background: "#047857",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                flexShrink: 0,
              }}
            >
              ←
            </button>

            <div
              style={{
                maxWidth: "700px",
                width: "100%",
              }}
            >
              <style>
                {`
                  @keyframes carouselClose {
                    0% {
                      opacity: 1;
                      transform: scaleX(1);
                    }
                    50% {
                      opacity: 0;
                      transform: scaleX(0);
                    }
                    51% {
                      opacity: 0;
                      transform: scaleX(0);
                    }
                    100% {
                      opacity: 1;
                      transform: scaleX(1);
                    }
                  }
                  @keyframes slideInImage {
                    0% {
                      opacity: 0;
                      transform: scale(0.95);
                    }
                    50% {
                      opacity: 0.5;
                    }
                    100% {
                      opacity: 1;
                      transform: scale(1);
                    }
                  }
                `}
              </style>
              <img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Solution package ${currentImageIndex + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "16px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  maxHeight: "400px",
                  objectFit: "contain",
                  animation: "carouselClose 0.6s ease-in-out, slideInImage 0.8s ease-out",
                  transformOrigin: "center",
                }}
              />
            </div>

            <button
              onClick={() => {
                setIsAutoRotating(false);
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
                setTimeout(() => setIsAutoRotating(true), 5000);
              }}
              style={{
                background: "#047857",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                flexShrink: 0,
              }}
            >
              →
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "16px",
            }}
          >
            {images.map((_, index) => (
              <div
                key={index}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: currentImageIndex === index ? "#047857" : "#d1d5db",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsAutoRotating(false);
                  setCurrentImageIndex(index);
                  setTimeout(() => setIsAutoRotating(true), 5000);
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexDirection: "column",
            marginTop: "30px",
          }}
        >
          <button
            onClick={() => navigate("/advanced-test/book-demo")}
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #047857, #10b981)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            📅 Schedule an On-Site Workforce Intelligence Demo
          </button>

          <button
            onClick={() => navigate("/advanced-test/contact-expert")}
            style={{
              width: "100%",
              padding: "16px",
              border: "2px solid #047857",
              borderRadius: "10px",
              background: "#fff",
              color: "#047857",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            📞 Talk to Our Workforce Expert (24×7)
          </button>

          <button
            onClick={() => navigate("/")}
            style={{
              width: "100%",
              padding: "14px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              background: "#f9fafb",
              color: "#6b7280",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
