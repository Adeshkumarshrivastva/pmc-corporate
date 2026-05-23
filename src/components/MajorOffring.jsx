import o1 from "../assets/01.png";
import o2 from "../assets/02.png";
import o3 from "../assets/03.png";
import o4 from "../assets/04.png";
import o5 from "../assets/05.png";
import o6 from "../assets/06.png";
import o7 from "../assets/07.png";
import o8 from "../assets/08.png";
import o9 from "../assets/09.png";
import o10 from "../assets/10.png";

function MajorOfferings() {
  const data = [
    { img: o1, btn: "Explore Packages" },
    { img: o2, btn: "Explore EAP" },
    { img: o3, btn: "Explore POSH" },
    { img: o4, btn: "Explore Programs" },
    { img: o5, btn: "Explore Healthcard" },
    { img: o6, btn: "Explore Apps" },
    { img: o7, btn: "Explore Program" },
    { img: o8, btn: "Explore Corporate" },
    { img: o9, btn: "Explore Franchise" },
    { img: o10, btn: "Explore Packages" },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "60px 30px",
        background: "#2f4f46",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#fff", marginBottom: "40px" }}>
        MAJOR OFFERINGS
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 👈 FIXED 5 columns
          gap: "25px",
        }}
      >
        {data.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt="offer"
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <button
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                fontSize: "12px",
                background: "#e9e8cc",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MajorOfferings;