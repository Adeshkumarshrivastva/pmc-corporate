import small from "../assets/smallCorporate.png";
import growing from "../assets/Growing.png";
import pre from "../assets/pre.png";
import enterprise from "../assets/enterprise.png";

function CorporateService() {
  const data = [
    {
      img: small,
      title: "Small Business",
    },
    {
      img: growing,
      title: "Growing Business",
    },
    {
      img: pre,
      title: "Pre-Enterprise",
    },
    {
      img: enterprise,
      title: "Enterprise",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "60px 40px",
        background: "#e9e8cc",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
        Corporate Service
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              width: "260px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.img}
              alt="service"
              style={{
                width: "100%",
                height: "140px",
                objectFit: "contain",
              }}
            />

            <h3 style={{ margin: "15px 0" }}>{item.title}</h3>

            <button
              style={{
                padding: "10px 20px",
                background: "#3e5f4f",
                color: "#fff",
                border: "2px solid #f5c518",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CorporateService;