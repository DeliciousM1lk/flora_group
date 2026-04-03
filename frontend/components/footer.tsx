"use client"

import Link from "next/link"
import Image from "next/image";
import {MapPin, Phone, Mail, Instagram, MessageCircle} from "lucide-react"

const services = [
    {name: "Ландшафтный дизайн", href: "/landscape"},
    {name: "Комнатные растения", href: "/indoor-plants"},
    {name: "Благоустройство территории", href: "/territory"},
    {name: "Уход за растениями", href: "/care"},
    {name: "Питомник", href: "/nursery"},
]

function FloraLogoFooter() {
    return (
        <Link href="/" className="relative flex items-center group">
            <div className="relative h-22 lg:h-26">
                <Image
                    src="/logo.svg"
                    alt="Flora Group Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-full object-contain"
                    priority
                />
            </div>
        </Link>
    );
}

export function Footer() {
    return (
        <footer className="bg-foreground text-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <FloraLogoFooter/>
                        <p className="mt-4 text-sm text-background/70 leading-relaxed">
                            Эксперты в области озеленения, ухода за растениями и ландшафтного дизайна в Казахстане.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://instagram.com/floragroup.kz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-background/70 hover:text-background"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5"/>
                            </a>
                            <a
                                href="https://wa.me/77777995995"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-background/70 hover:text-background"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="h-5 w-5"/>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Услуги</h3>
                        <ul className="mt-4 space-y-3">
                            {services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-background/70 hover:text-background"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Контакты</h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0"/>
                                <a
                                    href="https://2gis.kz/almaty/search/Алматы, ул. Ашимова, 299"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-background/70 hover:text-background"
                                >
                                    г. Алматы, ул. Ашимова, 299
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0"/>
                                <a href="tel:+77777995995" className="text-sm text-background/70 hover:text-background">
                                    +7 (777) 799-59-95
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0"/>
                                <a href="mailto:info@floragroup.kz"
                                   className="text-sm text-background/70 hover:text-background">
                                    info@floragroup.kz
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Время работы</h3>
                        <ul className="mt-4 space-y-3 text-sm text-background/70">
                            <li className="flex justify-between border-b border-background/10 pb-1">
                                <span>Пн - Пт</span>
                                <span className="font-medium text-background">09:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between border-b border-background/10 pb-1">
                                <span>Сб</span>
                                <span className="font-medium text-background">10:00 - 16:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Вс</span>
                                <span className="text-red-400">Выходной</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-background/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-background/50">
                            © 2026 Flora Group. Все права защищены.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-sm text-background/50 hover:text-background/70">
                                Политика конфиденциальности
                            </Link>
                            <Link href="/terms" className="text-sm text-background/50 hover:text-background/70">
                                Условия использования
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}