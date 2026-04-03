"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TreeDeciduous, Search, Filter, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { useState } from "react"

const subcategories = ["Все", "Лиственные", "Хвойные", "Плодовые", "Декоративные"]

const trees = [
  {
    id: 1,
    name: "Клён остролистный",
    latinName: "Acer platanoides",
    category: "Лиственные",
    price: "от 25 000 ₸",
    height: "3-4 м",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Берёза повислая",
    latinName: "Betula pendula",
    category: "Лиственные",
    price: "от 18 000 ₸",
    height: "4-5 м",
    image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=600&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Ель голубая",
    latinName: "Picea pungens",
    category: "Хвойные",
    price: "от 45 000 ₸",
    height: "2-3 м",
    image: "https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?w=600&q=80",
    inStock: true,
  },
  {
    id: 4,
    name: "Сосна обыкновенная",
    latinName: "Pinus sylvestris",
    category: "Хвойные",
    price: "от 35 000 ₸",
    height: "3-4 м",
    image: "https://images.unsplash.com/photo-1542601098-8fc114e148e2?w=600&q=80",
    inStock: true,
  },
  {
    id: 5,
    name: "Яблоня домашняя",
    latinName: "Malus domestica",
    category: "Плодовые",
    price: "от 12 000 ₸",
    height: "2-2.5 м",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=600&q=80",
    inStock: true,
  },
  {
    id: 6,
    name: "Груша обыкновенная",
    latinName: "Pyrus communis",
    category: "Плодовые",
    price: "от 15 000 ₸",
    height: "2-3 м",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&q=80",
    inStock: false,
  },
  {
    id: 7,
    name: "Сакура японская",
    latinName: "Prunus serrulata",
    category: "Декоративные",
    price: "от 55 000 ₸",
    height: "2-3 м",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&q=80",
    inStock: true,
  },
  {
    id: 8,
    name: "Магнолия",
    latinName: "Magnolia",
    category: "Декоративные",
    price: "от 65 000 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1518882605630-8eb690247289?w=600&q=80",
    inStock: true,
  },
  {
    id: 9,
    name: "Дуб черешчатый",
    latinName: "Quercus robur",
    category: "Лиственные",
    price: "от 30 000 ₸",
    height: "3-4 м",
    image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=600&q=80",
    inStock: true,
  },
  {
    id: 10,
    name: "Липа мелколистная",
    latinName: "Tilia cordata",
    category: "Лиственные",
    price: "от 22 000 ₸",
    height: "3-4 м",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80",
    inStock: true,
  },
  {
    id: 11,
    name: "Туя западная",
    latinName: "Thuja occidentalis",
    category: "Хвойные",
    price: "от 8 000 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&q=80",
    inStock: true,
  },
  {
    id: 12,
    name: "Вишня войлочная",
    latinName: "Prunus tomentosa",
    category: "Плодовые",
    price: "от 10 000 ₸",
    height: "1.5-2 м",
    image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&q=80",
    inStock: true,
  },
]

export default function TreesPage() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTrees = trees.filter((tree) => {
    const matchesCategory = activeCategory === "Все" || tree.category === activeCategory
    const matchesSearch = tree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tree.latinName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const whatsappMessage = encodeURIComponent("Здравствуйте! Интересует покупка деревьев из вашего питомника.")
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
                      <TreeDeciduous className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      200+ видов
                    </span>
                  </div>
                  <h1 className="font-bold text-4xl sm:text-5xl text-foreground">
                    Деревья
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation direction="up" delay={300}>
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                    Лиственные, хвойные, плодовые и декоративные деревья. Все саженцы 
                    адаптированы к климату Казахстана.
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
              {/* Search */}
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
              
              {/* Category tabs */}
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
            {filteredTrees.length === 0 ? (
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
                  Найдено: {filteredTrees.length} {filteredTrees.length === 1 ? "товар" : "товаров"}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredTrees.map((tree, index) => (
                    <ScrollAnimation key={tree.id} delay={index * 50} direction="up">
                      <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                        <div className="aspect-[4/3] overflow-hidden relative">
                          <img
                            src={tree.image}
                            alt={tree.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {!tree.inStock && (
                            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                              <span className="bg-background px-3 py-1 rounded-full text-sm font-medium">
                                Нет в наличии
                              </span>
                            </div>
                          )}
                          <div className="absolute top-3 left-3">
                            <span className="bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-foreground">
                              {tree.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {tree.name}
                          </h3>
                          <p className="text-sm text-muted-foreground italic">{tree.latinName}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <div>
                              <p className="text-lg font-bold text-primary">{tree.price}</p>
                              <p className="text-xs text-muted-foreground">Высота: {tree.height}</p>
                            </div>
                            <Button size="sm" variant="outline" className="gap-1" asChild>
                              <a 
                                href={`https://wa.me/77771234567?text=${encodeURIComponent(`Здравствуйте! Интересует ${tree.name} (${tree.latinName})`)}`}
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
                Не нашли нужное дерево?
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
