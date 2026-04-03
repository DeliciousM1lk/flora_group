"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TreePine, Flower2, Home, Shovel, Sprout } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    id: "landscape",
    title: "Ландшафтный дизайн",
    description: "Создаём уникальные ландшафтные проекты любой сложности. От концепции до реализации под ключ.",
    icon: TreePine,
    mainHref: "/landscape", // Ссылка для кнопки
    href: "/landscape#portfolio", // Ссылка для фото
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    features: ["Проектирование", "3D визуализация", "Авторский надзор"],
    overlayText: "Смотреть проекты",
  },
  {
    id: "indoor",
    title: "Комнатные растения",
    description: "Озеленение офисов, торговых центров и частных интерьеров. Поставка и обслуживание растений.",
    icon: Flower2,
    mainHref: "/indoor-plants",
    href: "/indoor-plants#portfolio",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
    features: ["Фитодизайн", "Поставка растений", "Уход и обслуживание"],
    overlayText: "Смотреть проекты",
  },
  {
    id: "territory",
    title: "Благоустройство",
    description: "Комплексное благоустройство территорий: мощение, освещение, системы полива, малые формы.",
    icon: Home,
    mainHref: "/territory",
    href: "/territory#portfolio",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: ["Мощение дорожек", "Освещение", "Автополив"],
    overlayText: "Смотреть проекты",
  },
  {
    id: "care",
    title: "Уход за растениями",
    description: "Профессиональный уход за садом и растениями. Сезонное обслуживание, обрезка, лечение.",
    icon: Sprout,
    mainHref: "/care",
    href: "/care#services",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    features: ["Обрезка и стрижка", "Лечение растений", "Сезонный уход"],
    overlayText: "Как мы ухаживаем",
  },
  {
    id: "nursery",
    title: "Питомник",
    description: "Собственный питомник с широким ассортиментом декоративных растений, деревьев и кустарников.",
    icon: Shovel,
    mainHref: "/nursery",
    href: "/nursery#categories",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    features: ["1000+ видов", "Гарантия качества", "Доставка"],
    overlayText: "Смотреть ассортимент",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Наши услуги
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground text-balance">
              Полный спектр услуг по озеленению
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              От маленького комнатного растения до масштабных ландшафтных проектов —
              мы создаём зелёные пространства, которые вдохновляют.
            </p>
          </div>
        </ScrollAnimation>

        {/* Services */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Image (ведёт на якорь #) */}
              <ScrollAnimation
                direction={index % 2 === 0 ? "left" : "right"}
                className="w-full lg:w-1/2"
              >
                <Link href={service.href} className="block">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-flex items-center gap-2 text-white font-medium">
                        {service.overlayText}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>

              {/* Content */}
              <ScrollAnimation
                direction={index % 2 === 0 ? "right" : "left"}
                delay={150}
                className="w-full lg:w-1/2"
              >
                <div className="lg:px-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {service.features.map((feature, fIndex) => (
                      <ScrollAnimation key={feature} delay={200 + fIndex * 50}>
                        <li className="inline-flex items-center rounded-full bg-primary/5 border border-primary/20 px-5 py-2 text-sm font-medium text-foreground hover:bg-primary/10 transition-colors">
                          {feature}
                        </li>
                      </ScrollAnimation>
                    ))}
                  </ul>

                  <ScrollAnimation delay={350}>
                    <Button className="mt-10 gap-2 group" size="lg" asChild>
                      <Link href={service.mainHref}>
                        Подробнее
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}