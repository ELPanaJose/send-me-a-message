const { Router } = require('express');
const router = Router();
const accountSid = ""
const authToken = ""
const client = require('twilio')(accountSid, authToken);

router.post('/message-sent',(req, res)=>{
const { message, name } = req.body;
client.messages
  .create({
     body: `name: ${name}, message: ${message}` ,
     from: 'Your twilio number',
     to: 'your number'
   })
  .then(message => console.log(message.sid));
res.redirect('/success.html');});

module.exports = router;
