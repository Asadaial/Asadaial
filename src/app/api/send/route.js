import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';


const fromEmail = process.env.FROM_EMAIL;
const APP_PASSWORD = process.env.APP_PASSWORD;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: fromEmail,
        pass: APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: fromEmail, // Your Gmail to receive the messages
      subject: `${email} ${subject}`,
      text: `${message}
      From: ${email}
      `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
