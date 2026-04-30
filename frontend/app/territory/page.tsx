"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight, Calendar, MessageCircle, Phone, Lightbulb,
  Droplets, Blocks, Trees, Fence, Construction, Check
} from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { API_BASE, Project } from "@/lib/api"

// Твои оригинальные услуги
const services = [
  {
    id: "paving",
    title: "Мощение и дорожки",
    description: "Укладка тротуарной плитки, природного камня, создание садовых дорожек и площадок.",
    icon: Blocks,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "lighting",
    title: "Ландшафтное освещение",
    description: "Проектирование и монтаж систем уличного освещения, подсветка деревьев и архитектуры.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  },
  {
    id: "irrigation",
    title: "Системы полива",
    description: "Автоматические системы полива любой сложности: капельный, дождевание, подземный.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    id: "fencing",
    title: "Ограждения и заборы",
    description: "Установка заборов из различных материалов, живые изгороди, декоративные ограждения.",
    icon: Fence,
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
  },
  {
    id: "gazebos",
    title: "Беседки и навесы",
    description: "Строительство беседок, пергол, навесов и других малых архитектурных форм.",
    icon: Construction,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: "greenery",
    title: "Посадка растений",
    description: "Высадка деревьев, кустарников, цветников и газонов из собственного питомника.",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
  },
]

// Твои преимущества
const benefits = [
  "Собственный питомник растений",
  "Гарантия на все работы 3 года",
  "Работаем с объектами любого масштаба",
  "Современное оборудование",
  "Профессиональный подход",
  "Соблюдение сроков",
]

export default function TerritoryPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const CATEGORY_SLUG = "blagoustrojstvo-territorii"

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/projects/?category__slug=${CATEGORY_SLUG}`)
        if (!response.ok) throw new Error("Ошибка загрузки")
        const data = await response.json()
        const projectsArray = Array.isArray(data) ? data : data.results || []
        setProjects(projectsArray.slice(0, 6))
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollAnimation direction="fade" delay={100}>
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 group">
                  <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                  На главную
                </Link>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={200}>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">Благоустройство территории</h1>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={300}>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Превращаем территории в комфортные и функциональные пространства. Мощение, освещение, системы полива, малые архитектурные формы.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={400}>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                    <a href="https://wa.me/77771234567" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" /> Заказать проект
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                    <a href="https://wa.me/77771234567" target="_blank" rel="noopener noreferrer">Рассчитать стоимость</a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Услуги</span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">Полный спектр работ</h2>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={service.id} delay={index * 75} direction="up">
                  <article className="group cursor-pointer">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-6 relative">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-background/90 flex items-center justify-center">
                        <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm sm:text-base">{service.description}</p>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollAnimation direction="left" className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
                      <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 pt-8">
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-sm">
                      <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                      <img src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80" alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={200} className="order-1 lg:order-2">
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">Почему мы</span>
                  <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">Комплексный подход</h2>
                  <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                    {benefits.map((item, index) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Check className="w-4 h-4 text-primary" /></div>
                        <span className="text-foreground text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Портфолио</span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">Реализованные проекты</h2>
              </div>
            </ScrollAnimation>

            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[1, 2, 3].map((i) => <div key={i} className="aspect-[4/3] rounded-2xl bg-muted animate-pulse" />)}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                  <ScrollAnimation key={project.id} delay={index * 100} direction="up">
                    <Link href={`/projects/${CATEGORY_SLUG}/${project.slug}`} className="group block">
                      <article>
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                          <img src={project.main_image || "/placeholder.jpg"} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                        <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm">{project.year} г.</span>
                        </div>
                      </article>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-bold text-3xl sm:text-4xl text-primary-foreground">Готовы преобразить вашу территорию?</h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="https://wa.me/77771234567"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2" asChild>
                <a href="tel:+77771234567"><Phone className="h-4 w-4" /> Позвонить</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}