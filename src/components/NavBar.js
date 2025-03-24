import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpg";
const NavBar = () => {
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
    <div
      style={{
        height: "80px",

        display: "flex",
        alignItems: "center",

        width: "100%",
        backgroundColor: "#F8F9FA",
        color: "#212529",
        justifyContent: "space-between",
      }}
    >
      <div style={{ paddingLeft: "80px" }}>
        <h1 style={{ fontWeight: "lighter" }}>Vote Your Future</h1>
      </div>
      <div
        style={{
          display: "flex",

          gap: "20px",
          marginRight: "80px",
        }}
      >
        <h3 onClick={handleHome}>Home</h3>
        <h3 onClick={handleAbout}>About</h3>
        <h3 onClick={handleCandidates}>Candidates</h3>
        <h3 onClick={handleContact}>Contact</h3>
        <h3 onClick={handleProfile}>
          <img src={profile} height={10} width={10} />
        </h3>
        <h3 onClick={handleResult}>Result</h3>
      </div>
    </div>
  );
};

export default NavBar;
