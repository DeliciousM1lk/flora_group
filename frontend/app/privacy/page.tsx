"use client"

import Link from "next/link"
import {ShieldCheck, Lock, EyeOff, UserCheck, ArrowLeft} from "lucide-react"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#fcfdfa] py-16 px-4 sm:px-6 lg:px-8 text-slate-900">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-slate-500 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4"/> На главную
                </Link>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-primary/10 rounded-2xl">
                            <ShieldCheck className="h-8 w-8 text-primary"/>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight">Политика конфиденциальности</h1>
                    </div>

                    <div className="prose prose-slate max-w-none space-y-12">
                        <section>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Ваша конфиденциальность важна для <strong>Flora Group</strong>. Мы разработали эту
                                политику, чтобы вы понимали, как мы собираем, используем и защищаем ваши персональные
                                данные в соответствии с Законом РК «О персональных данных и их защите».
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <Lock className="h-5 w-5"/>
                                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">1. Сбор
                                    информации</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Мы собираем только те данные, которые вы добровольно предоставляете через формы на
                                сайте: имя, контактный номер телефона и адрес объекта для оказания услуг ландшафтного
                                дизайна или доставки растений.
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <UserCheck className="h-5 w-5"/>
                                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">2. Цели
                                    использования</h2>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
                                <li className="flex items-start gap-2 italic">
                                    <span className="text-primary">•</span> Оперативная связь и консультации
                                </li>
                                <li className="flex items-start gap-2 italic">
                                    <span className="text-primary">•</span> Составление смет и выезд на замеры
                                </li>
                                <li className="flex items-start gap-2 italic">
                                    <span className="text-primary">•</span> Улучшение работы сервисов сайта
                                </li>
                                <li className="flex items-start gap-2 italic">
                                    <span className="text-primary">•</span> Доставка товаров из питомника
                                </li>
                            </ul>
                        </section>

                        <section className="p-6 bg-slate-50 rounded-2xl border-l-4 border-primary">
                            <div className="flex items-center gap-3 mb-3 text-slate-800 font-bold">
                                <EyeOff className="h-5 w-5 text-primary"/>
                                <span>Защита от третьих лиц</span>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Flora Group гарантирует, что ваши данные не будут проданы, переданы или сданы в аренду
                                третьим лицам. Доступ к информации имеют только профильные специалисты компании для
                                выполнения вашего заказа.
                            </p>
                        </section>
                    </div>
                    <div
                        className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <p className="text-sm opacity-60 mb-1">Остались вопросы?</p>
                            <a
                                href="mailto:info@floragroup.kz"
                                className="text-xl font-semibold underline underline-offset-4 hover:text-primary transition-colors"
                            >
                                info@floragroup.kz
                            </a>
                        </div>
                        <Link
                            href="tel:+77771234567"
                            className="px-6 py-3 bg-primary rounded-xl font-bold hover:bg-primary/90 transition-colors"
                        >
                            Связаться с нами
                        </Link>
                    </div>
                    <footer
                        className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-400 flex justify-between items-center">
                        <span>© {new Date().getFullYear()} Flora Group</span>
                        <span>г. Алматы, Казахстан</span>
                    </footer>
                </div>
            </div>
        </div>
    )
}