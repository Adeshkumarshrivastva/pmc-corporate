import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestBackButton from "../components/TestBackButton";

const sections = [
  {
    id: 1,
    name: "Employee Engagement",
    question: "Do employees actively contribute, take ownership, and remain meaningfully engaged in their day-to-day responsibilities?"
  },
  {
    id: 2,
    name: "Burnout & Stress Management",
    question: "Does your organization actively support employee stress management, burnout prevention, and emotional well-being?"
  },
  {
    id: 3,
    name: "Leadership Communication",
    question: "Do employees receive clear communication, guidance, and support from leadership and managers?"
  },
  {
    id: 4,
    name: "Workplace Culture",
    question: "Does your organization maintain a healthy, collaborative, and psychologically supportive workplace culture?"
  },
  {
    id: 5,
    name: "Recognition & Appreciation",
    question: "Do employees regularly feel recognized, valued, and appreciated for their contributions?"
  },
  {
    id: 6,
    name: "Workload Stability",
    question: "Are employee workloads, deadlines, and work expectations generally manageable and balanced?"
  },
  {
    id: 7,
    name: "Growth & Development Opportunities",
    question: "Do employees have access to learning, development, and career growth opportunities within the organization?"
  },
  {
    id: 8,
    name: "Operational Support & Resources",
    question: "Do employees have proper operational support, systems, tools, and resources required to work efficiently?"
  }
];

function AdvancedTestHome() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    localStorage.removeItem("productivityScore");
  }, []);

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleAnswerSelect = (answer) => {
    const questionId = sections[currentQuestionIndex].id;
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < sections.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let totalScore = 0;
    Object.values(answers).forEach(answer => {
      if (answer === "Yes") totalScore += 10;
      else if (answer === "Partially") totalScore += 5;
      else if (answer === "No") totalScore += 0;
    });

    const finalScore = (totalScore / 80) * 100;
    
    localStorage.setItem("productivityScore", JSON.stringify({
      totalScore,
      finalScore: finalScore.toFixed(2),
      answers
    }));

    // Navigate to details page
    navigate("/advanced-test/details");
  };

  const currentQuestion = sections[currentQuestionIndex];
  const isAnswered = answers[currentQuestion?.id];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #f8fbff)",
        padding: "20px 15px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background: "#fff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <TestBackButton />
        </div>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1
            style={{
              color: "#047857",
              marginBottom: "8px",
              fontSize: "28px",
            }}
          >
            Workforce Productivity Assessment
          </h1>
          <p
            style={{
              color: "#6b7280",
              fontSize: "14px",
              lineHeight: "1.4",
            }}
          >
            Please fill all the eight questions to complete the assessment
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleQuestionClick(index)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                border: currentQuestionIndex === index
                  ? "2px solid #047857" 
                  : answers[section.id] 
                  ? "2px solid #10b981" 
                  : "2px solid #dbe4f0",
                background: currentQuestionIndex === index
                  ? "#047857" 
                  : answers[section.id] 
                  ? "#f0fdf4" 
                  : "#fff",
                color: currentQuestionIndex === index
                  ? "#fff" 
                  : answers[section.id] 
                  ? "#047857" 
                  : "#6b7280",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {section.id}
            </button>
          ))}
        </div>

        {/* Question Display */}
        <div
          style={{
            background: "#f9fafb",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "15px",
          }}
        >
          <h3
            style={{
              color: "#047857",
              fontSize: "17px",
              marginBottom: "10px",
              fontWeight: "700",
            }}
          >
            {currentQuestion.name}
          </h3>
          <p
            style={{
              color: "#374151",
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            {currentQuestion.question}
          </p>
        </div>

        {/* Answer Options */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          {["Yes", "Partially", "No"].map((option) => (
            <button
              key={option}
              onClick={() => handleAnswerSelect(option)}
              style={{
                padding: "14px 20px",
                border: answers[currentQuestion.id] === option 
                  ? "2px solid #047857" 
                  : "2px solid #dbe4f0",
                borderRadius: "10px",
                background: answers[currentQuestion.id] === option 
                  ? "#f0fdf4" 
                  : "#fff",
                color: answers[currentQuestion.id] === option 
                  ? "#047857" 
                  : "#374151",
                fontSize: "15px",
                fontWeight: answers[currentQuestion.id] === option 
                  ? "700" 
                  : "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textAlign: "left",
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div style={{ marginBottom: "15px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "6px",
              color: "#6b7280",
              fontSize: "13px",
            }}
          >
            <span>Progress</span>
            <span>{Object.keys(answers).length} / {sections.length} completed</span>
          </div>
          <div
            style={{
              width: "100%",
              height: "6px",
              background: "#e5e7eb",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(Object.keys(answers).length / sections.length) * 100}%`,
                height: "100%",
                background: "linear-gradient(135deg, #047857, #10b981)",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: isAnswered
              ? "linear-gradient(135deg, #047857, #10b981)"
              : "#d1d5db",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: isAnswered ? "pointer" : "not-allowed",
            transition: "all 0.3s ease",
          }}
        >
          {currentQuestionIndex < sections.length - 1 ? "Next Question" : "Submit & Calculate Result"}
        </button>
      </div>
    </div>
  );
}

export default AdvancedTestHome;
