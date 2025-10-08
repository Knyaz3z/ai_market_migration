'use client';
import React from 'react';
import {useParams, useRouter} from 'next/navigation';
import Link from 'next/link';
import {news} from '@/app/news/data';
import './CasePage.scss';

export default function CasePage() {
    const params = useParams();
    const router = useRouter();
    const caseItem = news.find(c => c.id === Number(params.id));

    if (!caseItem) {
        return (
            <div className="case-detail container">
                <h2>Кейс не найден</h2>
                <Link href="/news" className="button secondary">Вернуться к списку кейсов</Link>
            </div>
        );
    }

    return (
        <div className="case-detail container">
            <button onClick={() => router.back()} className="button secondary back-btn">← Назад</button>

            {/* Hero кейса */}
            <div className="case-hero">
                <h1>{caseItem.title}</h1>
                <p>{caseItem.description}</p>
                <img src={caseItem.image} alt={caseItem.title} />
            </div>

            {/* Полное описание */}
            <section className="case-description">
                <h2>Описание проекта</h2>
                <p>{caseItem.fullDescription}</p>
            </section>

            {/* Блок преимуществ */}
            <section className="case-benefits">
                <h2>Преимущества внедрения</h2>
                <ul>
                    {caseItem.benefits.map((benefit, i) => (
                        <li key={i}>✔️ {benefit}</li>
                    ))}
                </ul>
            </section>

            {/* Этапы реализации */}
            <section className="case-steps">
                <h2>Этапы внедрения</h2>
                <ol>
                    {caseItem.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </section>

            {/* Отзывы */}
            {caseItem.testimonials && caseItem.testimonials.length > 0 && (
                <section className="case-testimonials">
                    <h2>Отзывы клиентов</h2>
                    {caseItem.testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <p>"{t.text}"</p>
                            <strong>{t.name}, {t.role}</strong>
                        </div>
                    ))}
                </section>
            )}

            {/* Дополнительные кейсы */}
            <section className="case-additional">
                <h2>Дополнительные кейсы</h2>
                <div className="additional-grid">
                    {caseItem.additionalCases.map((item, index) => (
                        <div key={index} className="additional-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="case-cta">
                <h2>Хотите внедрить похожее решение?</h2>
                <p>Свяжитесь с нами, и мы разработаем индивидуальное решение для вашего бизнеса</p>
                <Link href="#contacts" className="button primary">Связаться с нами</Link>
            </section>
        </div>
    );
}
