"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Search,
  Filter,
  MessageCircle,
  TreeDeciduous,
  Flower,
  Shrub,
  TreePine,
  Leaf,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  X,
} from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { API_BASE } from "@/lib/api"

type PlantIconName = "trees" | "shrubs" | "flowers" | "conifers" | "indoor"

type Plant = {
  id: number
  name: string
  latin_name?: string
  slug: string
  description?: string
  price_from?: number | null
  price_text?: string
  display_price?: string
  height?: string
  age?: string
  in_stock: boolean
  category_name?: string
  category_slug?: string
  subcategory_name?: string | null
  subcategory_slug?: string | null
  main_image?: string | null
}

type PlantSubcategory = {
  id: number
  name: string
  slug: string
}

type PlantCategory = {
  id: number
  name: string
  slug: string
  description?: string
  count_label?: string
  plants_count?: number
  subcategories?: PlantSubcategory[]
}

type CartPlant = {
  id: number
  name: string
  latin_name?: string
  slug: string
  display_price?: string
  height?: string
  age?: string
  category_name?: string
  category_slug?: string
  subcategory_name?: string | null
  main_image?: string | null
}

type CartItem = {
  plant: CartPlant
  quantity: number
}

type CategoryNavItem = {
  slug: PlantIconName
  title: string
  href: string
  icon: PlantIconName
}

type NurseryCategoryPageProps = {
  categorySlug: PlantIconName
  title: string
  fallbackDescription: string
  fallbackCountLabel: string
  icon: PlantIconName
  whatsappMessage: string
  ctaTitle: string
  ctaText: string
}

const WHATSAPP_PHONE = "77771234567"
const CART_STORAGE_KEY = "flora_nursery_cart"

const plantIcons = {
  trees: TreeDeciduous,
  shrubs: Shrub,
  flowers: Flower,
  conifers: TreePine,
  indoor: Leaf,
}

const categoryNav: CategoryNavItem[] = [
  {
    slug: "trees",
    title: "Деревья",
    href: "/nursery/trees",
    icon: "trees",
  },
  {
    slug: "shrubs",
    title: "Кустарники",
    href: "/nursery/shrubs",
    icon: "shrubs",
  },
  {
    slug: "flowers",
    title: "Цветы",
    href: "/nursery/flowers",
    icon: "flowers",
  },
  {
    slug: "conifers",
    title: "Хвойные",
    href: "/nursery/conifers",
    icon: "conifers",
  },
  {
    slug: "indoor",
    title: "Комнатные",
    href: "/nursery/indoor",
    icon: "indoor",
  },
]

function normalizeListResponse<T>(data: unknown): T[] {
  if (Array.isArray(data)) return data as T[]

  if (
    data &&
    typeof data === "object" &&
    "results" in data &&
    Array.isArray((data as { results?: unknown }).results)
  ) {
    return (data as { results: T[] }).results
  }

  return []
}

function getCartPlant(plant: Plant): CartPlant {
  return {
    id: plant.id,
    name: plant.name,
    latin_name: plant.latin_name,
    slug: plant.slug,
    display_price: plant.display_price,
    height: plant.height,
    age: plant.age,
    category_name: plant.category_name,
    category_slug: plant.category_slug,
    subcategory_name: plant.subcategory_name,
    main_image: plant.main_image,
  }
}

function loadCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return []

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)

    if (!Array.isArray(parsed)) return []

    return parsed
      .filter((item) => {
        return (
          item &&
          typeof item === "object" &&
          item.plant &&
          typeof item.plant.id === "number" &&
          typeof item.plant.name === "string" &&
          typeof item.quantity === "number" &&
          item.quantity > 0
        )
      })
      .map((item) => ({
        plant: item.plant,
        quantity: Math.max(1, Math.floor(item.quantity)),
      }))
  } catch {
    return []
  }
}

function saveCartToStorage(cart: CartItem[]) {
  if (typeof window === "undefined") return
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
}

function SkeletonGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl overflow-hidden border border-border animate-pulse"
        >
          <div className="aspect-[4/3] bg-muted" />

          <div className="p-4 space-y-3">
            <div className="h-5 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-5 bg-muted rounded w-1/3" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function NurseryCatalog({
  categorySlug,
  title,
  fallbackDescription,
  fallbackCountLabel,
  icon,
  whatsappMessage,
  ctaTitle,
  ctaText,
}: NurseryCategoryPageProps) {
  const Icon = plantIcons[icon]

  const [plants, setPlants] = useState<Plant[]>([])
  const [categories, setCategories] = useState<PlantCategory[]>([])
  const [activeSubcategory, setActiveSubcategory] = useState("Все")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const [cart, setCart] = useState<CartItem[]>([])
  const [cartLoaded, setCartLoaded] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [orderSentStep, setOrderSentStep] = useState(false)

  useEffect(() => {
    setCart(loadCartFromStorage())
    setCartLoaded(true)
  }, [])

  useEffect(() => {
    if (!cartLoaded) return
    saveCartToStorage(cart)
  }, [cart, cartLoaded])

  useEffect(() => {
    function syncCart(event: StorageEvent) {
      if (event.key === CART_STORAGE_KEY) {
        setCart(loadCartFromStorage())
      }
    }

    window.addEventListener("storage", syncCart)

    return () => {
      window.removeEventListener("storage", syncCart)
    }
  }, [])

  const currentCategory = useMemo(() => {
    return categories.find((category) => category.slug === categorySlug)
  }, [categories, categorySlug])

  const subcategories = useMemo(() => {
    const categorySubcategories = currentCategory?.subcategories || []

    if (!categorySubcategories.length) {
      const fromPlants = Array.from(
        new Set(
          plants
            .map((plant) => plant.subcategory_name)
            .filter((name): name is string => Boolean(name))
        )
      )

      return ["Все", ...fromPlants]
    }

    return ["Все", ...categorySubcategories.map((subcategory) => subcategory.name)]
  }, [currentCategory, plants])

  useEffect(() => {
    let ignore = false

    async function loadData() {
      try {
        setLoading(true)
        setError("")

        const [plantsRes, categoriesRes] = await Promise.all([
          fetch(`${API_BASE}/api/plants/?category__slug=${categorySlug}`),
          fetch(`${API_BASE}/api/plant-categories/`),
        ])

        if (!plantsRes.ok) {
          throw new Error("Не удалось загрузить растения")
        }

        if (!categoriesRes.ok) {
          throw new Error("Не удалось загрузить категории")
        }

        const plantsData = await plantsRes.json()
        const categoriesData = await categoriesRes.json()

        if (!ignore) {
          setPlants(normalizeListResponse<Plant>(plantsData))
          setCategories(normalizeListResponse<PlantCategory>(categoriesData))
          setActiveSubcategory("Все")
          setSearchQuery("")
        }
      } catch {
        if (!ignore) {
          setError("Не удалось загрузить каталог. Проверь API растений.")
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      ignore = true
    }
  }, [categorySlug])

  const filteredPlants = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return plants.filter((plant) => {
      const matchesSubcategory =
        activeSubcategory === "Все" || plant.subcategory_name === activeSubcategory

      const matchesSearch =
        !query ||
        plant.name?.toLowerCase().includes(query) ||
        plant.latin_name?.toLowerCase().includes(query) ||
        plant.description?.toLowerCase().includes(query) ||
        plant.subcategory_name?.toLowerCase().includes(query)

      return matchesSubcategory && matchesSearch
    })
  }, [plants, activeSubcategory, searchQuery])

  const cartTotalQuantity = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }, [cart])

  const cartTotalPositions = cart.length

  const countLabel =
    currentCategory?.count_label || fallbackCountLabel || `${plants.length} растений`

  const description = currentCategory?.description || fallbackDescription

  const whatsappLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  function resetOrderSentStep() {
    if (orderSentStep) {
      setOrderSentStep(false)
    }
  }

  function getCartQuantity(plantId: number) {
    return cart.find((item) => item.plant.id === plantId)?.quantity || 0
  }

  function addToCart(plant: Plant) {
    if (!plant.in_stock) return

    resetOrderSentStep()

    setCart((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id)

      if (existing) {
        return prev.map((item) =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { plant: getCartPlant(plant), quantity: 1 }]
    })

    setIsCartOpen(true)
  }

  function increaseQuantity(plantId: number) {
    resetOrderSentStep()

    setCart((prev) =>
      prev.map((item) =>
        item.plant.id === plantId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function decreaseQuantity(plantId: number) {
    resetOrderSentStep()

    setCart((prev) =>
      prev
        .map((item) =>
          item.plant.id === plantId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  function removeFromCart(plantId: number) {
    resetOrderSentStep()
    setCart((prev) => prev.filter((item) => item.plant.id !== plantId))
  }

  function clearCart() {
    setCart([])
    setIsCartOpen(false)
    setOrderSentStep(false)
  }

  function buildCartMessage() {
    const lines = cart.map((item, index) => {
      const plant = item.plant

      const details = [
        plant.category_name ? `раздел: ${plant.category_name}` : "",
        plant.subcategory_name ? `подкатегория: ${plant.subcategory_name}` : "",
        plant.latin_name ? `лат.: ${plant.latin_name}` : "",
        plant.height ? `высота: ${plant.height}` : "",
        plant.age ? `возраст: ${plant.age}` : "",
        plant.display_price ? `цена: ${plant.display_price}` : "",
      ]
        .filter(Boolean)
        .join(", ")

      return `${index + 1}. ${plant.name} — ${item.quantity} шт.${
        details ? ` (${details})` : ""
      }`
    })

    return [
      "Здравствуйте! Хочу заказать растения из питомника:",
      "",
      ...lines,
      "",
      `Всего позиций: ${cartTotalPositions}`,
      `Общее количество: ${cartTotalQuantity} шт.`,
    ].join("\n")
  }

  const cartWhatsappLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    buildCartMessage()
  )}`

  function openWhatsappOrder() {
    window.open(cartWhatsappLink, "_blank", "noopener,noreferrer")
    setOrderSentStep(true)
  }

  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <section className="relative pt-28 sm:pt-32 pb-8 sm:pb-12 bg-muted">
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
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    <span className="text-sm font-medium text-primary uppercase tracking-wider">
                      {countLabel}
                    </span>
                  </div>

                  <h1 className="font-bold text-4xl sm:text-5xl text-foreground">
                    {currentCategory?.name || title}
                  </h1>
                </ScrollAnimation>

                <ScrollAnimation direction="up" delay={300}>
                  <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                    {description}
                  </p>
                </ScrollAnimation>
              </div>

              <ScrollAnimation direction="up" delay={400}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2"
                    onClick={() => setIsCartOpen(true)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Корзина
                    {cartTotalQuantity > 0 && (
                      <span className="ml-1 rounded-full bg-primary text-primary-foreground px-2 py-0.5 text-xs">
                        {cartTotalQuantity}
                      </span>
                    )}
                  </Button>

                  <Button size="lg" className="gap-2 group" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" />
                      Написать в WhatsApp
                    </a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation direction="up" delay={450}>
              <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
                {categoryNav.map((item) => {
                  const NavIcon = plantIcons[item.icon]
                  const isActive = item.slug === categorySlug

                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap border transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-background text-foreground border-border hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      <NavIcon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </ScrollAnimation>
          </div>
        </section>

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
                    onClick={() => setActiveSubcategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      activeSubcategory === cat
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

        <section className="py-12 sm:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {loading ? (
              <SkeletonGrid />
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-destructive text-lg">{error}</p>
              </div>
            ) : filteredPlants.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Ничего не найдено</p>

                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setActiveSubcategory("Все")
                    setSearchQuery("")
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground mb-6">
                  Найдено: {filteredPlants.length}{" "}
                  {filteredPlants.length === 1 ? "товар" : "товаров"}
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredPlants.map((plant, index) => {
                    const quantityInCart = getCartQuantity(plant.id)

                    return (
                      <ScrollAnimation key={plant.id} delay={index * 50} direction="up">
                        <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                          <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                            {plant.main_image ? (
                              <img
                                src={plant.main_image}
                                alt={plant.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                                Нет фото
                              </div>
                            )}

                            {!plant.in_stock && (
                              <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                                <span className="bg-background px-3 py-1 rounded-full text-sm font-medium">
                                  Нет в наличии
                                </span>
                              </div>
                            )}

                            {plant.subcategory_name && (
                              <div className="absolute top-3 left-3">
                                <span className="bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-foreground">
                                  {plant.subcategory_name}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="p-4 flex flex-col flex-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {plant.name}
                            </h3>

                            {plant.latin_name && (
                              <p className="text-sm text-muted-foreground italic">
                                {plant.latin_name}
                              </p>
                            )}

                            {plant.description && (
                              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                {plant.description}
                              </p>
                            )}

                            <div className="mt-3 space-y-1 text-xs text-muted-foreground">
                              {plant.height && <p>Высота: {plant.height}</p>}
                              {plant.age && <p>Возраст: {plant.age}</p>}
                            </div>

                            <div className="mt-auto pt-4 space-y-3">
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-lg font-bold text-primary">
                                  {plant.display_price || "Цена по запросу"}
                                </p>

                                {quantityInCart > 0 && (
                                  <span className="text-xs rounded-full bg-primary/10 text-primary px-2 py-1">
                                    В корзине: {quantityInCart}
                                  </span>
                                )}
                              </div>

                              {quantityInCart > 0 ? (
                                <div className="flex items-center gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-9 w-9 p-0"
                                    onClick={() => decreaseQuantity(plant.id)}
                                  >
                                    <Minus className="h-4 w-4" />
                                  </Button>

                                  <div className="h-9 min-w-10 rounded-lg border border-border flex items-center justify-center text-sm font-medium">
                                    {quantityInCart}
                                  </div>

                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-9 w-9 p-0"
                                    onClick={() => increaseQuantity(plant.id)}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>

                                  <Button
                                    size="sm"
                                    className="flex-1 gap-2"
                                    onClick={() => setIsCartOpen(true)}
                                  >
                                    <ShoppingCart className="h-4 w-4" />
                                    Открыть
                                  </Button>
                                </div>
                              ) : (
                                <Button
                                  size="sm"
                                  className="w-full gap-2"
                                  disabled={!plant.in_stock}
                                  onClick={() => addToCart(plant)}
                                >
                                  <ShoppingCart className="h-4 w-4" />
                                  {plant.in_stock ? "Добавить в корзину" : "Нет в наличии"}
                                </Button>
                              )}
                            </div>
                          </div>
                        </article>
                      </ScrollAnimation>
                    )
                  })}
                </div>
              </>
            )}
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation>
              <h2 className="font-bold text-2xl sm:text-3xl text-primary-foreground">
                {ctaTitle}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
                {ctaText}
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
                  <a href="tel:+77771234567">Позвонить</a>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>

      {cartTotalQuantity > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="font-medium">Корзина</span>
          <span className="rounded-full bg-primary-foreground text-primary px-2 py-0.5 text-xs font-bold">
            {cartTotalQuantity}
          </span>
        </button>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 z-[100]">
          <button
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
            aria-label="Закрыть корзину"
          />

          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl flex flex-col">
            <div className="p-5 border-b border-border flex items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-xl text-foreground">
                  Заявка на растения
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cartTotalPositions} позиций, {cartTotalQuantity} шт.
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="h-9 w-9 p-0"
                onClick={() => setIsCartOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="font-medium text-foreground">Корзина пустая</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Добавьте растения из каталога.
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.plant.id}
                      className="rounded-2xl border border-border bg-card p-3 flex gap-3"
                    >
                      <div className="w-20 h-20 rounded-xl bg-muted overflow-hidden shrink-0">
                        {item.plant.main_image ? (
                          <img
                            src={item.plant.main_image}
                            alt={item.plant.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
                            Нет фото
                          </div>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex gap-2 justify-between">
                          <div className="min-w-0">
                            <h4 className="font-semibold text-sm text-foreground truncate">
                              {item.plant.name}
                            </h4>

                            {item.plant.latin_name && (
                              <p className="text-xs text-muted-foreground italic truncate">
                                {item.plant.latin_name}
                              </p>
                            )}

                            {item.plant.category_name && (
                              <p className="text-xs text-muted-foreground truncate">
                                {item.plant.category_name}
                                {item.plant.subcategory_name
                                  ? ` / ${item.plant.subcategory_name}`
                                  : ""}
                              </p>
                            )}

                            <p className="text-sm font-bold text-primary mt-1">
                              {item.plant.display_price || "Цена по запросу"}
                            </p>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.plant.id)}
                            className="h-8 w-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
                            aria-label="Удалить"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => decreaseQuantity(item.plant.id)}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </Button>

                          <div className="h-8 min-w-10 rounded-lg border border-border flex items-center justify-center text-sm font-medium">
                            {item.quantity}
                          </div>

                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0"
                            onClick={() => increaseQuantity(item.plant.id)}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 border-t border-border space-y-3">
                  {orderSentStep ? (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground text-center">
                        Если вы отправили заявку, можно очистить корзину.
                      </p>

                      <Button
                        variant="outline"
                        className="w-full gap-2"
                        onClick={openWhatsappOrder}
                      >
                        <MessageCircle className="h-5 w-5" />
                        Открыть WhatsApp ещё раз
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="w-full gap-2"
                      size="lg"
                      onClick={openWhatsappOrder}
                    >
                      <MessageCircle className="h-5 w-5" />
                      Отправить заявку в WhatsApp
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                  >
                    Очистить корзину
                  </Button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      <Footer />
    </>
  )
}