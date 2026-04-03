"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Flower, Search, Filter, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

const subcategories = ["Все", "Многолетники", "Однолетники", "Луковичные", "Злаки"]

const flowers = [
  {
    id: 1,
    name: "Роза чайно-гибридная",
    latinName: "Rosa hybrida",
    category: "Многолетники",
    price: "от 3 500 ₸",
    height: "0.6-1 м",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Пион травянистый",
    latinName: "Paeonia lactiflora",
    category: "Многолетники",
    price: "от 5 000 ₸",
    height: "0.6-0.8 м",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=600&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Лаванда",
    latinName: "Lavandula angustifolia",
    category: "Многолетники",
    price: "от 2 000 ₸",
    height: "0.3-0.5 м",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80",
    inStock: true,
  },
  {
    id: 4,
    name: "Тюльпаны",
    latinName: "Tulipa",
    category: "Луковичные",
    price: "от 300 ₸",
    height: "0.3-0.5 м",
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&q=80",
    inStock: true,
  },
  {
    id: 5,
    name: "Петуния",
    latinName: "Petunia hybrida",
    category: "Однолетники",
    price: "от 500 ₸",
    height: "0.2-0.4 м",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=600&q=80",
    inStock: true,
  },
  {
    id: 6,
    name: "Ирис бородатый",
    latinName: "Iris germanica",
    category: "Многолетники",
    price: "от 2 500 ₸",
    height: "0.6-0.9 м",
    image: "https://images.unsplash.com/photo-1590377050081-4b2e538e7a6e?w=600&q=80",
    inStock: true,
  },
  {
    id: 7,
    name: "Нарциссы",
    latinName: "Narcissus",
    category: "Луковичные",
    price: "от 350 ₸",
    height: "0.3-0.5 м",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",
    inStock: true,
  },
  {
    id: 8,
    name: "Мискантус",
    latinName: "Miscanthus sinensis",
    category: "Злаки",
    price: "от 4 000 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    inStock: true,
  },
  {
    id: 9,
    name: "Хоста",
    latinName: "Hosta",
    category: "Многолетники",
    price: "от 3 000 ₸",
    height: "0.3-0.6 м",
    image: "https://images.unsplash.com/photo-1598681106394-87db8c23ccb6?w=600&q=80",
    inStock: true,
  },
  {
    id: 10,
    name: "Бархатцы",
    latinName: "Tagetes",
    category: "Однолетники",
    price: "от 300 ₸",
    height: "0.2-0.5 м",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80",
    inStock: true,
  },
  {
    id: 11,
    name: "Овсяница сизая",
    latinName: "Festuca glauca",
    category: "Злаки",
    price: "от 1 500 ₸",
    height: "0.2-0.3 м",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    inStock: true,
  },
  {
    id: 12,
    name: "Лилии",
    latinName: "Lilium",
    category: "Луковичные",
    price: "от 800 ₸",
    height: "0.5-1.2 м",
    image: "https://images.unsplash.com/photo-1524598171353-ce84a157e2ef?w=600&q=80",
    inStock: false,
  },
]

export default function FlowersPage() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFlowers = flowers.filter((flower) => {
    const matchesCategory = activeCategory === "Все" || flower.category === activeCategory
    const matchesSearch = flower.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          flower.latinName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const whatsappMessage = encodeURIComponent("Здравствуйте! Интересует покупка цветов и многолетников из вашего питомника.")
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
                      <Flower className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      400+ видов
                    </span>
                  </div>
                  <h1 className="font-bold text-4xl sm:text-5xl text-foreground">
                    Цветы и многолетники
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={300}>
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                    Многолетники, однолетники, луковичные и декоративные злаки. 
                    Создайте цветущий сад на весь сезон.
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
            {filteredFlowers.length === 0 ? (
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
                  Найдено: {filteredFlowers.length} {filteredFlowers.length === 1 ? "товар" : "товаров"}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredFlowers.map((flower, index) => (
                    <ScrollAnimation key={flower.id} delay={index * 50} direction="up">
                      <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={flower.image}
                            alt={flower.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {!flower.inStock && (
                            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                              <span className="bg-background px-3 py-1 rounded-full text-sm font-medium">
                                Нет в наличии
                              </span>
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-foreground">
                              {flower.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {flower.name}
                          </h3>
                          <p className="text-sm text-muted-foreground italic">{flower.latinName}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold text-primary">{flower.price}</p>
                              <p className="text-xs text-muted-foreground">Высота: {flower.height}</p>
                            </div>
                            <Button size="sm" variant="outline" className="gap-1" asChild>
                              <a 
                                href={`https://wa.me/77771234567?text=${encodeURIComponent(`Здравствуйте! Интересует ${flower.name} (${flower.latinName})`)}`}
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
                Не нашли нужные цветы?
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                Напишите нам в WhatsApp, и мы поможем подобрать растения 
                или привезём их под заказ.
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
