import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

// Подключаем шрифт Manrope с поддержкой кириллицы
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Flora Group | Озеленение и ландшафтный дизайн',
  description: 'Flora Group — эксперты в области озеленения, ухода за растениями и ландшафтного дизайна в Казахстане. Комнатные растения, благоустройство территорий, собственный питомник.',
  metadataBase: new URL('https://floragroup.kz'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Flora Group' }],

  // НАСТРОЙКИ ОТОБРАЖЕНИЯ ССЫЛКИ В WHATSAPP/СОЦСЕТЯХ
  openGraph: {
    title: 'Flora Group | Озеленение и ландшафтный дизайн',
    description: 'Профессиональное озеленение и ландшафтный дизайн в Казахстане. Ваш эксперт по растениям.',
    url: 'https://floragroup.kz',
    siteName: 'Flora Group',
    locale: 'ru_KZ',
    type: 'website',
    images: [
      {
        url: '/web-app-manifest-512x512.png', // Используем крупную иконку из твоего архива
        width: 512,
        height: 512,
        alt: 'Flora Group Logo',
      },
    ],
  },

  // ИКОНКИ ДЛЯ ВКЛАДОК БРАУЗЕРА И ТЕЛЕФОНОВ
  icons: {
    icon: [
      { url: '/favicon.ico?v=1' },
      { url: '/favicon-96x96.png?v=1', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=1', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={manrope.variable}
      // Добавляем этот атрибут:
      data-scroll-behavior="smooth"
      // Оставляем стиль, если хотите, чтобы плавная прокрутка работала:
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}