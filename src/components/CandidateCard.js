import React from "react";
import imgs from "../assets/shesh.jpg";
import "../styles/style.css";

const CandidateCard = ({ candidate }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "350px",

        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0,0,0.0.1)",
      }}
    >
      <div style={{ padding: "16px", border: "1px solid #ddd" }}>
        <img
          src={imgs}
          alt="hi"
          width="100% "
          height="300px"
          borderRadius="4px"
        />
        <div
          style={{
            display: "flex",

            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <h5>{candidate.name}</h5>
          <p>{candidate.discription}</p>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
