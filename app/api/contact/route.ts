import { type NextRequest, NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html'; 
const nodemailer = require('nodemailer');
 
type ResponseData = {
  message: string
}

export async function POST (
  req: NextRequest,
  res: NextResponse<ResponseData>
) {

  const data = await req.json();
  const cleanReceivedName = sanitizeHtml(data.name);
  const cleanReceivedEmail = sanitizeHtml(data.email);
  const cleanReceivedMessage = sanitizeHtml(data.message);
 
  const myMail = process.env.MAIL_ADDRESS;
  const myPassword = process.env.MAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    tls: true,
    auth: {
      user: myMail,
      pass: myPassword,
    }
  });

  try {
    //* CONNECTION TEST
    // const testConnexion = await transporter.verify(function (error: any, success: any) {
    //   if (error) {
    //     console.log("Ouuuups:", error);
    //   } else {
    //     console.log("Server is ready to take our messages");
    //   }
    // });
    
    const sentMail = await transporter.sendMail({
      from: `${cleanReceivedName}`,
      to: `${myMail}`,
      replyTo: `${cleanReceivedEmail}`,
      // cc: `${data.mail}`,
      subject: "Formulaire de contact TKD Club - Demande d'informations",
      html: `
      <h2>Formulaire de contact Vendôme Taekwondo Club</h2>
      <hr style="border: 0;
      border-top: 1px solid #cecece;">
      <h3>Informations du demandeur</h3>
      <ul>
        <li style="margin-bottom: 0.5rem; list-style: circle;"><b>Nom :</b> ${cleanReceivedName} </li>
        <li style="margin-bottom: 0.5rem; list-style: circle;"><b>Email :</b> ${cleanReceivedEmail} </li>
      </ul>
      <hr style="border: 0;
      border-top: 1px solid #cecece;">
      <h3>Message</h3>
      <p>${cleanReceivedMessage}</p>
      `,
    })

    //* CONFIRMATION EMAIL
    // try {
    //   const sentMailConfirmation = await transporter.sendMail({
    //     from: `${myMail}`,
    //     to: `${data.mail}`,
    //     subject: "Confirmation de réception de votre message",
    //     html: `
    //     <p>Nous avons bien reçu votre message et nous vous en remercions ! Nous reviendrons vers vous dès que possible.</p>
    //     `,
    //   })
    //   return NextResponse.json('Success: Validation message sent!')
    // } catch (error) {
    //   console.log(error)
    //   NextResponse.json({ message: 'Error: validation message not sent' }, {status: 500})
    // }
    return NextResponse.json('Success: Message sent!')
  } 
  catch (error) {
    console.log(error)
      NextResponse.json({ message: 'Error: message not sent' }, {status: 500})
  }
}