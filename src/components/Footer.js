import React from "react";
import LinkedinLogo from "../assets/images/logos_linkedin.png";
import InstaLogo from "../assets/images/logos_insta.png";
import GmailLogo from "../assets/images/logos_gmail.png";
import GitLogo from "../assets/images/Git.png";
import CopyrightLogo from "../assets/images/logos_copyright.png";

const Footer = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginLeft: 80, display: "flex" }}>
          <div>
            <p style={{ fontSize: 16, fontWeight: 600, color: "#CCD6F6" }}>
              General
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Home
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              About
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Experience
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Works
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Technologies
            </p>
          </div>
          <div style={{ marginLeft: 50 }}>
            <p
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#CCD6F6",
              }}
            >
              Specifics
            </p>
          </div>
        </div>
        <div
          style={{
            marginRight: 50,
            display: "flex",
            justifyContent: "space-evenly",
            width: "10%",
            marginTop: 10,
          }}
        >
          <img
            src={LinkedinLogo}
            alt="external link logo"
            width={20}
            height={20}
          />
          <img
            src={InstaLogo}
            alt="external link logo"
            width={20}
            height={20}
          />
          <img src={GitLogo} alt="external link logo" width={20} height={20} />
          <img
            src={GmailLogo}
            alt="external link logo"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <span style={{ color: "#635F5F", fontSize: 16 }}>
          Designed and built by
          <span style={{ color: "#CCD6F6", fontSize: 22, fontWeight: "bold" }}>
            {"  "}
            Vaibhav Kadwey
          </span>
        </span>
      </div>
      <div
        style={{
          fontSize: 12,
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <p>Copyright &copy; 2022 Vaibhav Kadwey</p>
      </div>
    </div>
  );
};

export default Footer;
