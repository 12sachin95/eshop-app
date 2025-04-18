import nodemailer from "nodemailer";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_HOST) || 587,
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Render an email template
const renderEmailTemplate = async (
  templateName: string,
  data: Record<string, any>
): Promise<string> => {
  const filePath = path.join(
    process.cwd(),
    "auth-service",
    "src",
    "email-templates",
    `${templateName}.ejs`
  );
  const html = await ejs.renderFile(filePath, data);
  return html;
};

// send an email using nodemailer
export const sendEmail = async (
  to: string,
  subject: string,
  templateName: string,
  data: Record<string, any>
) => {
  try {
    const html = await renderEmailTemplate(templateName, data);
    const mailOptions = {
      from: `<${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    };
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};
