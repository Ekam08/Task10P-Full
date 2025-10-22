const express = require("express");
const sendGrid = require("@sendgrid/mail");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set SendGrid API Key
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

// Serve static frontend
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Newsletter subscription route
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  const message = {
    to: email,
    from: {
      email: "ekam4788.se24@chitkara.edu.in", // verified sender
      name: "DEV@Deakin",
    },
    replyTo: "ekam19077.dcmc@gmail.com",
    subject: "Welcome to DEV@Deakin",
    text: "Thank you for subscribing to DEV@Deakin!",
    html: `
      <h2>Welcome to <b>DEV@Deakin</b></h2>
      <p>Thank you for subscribing. Stay connected for the latest updates and tutorials.</p>
    `,
  };

  try {
    await sendGrid.send(message);
    res.send(`Success! A welcome email has been sent to ${email}.`);
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error);
    res.status(500).send("Error sending email. Please try again later.");
  }
});

app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
