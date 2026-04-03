"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TreePine, Search, Filter, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

const subcategories = ["Все", "Сосны", "Ели", "Туи", "Можжевельники"]

const conifers = [
  {
    id: 1,
    name: "Сосна горная",
    latinName: "Pinus mugo",
    category: "Сосны",
    price: "от 15 000 ₸",
    height: "0.5-1 м",
    image: "https://images.unsplash.com/photo-1542601098-8fc114e148e2?w=600&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Ель голубая Хопси",
    latinName: "Picea pungens Hoopsii",
    category: "Ели",
    price: "от 55 000 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?w=600&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Туя западная Смарагд",
    latinName: "Thuja occidentalis Smaragd",
    category: "Туи",
    price: "от 8 000 ₸",
    height: "1-1.5 м",
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&q=80",
    inStock: true,
  },
  {
    id: 4,
    name: "Можжевельник скальный",
    latinName: "Juniperus scopulorum",
    category: "Можжевельники",
    price: "от 12 000 ₸",
    height: "1-1.5 м",
    image: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?w=600&q=80",
    inStock: true,
  },
  {
    id: 5,
    name: "Сосна чёрная",
    latinName: "Pinus nigra",
    category: "Сосны",
    price: "от 25 000 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&q=80",
    inStock: true,
  },
  {
    id: 6,
    name: "Ель обыкновенная",
    latinName: "Picea abies",
    category: "Ели",
    price: "от 18 000 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1510884424555-c7623eda0792?w=600&q=80",
    inStock: true,
  },
  {
    id: 7,
    name: "Туя Брабант",
    latinName: "Thuja occidentalis Brabant",
    category: "Туи",
    price: "от 6 000 ₸",
    height: "1-1.5 м",
    image: "https://images.unsplash.com/photo-1557166983-5939644443b7?w=600&q=80",
    inStock: true,
  },
  {
    id: 8,
    name: "Можжевельник горизонтальный",
    latinName: "Juniperus horizontalis",
    category: "Можжевельники",
    price: "от 5 500 ₸",
    height: "0.2-0.3 м",
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80",
    inStock: true,
  },
  {
    id: 9,
    name: "Сосна обыкновенная",
    latinName: "Pinus sylvestris",
    category: "Сосны",
    price: "от 20 000 ₸",
    height: "2-3 м",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    inStock: true,
  },
  {
    id: 10,
    name: "Ель сербская",
    latinName: "Picea omorika",
    category: "Ели",
    price: "от 35 000 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80",
    inStock: false,
  },
  {
    id: 11,
    name: "Туя шаровидная Даника",
    latinName: "Thuja occidentalis Danica",
    category: "Туи",
    price: "от 7 000 ₸",
    height: "0.4-0.6 м",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80",
    inStock: true,
  },
  {
    id: 12,
    name: "Можжевельник китайский",
    latinName: "Juniperus chinensis",
    category: "Можжевельники",
    price: "от 9 000 ₸",
    height: "0.8-1.2 м",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    inStock: true,
  },
]

export default function ConifersPage() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConifers = conifers.filter((conifer) => {
    const matchesCategory = activeCategory === "Все" || conifer.category === activeCategory
    const matchesSearch = conifer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          conifer.latinName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const whatsappMessage = encodeURIComponent("Здравствуйте! Интересует покупка хвойных растений из вашего питомника.")
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
                      <TreePine className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      150+ видов
                    </span>
                  </div>
                  <h1 className="font-bold text-4xl sm:text-5xl text-foreground">
                    Хвойные
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={300}>
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                    Сосны, ели, туи и можжевельники. Вечнозелёные растения для круглогодичной 
                    красоты вашего сада.
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
            {filteredConifers.length === 0 ? (
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
                  Найдено: {filteredConifers.length} {filteredConifers.length === 1 ? "товар" : "товаров"}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredConifers.map((conifer, index) => (
                    <ScrollAnimation key={conifer.id} delay={index * 50} direction="up">
                      <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={conifer.image}
                            alt={conifer.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {!conifer.inStock && (
                            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                              <span className="bg-background px-3 py-1 rounded-full text-sm font-medium">
                                Нет в наличии
                              </span>
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-foreground">
                              {conifer.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {conifer.name}
                          </h3>
                          <p className="text-sm text-muted-foreground italic">{conifer.latinName}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold text-primary">{conifer.price}</p>
                              <p className="text-xs text-muted-foreground">Высота: {conifer.height}</p>
                            </div>
                            <Button size="sm" variant="outline" className="gap-1" asChild>
                              <a 
                                href={`https://wa.me/77771234567?text=${encodeURIComponent(`Здравствуйте! Интересует ${conifer.name} (${conifer.latinName})`)}`}
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
                Не нашли нужное хвойное растение?
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
