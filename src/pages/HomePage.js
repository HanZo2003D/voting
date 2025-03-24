import React from "react";

import background from "../assets/bg.jpg";

import { useNavigate } from "react-router-dom";

import CandidatesPage from "./CandidatesPage";
import Aboutpage from "./Aboutpage";
import ContactPage from "./ContactPage";

const HomePage = ({
  logout,
  candidates,
  voteForCandidate,
  unvoteCandidate,

  votedCandidate,
  setVotedCandidate,
}) => {
  const navigate = useNavigate();

  const handleCandidate = () => {
    navigate("/candidates");
  };
  const backgroundImg = {
    backgroundImage: ` url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "680px",
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={backgroundImg}>
        <div
          style={{
            display: "flex",

            justifyContent: "center",
            flexDirection: "column",

            height: "600px",
            alignItems: "flex-end",
          }}
        >
          <button
            style={{
              color: "white",
              marginRight: "160px",
              fontSize: "40px",
              fontWeight: "inherit",
              borderRadius: "40px",

              backgroundColor: "transparent",
              opacity: "0.9",
              border: "1px solid grey",
              padding: "5px 30px",
              fontFamily: "cursive",
              width: "300px",
              cursor: "pointer",
            }}
            onClick={handleCandidate}
          >
            Vote now
          </button>

          <h5
            style={{
              color: "#fff",
              fontSize: "40px",
              marginRight: "160px",
              fontWeight: "initial",
              backgroundColor: "red",
              opacity: "0.4",
              marginTop: "20px",
              padding: "0px 20px",
            }}
          >
            Choose your future digitally with us.
          </h5>
        </div>
      </div>
      <div
        style={{
          marginTop: "110px",
        }}
      >
        <CandidatesPage
          candidates={candidates}
          voteForCandidate={voteForCandidate}
          unvoteCandidate={unvoteCandidate}
          votedCandidate={votedCandidate}
          setVotedCandidate={setVotedCandidate}
        />
      </div>
      <Aboutpage />
      <ContactPage />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <button onClick={logout} style={{ width: "100px" }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
