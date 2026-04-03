"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000)
    
    // Stop pulsing after a few seconds
    const pulseTimer = setTimeout(() => setIsPulsing(false), 5500)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(pulseTimer)
    }
  }, [])

  const whatsappMessage = encodeURIComponent("Здравствуйте! Хочу узнать подробнее о ваших услугах.")
  const whatsappLink = `https://wa.me/77777995995?text=${whatsappMessage}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110 active:scale-95 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Написать в WhatsApp"
    >
      {/* Pulse ring */}
      {isPulsing && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
      )}
      
      <MessageCircle className="w-7 h-7 relative z-10" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all pointer-events-none shadow-lg">
        Напишите нам
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
      </span>
    </a>
  )
}
