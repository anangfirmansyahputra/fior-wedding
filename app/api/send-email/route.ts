import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  try {
    const {
      email,
      name,
      whatsapp,
      instagram,
      date,
      weddingVenue,
      guests,
      eventType,
      hearAbout,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "anangfirmansyahp5@gmail.com",
      subject: `Fior Form Submission from ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <div style="background-color: #DBBEB8; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; color: #ffffff;">Form</h2>
          </div>
          <div style="padding: 20px;">
            <p style="margin: 0 0 10px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0 0 10px;"><strong>Whatsapp:</strong> ${whatsapp}</p>
            <p style="margin: 0 0 10px;"><strong>Instagram:</strong> ${instagram}</p>
            <p style="margin: 0 0 10px;"><strong>Wedding Date:</strong> ${date}</p>
            <p style="margin: 0 0 10px;"><strong>Wedding Venue:</strong> ${weddingVenue}</p>
            <p style="margin: 0 0 10px;"><strong>Number of Guests:</strong> ${guests}</p>
            <p style="margin: 0 0 10px;"><strong>Event Type:</strong> ${eventType}</p>
            <p style="margin: 0 0 10px;"><strong>Heard About Us From:</strong> ${hearAbout}</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #999; font-size: 12px;">This is an automated message, please do not reply.</p>
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Send email success",
    });
  } catch (err: any) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
        message: err?.message || "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
