import React from "react";
import "../styles/style.css";
import imgs from "../assets/shesh.jpg";

export default function CandidatesPage({
  candidates,
  voteForCandidate,
  unvoteCandidate,
  votedCandidate,
  setVotedCandidate,
}) {
  const handleVote = (candidate) => {
    if (!votedCandidate) {
      // Vote for this candidate
      setVotedCandidate(candidate.id);
      voteForCandidate(candidate.id);
      localStorage.setItem("votedCandidate", candidate.id);
    } else if (votedCandidate === candidate.id) {
      // Unvote this candidate
      setVotedCandidate(null);
      unvoteCandidate(candidate.id);
      localStorage.removeItem("votedCandidate");
    } else {
      alert("You have already voted for another candidate!");
    }
  };

  return (
    <div>
      <h1
        style={{
          marginTop: "50px",
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "lighter",
          borderBottom: "1px solid #ddd",
          paddingBottom: "20px",
          marginRight: "100px",
          marginLeft: "100px",
        }}
      >
        Candidates
      </h1>

      {candidates.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "200px",
            alignItems: "center",
          }}
        >
          <p>No candidates yet.</p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",

            marginRight: "40px",
            marginLeft: "40px",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              display: "grid",

              gridTemplateColumns: " repeat(3,1fr)",

              marginBottom: "50px",
              gap: "50px",
            }}
          >
            {candidates.map((candidate, index) => (
              <div
                style={{
                  display: "flex",

                  flexDirection: "column",

                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "350px",

                  textAlign: "center",
                  backgroundColor: "fff",
                  boxShadow: "0 4px 6px rgba(0,0,0.0.1)",
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
                  disabled={votedCandidate && votedCandidate !== candidate.id}
                >
                  {votedCandidate === candidate.id ? "Unvote ❌" : "Vote ✅"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
