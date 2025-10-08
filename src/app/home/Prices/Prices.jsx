'use client'

import {useState} from 'react';
import './Prices.scss';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

const pricesData = [
    {
        id: 1,
        title: 'Разработка ИИ-автоматизации для бизнеса',
        price: 'от 50 000 руб.',
        list: [
            'Анализ бизнес-процессов компании',
            'Разработка и настройка алгоритмов ИИ',
            'Интеграция с CRM и внутренними системами',
            'Тестирование и отладка автоматизации',
            'Техническое сопровождение после внедрения',
            'Обучение сотрудников работе с ИИ'
        ],
        desc: 'Комплексное внедрение ИИ-автоматизации для оптимизации бизнес-процессов',
        popular: true
    },
    {
        id: 2,
        title: 'Настройка рекламы для бизнеса',
        price: 'от 20 000 руб.',
        list: [
            'Анализ целевой аудитории и рынка',
            'Создание эффективных рекламных материалов',
            'Настройка рекламных кампаний в Яндекс.Директ и Google Ads',
            'Запуск и мониторинг эффективности',
            'Анализ результатов и оптимизация'
        ],
        desc: 'Разработка и запуск рекламных кампаний с акцентом на конверсию и рост продаж'
    },
    {
        id: 3,
        title: 'Создание лендинга под ключ',
        price: 'от 30 000 руб.',
        list: [
            'Дизайн и прототипирование сайта',
            'Адаптивная вёрстка для любых устройств',
            'SEO-оптимизация для поисковых систем',
            'Наполнение контентом и интеграции',
            'Запуск сайта и аналитика эффективности'
        ],
        desc: 'Разработка лендинга, который повышает конверсию и привлекает клиентов'
    }
];

const PriceCard = ({ title, price, list, desc, popular, onOpenModal }) => {
    return (
        <article className={`prices__card ${popular ? 'prices__card--popular' : ''}`}>
            {popular && <div className="prices__badge">Популярный</div>}

            <div className="prices__card-header">
                <h3 className="prices__card-title">{title}</h3>
                <p className="prices__card-desc">{desc}</p>
            </div>

            <div className="prices__card-price">
                <span className="prices__card-amount">{price}</span>
            </div>

            <ul className="prices__card-list">
                {list.map((item, index) => (
                    <li key={index} className="prices__card-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="prices__card-icon">
                            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="prices__card-footer">
                <Button
                    label={popular ? "Заказать" : "Подробнее"}
                    isLink={false}
                    variant="primary"
                    onClick={onOpenModal}
                />
            </div>
        </article>
    );
};

export const Prices = ({ className = '' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className={`prices ${className}`}>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="prices__container container">
                <header className="prices__header header">
                    <h2 className="prices__title title">Тарифы и решения по ИИ автоматизации</h2>
                    <p className="prices__subtitle subtitle">
                        Выберите подходящее решение для автоматизации процессов, повышения эффективности и роста бизнеса с AIMARKET
                    </p>
                </header>

                <div className="prices__grid">
                    {pricesData.map((price) => (
                        <PriceCard
                            key={price.id}
                            {...price}
                            onOpenModal={() => setIsModalOpen(true)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prices
