import elearningImg from "../assets/poshelarning.png";

function PoshLearning() {
  return (
    <div style={{ width: "100%", marginTop: "110px", paddingBottom: "60px" }}>
      
      {/* HERO SECTION */}
      <div
        style={{
          display: "flex",
          padding: "80px 60px",
          gap: "40px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src={elearningImg}
            alt="POSH E-Learning"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
            POSH E-Learning Program
          </h1>

          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            Our POSH E-Learning Program provides a flexible and scalable way to
            train employees on workplace harassment prevention. Designed for modern
            organizations, this program allows employees to learn anytime, anywhere
            through interactive digital modules.
          </p>

          <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
            The program ensures consistent training delivery across all levels of
            the organization while meeting compliance requirements under the POSH Act.
          </p>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div style={{ padding: "60px", background: "#f5f5f5" }}>
        <h2 style={{ marginBottom: "20px" }}>Program Features</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Self-paced online learning modules</li>
          <li>✔ Interactive videos and case studies</li>
          <li>✔ Real-life workplace scenarios</li>
          <li>✔ Assessment and certification</li>
          <li>✔ Easy tracking and reporting</li>
          <li>✔ Accessible anytime, anywhere</li>
        </ul>

        <h2 style={{ marginTop: "40px" }}>Why Choose E-Learning?</h2>

        <p style={{ marginTop: "15px", lineHeight: "1.7" }}>
          E-learning provides a cost-effective and efficient solution for large
          organizations. It ensures uniform training, reduces logistical challenges,
          and allows employees to complete training at their own pace without
          disrupting work schedules.
        </p>

        <h2 style={{ marginTop: "40px" }}>Benefits</h2>

        <ul style={{ lineHeight: "2", fontSize: "15px" }}>
          <li>✔ Consistent training across organization</li>
          <li>✔ Time and cost efficiency</li>
          <li>✔ Improved employee engagement</li>
          <li>✔ Strong compliance and documentation</li>
        </ul>
      </div>
    </div>
  );
}

export default PoshLearning;