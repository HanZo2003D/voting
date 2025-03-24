import React, { useState } from "react";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";

export default function Navbar2({ isLoggedIn, isAdmin }) {
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleCandidates = () => {
    navigate("candidates/");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleResult = () => {
    navigate("/result");
  };

  return (
    <nav
      style={{
        display: "flex",
        color: "#777",
        backgroundColor: "#F8F8F8",
        padding: "0px 30px",
        height: "80px",

        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h2 className="logo">Vote your future</h2>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
        ☰
      </div>

      {/* Navbar Links */}
      <div>
        <ul className={isMobile ? "nav-links mobile" : "nav-links"}>
          <h3 onClick={handleHome} className="txt">
            Home
          </h3>
          <h3 onClick={handleAbout} className="txt">
            About
          </h3>
          <h3 onClick={handleCandidates} className="txt">
            Candidates
          </h3>
          <h3 onClick={handleContact} className="txt">
            Contact
          </h3>
          <h3 onClick={handleResult} className="txt">
            Result
          </h3>
          {isAdmin ? null : (
            <h3 className="txt" onClick={() => navigate("/admin")}>
              Admin Panel
            </h3>
          )}
        </ul>
      </div>
      <div>
        {!isLoggedIn ? (
          <>
            <h3 className="txt">Login</h3>
          </>
        ) : (
          <h3 onClick={handleProfile} className="txt">
            <img
              src={profile}
              height={40}
              width={40}
              alt="profileicon"
              style={{ borderRadius: "80px", marginRight: "20px" }}
            />
          </h3>
        )}
      </div>
    </nav>
  );
}
