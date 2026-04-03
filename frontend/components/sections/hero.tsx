"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, TreePine, Flower2, MessageCircle } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation, CountUp, Parallax } from "@/components/scroll-animation"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted">
      {/* Background pattern with parallax */}
      <div className="absolute inset-0 opacity-[0.07] hidden sm:block">
        <Parallax speed={0.3} className="absolute top-20 left-10 text-primary">
          <Leaf className="w-32 h-32" />
        </Parallax>
        <Parallax speed={0.5} className="absolute top-40 right-20 text-primary">
          <TreePine className="w-48 h-48" />
        </Parallax>
        <Parallax speed={0.2} className="absolute bottom-32 left-1/4 text-primary">
          <Flower2 className="w-24 h-24" />
        </Parallax>
        <Parallax speed={0.4} className="absolute bottom-20 right-1/3 text-primary">
          <Leaf className="w-40 h-40 rotate-45" />
        </Parallax>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32 lg:px-8 text-center">
        {/* Badge */}
        <ScrollAnimation delay={100}>
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-primary">Озеленение и ландшафтный дизайн</span>
          </div>
        </ScrollAnimation>

        {/* Main heading */}
        <ScrollAnimation delay={200}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
            Создаём зелёные
            <br />
            <span className="text-primary">пространства мечты</span>
          </h1>
        </ScrollAnimation>

        {/* Subheading */}
        <ScrollAnimation delay={300}>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Flora Group — эксперты в области озеленения, ландшафтного дизайна
            и ухода за растениями. От комнатных растений до масштабных проектов благоустройства.
          </p>
        </ScrollAnimation>

        {/* CTA buttons */}
        <ScrollAnimation delay={400}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="gap-2 text-base px-6 sm:px-8 w-full sm:w-auto" asChild>
              <a href="https://wa.me/77777995995?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%B5%D0%B5%20%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B8%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B0%D1%85." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Связаться с нами
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-6 sm:px-8 w-full sm:w-auto group" asChild>
              <Link href="/nursery">
                Посетить питомник
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>

        {/* Stats */}
        <ScrollAnimation delay={500}>
          <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {[
              { value: 20, suffix: "+", label: "лет опыта" },
              { value: 350, suffix: "+", label: "проектов" },
              { value: 1000, suffix: "+", label: "видов растений" },
              { value: 100, suffix: "%", label: "качество" },
            ].map((stat, index) => (
              <ScrollAnimation key={stat.label} delay={600 + index * 100}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Листайте вниз</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  )
}
