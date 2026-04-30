import { NurseryCatalog } from "@/components/nursery/nursery-catalog"

export default function ShrubsPage() {
  return (
    <NurseryCatalog
      categorySlug="shrubs"
      title="Кустарники"
      fallbackCountLabel="350+ видов"
      fallbackDescription="Декоративные, цветущие, плодовые и хвойные кустарники для живых изгородей, композиций и озеленения участка."
      icon="shrubs"
      whatsappMessage="Здравствуйте! Интересует покупка кустарников из вашего питомника."
      ctaTitle="Не нашли нужный кустарник?"
      ctaText="Напишите нам в WhatsApp, и мы поможем подобрать кустарники под ваш участок или привезём их под заказ."
    />
  )
}