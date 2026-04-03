"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, TreePine, Ruler, Eye, HardHat, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation, ImageReveal } from "@/components/scroll-animation"

const projects = [
  {
    id: 1,
    title: "Частная резиденция в Алматы",
    description: "Ландшафтный дизайн территории 25 соток с бассейном, зоной барбекю и альпийской горкой.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    area: "25 соток",
    year: "2024",
  },
  {
    id: 2,
    title: "Бизнес-центр Green Tower",
    description: "Озеленение прилегающей территории бизнес-центра с системой автоматического полива.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    area: "1.5 га",
    year: "2023",
  },
  {
    id: 3,
    title: "Коттеджный поселок Evergreen",
    description: "Комплексное благоустройство общественных зон коттеджного поселка.",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=800&q=80",
    area: "5 га",
    year: "2023",
  },
  {
    id: 4,
    title: "Загородный дом в Капчагае",
    description: "Создание средиземноморского сада с террасами и водными элементами.",
    image: "https://images.unsplash.com/photo-1564429238804-526d3cc8e4f7?w=800&q=80",
    area: "15 соток",
    year: "2024",
  },
  {
    id: 5,
    title: "Парк культуры и отдыха",
    description: "Реконструкция городского парка с созданием новых зон отдыха и спортивных площадок.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    area: "10 га",
    year: "2022",
  },
  {
    id: 6,
    title: "Вилла на Медео",
    description: "Террасный сад на склоне с панорамными видами и системой освещения.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    area: "30 соток",
    year: "2024",
  },
]

const process = [
  {
    step: "01",
    title: "Консультация",
    description: "Бесплатная встреча для обсуждения ваших идей, предпочтений и бюджета проекта.",
    icon: TreePine,
  },
  {
    step: "02",
    title: "Проектирование",
    description: "Создание концепции, генплана, дендроплана и 3D-визуализации будущего ландшафта.",
    icon: Ruler,
  },
  {
    step: "03",
    title: "Согласование",
    description: "Детальное обсуждение проекта, внесение корректировок и утверждение финального варианта.",
    icon: Eye,
  },
  {
    step: "04",
    title: "Реализация",
    description: "Выполнение всех работ под авторским надзором с соблюдением сроков и качества.",
    icon: HardHat,
  },
]

const features = [
  "Индивидуальный дизайн-проект",
  "3D-визуализация территории",
  "Подбор растений из питомника",
  "Системы автополива",
  "Ландшафтное освещение",
  "Малые архитектурные формы",
  "Водные элементы и фонтаны",
  "Авторский надзор",
]

export default function LandscapePage() {
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
                  Ландшафтный дизайн
                </h1>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={300}>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Создаём уникальные ландшафтные проекты, которые превращают обычные территории
                  в произведения садово-паркового искусства.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={400}>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Button size="lg" className="gap-2 w-full sm:w-auto group" asChild>
                    <a href="https://wa.me/77777995995?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BB%D0%B0%D0%BD%D0%B4%D1%88%D0%B0%D1%84%D1%82%D0%BD%D1%8B%D0%B9%20%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Заказать проект
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                    <a href="#portfolio">
                      Смотреть портфолио
                    </a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollAnimation direction="left">
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Что мы предлагаем
                  </span>
                  <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                    Комплексный подход к созданию ландшафта
                  </h2>
                  <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Мы берём на себя весь цикл работ: от первичной консультации и создания
                    концепции до реализации проекта и последующего обслуживания.
                  </p>
                  <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {features.map((feature, index) => (
                      <ScrollAnimation key={feature} delay={index * 50} direction="fade">
                        <li className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      </ScrollAnimation>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={200}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                    alt="Ландшафтный дизайн"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Как мы работаем
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  От идеи до реализации
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {process.map((item, index) => (
                <ScrollAnimation key={item.step} delay={index * 100} direction="up">
                  <div className="relative group">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                      <item.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <span className="absolute top-0 right-0 font-bold text-5xl sm:text-6xl text-primary/10 transition-all group-hover:text-primary/20">
                      {item.step}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="portfolio" className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Портфолио
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Наши проекты
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                  Каждый проект — это уникальная история создания идеального пространства
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span>{project.area}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                      <span>{project.year}</span>
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
                Хотите обсудить ваш проект?
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="mt-4 text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto">
                Оставьте заявку на бесплатную консультацию, и мы свяжемся с вами в течение часа.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href="https://wa.me/77777995995?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D0%BB%D0%B0%D0%BD%D0%B4%D1%88%D0%B0%D1%84%D1%82%D0%BD%D0%BE%D0%BC%D1%83%20%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D1%83." target="_blank" rel="noopener noreferrer">
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
                  <a href="tel:+77777995995">
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
