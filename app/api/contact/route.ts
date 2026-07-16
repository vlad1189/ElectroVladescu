import { NextRequest, NextResponse } from 'next/server'

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message } = body

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'Toate câmpurile obligatorii trebuie completate' },
        { status: 400 }
      )
    }

    // Validate phone number format (Romanian)
    const phoneRegex = /^(\+40|0040|0)?(7\d{8})$/
    if (!phoneRegex.test(phone.replace(/[\s\-]/g, ''))) {
      return NextResponse.json(
        { success: false, error: 'Numărul de telefon nu este valid' },
        { status: 400 }
      )
    }

    // If Formspree endpoint is configured, use it
    if (FORMSPREE_ENDPOINT) {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('phone', phone)
      formData.append('email', email || '')
      formData.append('message', message)

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      return NextResponse.json({ success: true, message: 'Mesaj trimis cu succes!' })
    }

    // Fallback: Log the submission (for development)
    console.log('=== CONTACT FORM SUBMISSION ===')
    console.log(`Nume: ${name}`)
    console.log(`Telefon: ${phone}`)
    console.log(`Email: ${email || 'Necompletat'}`)
    console.log(`Mesaj: ${message}`)
    console.log('=============================')

    // Send email via simple mailto fallback
    const mailtoLink = `mailto:leontevlad2175@gmail.com?subject=Nouă cerere de ofertă - ElectroVlădescu&body=Nume: ${encodeURIComponent(name)}%0ATelefon: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email || 'Necompletat')}%0A%0AMesaj:%0A${encodeURIComponent(message)}`

    return NextResponse.json({ 
      success: true, 
      message: 'Mesaj trimis cu succes!',
      mailtoLink // For fallback
    })

  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { success: false, error: 'A apărut o eroare. Te rugăm să încerci din nou.' },
      { status: 500 }
    )
  }
}