"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Lightbulb, Droplets, Blocks, Trees, Fence, Construction, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

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

const projects = [
  {
    id: 1,
    title: "Частная резиденция Hillside",
    description: "Комплексное благоустройство территории 40 соток: мощение, освещение, автополив, зоны отдыха.",
    image: "https://images.unsplash.com/photo-1564429238804-526d3cc8e4f7?w=800&q=80",
    services: ["Мощение", "Освещение", "Автополив"],
  },
  {
    id: 2,
    title: "Бизнес-парк Greenville",
    description: "Благоустройство территории офисного комплекса с зонами отдыха для сотрудников.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    services: ["Озеленение", "Мощение", "МАФы"],
  },
  {
    id: 3,
    title: "Жилой комплекс Park Avenue",
    description: "Создание комфортной дворовой территории с детскими площадками и зонами отдыха.",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
    services: ["Озеленение", "Освещение", "Площадки"],
  },
]

const benefits = [
  "Собственный питомник растений",
  "Гарантия на все работы 3 года",
  "Работаем с объектами любого масштаба",
  "Современное оборудование",
  "Профессиональный подход",
  "Соблюдение сроков",
]

export default function TerritoryPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollAnimation direction="fade" delay={100}>
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8 group"
                >
                  <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                  На главную
                </Link>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={200}>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">
                  Благоустройство территории
                </h1>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={300}>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Превращаем территории в комфортные и функциональные пространства. 
                  Мощение, освещение, системы полива, малые архитектурные формы.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={400}>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                    <a href="https://wa.me/77771234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE%20%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Заказать проект
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2" asChild>
                    <a href="https://wa.me/77771234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D1%81%D1%81%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C%20%D1%81%D1%82%D0%BE%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0." target="_blank" rel="noopener noreferrer">
                      Рассчитать стоимость
                    </a>
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
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Услуги
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Полный спектр работ
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                  От проектирования до реализации под ключ
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={service.id} delay={index * 75} direction="up">
                  <article className="group cursor-pointer">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-6 relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors" />
                      <div className="absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-background/90 flex items-center justify-center transition-transform group-hover:scale-110">
                        <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
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
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                        alt="Благоустройство"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 pt-8">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                        alt="Озеленение"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80"
                        alt="Мощение"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={200} className="order-1 lg:order-2">
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Почему мы
                  </span>
                  <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                    Комплексный подход к благоустройству
                  </h2>
                  <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Мы берём на себя весь цикл работ по благоустройству территории: 
                    от разработки концепции до сдачи объекта и последующего обслуживания.
                  </p>
                  <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                    {benefits.map((item, index) => (
                      <ScrollAnimation key={item} delay={300 + index * 50} direction="fade">
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground text-sm sm:text-base">{item}</span>
                        </li>
                      </ScrollAnimation>
                    ))}
                  </ul>
                  <ScrollAnimation delay={600}>
                    <Button className="mt-6 sm:mt-8 gap-2 group" size="lg">
                      Получить консультацию
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Портфолио
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Реализованные проекты
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <ScrollAnimation key={project.id} delay={index * 100} direction="up">
                  <article className="group cursor-pointer">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.services.map((service) => (
                        <span 
                          key={service}
                          className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2 text-sm sm:text-base">
                      {project.description}
                    </p>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation>
              <h2 className="font-bold text-3xl sm:text-4xl text-primary-foreground">
                Готовы преобразить вашу территорию?
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="mt-4 text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto">
                Закажите бесплатный выезд для оценки объекта и расчёта стоимости работ.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href="https://wa.me/77771234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%B2%D1%8B%D0%B5%D0%B7%D0%B4%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B0%20%D0%BF%D0%BE%20%D0%B1%D0%BB%D0%B0%D0%B3%D0%BE%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D1%83." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Написать в WhatsApp
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2"
                  asChild
                >
                  <a href="tel:+77771234567">
                    <Phone className="h-4 w-4" />
                    Позвонить
                  </a>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
