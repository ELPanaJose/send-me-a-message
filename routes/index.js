const { Router } = require('express');
const router = Router();
const accountSid = ""
const authToken = ""
const client = require('twilio')(accountSid, authToken);

router.post('/message-sent',(req, res)=>{
const { message } = req.body;
client.messages
  .create({
     body: `${message}` ,
     from: 'YOUR TWILIO NUMBER',
     to: 'YOUR NUMBER'
   })
  .then(message => console.log(message.sid));
res.redirect('/success.html');});

module.exports = router;
