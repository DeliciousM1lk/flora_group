import { NurseryCatalog } from "@/components/nursery/nursery-catalog"

export default function FlowersPage() {
  return (
    <NurseryCatalog
      categorySlug="flowers"
      title="Цветы и многолетники"
      fallbackCountLabel="400+ видов"
      fallbackDescription="Многолетники, однолетники, луковичные и декоративные злаки. Создайте цветущий сад на весь сезон."
      icon="flowers"
      whatsappMessage="Здравствуйте! Интересует покупка цветов и многолетников из вашего питомника."
      ctaTitle="Не нашли нужные цветы?"
      ctaText="Напишите нам в WhatsApp, и мы поможем подобрать растения или привезём их под заказ."
    />
  )
}