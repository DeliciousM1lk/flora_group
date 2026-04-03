"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export function CTASection() {
  const whatsappMessage = encodeURIComponent("Здравствуйте! Хочу получить консультацию по вашим услугам.")
  const whatsappLink = `https://wa.me/77777995995?text=${whatsappMessage}`

  return (
    <section className="py-16 sm:py-24 bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
              Готовы создать зелёное пространство вашей мечты?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="mt-4 sm:mt-6 text-primary-foreground/80 text-base sm:text-lg leading-relaxed">
              Свяжитесь с нами для бесплатной консультации. Мы 
              поможем подобрать оптимальное решение для вашего проекта.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2 text-base px-6 sm:px-8 w-full sm:w-auto"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Написать в WhatsApp
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-6 sm:px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto gap-2"
                asChild
              >
                <a href="tel:+77777995995">
                  <Phone className="h-4 w-4" />
                  Позвонить
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
