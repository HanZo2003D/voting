import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

export default function Admin({ addCandidate }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Please enter both name and description!");
      return;
    }
    const id = Math.random().toString(36).substr(2, 9);
    addCandidate(id, name, description);
    setName(""); // Clear input fields
    setDescription("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Admin Panel - Add Candidate</h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px 0",
            border: "1px solid black",
            padding: "40px 40px",
          }}
        >
          <input
            type="text"
            placeholder="Candidate Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              marginBottom: "20px",
              padding: "10px 40px",
              textAlign: "center",
            }}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              marginBottom: "20px",
              padding: "10px 40px",
              textAlign: "center",
            }}
          />
          <button type="submit">Add Candidate</button>
        </div>
      </form>
      <button
        onClick={() => navigate("/")}
        style={{ width: "180px", borderRadius: "10px" }}
      >
        Go to Home
      </button>
    </div>
  );
}
