import React from "react";

function AdvancedTestYourTest() {
  return (
    <main style={{ paddingTop: "90px", minHeight: "100vh", backgroundColor: "#f5f9fb" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px" }}>
        <h1 style={{ marginBottom: "18px", color: "#1f3a57" }}>Your Test</h1>
        <p style={{ marginBottom: "16px", color: "#4a596b" }}>
          The test page is loaded from the assessment portal below. If the page does not appear, click the button to open it in a new tab.
        </p>

        <div style={{ marginBottom: "24px" }}>
          <a
            href="https://digiconnect.prasadpsycho.com/#/assessments/list/initiated"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              backgroundColor: "#2d5f5d",
              color: "#ffffff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Open Test Portal in New Tab
          </a>
        </div>

        <div style={{ width: "100%", minHeight: "72vh", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.08)" }}>
          <iframe
            title="Advanced Test Portal"
            src="https://digiconnect.prasadpsycho.com/#/assessments/list/initiated"
            style={{ width: "100%", height: "72vh", border: 0 }}
          />
        </div>
      </div>
    </main>
  );
}

export default AdvancedTestYourTest;
