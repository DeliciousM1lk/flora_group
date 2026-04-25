"use client"

import { useEffect, useState, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { API_BASE } from "@/lib/api"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"
import { cn } from "@/lib/utils"

function ProjectsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentCategory = searchParams.get("category") || "all"

  const [projects, setProjects] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Загрузка категорий
  useEffect(() => {
    fetch(`${API_BASE}/api/categories/`)
      .then(res => res.json())
      .then(data => {
        // ПРОВЕРКА: Если DRF вернул пагинацию, берем results, иначе сам массив
        const categoriesArray = Array.isArray(data) ? data : data.results || []
        setCategories(categoriesArray)
      })
      .catch(err => {
        console.error("Ошибка загрузки категорий:", err)
        setCategories([]) // Защита от undefined
      })
  }, [])

  // Загрузка проектов
  useEffect(() => {
    setIsLoading(true)
    const url = currentCategory === "all"
      ? `${API_BASE}/api/projects/`
      : `${API_BASE}/api/projects/?category__slug=${currentCategory}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        // ПРОВЕРКА: Если DRF вернул пагинацию, берем results
        const projectsArray = Array.isArray(data) ? data : data.results || []
        setProjects(projectsArray)
        setIsLoading(false)
      })
      .catch(err => {
        console.error("Ошибка загрузки проектов:", err)
        setProjects([])
        setIsLoading(false)
      })
  }, [currentCategory])

  return (
    <main className="pt-32 pb-20 min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Наши проекты</h1>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => router.push("/projects")}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all",
              currentCategory === "all"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            )}
          >
            Все
          </button>

          {/* Теперь categories точно массив, ошибка .map() пропадет */}
          {categories.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => router.push(`/projects?category=${cat.slug}`)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                currentCategory === cat.slug
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Сетка проектов */}
        {isLoading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-[4/3] bg-muted animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((project: any) => (
                <ScrollAnimation key={project.id} direction="up">
                  <Link href={`/projects/${currentCategory}/${project.slug}`}>
                    <article className="group cursor-pointer">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm">
                        <img
                          src={project.main_image || project.images?.[0]?.image || "/placeholder.jpg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                        {project.title}
                      </h3>
                      <div className="flex gap-3 text-sm text-muted-foreground mt-1">
                        <span>{project.area}</span>
                        <span>{project.year} г.</span>
                      </div>
                    </article>
                  </Link>
                </ScrollAnimation>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                В этой категории пока нет проектов.
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="pt-40 text-center">Загрузка интерфейса...</div>}>
        <ProjectsContent />
      </Suspense>
      <Footer />
    </>
  )
}