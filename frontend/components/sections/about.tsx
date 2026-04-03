"use client"

import { Check } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

const advantages = [
  "Собственный питомник с 1000+ видами растений",
  "Более 20 лет успешной работы в Казахстане",
  "Полный цикл услуг: от проекта до обслуживания",
  "Гарантия на все работы и растения",
  "Индивидуальный подход к каждому проекту",
]

const team = [
  {
    name: "Наталья",
    role: "Дизайнер по озеленению",
    description: "Разрабатывает все проекты озеленения и ландшафтного дизайна. Создаёт уникальные концепции для каждого клиента.",
    image: "/team/natalya.jpg"
  },
  {
    name: "Александр",
    role: "Специалист по автополиву",
    description: "Проектирует и внедряет системы автоматического полива. Отвечает за техническую реализацию проектов.",
    image: "/team/alexandr.jpg"
  }
]

export function AboutSection() {
  return (
    <section className="py-24 bg-muted overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images grid */}
          <ScrollAnimation direction="left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80"
                    alt="Работа Flora Group"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                    alt="Работа в питомнике"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                    alt="Ландшафтный проект"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80"
                    alt="Озеленение интерьера"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <div>
            <ScrollAnimation>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                О компании
              </span>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground text-balance">
                Flora Group — профессиональное озеленение
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Мы занимаемся озеленением и ландшафтным дизайном с 2004 года.
                За это время реализовали более 350 проектов по всему Казахстану.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                Наша миссия — создавать зелёные пространства, которые улучшают качество жизни, 
                вдохновляют и радуют глаз. Мы верим, что каждый заслуживает красоты природы вокруг себя.
              </p>
            </ScrollAnimation>

            {/* Advantages */}
            <ScrollAnimation delay={400}>
              <ul className="mt-8 space-y-4">
                {advantages.map((item, index) => (
                  <ScrollAnimation key={item} delay={450 + index * 50}>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  </ScrollAnimation>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-32">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Наша команда
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground text-balance">
                Два эксперта — сотни проектов
              </h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
                Все проекты разрабатываются лично Натальей и Александром. 
                Реализация выполняется совместно с квалифицированной командой исполнителей.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((person, index) => (
              <ScrollAnimation key={person.name} delay={index * 150} direction={index === 0 ? "left" : "right"}>
                <div className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{person.name}</h3>
                      <p className="text-primary font-medium mt-1">{person.role}</p>
                      <p className="text-muted-foreground mt-3 leading-relaxed">{person.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
