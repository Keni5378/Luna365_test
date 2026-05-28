import { NextRequest, NextResponse } from "next/server";
import * as net from "net";

const SMTP_HOST = "127.0.0.1";
const SMTP_PORT = 54325;
const FROM_EMAIL = "reservations@luna365.com";
const FROM_NAME = "Luna 365 Reservations";

function sendSmtpEmail(
  to: string,
  subject: string,
  html: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const socket = net.createConnection(SMTP_PORT, SMTP_HOST);
    const commands: string[] = [];
    let step = 0;

    const boundary = `----=_Part_${Date.now()}`;
    const emailBody = [
      `From: "${FROM_NAME}" <${FROM_EMAIL}>`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: multipart/alternative; boundary="${boundary}"`,
      ``,
      `--${boundary}`,
      `Content-Type: text/html; charset=UTF-8`,
      `Content-Transfer-Encoding: 7bit`,
      ``,
      html,
      ``,
      `--${boundary}--`,
    ].join("\r\n");

    commands.push(`EHLO localhost\r\n`);
    commands.push(`MAIL FROM:<${FROM_EMAIL}>\r\n`);
    commands.push(`RCPT TO:<${to}>\r\n`);
    commands.push(`DATA\r\n`);
    commands.push(`${emailBody}\r\n.\r\n`);
    commands.push(`QUIT\r\n`);

    socket.setEncoding("utf8");
    socket.setTimeout(10000);

    socket.on("data", () => {
      if (step < commands.length) {
        socket.write(commands[step]);
        step++;
      }
    });

    socket.on("end", () => resolve());
    socket.on("timeout", () => {
      socket.destroy();
      reject(new Error("SMTP timeout"));
    });
    socket.on("error", (err) => reject(err));
  });
}

export async function POST(req: NextRequest) {
  try {
    const { to, subject, html } = await req.json();

    if (!to || !subject || !html) {
      return NextResponse.json(
        { error: "Missing required fields: to, subject, html" },
        { status: 400 }
      );
    }

    await sendSmtpEmail(to, subject, html);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
