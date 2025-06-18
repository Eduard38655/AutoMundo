import express from "express";
import nodemailer from "nodemailer";
import JoiVerification from "../BackedControled/JoiValidation/JoiVerfication.js";
import schema from "../BackedControled/JoiValidation/Shema.js";

const router = express.Router();

router.post("/Submit/Message", JoiVerification(schema), (req, res) => {
  const { Email, FullName, Asunto, Mensaje } = req.body;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.User_Node_Mailer,
      pass: process.env.Password_Node_Mailer
    }
  });

  var mailOptions = {
    from: Email,
    to: process.env.User_Node_Mailer,
    subject: Asunto,
    text: `Hello, my name is: ${FullName}. I want you to know that: ${Mensaje}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (res.headersSent) return;  

    if (error) {
      console.error("Error al enviar correo:", error);
      return res.status(400).json({ Message_error: error, Access: false });
    } else {
      console.log('Email enviado:', info.response);
      return res.status(200).json({ data: info.response, Access: true });
    }
  });
});

export default router;
