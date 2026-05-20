import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// In a real scenario, you'd use nodemailer. Since we are in a sandbox and can't install additional packages beyond package.json
// I will show the implementation logic. The user needs to ensure 'nodemailer' is in package.json if not already (it's not).
// Assuming 'nodemailer' is available or will be added.
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, message } = data;

    // 1. Save to Firestore as primary backup
    await addDoc(collection(db, 'contacts'), {
      name,
      email,
      phone,
      message,
      createdAt: serverTimestamp(),
    });

    // 2. Send email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Eternità Onoranze" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Agency receives the lead
      replyTo: email,
      subject: `Nuovo Contatto dal sito: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefono: ${phone}\n\nMessaggio:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #0F172A;">Nuova richiesta di contatto</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Messaggio:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
