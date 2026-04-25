"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
// Добавлен Calendar
import { ArrowRight, Calendar, Check, TreePine, Ruler, Eye, HardHat, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { API_BASE, Project } from "@/lib/api"

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
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const CATEGORY_SLUG = "landshaftnyj-dizajn"

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/projects/?category__slug=${CATEGORY_SLUG}`)
        if (!response.ok) throw new Error("Ошибка при загрузке проектов")
        const data = await response.json()
        const projectsArray = Array.isArray(data) ? data : data.results || []
        setProjects(projectsArray.slice(0, 6))
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
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
                    <a href="#portfolio">Смотреть портфолио</a>
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ... Секции Features и Process остаются без изменений ... */}

        {/* Portfolio Section */}
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
              </div>
            </ScrollAnimation>

            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-[4/3] rounded-2xl bg-muted animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                  <ScrollAnimation key={project.id} delay={index * 100} direction="up">
                    <Link href={`/projects/${CATEGORY_SLUG}/${project.slug}`} className="group block">
                      <article>
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-5">
                          <img
                            src={project.main_image || "/placeholder.jpg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {project.title}
                        </h3>

                        <div className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm">{project.year} г.</span>
                        </div>
                      </article>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <ScrollAnimation direction="up">
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <Link href={`/projects?category=${CATEGORY_SLUG}`}>
                    Посмотреть все проекты
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* ... Секция CTA ... */}
      </main>
      <Footer />
    </>
  )
}