import React from "react";

const ContactPage = () => {
  return (
    <div style={{ marginLeft: 80, marginBottom: 30 }}>
      <p style={{ color: "#CCD6F6", fontSize: 35, fontWeight: "bold" }}>
        Get In Touch :
      </p>
      <div style={{ width: "45%" }}>
        <p style={{ color: "#ffffff" }}>
          I’m always looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
      </div>
      <div style={{ marginTop: 40, marginBottom: 40 }}>
        <input
          style={{
            height: 30,
            width: "25%",
            opacity: 0.9,
            fontSize: 16,
            color: "#ffffff",
            backgroundColor: "#1d1d1d",
            border: "1px solid #5BE9B9",
            borderRadius: 5,
            padding: 10,
            marginRight: 20,
            boxShadow: "2px 2px 4px 8px #5BE9B950",
          }}
          placeholder="NAME"
          type="text"
        />

        <input
          style={{
            height: 30,
            width: "25%",
            opacity: 0.9,
            fontSize: 16,
            color: "#ffffff",
            backgroundColor: "#1d1d1d",
            border: "1px solid #5BE9B9",
            borderRadius: 5,
            padding: 10,
            boxShadow: "2px 2px 4px 8px #5BE9B950",
          }}
          placeholder="EMAIL"
          type="email"
        />
      </div>
      <div>
        <textarea
          rows={10}
          placeholder="TELL ME SOMETHING"
          style={{
            fontSize: 16,
            backgroundColor: "#1d1d1d",
            color: "#ffffff",
            padding: 10,
            border: "1px solid #5BE9B9",
            borderRadius: 5,
            boxShadow: "2px 2px 4px 8px #5BE9B950",
            width: "30%",
          }}
        />
      </div>
      <div style={{ marginTop: 50 }}>
        <span
          style={{
            color: "#ffffff",
            backgroundColor: "#5BE9B9",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 5,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Submit
        </span>
      </div>
    </div>
  );
};
export default ContactPage;
