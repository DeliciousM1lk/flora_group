"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Scissors, Bug, Droplets, Leaf } from "lucide-react"
import Link from "next/link"
import { ScrollAnimation } from "@/components/scroll-animation"

const services = [
  {
    icon: Scissors,
    title: "Обрезка и формовка",
    description: "Профессиональная обрезка деревьев и кустарников, формирование кроны, омолаживающая обрезка.",
    features: ["Санитарная", "Формирующая", "Топиарная"],
  },
  {
    icon: Bug,
    title: "Лечение растений",
    description: "Диагностика заболеваний, борьба с вредителями, профилактическая обработка.",
    features: ["Диагностика", "Лечение", "Профилактика"],
  },
  {
    icon: Droplets,
    title: "Полив и подкормка",
    description: "Организация регулярного полива, внесение удобрений, мульчирование.",
    features: ["Капельный полив", "Подкормка", "Мульчирование"],
  },
  {
    icon: Leaf,
    title: "Сезонный уход",
    description: "Комплексный уход за садом в каждый сезон: подготовка к зиме, весенние работы.",
    features: ["Уборка листвы", "Укрытие на зиму", "Весенняя обработка"],
  },
]

const plans = [
  {
    name: "Базовый",
    price: "от 50 000",
    period: "тг/месяц",
    description: "Для небольших участков до 10 соток",
    features: [
      "Визит 2 раза в месяц",
      "Полив и подкормка",
      "Обрезка кустарников",
      "Прополка цветников",
      "Консультации по телефону",
    ],
  },
  {
    name: "Стандарт",
    price: "от 100 000",
    period: "тг/месяц",
    description: "Для участков от 10 до 30 соток",
    features: [
      "Визит 4 раза в месяц",
      "Полив и подкормка",
      "Обрезка деревьев и кустарников",
      "Стрижка газона",
      "Обработка от вредителей",
      "Сезонные работы",
      "Приоритетная поддержка",
    ],
    popular: true,
  },
  {
    name: "Премиум",
    price: "от 200 000",
    period: "тг/месяц",
    description: "Для больших участков и коммерческих объектов",
    features: [
      "Визиты по графику",
      "Полный цикл ухода",
      "Персональный агроном",
      "Обслуживание автополива",
      "Замена погибших растений",
      "Ежемесячный отчёт",
      "Круглосуточная поддержка",
    ],
  },
]

const whyUs = [
  "Профессиональный подход к каждому саду",
  "Используем только сертифицированные препараты",
  "Гарантия на все выполненные работы",
  "Индивидуальный график обслуживания",
  "Ежемесячные отчёты о состоянии сада",
]

export default function CarePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero */}
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
                  Уход за растениями
                </h1>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={300}>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Профессиональный уход за вашим садом и растениями. Регулярное обслуживание,
                  лечение и сезонные работы.
                </p>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={400}>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <Button size="lg" className="gap-2 w-full sm:w-auto group">
                    Заказать обслуживание
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Заказать выезд
                  </Button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Услуги
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Виды работ
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={service.title} delay={index * 100} direction="up">
                  <div className="bg-muted rounded-2xl p-6 sm:p-8 group hover:shadow-lg transition-all duration-300">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 transition-all group-hover:bg-primary group-hover:scale-110">
                      <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed text-sm sm:text-base">{service.description}</p>
                    <ul className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="inline-flex items-center rounded-full bg-background px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-foreground transition-colors hover:bg-primary/10"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 sm:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollAnimation direction="left">
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Почему мы
                  </span>
                  <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                    Доверьте уход профессионалам
                  </h2>
                  <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                    Мы имеем многолетний опыт работы и знаем особенности
                    каждого растения и климата Казахстана.
                  </p>
                  <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                    {whyUs.map((item, index) => (
                      <ScrollAnimation key={item} delay={200 + index * 50} direction="fade">
                        <li className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-foreground text-sm sm:text-base">{item}</span>
                        </li>
                      </ScrollAnimation>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="right" delay={200}>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
                    alt="Уход за садом"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Тарифы
                </span>
                <h2 className="mt-3 sm:mt-4 font-bold text-3xl sm:text-4xl text-foreground">
                  Абонентское обслуживание
                </h2>
                <p className="mt-4 text-muted-foreground text-base sm:text-lg">
                  Выберите подходящий тариф или закажите индивидуальный расчёт
                </p>
              </div>
            </ScrollAnimation>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {plans.map((plan, index) => (
                <ScrollAnimation key={plan.name} delay={index * 100} direction="up">
                  <div
                    className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground ring-2 ring-primary shadow-xl' 
                        : 'bg-card border border-border hover:shadow-lg'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                        Популярный
                      </span>
                    )}
                    <h3 className={`text-xl sm:text-2xl font-semibold ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                      {plan.name}
                    </h3>
                    <p className={`mt-2 text-sm ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>
                    <div className="mt-4 sm:mt-6">
                      <span className={`text-3xl sm:text-4xl font-bold ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                        {" "}{plan.period}
                      </span>
                    </div>
                    <ul className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                          <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full mt-6 sm:mt-8 transition-transform hover:scale-105 active:scale-95"
                      variant={plan.popular ? "secondary" : "default"}
                      size="lg"
                    >
                      Выбрать тариф
                    </Button>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation>
              <h2 className="font-bold text-3xl sm:text-4xl text-primary-foreground">
                Нужна разовая консультация?
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={100}>
              <p className="mt-4 text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto">
                Закажите выезд для диагностики состояния растений и получения рекомендаций по уходу.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <Button size="lg" variant="secondary" className="mt-6 sm:mt-8 gap-2 group">
                Заказать выезд
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
