import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div style={{ marginRight: "100px", marginLeft: "100px" }}>
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
          Contact Us
        </h1>
      </div>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",

            padding: "60px 40px",
            border: "1px solid black",
            margin: "80px 0px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Name</label>
            <br />
            <input placeholder="Enter your name" type="text" />
            <br />
            <label>Email</label>
            <br />
            <input placeholder="Enter your Email" type="email" />
            <br />
            <label>Message</label>
            <br />
            <input
              placeholder="Enter your Message"
              type="message"
              style={{ height: "100px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <button
              style={{
                padding: "10px 15px",
                borderRadius: "40px",
                width: "100px",
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
