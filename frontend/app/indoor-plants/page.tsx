"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Home, Store, Sun, Droplets, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

const categories = [
  {
    id: 1,
    title: "Для офисов",
    description: "Создаём зелёные зоны в рабочих пространствах, которые повышают продуктивность и снижают стресс.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 2,
    title: "Для дома",
    description: "Подбираем идеальные растения для вашего интерьера с учётом освещённости и стиля.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80",
  },
  {
    id: 3,
    title: "Для ТЦ и HoReCa",
    description: "Масштабное озеленение торговых центров, ресторанов, отелей и общественных пространств.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
]

const plants = [
  {
    id: 1,
    name: "Фикус Лирата",
    category: "Крупномеры",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",
    price: "от 45 000 тг",
    light: "Яркий рассеянный",
    water: "Умеренный",
  },
  {
    id: 2,
    name: "Монстера Делициоза",
    category: "Тропические",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
    price: "от 25 000 тг",
    light: "Полутень",
    water: "Обильный",
  },
  {
    id: 3,
    name: "Стрелиция",
    category: "Экзоты",
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&q=80",
    price: "от 35 000 тг",
    light: "Яркий свет",
    water: "Умеренный",
  },
  {
    id: 4,
    name: "Сансевиерия",
    category: "Неприхотливые",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80",
    price: "от 8 000 тг",
    light: "Любое",
    water: "Редкий",
  },
  {
    id: 5,
    name: "Пальма Кентия",
    category: "Крупномеры",
    image: "https://images.unsplash.com/photo-1570632267781-e804e5fef764?w=600&q=80",
    price: "от 65 000 тг",
    light: "Полутень",
    water: "Умеренный",
  },
  {
    id: 6,
    name: "Драцена Маргината",
    category: "Классика",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80",
    price: "от 18 000 тг",
    light: "Рассеянный",
    water: "Умеренный",
  },
]

const projects = [
  {
    id: 1,
    title: "Офис IT-компании",
    description: "Озеленение open-space офиса с использованием неприхотливых растений и автополива.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    area: "450 м²",
    year: "2024",
  },
  {
    id: 2,
    title: "Квартира в центре",
    description: "Подбор и расстановка растений для современного интерьера с панорамными окнами.",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&q=80",
    area: "120 м²",
    year: "2024",
  },
  {
    id: 3,
    title: "Ресторан",
    description: "Создание зелёной атмосферы с использованием тропических растений и декора.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    area: "300 м²",
    year: "2023",
  },
  {
    id: 4,
    title: "Бутик одежды",
    description: "Минималистичное озеленение с акцентными растениями.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    area: "90 м²",
    year: "2023",
  },
  {
    id: 5,
    title: "Коворкинг",
    description: "Зелёные зоны для отдыха и повышения продуктивности.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    area: "600 м²",
    year: "2024",
  },
  {
    id: 6,
    title: "Салон красоты",
    description: "Декоративное озеленение с акцентом на эстетику и уют.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    area: "150 м²",
    year: "2023",
  },
]

const services = [
  {
    title: "Фитодизайн",
    description: "Разработка концепции озеленения с учётом архитектуры, освещения и стиля интерьера.",
  },
  {
    title: "Поставка растений",
    description: "Широкий ассортимент растений из нашего питомника и лучших поставщиков мира.",
  },
  {
    title: "Кашпо и декор",
    description: "Подбор стильных кашпо, подставок и декоративных элементов под любой интерьер.",
  },
  {
    title: "Обслуживание",
    description: "Регулярный уход за растениями: полив, подкормка, обрезка, лечение.",
  },
]

export default function IndoorPlantsPage() {
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
                  Комнатные растения
                </h1>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={300}>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Озеленение интерьеров любой сложности. От одного растения для дома 
                  до масштабных проектов для бизнес-центров и торговых комплексов.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={400}>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                    <a href="https://wa.me/77771234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BE%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80%D0%B0." target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Заказать озеленение
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto group" asChild>
                    <Link href="/nursery/indoor">
                      Каталог растений
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Направления
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Озеленяем любые пространства
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {categories.map((category, index) => (
                <ScrollAnimation key={category.id} delay={index * 100} direction="up">
                  <article className="group cursor-pointer">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-6 relative">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
                      <div className="absolute top-4 left-4 w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-background/90 flex items-center justify-center transition-transform group-hover:scale-110">
                        <category.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {category.description}
                    </p>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollAnimation direction="left">
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Услуги
                  </span>
                  <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                    Полный цикл работ по озеленению
                  </h2>
                  <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                    {services.map((service, index) => (
                      <ScrollAnimation key={service.title} delay={index * 100} direction="fade">
                        <div className="flex gap-4 group">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 transition-all group-hover:bg-primary group-hover:scale-110">
                            <span className="text-sm font-semibold text-primary transition-colors group-hover:text-primary-foreground">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{service.title}</h3>
                            <p className="mt-1 text-muted-foreground text-sm sm:text-base">{service.description}</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={200}>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=800&q=80"
                    alt="Озеленение интерьера"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Plants catalog */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Каталог
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Популярные растения
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                  Выращены с любовью в нашем питомнике
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {plants.map((plant, index) => (
                <ScrollAnimation key={plant.id} delay={index * 75} direction="scale">
                  <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {plant.category}
                      </span>
                      <h3 className="mt-2 text-lg sm:text-xl font-semibold text-foreground">
                        {plant.name}
                      </h3>
                      <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Sun className="w-4 h-4" />
                          <span>{plant.light}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Droplets className="w-4 h-4" />
                          <span>{plant.water}</span>
                        </div>
                      </div>
                      <div className="mt-3 sm:mt-4 flex items-center justify-between">
                        <span className="text-base sm:text-lg font-semibold text-foreground">{plant.price}</span>
                        <Button size="sm" variant="outline" className="transition-all hover:bg-primary hover:text-primary-foreground">
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  </article>
                </ScrollAnimation>
              ))}
            </div>
            <ScrollAnimation delay={500}>
              <div className="mt-10 sm:mt-12 text-center">
                <Button size="lg" variant="outline" className="gap-2 group" asChild>
                  <Link href="/nursery">
                    Смотреть весь каталог
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
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
                <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                  Показываем, как растения меняют пространство
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
                Нужна помощь с выбором растений?
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="mt-4 text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto">
                Мы бесплатно проконсультируем вас и поможем подобрать 
                идеальные растения для вашего пространства.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href="https://wa.me/77771234567?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9D%D1%83%D0%B6%D0%BD%D0%B0%20%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%20%D1%81%20%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%BE%D0%BC%20%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D1%85%20%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B9." target="_blank" rel="noopener noreferrer">
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
