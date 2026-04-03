"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
    { name: "Главная", href: "/" },
    { name: "Ландшафтный дизайн", href: "/landscape" },
    { name: "Комнатные растения", href: "/indoor-plants" },
    { name: "Уход за растениями", href: "/care" },
    { name: "Благоустройство", href: "/territory" },
    { name: "Питомник", href: "/nursery" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        // Проверка при монтировании и смене пути
        handleScroll()

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
                    : "bg-background/80 backdrop-blur-md border-b border-transparent"
            }`}
        >
            <nav
                className={`mx-auto flex max-w-[1600px] items-center justify-between px-4 sm:px-8 transition-all duration-300 ${
                    scrolled ? "h-14" : "h-20 lg:h-22"
                }`}
            >
                {/* LOGO CONTAINER */}
                <div className="flex items-center">
                    <Link href="/" className="relative flex items-center group">
                        <div className={`relative transition-all duration-300 ${
                            scrolled ? "h-16 lg:h-18" : "h-24 lg:h-26"
                        }`}>
                            <Image
                                src="/logo.svg"
                                alt="Flora Group Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-auto h-full transition-all duration-300 group-hover:scale-105 object-contain"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* MOBILE BUTTON */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md text-foreground active:scale-95 transition"
                    >
                        <div className="relative w-6 h-6">
                            <X
                                className={`absolute inset-0 transition-all duration-300 ${
                                    mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                                }`}
                            />
                            <Menu
                                className={`absolute inset-0 transition-all duration-300 ${
                                    mobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                                }`}
                            />
                        </div>
                    </button>
                </div>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-1 xl:gap-x-2 mx-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-muted/50 group whitespace-nowrap"
                        >
                            {item.name}
                            <span
                                className="absolute bottom-1 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"/>
                        </Link>
                    ))}
                </div>

                {/* CONTACT */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-4">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="group gap-2 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-white h-10"
                        asChild
                    >
                        <a href="tel:+77777995995" className="flex items-center gap-2">
                            <Phone
                                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:text-white"/>
                            {/* Увеличил до text-base, чтобы соответствовало меню */}
                            <span className="hidden xl:inline whitespace-nowrap text-base font-medium">
                                +7 (777) 799-59-95
                            </span>
                        </a>
                    </Button>

                    <Button
                        size="lg" // Поменял размер кнопки на lg для соответствия высоте
                        className="gap-2 hover:scale-105 active:scale-95 transition whitespace-nowrap text-base font-medium h-10 px-6"
                        asChild
                    >
                        <a
                            href="https://wa.me/77777995995"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5"/>
                            Связаться
                        </a>
                    </Button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${
                    mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="space-y-1 px-4 sm:px-6 pb-6 pt-2 bg-background border-b border-border">
                    {navigation.map((item, index) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-3 rounded-lg text-base font-medium hover:bg-muted transition"
                            style={{
                                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                                transform: mobileMenuOpen ? "translateX(0)" : "translateX(-10px)",
                                opacity: mobileMenuOpen ? 1 : 0,
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}