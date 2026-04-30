import { NurseryCatalog } from "@/components/nursery/nursery-catalog"

export default function TreesPage() {
  return (
    <NurseryCatalog
      categorySlug="trees"
      title="Деревья"
      fallbackCountLabel="200+ видов"
      fallbackDescription="Лиственные, плодовые и декоративные деревья для сада, парков, аллей и комплексного озеленения."
      icon="trees"
      whatsappMessage="Здравствуйте! Интересует покупка деревьев из вашего питомника."
      ctaTitle="Не нашли нужное дерево?"
      ctaText="Напишите нам в WhatsApp, и мы поможем подобрать дерево под ваш проект или привезём его под заказ."
    />
  )
}