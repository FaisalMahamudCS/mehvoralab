import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'

// Leads are worth more than a tidy log line: if delivery fails we return 500 so
// the form can tell the visitor to email directly instead of silently dropping it.
export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the form and try again.' },
      { status: 400 }
    )
  }

  const { name, email, company, message } = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL

  if (!apiKey || !to || !from) {
    console.error(
      'Contact form is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.'
    )
    return NextResponse.json(
      { error: 'Contact form is not configured yet.' },
      { status: 500 }
    )
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    message,
  ].filter((line) => line !== null)

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        // Replying in the inbox goes straight to the prospect.
        reply_to: email,
        subject: `New enquiry from ${name}${company ? ` (${company})` : ''}`,
        text: lines.join('\n'),
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('Resend rejected the contact email:', response.status, detail)
      return NextResponse.json(
        { error: 'Could not send your message. Please email me directly.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact email request failed:', error)
    return NextResponse.json(
      { error: 'Could not send your message. Please email me directly.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
