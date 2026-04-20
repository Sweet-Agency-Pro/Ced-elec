import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Nom invalide" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Email invalide" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 20) {
      return NextResponse.json(
        { success: false, message: "Message trop court (minimum 20 caractères)" },
        { status: 400 }
      );
    }

    // In production, send email via Resend or similar service
    // For the prototype, we just log and return success
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.trim(),
      subject,
      message: message.trim(),
    });

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
