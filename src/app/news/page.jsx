'use client'
import React, {useMemo, useState} from 'react';
import './News.scss';
import Modal from '@/components/Modal/Modal';
import Link from 'next/link';
import {news} from '@/app/news/data';

const Cases = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Получаем список всех категорий из news
    const categories = useMemo(() => {
        const cats = news.map(c => c.category);
        return ["all", ...Array.from(new Set(cats))].map(cat => ({
            key: cat,
            label: cat === "all" ? "Все" : cat.charAt(0).toUpperCase() + cat.slice(1)
        }));
    }, []);

    // Фильтруем кейсы по выбранной категории
    const filteredCases =
        activeCategory === "all"
            ? news
            : news.filter(c => c.category === activeCategory);

    return (
        <section className="cases container">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <header className="cases__header">
                <h2 className="cases__title">Наши кейсы</h2>
                <p className="cases__subtitle">
                    Реальные проекты, которые помогают бизнесу работать эффективнее
                </p>
            </header>

            <div className="cases__filters">
                {categories.map(cat => (
                    <button
                        key={cat.key}
                        className={`cases__filter-btn ${activeCategory === cat.key ? "active" : ""}`}
                        onClick={() => setActiveCategory(cat.key)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="cases__grid">
                {filteredCases.map(item => (
                    <div key={item.id} className="cases__card">
                        <img
                            src={item.image}
                            alt={`Кейс: ${item.title}`}
                            className="cases__image"
                            loading="lazy"
                        />
                        <div className="cases__content">
                            <h3 className="cases__card-title">{item.title}</h3>
                            <p className="cases__desc">{item.description}</p>
                            <Link href={`/news/${item.id}`} className="button primary">
                                Подробнее
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cases__cta">
                <h3>Хотите такой же результат?</h3>
                <p>Мы создадим решение под ваши задачи и бюджет, с поддержкой и внедрением ИИ.</p>
                <button
                    className="cases__cta-btn"
                    onClick={() => setIsModalOpen(true)}
                >
                    Связаться с нами
                </button>
            </div>
        </section>
    );
};

export default Cases;
