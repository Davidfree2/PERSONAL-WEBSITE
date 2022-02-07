const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({ 
    service: 'gmail',
    port: 587,
    secure: true,
    auth: {
    }
})

const sendEmail = async(message) =>{
    const email = await transporter;
    try {
        const sendEmail = await email.sendMail({
        });
        return 'success'
    }
    catch {
        return 'error'
    }
}

exports.sendEmail = sendEmail;
