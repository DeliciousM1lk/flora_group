"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Truck, ShieldCheck, TreeDeciduous, Flower, Shrub, TreePine, Leaf, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation, CountUp } from "@/components/scroll-animation"

const locations = [
  {
    id: 1,
    name: "Основной питомник",
    address: "Алматинская обл., Енбекшиказахский р-н, пос. Алга",
    workTime: "Пн-Сб: 08:00 - 17:00",
    phone: "+7 (777) 123-45-67"
  },
  {
    id: 2,
    name: "Садовый центр",
    address: "г. Алматы, Наурызбайский р-н, ул. СТ Алатау территория, 46а",
    workTime: "Пн-Сб: 08:00 - 17:00",
    phone: "+7 (777) 765-43-21"
  }
]

const categories = [
  {
    id: "trees",
    title: "Деревья",
    count: "200+ видов",
    icon: TreeDeciduous,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80",
    items: ["Лиственные", "Хвойные", "Плодовые", "Декоративные"],
    href: "/nursery/trees",
  },
  {
    id: "shrubs",
    title: "Кустарники",
    count: "350+ видов",
    icon: Shrub,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
    items: ["Декоративные", "Цветущие", "Хвойные", "Плодовые"],
    href: "/nursery/shrubs",
  },
  {
    id: "flowers",
    title: "Цветы и многолетники",
    count: "400+ видов",
    icon: Flower,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
    items: ["Многолетники", "Однолетники", "Луковичные", "Злаки"],
    href: "/nursery/flowers",
  },
  {
    id: "conifers",
    title: "Хвойные",
    count: "150+ видов",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&q=80",
    items: ["Сосны", "Ели", "Туи", "Можжевельники"],
    href: "/nursery/conifers",
  },
  {
    id: "indoor",
    title: "Комнатные растения",
    count: "250+ видов",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
    items: ["Декоративно-лиственные", "Цветущие", "Суккуленты", "Пальмы"],
    href: "/nursery/indoor",
  },
]

const gallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    title: "Теплицы с саженцами",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    title: "Зона хвойных",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    title: "Декоративные кустарники",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80",
    title: "Зона крупномеров",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
    title: "Комнатные растения",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    title: "Цветочная оранжерея",
  },
]

const advantages = [
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    description: "Все растения проходят строгий контроль качества. Гарантия приживаемости 1 год.",
  },
  {
    icon: Truck,
    title: "Доставка и посадка",
    description: "Доставляем по всему Казахстану. Профессиональная посадка с гарантией.",
  },
  {
    icon: Clock,
    title: "Консультации",
    description: "Наши агрономы помогут подобрать растения и расскажут об уходе за ними.",
  },
]

const stats = [
  { value: 5, suffix: " га", label: "площадь питомника" },
  { value: 1000, suffix: "+", label: "видов растений" },
  { value: 20, suffix: " лет", label: "на рынке" },
  { value: 350, suffix: "+", label: "проектов" },
]

export default function NurseryPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
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
                    Наш питомник
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={300}>
                  <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Более 1000 видов растений на площади 5 гектаров. Собственное производство
                    позволяет нам гарантировать качество и конкурентные цены.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={400}>
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <Button size="lg" className="gap-2 w-full sm:w-auto group">
                      Заказать подбор растений
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Скачать каталог
                    </Button>
                  </div>
                </ScrollAnimation>

                {/* Locations list */}
                <ScrollAnimation direction="up" delay={500}>
                  <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-4">
                    {locations.map((loc) => (
                      <div key={loc.id} className="p-4 bg-background rounded-2xl border border-border shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground text-sm">{loc.name}</h3>
                            <p className="mt-1 text-muted-foreground text-xs leading-snug">
                              {loc.address}
                            </p>
                            <div className="mt-2 flex flex-col gap-1">
                              <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {loc.workTime}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              </div>

              <ScrollAnimation direction="right" delay={300}>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80"
                        alt="Питомник Flora Group"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 pt-8">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                        alt="Растения в питомнике"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80"
                        alt="Крупномеры"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimation key={stat.label} delay={index * 100} direction="scale">
                  <div className="text-center">
                    <div className="font-bold text-3xl sm:text-4xl text-primary-foreground">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs sm:text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Ассортимент
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Категории растений
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                  Выращиваем растения, адаптированные к климату Казахстана
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <ScrollAnimation key={category.id} delay={index * 75} direction="up">
                  <Link href={category.href}>
                    <article className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                          <div className="flex items-center gap-2 text-card mb-1">
                            <category.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                            <span className="text-xs sm:text-sm font-medium">{category.count}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-card">{category.title}</h3>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4">
                        <ul className="space-y-1">
                          {category.items.map((item) => (
                            <li key={item} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                          Смотреть каталог
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Преимущества
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Почему выбирают нас
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {advantages.map((item, index) => (
                <ScrollAnimation key={item.title} delay={index * 100} direction="up">
                  <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 transition-all group-hover:bg-primary group-hover:scale-110">
                      <item.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm sm:text-base">{item.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Галерея
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Прогулка по питомнику
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {gallery.map((item, index) => (
                <ScrollAnimation key={item.id} delay={index * 75} direction="scale">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-end justify-start p-4">
                      <span className="text-card font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        {item.title}
                      </span>
                    </div>
                  </div>
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
                Не знаете, что выбрать?
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="mt-4 text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto">
                Мы поможем составить план посадок, подберём растения под ваш тип почвы
                и организуем бережную доставку из питомника прямо к вам на участок.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto group" asChild>
                  <a href="https://wa.me/77771234567">
                    <MessageCircle className="h-5 w-5" />
                    Бесплатная консультация
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto"
                  asChild
                >
                  <a href="tel:+77771234567">
                    Позвонить в офис
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