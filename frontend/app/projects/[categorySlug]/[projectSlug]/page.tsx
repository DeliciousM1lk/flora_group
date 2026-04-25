"use client"

import { useEffect, useState, use } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Maximize2 } from "lucide-react"
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { API_BASE } from "@/lib/api"
import { motion, AnimatePresence } from "framer-motion"

interface PageProps {
  params: Promise<{ categorySlug: string; projectSlug: string }>
}

export default function ProjectDetailPage({ params }: PageProps) {
  const { projectSlug } = use(params)
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_BASE}/api/projects/${projectSlug}/`)
      .then(res => {
        if (!res.ok) throw new Error("404")
        return res.json()
      })
      .then(setProject)
      .catch(() => setProject(null))
      .finally(() => setLoading(false))
  }, [projectSlug])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  )

  if (!project) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="text-xl font-medium mb-6">Проект не найден</h1>
      <Button variant="outline" className="rounded-full" onClick={() => router.push('/projects')}>
        К проектам
      </Button>
    </div>
  )

  // Объединяем главное фото и галерею в один массив для Masonry
  const allImages = [
    { id: 'main', image: project.main_image, isMain: true },
    ...(project.images || [])
  ].filter(img => img.image)

  return (
    <>
      <Header />
      <main className="pt-32 pb-32 bg-background min-h-screen">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="mb-16">
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
              <Button
                variant="ghost"
                className="group gap-2 pl-0 mb-8 hover:bg-transparent text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Назад
              </Button>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/40 pb-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl sm:text-7xl font-bold tracking-tighter text-foreground"
              >
                {project.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-start md:items-end gap-1"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                  Год реализации
                </span>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-light tracking-tight">{project.year}</span>
                </div>
              </motion.div>
            </div>
          </header>

          {/* Pinterest Gallery Section */}
          <PhotoProvider
            maskOpacity={0.98}
            speed={() => 300}
            maskClosable={true}
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
              <AnimatePresence>
                {allImages.map((img: any, index: number) => (
                  <motion.div
                    key={img.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="break-inside-avoid"
                  >
                    <PhotoView src={img.image}>
                      <div className="relative rounded-[2rem] overflow-hidden cursor-zoom-in group bg-muted border border-border/40 shadow-sm hover:shadow-xl transition-all duration-500">
                        <img
                          src={img.image}
                          alt={project.title}
                          className="w-full h-auto object-cover transition-transform duration-[0.6s] group-hover:scale-105"
                        />

                        {/* Overlay с кнопкой - теперь на всех фото */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                           <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-50 group-hover:scale-100 transition-all duration-300">
                              <Maximize2 className="text-white h-5 w-5" />
                           </div>
                        </div>
                      </div>
                    </PhotoView>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </PhotoProvider>

        </div>
      </main>
      <Footer />
    </>
  )
}