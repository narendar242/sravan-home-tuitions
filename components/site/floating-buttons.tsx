import { MessageCircle, Phone } from 'lucide-react'
import { PHONE_TEL, WHATSAPP_URL } from './site-data'

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <MessageCircle className="size-7" />
      </a>
      <a
        href={PHONE_TEL}
        aria-label="Call us now"
        className="flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-black/20 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40"
      >
        <Phone className="size-7" />
      </a>
    </div>
  )
}
