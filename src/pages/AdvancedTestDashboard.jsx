import React, { useState } from "react";
import { Link } from "react-router-dom";

const testData = {
  "mental-health": {
    title: "Mental Health Battery",
    description: "This dashboard view is built from the Mental Health Battery test data.",
    averageScore: 72,
    chart: [58, 63, 67, 71, 73, 78],
    summary: [
      { label: "Green Zone", value: 44, description: "Good emotional balance" },
      { label: "Yellow Zone", value: 30, description: "Caution required" },
      { label: "Red Zone", value: 18, description: "Needs attention" },
    ],
    table: [
      { name: "Anjali", outcome: "Green", score: "82" },
      { name: "Rahul", outcome: "Yellow", score: "68" },
      { name: "Mira", outcome: "Red", score: "54" },
      { name: "Karan", outcome: "Green", score: "88" },
    ],
  },
  "big-5": {
    title: "Big 5 Personality",
    description: "This dashboard shows the Big 5 score pattern and zone distribution.",
    averageScore: 80,
    chart: [65, 71, 76, 79, 82, 87],
    summary: [
      { label: "Green Zone", value: 52, description: "Strong personality fit" },
      { label: "Yellow Zone", value: 28, description: "Moderate stability" },
      { label: "Red Zone", value: 10, description: "Possible development area" },
    ],
    table: [
      { name: "Neha", outcome: "Green", score: "90" },
      { name: "Sahil", outcome: "Yellow", score: "74" },
      { name: "Priya", outcome: "Green", score: "85" },
      { name: "Vikram", outcome: "Red", score: "63" },
    ],
  },
  "job-satisfaction": {
    title: "Job Satisfaction",
    description: "This dashboard highlights the Job Satisfaction results for current assessments.",
    averageScore: 68,
    chart: [54, 60, 64, 67, 69, 72],
    summary: [
      { label: "Green Zone", value: 36, description: "Satisfied employees" },
      { label: "Yellow Zone", value: 40, description: "Neutral responses" },
      { label: "Red Zone", value: 24, description: "Risk of disengagement" },
    ],
    table: [
      { name: "Ritu", outcome: "Yellow", score: "70" },
      { name: "Amit", outcome: "Red", score: "58" },
      { name: "Sanya", outcome: "Green", score: "81" },
      { name: "Deepak", outcome: "Yellow", score: "66" },
    ],
  },
};

const tests = [
  { key: "mental-health", label: "Mental Health Battery" },
  { key: "big-5", label: "Big 5 Personality" },
  { key: "job-satisfaction", label: "Job Satisfaction" },
];

function AdvancedTestDashboard() {
  const [selectedTest, setSelectedTest] = useState("mental-health");
  const activeTest = testData[selectedTest];
  const chartHeight = 220;
  const chartWidth = 640;
  const maxScore = 100;

  const chartPoints = activeTest.chart.map((score, index) => {
    const x = 60 + index * 100;
    const y = chartHeight - (score / maxScore) * chartHeight;
    return `${x},${y}`;
  });

  const linePath = chartPoints.map((point, index) => (index === 0 ? `M${point}` : `L${point}`)).join(" ");
  const areaPath = `${linePath} L${chartPoints[chartPoints.length - 1].split(",")[0]},${chartHeight} L${chartPoints[0].split(",")[0]},${chartHeight} Z`;

  return (
    <main style={{ padding: "140px 40px 40px", minHeight: "calc(100vh - 140px)", backgroundColor: "#eef4f7" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ background: "#ffffff", borderRadius: "20px", boxShadow: "0 24px 70px rgba(23, 63, 96, 0.08)", padding: "34px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ minWidth: "260px", flex: "1 1 420px" }}>
              <p style={{ margin: 0, color: "#4b6b7c", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Advanced Test Dashboard
              </p>
              <h1 style={{ margin: "10px 0 0", color: "#142533", fontSize: "2.35rem" }}>{activeTest.title}</h1>
              <p style={{ margin: "16px 0 0", color: "#5c6f7f", lineHeight: 1.75 }}>
                {activeTest.description} Choose any available test from the dropdown to refresh summary, chart and zone insights.
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                to="/advanced-test/test"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 20px", backgroundColor: "#247061", color: "#fff", borderRadius: "999px", textDecoration: "none", fontWeight: 700 }}
              >
                Go to Your Test
              </Link>
              <Link
                to="/"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 20px", backgroundColor: "#eef7f4", color: "#2d5f5d", borderRadius: "999px", textDecoration: "none", fontWeight: 700 }}
              >
                Home
              </Link>
            </div>
          </div>

          <div style={{ marginTop: "34px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "18px" }}>
            <div style={{ flex: "1 1 280px", minWidth: "260px" }}>
              <label htmlFor="test-select" style={{ display: "block", marginBottom: "10px", color: "#40535f", fontWeight: 700 }}>
                Select test view
              </label>
              <select
                id="test-select"
                value={selectedTest}
                onChange={(e) => setSelectedTest(e.target.value)}
                style={{ width: "100%", padding: "14px 16px", borderRadius: "14px", border: "1px solid #c5d3da", backgroundColor: "#fbfeff", color: "#1c343f", fontSize: "15px" }}
              >
                {tests.map((option) => (
                  <option key={option.key} value={option.key}>{option.label}</option>
                ))}
              </select>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(120px, 1fr))", gap: "16px", flex: "1 1 520px" }}>
              <div style={{ padding: "20px", borderRadius: "18px", background: "#eef7f5", border: "1px solid rgba(36, 112, 97, 0.12)" }}>
                <p style={{ margin: 0, color: "#2b5e55", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Average score</p>
                <p style={{ margin: "14px 0 0", color: "#153a3f", fontSize: "2rem", fontWeight: 800 }}>{activeTest.averageScore}%</p>
              </div>
              <div style={{ padding: "20px", borderRadius: "18px", background: "#fff8f1", border: "1px solid rgba(175, 133, 46, 0.16)" }}>
                <p style={{ margin: 0, color: "#8a6a2c", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Top zone</p>
                <p style={{ margin: "14px 0 0", color: "#4a4127", fontSize: "1.85rem", fontWeight: 800 }}>{activeTest.summary[0].label.split(" ")[0]}</p>
              </div>
              <div style={{ padding: "20px", borderRadius: "18px", background: "#f8f9ff", border: "1px solid rgba(66, 104, 181, 0.14)" }}>
                <p style={{ margin: 0, color: "#385a8d", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Zones covered</p>
                <p style={{ margin: "14px 0 0", color: "#1f3f6e", fontSize: "1.85rem", fontWeight: 800 }}>{activeTest.summary.length}</p>
              </div>
            </div>
          </div>

          <section style={{ marginTop: "36px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h2 style={{ margin: 0, color: "#142533" }}>Score trend overview</h2>
                <p style={{ margin: "10px 0 0", color: "#5c6f7f", maxWidth: "630px" }}>
                  Review the progress line based on the selected test. Green shows stronger performance, yellow highlights caution, and red identifies priority attention areas.
                </p>
              </div>
              <div style={{ color: "#2d5f5d", fontWeight: 700 }}>Latest assessment score: {activeTest.averageScore}%</div>
            </div>

            <div style={{ marginTop: "20px", padding: "26px", borderRadius: "22px", background: "#f7fbff", border: "1px solid rgba(29, 86, 155, 0.08)" }}>
              <svg width="100%" height="280" viewBox={`0 0 ${chartWidth} 280`} style={{ overflow: "visible" }}>
                <defs>
                  <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2d5f5d" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#2d5f5d" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <g transform="translate(0, 30)">
                  {[0, 25, 50, 75, 100].map((value) => (
                    <g key={value}>
                      <line x1="60" y1={(chartHeight * (100 - value)) / 100} x2={chartWidth - 20} y2={(chartHeight * (100 - value)) / 100} stroke="rgba(45,95,93,0.12)" strokeDasharray="4 6" />
                      <text x="16" y={(chartHeight * (100 - value)) / 100 + 5} fill="#7f8b95" fontSize="12">{`${value}%`}</text>
                    </g>
                  ))}

                  <path d={areaPath} fill="url(#chart-gradient)" />
                  <path d={linePath} fill="none" stroke="#2d5f5d" strokeWidth="4" strokeLinecap="round" />

                  {activeTest.chart.map((score, index) => {
                    const [x, y] = chartPoints[index].split(",").map(Number);
                    return (
                      <g key={index}>
                        <circle cx={x} cy={y} r="6" fill="#2d5f5d" stroke="#fff" strokeWidth="3" />
                        <text x={x} y={y - 16} textAnchor="middle" fill="#1d4344" fontSize="12" fontWeight="700">{score}%</text>
                        <text x={x} y={chartHeight + 24} textAnchor="middle" fill="#6e7b83" fontSize="12">Week {index + 1}</text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
          </section>

          <section style={{ marginTop: "34px" }}>
            <h2 style={{ margin: 0, color: "#142533" }}>Zone distribution</h2>
            <p style={{ margin: "8px 0 24px", color: "#5c6f7f" }}>
              The table below shows how selected test participants are distributed across green, yellow, and red zones.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {activeTest.summary.map((zone) => {
                const bgColor = zone.label.includes("Green") ? "#e8f7f1" : zone.label.includes("Yellow") ? "#fff7e3" : "#fde7e6";
                const textColor = zone.label.includes("Green") ? "#11634f" : zone.label.includes("Yellow") ? "#8a661f" : "#9b2b21";
                return (
                  <div key={zone.label} style={{ flex: "1 1 220px", minWidth: "220px", background: bgColor, borderRadius: "18px", padding: "20px", border: "1px solid rgba(0,0,0,0.04)" }}>
                    <p style={{ margin: 0, color: textColor, fontWeight: 700, fontSize: "15px" }}>{zone.label}</p>
                    <p style={{ margin: "14px 0 0", color: "#2d4d50", fontSize: "2rem", fontWeight: 800 }}>{zone.value}%</p>
                    <p style={{ margin: "10px 0 0", color: "#4f5f66", fontSize: "14px" }}>{zone.description}</p>
                  </div>
                );
              })}
            </div>

            <div style={{ overflowX: "auto", marginTop: "28px" }}>
              <table style={{ width: "100%", minWidth: "720px", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "16px", color: "#4d5f6f", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid rgba(76, 97, 115, 0.15)" }}>Participant</th>
                    <th style={{ textAlign: "left", padding: "16px", color: "#4d5f6f", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid rgba(76, 97, 115, 0.15)" }}>Result zone</th>
                    <th style={{ textAlign: "left", padding: "16px", color: "#4d5f6f", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "1px solid rgba(76, 97, 115, 0.15)" }}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTest.table.map((row) => (
                    <tr key={row.name} style={{ background: "#ffffff" }}>
                      <td style={{ padding: "16px", color: "#2d4250", borderBottom: "1px solid rgba(76, 97, 115, 0.08)" }}>{row.name}</td>
                      <td style={{ padding: "16px", color: row.outcome === "Green" ? "#157a53" : row.outcome === "Yellow" ? "#9a741d" : "#9b2b21", borderBottom: "1px solid rgba(76, 97, 115, 0.08)" }}>{row.outcome}</td>
                      <td style={{ padding: "16px", color: "#2d4250", borderBottom: "1px solid rgba(76, 97, 115, 0.08)" }}>{row.score}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AdvancedTestDashboard;
