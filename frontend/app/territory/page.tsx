"use client"

import { useEffect, useState } from "react"
// Добавляем Calendar в импорт
import { ArrowRight, Calendar, MessageCircle, Phone, Lightbulb, Droplets, Blocks, Trees, Fence, Construction, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { API_BASE, Project } from "@/lib/api"

// ... (константы services и benefits остаются прежними)

export default function TerritoryPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const CATEGORY_SLUG = "blagoustrojstvo-territorii"

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/projects/?category__slug=${CATEGORY_SLUG}`)
        if (!response.ok) throw new Error("Ошибка загрузки")
        const data = await response.json()
        const projectsArray = Array.isArray(data) ? data : data.results || []
        setProjects(projectsArray.slice(0, 6))
      } catch (error) {
        console.error(error)
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
        {/* ... Hero и Services секции ... */}

        {/* Portfolio Section */}
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
              </div>
            </ScrollAnimation>

            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[4/3] rounded-2xl bg-muted animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                  <ScrollAnimation key={project.id} delay={index * 100} direction="up">
                    <Link href={`/projects/${CATEGORY_SLUG}/${project.slug}`} className="group block">
                      <article>
                        {/* Изображение */}
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                          <img
                            src={project.main_image || "/placeholder.jpg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* Название проекта */}
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {project.title}
                        </h3>

                        {/* Год реализации с иконкой */}
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
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href={`/projects?category=${CATEGORY_SLUG}`}>
                  Все проекты
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ... Остальные секции (Benefits, CTA) ... */}
      </main>
      <Footer />
    </>
  )
}