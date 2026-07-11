import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const TO_EMAIL = 'n3828523@gmail.com'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured. Please set RESEND_API_KEY.' },
      { status: 500 },
    )
  }

  try {
    const form = await request.formData()
    const get = (name: string) => ((form.get(name) as string) || '').trim() || '—'

    const fields: Array<[string, string]> = [
      ['Full Name', get('fullName')],
      ['Mobile', get('mobile')],
      ['Email', get('email')],
      ['Gender', get('gender')],
      ['Qualification', get('qualification')],
      ['Experience', get('experience')],
      ['Subjects', get('subjects')],
      ['Classes', get('classes')],
      ['Boards', get('boards')],
      ['Preferred Areas', get('areas')],
      ['Languages', get('languages')],
      ['Available Timings', get('timings')],
    ]

    const html = `
      <h2 style="font-family:sans-serif;">New Tutor Registration — Sravan Home Tuitions</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
        ${fields
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${label}</td><td style="padding:4px 0;">${value}</td></tr>`,
          )
          .join('')}
      </table>
      <p style="font-family:sans-serif;font-size:13px;color:#666;">Aadhaar card is attached to this email.</p>
    `

    const attachments: Array<{ filename: string; content: Buffer }> = []
    const aadhaar = form.get('aadhaar')
    if (aadhaar && aadhaar instanceof File && aadhaar.size > 0) {
      const buffer = Buffer.from(await aadhaar.arrayBuffer())
      attachments.push({ filename: aadhaar.name || 'aadhaar', content: buffer })
    }

    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Sravan Home Tuitions <onboarding@resend.dev>',
      to: [TO_EMAIL],
      replyTo: get('email') !== '—' ? get('email') : undefined,
      subject: `New Tutor Registration — ${get('fullName')}`,
      html,
      attachments,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.log('[v0] join-tutor route error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
