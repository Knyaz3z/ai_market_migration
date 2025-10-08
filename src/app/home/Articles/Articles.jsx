import React from 'react';
import './Articles.scss';
import Button from '@/components/Button/Button';

const articles = [
    {
        title: "ИИ в бизнесе: тренды 2025",
        date: "2025-09-02",
        desc: "Компании внедряют искусственный интеллект в бизнес-процессы для оптимизации работы, снижения затрат и повышения эффективности. Автоматизация аналитики, управления и коммуникаций с клиентами становится ключевым преимуществом.",
        imgLink: "/services_1.webp",
        alt: "ИИ в бизнесе 2025"
    },
    {
        title: "Нейросети в маркетинге: практическое применение",
        date: "2025-08-25",
        desc: "Генеративные модели создают уникальный контент, адаптируют рекламу под аудиторию и ускоряют тестирование гипотез, открывая новые возможности для роста бизнеса и повышения конверсии.",
        imgLink: "/services_2.webp",
        alt: "Нейросети в маркетинге"
    },
    {
        title: "Будущее голосовых ИИ-ассистентов",
        date: "2025-08-10",
        desc: "Голосовые ИИ-ассистенты становятся всё более человечными: понимают речь, ведут диалог и помогают управлять повседневными задачами. Они уже становятся незаменимыми инструментами в бизнесе.",
        imgLink: "/services_3.webp",
        alt: "Голосовые ИИ-ассистенты"
    },
];

const Articles = () => {
    return (
        <section className="articles">
            <header className="articles__header">
                <h2 className="articles__title">Полезные материалы об ИИ и автоматизации бизнеса</h2>
                <p className="articles__subtitle">
                    Читайте свежие статьи об искусственном интеллекте, его внедрении в бизнес и маркетинг
                </p>
            </header>

            <div className="articles__grid">
                {articles.map((article, index) => (
                    <div className="articles__card" key={index}>
                        <img
                            src={article.imgLink}
                            alt={article.alt}
                            className="articles__image"
                        />
                        <div className="articles__content">
                            <span className="articles__date">{article.date}</span>
                            <h3 className="articles__heading">{article.title}</h3>
                            <p className="articles__desc">{article.desc}</p>
                            <Button
                                label="Читать далее"
                                isLink={false}
                                ariaLabel={`Читать далее: ${article.title}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Articles;
