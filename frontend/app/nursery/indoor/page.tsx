"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Search, Filter, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

const subcategories = ["Все", "Декоративно-лиственные", "Цветущие", "Суккуленты", "Пальмы"]

const plants = [
  {
    id: 1,
    name: "Монстера деликатесная",
    latinName: "Monstera deliciosa",
    category: "Декоративно-лиственные",
    price: "от 8 000 ₸",
    size: "40-60 см",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Фикус лировидный",
    latinName: "Ficus lyrata",
    category: "Декоративно-лиственные",
    price: "от 15 000 ₸",
    size: "80-100 см",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Орхидея фаленопсис",
    latinName: "Phalaenopsis",
    category: "Цветущие",
    price: "от 6 000 ₸",
    size: "40-50 см",
    image: "https://images.unsplash.com/photo-1566836610593-62c71e12be35?w=600&q=80",
    inStock: true,
  },
  {
    id: 4,
    name: "Сансевиерия",
    latinName: "Sansevieria trifasciata",
    category: "Суккуленты",
    price: "от 4 000 ₸",
    size: "30-50 см",
    image: "https://images.unsplash.com/photo-1593482892540-71f7ef4bc308?w=600&q=80",
    inStock: true,
  },
  {
    id: 5,
    name: "Пальма Хамедорея",
    latinName: "Chamaedorea elegans",
    category: "Пальмы",
    price: "от 7 500 ₸",
    size: "60-80 см",
    image: "https://images.unsplash.com/photo-1598880940371-c756e015faf1?w=600&q=80",
    inStock: true,
  },
  {
    id: 6,
    name: "Спатифиллум",
    latinName: "Spathiphyllum",
    category: "Цветущие",
    price: "от 5 000 ₸",
    size: "40-50 см",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80",
    inStock: true,
  },
  {
    id: 7,
    name: "Эхеверия",
    latinName: "Echeveria",
    category: "Суккуленты",
    price: "от 1 500 ₸",
    size: "10-15 см",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80",
    inStock: true,
  },
  {
    id: 8,
    name: "Калатея",
    latinName: "Calathea",
    category: "Декоративно-лиственные",
    price: "от 6 500 ₸",
    size: "30-40 см",
    image: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=600&q=80",
    inStock: true,
  },
  {
    id: 9,
    name: "Антуриум",
    latinName: "Anthurium andraeanum",
    category: "Цветущие",
    price: "от 7 000 ₸",
    size: "35-45 см",
    image: "https://images.unsplash.com/photo-1620127807580-990c3ecebd14?w=600&q=80",
    inStock: true,
  },
  {
    id: 10,
    name: "Драцена",
    latinName: "Dracaena marginata",
    category: "Декоративно-лиственные",
    price: "от 12 000 ₸",
    size: "100-120 см",
    image: "https://images.unsplash.com/photo-1598880940942-741aea09e498?w=600&q=80",
    inStock: false,
  },
  {
    id: 11,
    name: "Кактус опунция",
    latinName: "Opuntia",
    category: "Суккуленты",
    price: "от 2 000 ₸",
    size: "15-25 см",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    inStock: true,
  },
  {
    id: 12,
    name: "Пальма Арека",
    latinName: "Dypsis lutescens",
    category: "Пальмы",
    price: "от 18 000 ₸",
    size: "120-150 см",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
    inStock: true,
  },
]

export default function IndoorPlantsNurseryPage() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPlants = plants.filter((plant) => {
    const matchesCategory = activeCategory === "Все" || plant.category === activeCategory
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          plant.latinName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const whatsappMessage = encodeURIComponent("Здравствуйте! Интересует покупка комнатных растений из вашего питомника.")
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
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      250+ видов
                    </span>
                  </div>
                  <h1 className="font-bold text-4xl sm:text-5xl text-foreground">
                    Комнатные растения
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={300}>
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                    Декоративно-лиственные, цветущие, суккуленты и пальмы. 
                    Озелените ваш дом или офис качественными растениями.
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
            {filteredPlants.length === 0 ? (
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
                  Найдено: {filteredPlants.length} {filteredPlants.length === 1 ? "товар" : "товаров"}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredPlants.map((plant, index) => (
                    <ScrollAnimation key={plant.id} delay={index * 50} direction="up">
                      <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {!plant.inStock && (
                            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                              <span className="bg-background px-3 py-1 rounded-full text-sm font-medium">
                                Нет в наличии
                              </span>
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-foreground">
                              {plant.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {plant.name}
                          </h3>
                          <p className="text-sm text-muted-foreground italic">{plant.latinName}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold text-primary">{plant.price}</p>
                              <p className="text-xs text-muted-foreground">Размер: {plant.size}</p>
                            </div>
                            <Button size="sm" variant="outline" className="gap-1" asChild>
                              <a 
                                href={`https://wa.me/77771234567?text=${encodeURIComponent(`Здравствуйте! Интересует ${plant.name} (${plant.latinName})`)}`}
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
                Не нашли нужное растение?
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
