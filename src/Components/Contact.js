import React, { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Please enter your email address");
    } else if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address");
    } else {
      console.log(`Submitting form with email: ${email}`);
      setEmail("");
      window.alert("Your booking has been sent!");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div>
      <Navbar />
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <form className="contact-form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="yourmail@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="secondary-button" type="submit">
            Submit
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
