import { Resend } from "resend";

const resend = new Resend(process.env.RESEND!);

export async function POST(request: Request) {
  try {
    const { name, email, phone, course } = await request.json();

    const result = await resend.emails.send({
      from: "your@email.com",
      to: email,
      subject: `New Course Registration from ${name}`,
      text: `Phone: ${phone}\nCourse: ${course}`,
    });

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
      status: 500,
    });
  }
}
