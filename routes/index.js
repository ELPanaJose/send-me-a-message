require("dotenv").config();
const { Router } = require("express");
const router = Router();
const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const twilioNumber = process.env.TNUMBER;
const myNumber = process.env.NUMBER;
const client = require("twilio")(accountSid, authToken);

router.post("/message-sent", (req, res) => {
  const { name, message } = req.body;
  client.messages
    .create({
      body: `name: ${name}\n message: ${message}`,
      from: twilioNumber,
      to: myNumber,
    })
    .then(message => console.log(message.sid));
  res.redirect("/success.html");
});

module.exports = router;
