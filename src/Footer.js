import React, { useState } from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.text();
      setMessage(data);
      setEmail("");
    } catch (error) {
      console.error(error);
      setMessage("❌ Error subscribing! Please try again later.");
    }
  };

  return (
    <>
      <div className="subscribe-bar">
        <b>SIGN UP FOR OUR DAILY INSIDER</b>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="submit" value="Subscribe" />
        </form>
      </div>

      {message && <p className="subscribe-message">{message}</p>}

      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>Explore</h3>
            <p>Home</p>
            <p>Questions</p>
            <p>Articles</p>
            <p>Tutorials</p>
          </div>

          <div>
            <h3>Support</h3>
            <p>FAQs</p>
            <p>Help</p>
            <p>Contact Us</p>
          </div>

          <div>
            <h3>Stay Connected</h3>
            <div className="socials">
              <FaInstagram /> <FaFacebook /> <FaTwitter />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <b>DEV@Deakin 2022</b>
          <div>
            <span>Privacy Policy</span> | <span>Terms</span> |{" "}
            <span>Code of Conduct</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
