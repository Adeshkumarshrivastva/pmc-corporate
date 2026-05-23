import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";

function HiddenLossHome() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const questions = [
    {
      id: 1,
      question: "How many employees have resigned/left your organization during the last 12 months?",
      type: "input",
      key: "employees",
      placeholder: "Enter number of employees",
    },
    {
      id: 2,
      question: "What was the average monthly salary of those employees?",
      type: "input",
      key: "salary",
      placeholder: "Enter average salary",
    },
    {
      id: 3,
      question: "What is the average employee notice period?",
      type: "select",
      key: "notice",
      options: [
        { label: "1 Month", value: 1 },
        { label: "2 Months", value: 2 },
        { label: "3 Months", value: 3 },
      ],
    },
    {
      id: 4,
      question: "After employee leaves, how much time does hiring & onboarding take?",
      type: "select",
      key: "replacement",
      options: [
        { label: "1 Month", value: 1 },
        { label: "2 Months", value: 2 },
        { label: "3 Months", value: 3 },
        { label: "6+ Months", value: 6 },
      ],
    },
    {
      id: 5,
      question: "How much time does new employee take to reach full productivity?",
      type: "select",
      key: "productivity",
      options: [
        { label: "2 Months", value: 2 },
        { label: "3 Months", value: 3 },
        { label: "5 Months", value: 5 },
        { label: "6 Months", value: 6 },
      ],
    },
  ];

  const [answers, setAnswers] = useState({
    employees: "",
    salary: "",
    notice: "",
    replacement: "",
    productivity: "",
  });

  useEffect(() => {
    localStorage.removeItem("hiddenLossResult");
  }, []);

  const handleChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const calculateResult = () => {
    const employees = Number(answers.employees);
    const salary = Number(answers.salary);
    const notice = Number(answers.notice);
    const replacement = Number(answers.replacement);
    const productivity = Number(answers.productivity);

    if (!employees || !salary || !notice || !replacement || !productivity) {
      setErrorMessage("Please complete all fields with valid values before calculating.");
      return;
    }

    const monthsLost = notice + replacement + productivity;
    const totalLoss = Math.round(employees * salary * monthsLost);

    const finalResult = { amount: totalLoss, monthsLost, answers };
    localStorage.setItem("hiddenLossResult", JSON.stringify(finalResult));
    setErrorMessage("");
    navigate("/hidden-loss/start");
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#eef2ff,#f8fbff)", padding: "120px 20px 70px 20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: "950px", margin: "auto", background: "#fff", borderRadius: "28px", padding: "45px", boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}>
        <div style={{ marginBottom: "24px" }}>
          <TestBackButton />
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "#047857", marginBottom: "12px", fontSize: "38px" }}>Hidden Workforce Loss Calculator</h1>
          <p style={{ color: "#666", marginBottom: "40px" }}>Fill all details to calculate hidden workforce loss.</p>
        </div>

        {questions.map((item, index) => (
          <div key={index} style={{ marginBottom: "28px", padding: "24px", border: "1px solid #edf2f7", borderRadius: "18px", background: "#fafcff" }}>
            <h3 style={{ marginBottom: "18px", color: "#222", fontSize: "19px", lineHeight: "30px" }}>
              Q{item.id}. {item.question}
            </h3>

            {item.type === "input" ? (
              <input
                type="number"
                placeholder={item.placeholder}
                value={answers[item.key]}
                onChange={(e) => handleChange(item.key, e.target.value)}
                style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "1px solid #dbe4f0", fontSize: "16px", outline: "none", boxSizing: "border-box" }}
              />
            ) : (
              <select
                value={answers[item.key]}
                onChange={(e) => handleChange(item.key, e.target.value)}
                style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "1px solid #dbe4f0", fontSize: "16px" }}
              >
                <option value="">Select Option</option>
                {item.options.map((option, i) => (
                  <option key={i} value={option.value}>{option.label}</option>
                ))}
              </select>
            )}
          </div>
        ))}

        {errorMessage && <p style={{ color: "#b91c1c", marginBottom: "18px", fontSize: "16px" }}>{errorMessage}</p>}

        <button
          onClick={calculateResult}
          style={{ width: "100%", padding: "18px", border: "none", borderRadius: "14px", background: "linear-gradient(135deg,#1e3a8a,#2563eb)", color: "#fff", fontSize: "18px", fontWeight: "bold", cursor: "pointer" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default HiddenLossHome;
