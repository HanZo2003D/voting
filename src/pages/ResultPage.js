import React from "react";
import "../styles/result.css";
import { useNavigate } from "react-router-dom";

export default function Result({ candidates }) {
  const navigate = useNavigate();
  return (
    <div className="result-container">
      <h2>Election Results</h2>
      <div className="result-list">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="result-card">
            <h3>{candidate.name}</h3>
            <p className="vote-count">Votes: {candidate.votes}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate("/candidates")}>
        Back to Voting
      </button>
    </div>
  );
}
