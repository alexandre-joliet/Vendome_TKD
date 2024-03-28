import { type NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
 
type ResponseData = {
  message: string
}

export async function POST (
  req: NextRequest,
  res: NextResponse<ResponseData>
) {

  const data = await req.json();
 
  const myMail = process.env.NEXT_PUBLIC_MAIL_ADDRESS;
  const myPassword = process.env.NEXT_PUBLIC_MAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: '587',
    // tls: true,
    service: 'gmail',
    auth: {
      user: myMail,
      pass: myPassword,
    }
  });

  try {
    const sentMail = await transporter.sendMail({
      from: `${data.name}`,
      to: `${myMail}`,
      replyTo: `${data.mail}`,
      // cc: `${data.mail}`,
      subject: "Demande d'informations",
      html: `
      <p>Name: ${data.name} </p>
      <p>Email: ${data.mail} </p>
      <p>Message: ${data.message} </p>
      `,
    })
    try {
      const sentMailConfirmation = await transporter.sendMail({
        from: `${myMail}`,
        to: `${data.mail}`,
        subject: "Confirmation de réception de votre message",
        html: `
        <p>Nous avons bien reçu votre message et nous vous en remercions ! Nous reviendrons vers vous dès que possible.</p>
        `,
      })
      return NextResponse.json('Success: Validation message sent!')
    } catch (error) {
      console.log(error)
      NextResponse.json({ message: 'Error: validation message not sent' }, {status: 500})
    }
    return NextResponse.json('Success: Message sent!')
  } 
  catch (error) {
    console.log(error)
      NextResponse.json({ message: 'Error: message not sent' }, {status: 500})
  }
}