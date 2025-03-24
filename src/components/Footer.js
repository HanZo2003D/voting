import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        height: "120px",
        width: "100%",

        borderTop: "1px solid #ddd",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10px",

        bottom: "0",
      }}
    >
      <h1
        style={{ textAlign: "center", fontSize: "16px", fontWeight: "initial" }}
      >
        © 2024 copyright <br />
        <span style={{ fontSize: "18px", color: "blue", fontWeight: "bold" }}>
          {" "}
          terms & conditions{" "}
        </span>
        <br /> and
        <br />
        <span style={{ fontSize: "18px", color: "blue", fontWeight: "bold" }}>
          privacypolicy
        </span>
      </h1>
    </footer>
  );
};

export default Footer;
