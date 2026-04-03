"use client"

import Link from "next/link"
import {FileText, Scale, Image as ImageIcon, HelpCircle, ArrowLeft, AlertTriangle} from "lucide-react"

export default function TermsPage() {
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
                            <FileText className="h-8 w-8 text-primary"/>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight">Условия использования</h1>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <div className="flex items-center gap-3 mb-4 text-primary">
                                <Scale className="h-5 w-5"/>
                                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">1. Публичная
                                    оферта</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                Информация о ценах и наличии товаров на сайте носит ознакомительный характер и не
                                является публичной офертой. Окончательная стоимость товаров и услуг, а также их
                                характеристики уточняются в ходе консультации с менеджером. Обязательства по цене и
                                срокам вступают в силу только после подтверждения заказа или подписания договора (для
                                проектных работ) на основании актуальных данных о складских запасах и технических
                                особенностях объекта. </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-3 mb-6 text-primary">
                                <ImageIcon className="h-5 w-5"/>
                                <h2 className="text-xl font-bold text-slate-800 uppercase tracking-wide">2.
                                    Интеллектуальная собственность</h2>
                            </div>
                            <div className="space-y-4">
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    Все изображения наших работ и растений, дизайн-проекты и текстовый контент являются
                                    интеллектуальной собственностью <strong>Flora Group</strong>.
                                </p>
                                <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4">
                                    <AlertTriangle className="h-6 w-6 text-red-600 shrink-0"/>
                                    <p className="text-red-900 text-sm leading-relaxed italic">
                                        Любое коммерческое использование материалов сайта, копирование фотографий
                                        реализованных объектов или фрагментов дизайна без письменного разрешения
                                        руководства запрещено и преследуется согласно Закону РК «Об авторском праве».
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
                            <div className="flex items-center gap-3 mb-4 text-amber-700 font-bold">
                                <HelpCircle className="h-6 w-6"/>
                                <h2 className="text-lg uppercase">Особенности живого товара</h2>
                            </div>
                            <p className="text-amber-900 text-sm leading-relaxed">
                                Поскольку растения являются живыми организмами, Flora Group не несет ответственности за
                                их состояние после передачи заказчику, если не был заключен договор на профессиональное
                                сервисное обслуживание или не соблюдались предоставленные рекомендации по уходу.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide">3. Обратная
                                связь</h2>
                            <p className="text-slate-600 leading-relaxed">
                                По всем вопросам, связанным с использованием материалов сайта или уточнением условий
                                сотрудничества, вы можете связаться с нами по
                                адресу: <strong>info@floragroup.kz</strong> или по адресу: <strong>г. Алматы, ул.
                                Ашимова, 299</strong>.
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