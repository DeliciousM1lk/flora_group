import { NurseryCatalog } from "@/components/nursery/nursery-catalog"

export default function ConifersPage() {
  return (
    <NurseryCatalog
      categorySlug="conifers"
      title="Хвойные"
      fallbackCountLabel="150+ видов"
      fallbackDescription="Сосны, ели, туи и можжевельники. Вечнозелёные растения для круглогодичной красоты вашего сада."
      icon="conifers"
      whatsappMessage="Здравствуйте! Интересует покупка хвойных растений из вашего питомника."
      ctaTitle="Не нашли нужное хвойное растение?"
      ctaText="Напишите нам в WhatsApp, и мы поможем подобрать растение или привезём его под заказ."
    />
  )
}