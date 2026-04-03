"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shrub, Search, Filter, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

const subcategories = ["Все", "Декоративные", "Цветущие", "Хвойные", "Плодовые"]

const shrubs = [
  {
    id: 1,
    name: "Барбарис Тунберга",
    latinName: "Berberis thunbergii",
    category: "Декоративные",
    price: "от 4 500 ₸",
    height: "0.5-1 м",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Спирея японская",
    latinName: "Spiraea japonica",
    category: "Цветущие",
    price: "от 3 500 ₸",
    height: "0.6-0.8 м",
    image: "https://images.unsplash.com/photo-1462275646964-a0e3571f4f47?w=600&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Гортензия метельчатая",
    latinName: "Hydrangea paniculata",
    category: "Цветущие",
    price: "от 8 000 ₸",
    height: "1-1.5 м",
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&q=80",
    inStock: true,
  },
  {
    id: 4,
    name: "Можжевельник казацкий",
    latinName: "Juniperus sabina",
    category: "Хвойные",
    price: "от 6 000 ₸",
    height: "0.4-0.6 м",
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&q=80",
    inStock: true,
  },
  {
    id: 5,
    name: "Смородина чёрная",
    latinName: "Ribes nigrum",
    category: "Плодовые",
    price: "от 2 500 ₸",
    height: "0.8-1.2 м",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80",
    inStock: true,
  },
  {
    id: 6,
    name: "Сирень обыкновенная",
    latinName: "Syringa vulgaris",
    category: "Цветущие",
    price: "от 5 500 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80",
    inStock: true,
  },
  {
    id: 7,
    name: "Дёрен белый",
    latinName: "Cornus alba",
    category: "Декоративные",
    price: "от 3 000 ₸",
    height: "1-1.5 м",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=600&q=80",
    inStock: true,
  },
  {
    id: 8,
    name: "Малина ремонтантная",
    latinName: "Rubus idaeus",
    category: "Плодовые",
    price: "от 1 800 ₸",
    height: "1-1.5 м",
    image: "https://images.unsplash.com/photo-1577003833619-76bbd7f82948?w=600&q=80",
    inStock: false,
  },
  {
    id: 9,
    name: "Туя шаровидная",
    latinName: "Thuja occidentalis Globosa",
    category: "Хвойные",
    price: "от 7 500 ₸",
    height: "0.5-0.8 м",
    image: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?w=600&q=80",
    inStock: true,
  },
  {
    id: 10,
    name: "Форзиция",
    latinName: "Forsythia",
    category: "Цветущие",
    price: "от 4 000 ₸",
    height: "1-1.5 м",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
    inStock: true,
  },
  {
    id: 11,
    name: "Пузыреплодник",
    latinName: "Physocarpus opulifolius",
    category: "Декоративные",
    price: "от 3 500 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",
    inStock: true,
  },
  {
    id: 12,
    name: "Крыжовник",
    latinName: "Ribes uva-crispa",
    category: "Плодовые",
    price: "от 2 000 ₸",
    height: "0.8-1 м",
    image: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?w=600&q=80",
    inStock: true,
  },
]

export default function ShrubsPage() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredShrubs = shrubs.filter((shrub) => {
    const matchesCategory = activeCategory === "Все" || shrub.category === activeCategory
    const matchesSearch = shrub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          shrub.latinName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const whatsappMessage = encodeURIComponent("Здравствуйте! Интересует покупка кустарников из вашего питомника.")
  const whatsappLink = `https://wa.me/77771234567?text=${whatsappMessage}`

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation direction="fade" delay={100}>
              <Link 
                href="/nursery" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
              >
                <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                Назад в питомник
              </Link>
            </ScrollAnimation>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <ScrollAnimation direction="up" delay={200}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shrub className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      350+ видов
                    </span>
                  </div>
                  <h1 className="font-bold text-4xl sm:text-5xl text-foreground">
                    Кустарники
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={300}>
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                    Декоративные, цветущие, хвойные и плодовые кустарники для вашего сада. 
                    Идеальны для живых изгородей и ландшафтных композиций.
                  </p>
                </ScrollAnimation>
              </div>
              <ScrollAnimation direction="up" delay={400}>
                <Button size="lg" className="gap-2 group" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Написать в WhatsApp
                  </a>
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-background border-b border-border sticky top-[73px] z-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Поиск по названию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                <Filter className="h-4 w-4 text-muted-foreground shrink-0 hidden sm:block" />
                {subcategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredShrubs.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Ничего не найдено</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => { setActiveCategory("Все"); setSearchQuery(""); }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-6">
                  Найдено: {filteredShrubs.length} {filteredShrubs.length === 1 ? "товар" : "товаров"}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredShrubs.map((shrub, index) => (
                    <ScrollAnimation key={shrub.id} delay={index * 50} direction="up">
                      <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={shrub.image}
                            alt={shrub.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {!shrub.inStock && (
                            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                              <span className="bg-background px-3 py-1 rounded-full text-sm font-medium">
                                Нет в наличии
                              </span>
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-foreground">
                              {shrub.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {shrub.name}
                          </h3>
                          <p className="text-sm text-muted-foreground italic">{shrub.latinName}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold text-primary">{shrub.price}</p>
                              <p className="text-xs text-muted-foreground">Высота: {shrub.height}</p>
                            </div>
                            <Button size="sm" variant="outline" className="gap-1" asChild>
                              <a 
                                href={`https://wa.me/77771234567?text=${encodeURIComponent(`Здравствуйте! Интересует ${shrub.name} (${shrub.latinName})`)}`}
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <MessageCircle className="h-4 w-4" />
                                <span className="sr-only sm:not-sr-only">Заказать</span>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation>
              <h2 className="font-bold text-2xl sm:text-3xl text-primary-foreground">
                Не нашли нужный кустарник?
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                Напишите нам в WhatsApp, и мы поможем подобрать растение 
                или привезём его под заказ.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Написать в WhatsApp
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="tel:+77771234567">
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
