"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { API_BASE } from "@/lib/api"

export default function ProjectDetail() {
  const params = useParams()
  const [project, setProject] = useState<any>(null)

  useEffect(() => {
    if (!params?.projectSlug) return

    fetch(`${API_BASE}/api/projects/${params.projectSlug}/`)
      .then(res => {
        if (!res.ok) throw new Error("Ошибка загрузки")
        return res.json()
      })
      .then(setProject)
      .catch(console.error)
  }, [params.projectSlug])

  if (!project) return <div className="pt-40 text-center">Загрузка...</div>

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-12">{project.area} — {project.year}</p>

        <PhotoProvider>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 mb-16">
            {project.images.map((img: any) => (
              <PhotoView key={img.id} src={img.image}>
                <div className="break-inside-avoid cursor-zoom-in rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img src={img.image} alt="project" className="w-full h-auto object-cover" />
                </div>
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>

        <div className="prose max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">О проекте</h2>
          <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
            {project.description}
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}