import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  email: z.string().trim().email("A valid email is required."),
  company: z.string().trim().optional().or(z.literal("")),
  phone: z.string().trim().optional().or(z.literal("")),
  interest: z.string().trim().min(2),
  requestBrochure: z.boolean().default(false),
  message: z.string().trim().min(10, "Please enter a short message."),
});

function buildHtml(payload: z.infer<typeof contactSchema>) {
  const details = [
    ["Full name", payload.fullName],
    ["Email", payload.email],
    ["Company", payload.company || "Not provided"],
    ["Phone", payload.phone || "Not provided"],
    ["Interest", payload.interest],
    ["Brochure requested", payload.requestBrochure ? "Yes" : "No"],
    ["Message", payload.message],
  ];

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #101828;">
      <h2 style="margin-bottom: 16px;">New Gaia Nexus enquiry</h2>
      <table cellpadding="8" cellspacing="0" border="0" style="border-collapse: collapse;">
        ${details
          .map(
            ([label, value]) => `
              <tr>
                <td style="font-weight: 700; vertical-align: top;">${label}</td>
                <td>${value}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const payload = contactSchema.parse(json);

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const brochureUrl = process.env.BROCHURE_URL;

    if (!resendApiKey || !fromEmail || !toEmail) {
      return Response.json(
        {
          message:
            "Email is not configured yet. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
        },
        { status: 500 },
      );
    }

    const subject = payload.requestBrochure
      ? `Brochure request from ${payload.fullName}`
      : `New enquiry from ${payload.fullName}`;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject,
        html: buildHtml(payload),
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      return Response.json(
        { message: `Unable to send email: ${errorText}` },
        { status: 502 },
      );
    }

    if (payload.requestBrochure && brochureUrl) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [payload.email],
          subject: "Your brochure request",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #101828;">
              <h2>Thanks for your interest</h2>
              <p>Here is your brochure link:</p>
              <p><a href="${brochureUrl}">${brochureUrl}</a></p>
            </div>
          `,
        }),
      });
    }

    return Response.json({
      message: payload.requestBrochure
        ? "Your request has been sent. We will share the brochure shortly."
        : "Your message has been sent. We will get back to you soon.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { message: error.issues[0]?.message ?? "Invalid form submission." },
        { status: 400 },
      );
    }

    return Response.json(
      { message: "Unexpected server error. Please try again." },
      { status: 500 },
    );
  }
}
