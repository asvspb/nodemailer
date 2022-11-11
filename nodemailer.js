const nodemailer = require("nodemailer");
require('dotenv').config();

// async..await is not allowed in global scope, must use a wrapper
async function main(textMail) {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"robot@nodemailer', // sender address
        to: "asv.pro@ya.ru", // list of receivers
        subject: "Hello ✔ there", // Subject line
        text: textMail, // plain text body
    });

    console.log("Message sent: %s", info.messageId);

}

main("Wooohooo it works!!").catch(console.error);