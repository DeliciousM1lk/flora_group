"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { API_BASE } from "@/lib/api"

export default function ProjectsPage() {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    fetch(`${API_BASE}/api/categories/`)
      .then(res => res.json())
      .then(data => {
          setCategories(Array.isArray(data) ? data : data.results || [])
        })
      .catch(err => console.error("Ошибка загрузки:", err))
  }, [])

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Проекты</h1>
        {categories.map(cat => (
          <section key={cat.slug} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">{cat.name}</h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {cat.projects.map((p: any) => (
                <div
                  key={p.id}
                  className="break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <a href={`/projects/${cat.slug}/${p.slug}`}>
                    <div className="overflow-hidden">
                      <img
                        src={p.main_image || "/placeholder.jpg"}
                        alt={p.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {p.area} — {p.year}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}