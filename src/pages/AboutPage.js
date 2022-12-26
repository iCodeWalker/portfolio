import React from "react";
import AboutImage from "../assets/images/AboutImage.jpg";
import logoFlutter from "../assets/images/logos_flutter.png";
import logoReact from "../assets/images/logos_react.png";
import logoJs from "../assets/images/logos_javascript.png";
import logoTs from "../assets/images/logos_typescript-icon.png";

const AboutPage = () => {
  return (
    <div style={{ marginLeft: 80, marginBottom: 30 }}>
      <p style={{ color: "#CCD6F6", fontSize: 35, fontWeight: "bold" }}>
        About Me :
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            width: "50%",
          }}
        >
          <p>
            Hello! My name is Vaibhav I’m a software engineer specializing in
            building exceptional digital experiences. and I enjoy creating
            things that live on the internet. My interest in web development
            started back in 2018 when I was doing my graduation. I started with
            static content website using HTML5, CSS3 and JavaScript. As i
            started doing more study in web development it turns out to be
            challenging and i accepted it.
          </p>
          <p>
            Now talking of today, I have worked with some startups, a
            consultancy and as a freelancer in some of the good projects that
            helped me to learn a lot.
          </p>

          <div
            style={{
              color: "#ffffff",
              display: "flex",
            }}
          >
            <div>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <p>1. JavaScript (ES 6)</p>
              <p>2. TypeScript</p>
              <p>3. React</p>
              <p>4. React Native</p>
              <p>5. Flutter</p>
            </div>

            <div style={{ marginTop: 50, marginLeft: 30 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img
                  src={logoFlutter}
                  style={{ margin: 10 }}
                  width={30}
                  height={30}
                />
                <img
                  src={logoReact}
                  style={{ marginLeft: 70 }}
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    src={logoJs}
                    style={{ margin: 10 }}
                    width={30}
                    height={30}
                  />
                  <img
                    src={logoTs}
                    style={{ marginLeft: 50 }}
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginLeft: 100,
            marginRight: 100,
            boxShadow: "2px 2px 4px 8px #5BE9B950",
            borderRadius: 10,
            width: "30%",
            height: "40%",
          }}
        >
          <img
            src={AboutImage}
            style={{
              borderRadius: 10,
              width: "auto",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
