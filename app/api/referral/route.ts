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
      proName,
      proAgency,
      proPhone,
      proEmail,
      proRelationship,
      teenName,
      teenDob,
      teenAge,
      teenGender,
      teenLanguage,
      teenSchool,
      teenGrade,
      guardianName,
      guardianPhone,
      guardianEmail,
      guardianAddress,
      legalGuardian,
      clinicalPresentation,
      currentDiagnosis,
      previousTreatment,
      currentMedications,
      riskSuicidalIdeation,
      riskSelfHarm,
      riskAggression,
      riskElopement,
      riskSubstanceUse,
      riskOther,
      submittedBy,
      submittedDate,
    } = data;

    const risks = [
      riskSuicidalIdeation && 'Suicidal ideation',
      riskSelfHarm && 'Self-harm',
      riskAggression && 'Aggression',
      riskElopement && 'Elopement risk',
      riskSubstanceUse && 'Substance use concerns',
      riskOther && `Other: ${riskOther}`,
    ]
      .filter(Boolean)
      .join(', ');

    const emailContent = `
      <h2>New Professional Referral</h2>
      
      <h3>Referring Professional</h3>
      <ul>
        <li><strong>Name:</strong> ${proName}</li>
        <li><strong>Agency / Organization:</strong> ${proAgency || 'N/A'}</li>
        <li><strong>Phone:</strong> ${proPhone}</li>
        <li><strong>Email:</strong> ${proEmail}</li>
        <li><strong>Relationship to Youth:</strong> ${proRelationship || 'N/A'}</li>
      </ul>
      
      <h3>Adolescent Information</h3>
      <ul>
        <li><strong>Full Name:</strong> ${teenName}</li>
        <li><strong>Date of Birth:</strong> ${teenDob}</li>
        <li><strong>Age:</strong> ${teenAge || 'N/A'}</li>
        <li><strong>Gender:</strong> ${teenGender || 'N/A'}</li>
        <li><strong>Primary Language:</strong> ${teenLanguage || 'N/A'}</li>
        <li><strong>Current School:</strong> ${teenSchool || 'N/A'}</li>
        <li><strong>Grade:</strong> ${teenGrade || 'N/A'}</li>
      </ul>
      
      <h3>Guardian Information</h3>
      <ul>
        <li><strong>Name(s):</strong> ${guardianName}</li>
        <li><strong>Phone:</strong> ${guardianPhone}</li>
        <li><strong>Email:</strong> ${guardianEmail || 'N/A'}</li>
        <li><strong>Address:</strong> ${guardianAddress || 'N/A'}</li>
        <li><strong>Legal Guardian:</strong> ${legalGuardian || 'N/A'}</li>
      </ul>
      
      <h3>Reason for Referral</h3>
      <p>${clinicalPresentation}</p>
      
      <h3>Mental Health History</h3>
      <ul>
        <li><strong>Current Diagnosis:</strong> ${currentDiagnosis || 'N/A'}</li>
        <li><strong>Previous Treatment:</strong> ${previousTreatment || 'N/A'}</li>
        <li><strong>Current Medications:</strong> ${currentMedications || 'N/A'}</li>
        <li><strong>Risk Concerns:</strong> ${risks || 'None indicated'}</li>
      </ul>
      
      <h3>Referral Submitted By</h3>
      <ul>
        <li><strong>Name:</strong> ${submittedBy}</li>
        <li><strong>Date:</strong> ${submittedDate || 'N/A'}</li>
      </ul>
    `;

    const result = await resend.emails.send({
      from: 'Teen Harbor Website <onboarding@resend.dev>', // Update this when you have a verified domain
      to: process.env.CONTACT_EMAIL_TO || 'info@teenharbor.com',
      replyTo: proEmail,
      subject: `New Professional Referral from ${proName}`,
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
