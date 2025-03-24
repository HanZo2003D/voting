import React from "react";
import "../styles/about.css";

const Aboutpage = () => {
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
        About Us
      </h1>
      <div className="about-container">
        <p>
          Our Online Voting System is designed to modernize the election process
          for selecting the College Captain. It provides a secure, transparent,
          and user-friendly platform where every student's voice counts.
        </p>
        <p>The process is simple and efficient:</p>
        <ul>
          <li>Students register and log in with their unique credentials.</li>
          <li>
            The candidates, who are passionate about leadership and service, are
            listed with their profiles and campaign messages.
          </li>
          <li>
            Each student is allowed to vote for only one candidate to ensure
            fairness.
          </li>
          <li>
            The system also permits students to change their vote (unvote and
            revote) before the election ends.
          </li>
          <li>
            All votes are recorded in real time, providing immediate
            transparency and trust in the results.
          </li>
        </ul>
        <p>
          Our platform empowers the student body by making the voting process
          accessible and efficient. By embracing technology, we ensure that the
          selection of the College Captain reflects the true will of the
          students. Every vote matters!
        </p>
      </div>
    </div>
  );
};

export default Aboutpage;
