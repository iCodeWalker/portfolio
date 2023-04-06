import React, { useRef, useState } from "react";
import FilledButton from "../components/button";
import InputArea from "../components/inputArea";
import InputField from "../components/inputField";

import emailjs from "@emailjs/browser";

import "./contactPage.scss";
import Modal from "../components/modal";
import Loader from "../components/loader";

const ContactPage = () => {
  const form = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const [displayModal, setDisplayModal] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(false);

  const cleanFields = () => {
    setUser("");
    setEmail("");
    setMessage("");
    setError("");
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          // show the user a success message

          setDisplayLoader(false);
          cleanFields();
          setDisplayModal(true);

          console.log("result", result);

          setTimeout(() => {
            setDisplayModal(false);
          }, 4000);
        },
        (error) => {
          // show the user an error
          setDisplayLoader(false);
          setError("Something went wrong!. Please try again after some time.");
          console.log("error", error);
        }
      );
  };

  const handleSubmitButton = (e) => {
    if (!user || !email || !message) {
      setError("All fields are required*");
      return;
    }

    setDisplayLoader(true);

    setTimeout(() => {
      sendEmail(e);
    }, 2000);
  };

  return (
    <div className="contact-section" id="contact-section">
      <p className="heading-secondary">Get In Touch :</p>
      <div>
        <p className="paragraph u-margin-top-medium">
          I’m always looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input__container u-margin-top-big u-margin-bottom-big">
          <InputField
            placeholder="Name"
            type="text"
            name="user_name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <InputField
            placeholder="Email"
            type="email"
            className="u-margin-top-big"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <InputArea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <p className="error-text">{error}</p>
      </form>
      <div className="u-margin-top-big u-margin-left-big">
        <FilledButton
          title="Submit"
          clickHandler={(e) => handleSubmitButton(e)}
        />
      </div>
      <div
        className="contact-section--modal-container"
        style={{
          display: `${displayModal || displayLoader ? "flex" : "none"}`,
        }}
      >
        {displayLoader ? <Loader /> : <Modal />}
      </div>
    </div>
  );
};
export default ContactPage;
