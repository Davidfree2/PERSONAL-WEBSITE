//npm installed modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodeMailer = require('nodemailer');

//my modules
const mailer = require('./nodeMailer/index.js');

//server init
const app = express();
const port = 80;

//npm module inits
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//GET requests
app.use(express.static(__dirname + '/public'));

//POST requests
app.post('/emailInfo', async(req,res)=>{
    const emailName = await req.body.emailName;
    const emailCompany = await req.body.emailCompany;
    const emailEmail = await req.body.emailEmail;
    const emailMessage = await req.body.emailMessage;

    const objectA = await {
        email: emailEmail,
        company: emailCompany,
        name: emailName,
        message: emailMessage,
    }

    console.log(objectA);

    const sendEmail = await mailer.sendEmail(objectA);

    if (sendEmail == 'success') {
        console.log('it worked!');
        res.json({code: 'success'});
    } else {
        console.log('it failed!');
        res.json({code: 'faliuer'});
    }
})


//server listening point
app.listen(port, console.log(`listening on port ${port}`));
