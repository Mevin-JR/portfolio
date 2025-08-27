import ContactTemplate from "@/components/emailTemplates/contactTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  const { fullName, email, message } = body;

  try {
    // Reciever mail
    const { data, error } = await resend.emails.send({
      from: "Contact Form <portfolio-contact@mevinjr.com>",
      to: ["jrmevin@gmail.com"],
      subject: `Message from ${fullName}`,
      react: ContactTemplate({ fullName, email, message }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
