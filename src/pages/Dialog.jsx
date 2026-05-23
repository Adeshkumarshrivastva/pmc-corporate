import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";
import dialImg from "../assets/advanced/dial.png";

export default function Dialog() {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(true);
  const [result, setResult] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [needleRotation, setNeedleRotation] = useState(0);

  useEffect(() => {
    const savedProductivity = localStorage.getItem("productivityScore");
    if (savedProductivity) {
      setResult(JSON.parse(savedProductivity));
    }

    // Needle smooth rotation animation
    const needleInterval = setInterval(() => {
      setNeedleRotation(prev => (prev + 3) % 360);
    }, 30);

    // Professional corporate beep sound
    const createProfessionalBeep = () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);
      
      const harmonic = audioContext.createOscillator();
      const harmonicGain = audioContext.createGain();
      
      harmonic.connect(harmonicGain);
      harmonicGain.connect(audioContext.destination);
      
      harmonic.type = 'sine';
      harmonic.frequency.setValueAtTime(2400, audioContext.currentTime);
      
      harmonicGain.gain.setValueAtTime(0, audioContext.currentTime);
      harmonicGain.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.01);
      harmonicGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      
      harmonic.start(audioContext.currentTime);
      harmonic.stop(audioContext.currentTime + 0.15);
    };

    createProfessionalBeep();
    const beepInterval = setInterval(createProfessionalBeep, 1000);

    const countdownInterval = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    const stopTimer = setTimeout(() => {
      clearInterval(countdownInterval);
      clearInterval(beepInterval);
      clearInterval(needleInterval);
      setShowDialog(false);
    }, 10000);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(beepInterval);
      clearInterval(needleInterval);
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fbff)",
        padding: "0",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Back Button - Fixed Position */}
      <div
        style={{
          position: "fixed",
          top: "110px",
          left: "24px",
          zIndex: 1000,
        }}
      >
        <TestBackButton />
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 20px 70px 20px",
        }}
      >
        {showDialog ? (
          <div
            style={{
              textAlign: "center",
              animation: "fadeIn 0.3s ease-in",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            {/* Large Professional Dial */}
            <div
              style={{
                position: "relative",
                width: "400px",
                height: "400px",
                margin: "0 auto",
                animation: "pulse 2s ease-in-out infinite",
              }}
            >
              {/* Dial Background Image */}
              <img
                src={dialImg}
                alt="Dial"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 10px 30px rgba(220, 38, 38, 0.3))",
                }}
              />

              {/* Smooth Rotating Needle */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "6px",
                  height: "140px",
                  background: "linear-gradient(180deg, transparent 0%, #ef4444 30%, #dc2626 70%, #991b1b 100%)",
                  transformOrigin: "bottom center",
                  transform: `translate(-50%, -100%) rotate(${needleRotation}deg)`,
                  borderRadius: "3px",
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(220, 38, 38, 0.4)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0",
                    height: "0",
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderBottom: "16px solid #dc2626",
                  }}
                />
              </div>

              {/* Center Hub */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "30px",
                  height: "30px",
                  background: "radial-gradient(circle, #dc2626, #991b1b)",
                  borderRadius: "50%",
                  border: "3px solid #fff",
                  boxShadow: "0 0 20px rgba(220, 38, 38, 0.6)",
                  zIndex: 10,
                }}
              />

              {/* Professional Score Display */}
              <div
                style={{
                  position: "absolute",
                  top: "68%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                  background: "rgba(255, 255, 255, 0.98)",
                  borderRadius: "16px",
                  padding: "15px 30px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  border: "2px solid #dc2626",
                  minWidth: "180px",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "#dc2626",
                    lineHeight: "1",
                    marginBottom: "5px",
                    animation: "blink 1s ease-in-out infinite",
                  }}
                >
                  {secondsLeft}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b7280",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                  }}
                >
                  ANALYZING...
                </div>
              </div>
            </div>

            {/* Professional Warning Messages */}
            <div
              style={{
                marginTop: "30px",
                animation: "blink 1.5s ease-in-out infinite",
              }}
            >
              <p
                style={{
                  fontSize: "24px",
                  color: "#dc2626",
                  fontWeight: "900",
                  marginBottom: "8px",
                  letterSpacing: "2px",
                  textShadow: "0 2px 4px rgba(220, 38, 38, 0.3)",
                }}
              >
                ⚠️ CRITICAL ANALYSIS ⚠️
              </p>
              <p
                style={{
                  fontSize: "16px",
                  color: "#991b1b",
                  fontWeight: "700",
                }}
              >
                Detecting Profitability Risks...
              </p>
            </div>
          </div>
        ) : result ? (
          <div
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "40px 30px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
              maxWidth: "1000px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#047857",
                marginBottom: "20px",
                fontSize: "28px",
                fontWeight: 800,
              }}
            >
              Assessment Results
            </h2>

            {/* Score Display */}
            <div
              style={{
                background: "#f0fdf4",
                padding: "20px",
                borderRadius: "14px",
                marginBottom: "20px",
              }}
            >
              <h3
                style={{
                  color: "#047857",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                Your Workforce Support Readiness Score
              </h3>
              <div
                style={{
                  fontSize: "52px",
                  fontWeight: "bold",
                  color: result.finalScore >= 70 ? "#10b981" : result.finalScore >= 40 ? "#f59e0b" : "#ef4444",
                  marginTop: "10px",
                }}
              >
                {result.finalScore}%
              </div>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  marginTop: "8px",
                }}
              >
                Total Score: {result.totalScore} / 80
              </p>
            </div>

            {/* Benchmark Comparison */}
            <div
              style={{
                background: "#fef3c7",
                padding: "20px",
                borderRadius: "14px",
                marginBottom: "20px",
                border: "2px solid #fbbf24",
              }}
            >
              <h3
                style={{
                  color: "#92400e",
                  fontSize: "18px",
                  marginBottom: "15px",
                  fontWeight: "700",
                }}
              >
                📊 Benchmark Comparison
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <div>
                  <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "5px" }}>Your Score</p>
                  <p style={{ fontSize: "28px", fontWeight: "bold", color: "#ef4444" }}>{result.finalScore}%</p>
                </div>
                <div style={{ fontSize: "20px", color: "#6b7280" }}>vs</div>
                <div>
                  <p style={{ color: "#6b7280", fontSize: "13px", marginBottom: "5px" }}>Target Benchmark</p>
                  <p style={{ fontSize: "28px", fontWeight: "bold", color: "#10b981" }}>90%</p>
                </div>
              </div>
              {(90 - parseFloat(result.finalScore)) > 0 && (
                <div
                  style={{
                    background: "#fff",
                    padding: "12px",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      color: "#dc2626",
                      fontSize: "15px",
                      fontWeight: "700",
                      marginBottom: "5px",
                    }}
                  >
                    ⚠️ Gap: {(90 - parseFloat(result.finalScore)).toFixed(2)}%
                  </p>
                  <p
                    style={{
                      color: "#374151",
                      fontSize: "13px",
                    }}
                  >
                    Improvement needed to reach 90% benchmark
                  </p>
                </div>
              )}
            </div>

            {/* Productivity Impact */}
            <div
              style={{
                background: "#fef2f2",
                padding: "20px",
                borderRadius: "14px",
                marginBottom: "25px",
                border: "2px solid #fca5a5",
              }}
            >
              <h3
                style={{
                  color: "#991b1b",
                  fontSize: "18px",
                  marginBottom: "15px",
                  fontWeight: "700",
                }}
              >
                📉 Profitability Impact Analysis
              </h3>
              <div
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    color: "#dc2626",
                    fontSize: "52px",
                    fontWeight: "bold",
                    margin: "0",
                  }}
                >
                  23%
                </p>
                <p
                  style={{
                    color: "#374151",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginTop: "10px",
                  }}
                >
                  Estimated Profitability Decrease
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "13px",
                    marginTop: "12px",
                    lineHeight: "1.6",
                  }}
                >
                  Due to gaps in workforce support, your organization is experiencing significant profitability loss.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
              <button
                onClick={() => navigate("/advanced-test/solution")}
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
                View Our Solutions
              </button>
              <button
                onClick={() => navigate("/")}
                style={{
                  width: "100%",
                  padding: "14px",
                  border: "2px solid #047857",
                  borderRadius: "10px",
                  background: "#fff",
                  color: "#047857",
                  fontSize: "15px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Back to Home
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              background: "#fff",
              borderRadius: "28px",
              padding: "45px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              maxWidth: "700px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "#1e3a8a",
                marginBottom: "20px",
                fontSize: "32px",
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
      </div>

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

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}
