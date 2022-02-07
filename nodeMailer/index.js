const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: true,
    auth: {
        user: 'contactDavidEsquerra.de@gmail.com',
        pass: 'Hdev600234?!'
    }
})

const sendEmail = async(message) =>{
    const email = await transporter;
    try {
        const sendEmail = await email.sendMail({
            from : 'contactDavidEsquerra.de@gmail.com',
            to : 'davidesquerra.de@gmail.com',
            subject : 'Job Oppurtunity',
            text : JSON.stringify(message),
        });
        return 'success'
    }
    catch {
        return 'error'
    }
}

exports.sendEmail = sendEmail;

