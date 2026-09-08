import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot check
    if (data.website) {
      return NextResponse.json({ success: true }, { status: 200 }); // Silently succeed
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Email service is not configured.' },
        { status: 503 }
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const {
      supportType,
      childFirstName,
      childLastName,
      childDob,
      childZip,
      parentFirstName,
      parentLastName,
      parentPhone,
      parentEmail,
      noInsurance,
      insuranceCompany,
      secondaryInsurance,
      policyNumber,
      referralSource,
      message,
      smsConsent,
    } = data;

    const emailContent = `
      <h2>New Contact / Admissions Request</h2>
      <p><strong>Type of Support:</strong> ${supportType}</p>
      
      <h3>Child/Patient Information</h3>
      <ul>
        <li><strong>Name:</strong> ${childFirstName} ${childLastName}</li>
        <li><strong>DOB:</strong> ${childDob}</li>
        <li><strong>Zip Code:</strong> ${childZip}</li>
      </ul>
      
      <h3>Parent/Guardian Information</h3>
      <ul>
        <li><strong>Name:</strong> ${parentFirstName} ${parentLastName}</li>
        <li><strong>Phone:</strong> ${parentPhone}</li>
        <li><strong>Email:</strong> ${parentEmail}</li>
      </ul>
      
      <h3>Insurance Information</h3>
      <ul>
        <li><strong>No Insurance:</strong> ${noInsurance ? 'Yes' : 'No'}</li>
        <li><strong>Primary Company:</strong> ${insuranceCompany || 'N/A'}</li>
        <li><strong>Policy Number:</strong> ${policyNumber || 'N/A'}</li>
        <li><strong>Secondary Insurance:</strong> ${secondaryInsurance || 'N/A'}</li>
      </ul>
      
      <h3>Additional Details</h3>
      <ul>
        <li><strong>Referral Source:</strong> ${referralSource || 'N/A'}</li>
        <li><strong>Description:</strong> ${message || 'N/A'}</li>
        <li><strong>SMS Consent:</strong> ${smsConsent ? 'Yes' : 'No'}</li>
      </ul>
    `;

    const result = await resend.emails.send({
      from: 'Teen Harbor Website <onboarding@resend.dev>', // Update this when you have a verified domain
      to: process.env.CONTACT_EMAIL_TO || 'info@teenharbor.com',
      replyTo: parentEmail,
      subject: `New Admissions Request from ${parentFirstName} ${parentLastName}`,
      html: emailContent,
    });

    if (result.error) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data: result.data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
