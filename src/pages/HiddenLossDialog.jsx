import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";
import dialImg from "../assets/test/Dial.jpeg";
import Loss1 from "../assets/test/Loss1.jpeg";
import Loss2 from "../assets/test/Loss2.jpeg";
import Loss3 from "../assets/test/Loss3.jpeg";
import Loss4 from "../assets/test/Loss4.jpeg";
import Loss5 from "../assets/test/Loss5.jpeg";
import Loss6 from "../assets/test/Loss6.jpeg";
import Loss7 from "../assets/test/Loss7.jpeg";
import Loss8 from "../assets/test/Loss8.jpeg";

export default function HiddenLossDialog() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(true);
  const [result, setResult] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const images = [Loss1, Loss2, Loss3, Loss4, Loss5, Loss6, Loss7, Loss8];

  useEffect(() => {
    const saved = localStorage.getItem("hiddenLossResult");
    if (saved) {
      setResult(JSON.parse(saved));
    }

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const mainOscillator = audioContext.createOscillator();
    const mainGain = audioContext.createGain();

    mainOscillator.connect(mainGain);
    mainGain.connect(audioContext.destination);

    mainOscillator.type = "sine";
    mainOscillator.frequency.setValueAtTime(220, audioContext.currentTime);
    mainGain.gain.setValueAtTime(0.05, audioContext.currentTime);
    mainGain.gain.linearRampToValueAtTime(0.015, audioContext.currentTime + 10);

    audioContext.resume().catch(() => {
      // ignore if resume is blocked by browser autoplay policies
    });
    mainOscillator.start(audioContext.currentTime);

    const createTickSound = () => {
      const tickOsc = audioContext.createOscillator();
      const tickGain = audioContext.createGain();

      tickOsc.connect(tickGain);
      tickGain.connect(audioContext.destination);

      tickOsc.type = "square";
      tickOsc.frequency.setValueAtTime(1400, audioContext.currentTime);
      tickGain.gain.setValueAtTime(0.18, audioContext.currentTime);
      tickGain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.08);

      tickOsc.start(audioContext.currentTime);
      tickOsc.stop(audioContext.currentTime + 0.09);
    };

    createTickSound();
    const tickInterval = setInterval(createTickSound, 1000);
    const countdownInterval = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    const stopTimer = setTimeout(() => {
      try {
        mainOscillator.stop();
      } catch (error) {
        // ignore if already stopped
      }
      audioContext.close();
      setShowDialog(false);
      clearInterval(countdownInterval);
      clearInterval(tickInterval);
    }, 10000);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(tickInterval);
      clearTimeout(stopTimer);
      try {
        mainOscillator.stop();
      } catch (error) {
        // ignore if already stopped
      }
      audioContext.close();
    };
  }, []);

  useEffect(() => {
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
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "24px",
          left: "24px",
          zIndex: 1,
        }}
      >
        <TestBackButton />
      </div>

      {showDialog ? (
        <div
          style={{
            textAlign: "center",
            animation: "fadeIn 0.3s ease-in",
            maxWidth: "820px",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "440px",
              height: "440px",
              margin: "0 auto",
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, rgba(34,197,94,0.16), transparent 50%), rgba(3, 7, 18, 0.96)",
              boxShadow: "0 36px 100px rgba(16, 185, 129, 0.18)",
              border: "3px solid rgba(34,197,94,0.22)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${dialImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.7,
                filter: "brightness(1.18)",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "10px",
                height: "160px",
                background: "linear-gradient(180deg, transparent 0%, #22c55e 42%, #22c55e 58%, transparent 100%)",
                transformOrigin: "bottom center",
                transform: "translate(-50%, -100%) rotate(0deg)",
                borderRadius: "10px",
                animation: "dialRotate 10s linear infinite",
              }}
            />
          </div>
        </div>
      ) : result ? (
        <div
          style={{
            background: "#fff",
            borderRadius: "28px",
            padding: "45px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            maxWidth: "850px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#047857",
              marginBottom: "8px",
              fontSize: "34px",
              fontWeight: 800,
            }}
          >
            Result
          </h2>

          <h3
            style={{
              color: "#047857",
              marginBottom: "28px",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            Estimated Hidden Workforce Loss:
          </h3>

          <div
            style={{
              background: "#f3faf7",
              padding: "28px 30px",
              borderRadius: "24px",
              marginBottom: "30px",
              width: "100%",
              maxWidth: "540px",
              marginLeft: "auto",
              marginRight: "auto",
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                margin: 0,
                fontWeight: 800,
                color: "#dc2626",
                lineHeight: 1.1,
                wordBreak: "break-word",
              }}
            >
              ₹ {Number(result.amount).toLocaleString("en-IN")}
            </h1>
          </div>

          <p
            style={{
              color: "#0f172a",
              lineHeight: "30px",
              fontSize: "17px",
              fontWeight: 700,
              marginBottom: "18px",
              maxWidth: "760px",
              margin: "0 auto 18px",
            }}
          >
            These hidden workforce losses often become major barriers in
            long-term growth and scaling into a unicorn. Many leading
            companies like <span style={{ color: "#047857", fontWeight: 800 }}>Google</span>, <span style={{ color: "#047857", fontWeight: 800 }}>Tata Consultancy Services</span>, and <span style={{ color: "#047857", fontWeight: 800 }}>Infosys</span> strongly invest in employee well-being, retention, and workforce
            stability — helping them reduce attrition costs and build stronger,
            high-performing teams over time.
          </p>

          <div
            style={{
              marginTop: "45px",
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
                }}
              >
                ←
              </button>

              <div
                style={{
                  maxWidth: "850px",
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
                  alt={`Reasons for losses image ${currentImageIndex + 1}`}
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
                marginTop: "12px",
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
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate(-1)}
            style={{
              marginTop: "30px",
              padding: "14px 28px",
              borderRadius: "14px",
              border: "none",
              background: "linear-gradient(135deg, #047857, #10b981)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        </div>
      ) : (
        <div
          style={{
            background: "#fff",
            borderRadius: "28px",
            padding: "45px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
            maxWidth: "850px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#1e3a8a",
              marginBottom: "20px",
              fontSize: "38px",
            }}
          >
            Result not found
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "30px",
              fontSize: "17px",
            }}
          >
            Please return to the calculator and complete the form first.
          </p>

          <button
            onClick={() => navigate(-1)}
            style={{
              marginTop: "30px",
              padding: "14px 28px",
              borderRadius: "14px",
              border: "none",
              background: "#2563eb",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes dialRotate {
          from {
            transform: translate(-50%, -100%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -100%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
