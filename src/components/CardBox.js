import React, { useState } from "react";
import "../styles/style.css";
import imgs from "../assets/shesh.jpg";

export default function CardBox({
  candidates,
  voteForCandidate,
  unvoteCandidate,
}) {
  const [votedCandidate, setVotedCandidate] = useState(null);

  const handleVote = (candidate) => {
    if (votedCandidate === null) {
      // Vote for a candidate
      setVotedCandidate(candidate.id);
      voteForCandidate(candidate.id);
    } else if (votedCandidate === candidate.id) {
      // Unvote from the selected candidate
      setVotedCandidate(null);
      unvoteCandidate(candidate.id);
    }
  };

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
        {candidates.length === 0 ? (
          <p>No candidates yet.</p>
        ) : (
          candidates.map((candidate, index) => (
            <div
              style={{
                display: "flex",

                flexDirection: "column",
                paddingTop: "20px",
              }}
              key={index}
            >
              <img
                src={imgs}
                alt="hi"
                width="100% "
                height="300px"
                borderRadius="4px"
              />
              <h3>{candidate.name}</h3>
              <p>{candidate.description}</p>
              <p>Votes: {candidate.votes}</p>
              <button
                onClick={() => handleVote(candidate)}
                disabled={
                  votedCandidate !== null && votedCandidate !== candidate.id
                }
              >
                {votedCandidate === candidate.id ? "Unvote ❌" : "Vote ✅"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
