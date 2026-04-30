import { NurseryCatalog } from "@/components/nursery/nursery-catalog"

export default function IndoorPlantsNurseryPage() {
  return (
    <NurseryCatalog
      categorySlug="indoor"
      title="Комнатные растения"
      fallbackCountLabel="250+ видов"
      fallbackDescription="Декоративно-лиственные, цветущие, суккуленты и пальмы. Озелените ваш дом или офис качественными растениями."
      icon="indoor"
      whatsappMessage="Здравствуйте! Интересует покупка комнатных растений из вашего питомника."
      ctaTitle="Не нашли нужное растение?"
      ctaText="Напишите нам в WhatsApp, и мы поможем подобрать растение или привезём его под заказ."
    />
  )
}