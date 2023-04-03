import React from "react";
import FilledButton from "../components/button";
import InputArea from "../components/inputArea";
import InputField from "../components/inputField";

import "./contactPage.scss";

const ContactPage = () => {
  return (
    <div className="contact-section">
      <p className="heading-secondary">Get In Touch :</p>
      <div>
        <p className="paragraph u-margin-top-medium">
          I’m always looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
      </div>
      <div className="input__container u-margin-top-big u-margin-bottom-big">
        <InputField placeholder="Name" type="text" />

        <InputField
          placeholder="Email"
          type="text"
          className="u-margin-top-big"
        />
      </div>
      <div>
        <InputArea />
      </div>
      <div className="u-margin-top-big u-margin-left-big">
        <FilledButton title="Submit" />
      </div>
    </div>
  );
};
export default ContactPage;
