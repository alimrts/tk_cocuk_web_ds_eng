import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import "./Contact.css";
import { themeContext } from "../../Context";

import tkc_iletisim_left from "../../img/iletisim_images/tkc_iletisim_left.png";

import useZustandStore from "../../zustandStore";
import AlertPopup from "../AlertPopup";

import texts from "./texts_contact.json";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { language, setLanguage, languageData } = useZustandStore();
  const strings = languageData[language];

  const [showAlert, setShowAlert] = useState(false);

  const handleImageClick = () => {
    setShowAlert(showAlert ? false : true);
  };

  const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const body = {};
    new FormData(e.target).forEach((value, key) => {
      body[key] = value;
    });
    console.log(body);

    if (
      body.user_name.trim() === "" ||
      !isEmailValid(body.user_email.trim()) ||
      body.message.trim() === ""
    ) {
      //alert("Lütfen Gerekli Alanları Doldurunuz.");
      setShowAlert(true);
      return;
    }
    setIsLoading(true);
    axios.post("/contact", body).then(
      (result) => {
        console.log(result.text);
        setIsLoading(false);
        setDone(true);
        e.target.reset();
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <div className="contact-form" id="contact">
      {" "}
      {showAlert && (
        <AlertPopup
          rowTitle={strings.registerPageUyari}
          row1={strings.registerPageLutfenGerekliBilgiler}
          onClick={() => handleImageClick()}
          isOpen={showAlert}
        />
      )}{" "}
      <div className="left-column-contact">
        <img src={tkc_iletisim_left} alt="" />
      </div>
      <div
        className="right-column-contact"
        style={{
          zIndex: "10",
        }}
      >
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder={texts.UserName}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder={texts.UserEmail}
          />
          <textarea
            name="message"
            className="user"
            placeholder={texts.Message}
          />
          <div>
            <input
              type="submit"
              value={texts.ButtonText}
              className={`button ${done ? "button-disabled" : ""}`}
              disabled={done}
            />
            {isLoading && <div> {texts.Sending}</div>}
            {done && texts.ThankYou}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
