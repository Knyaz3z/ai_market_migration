'use client'

import {useState} from 'react';
import './Services.scss';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';


const servicesData = [
    {
        title: 'ИИ бизнес-ассистент в Telegram',
        imgLink: '/services_1.webp',
        text: 'Интеграция ИИ в ваши Telegram-боты для автоматизации бизнес-процессов. Ваш личный маркетолог, юрист или психолог всегда под рукой, повышая эффективность и сокращая нагрузку на команду.',
        alt: 'ИИ бизнес-ассистент для автоматизации процессов в Telegram'
    },
    {
        title: 'Автопостинг в Telegram',
        imgLink: '/services_2.webp',
        text: 'Автоматическое ведение каналов Telegram. ИИ анализирует новости, создает уникальный контент и публикует его автоматически, экономя время и усилия вашей команды.',
        alt: 'Автопостинг Telegram с помощью ИИ для бизнеса'
    },
    {
        title: 'ИИ консультант по телефону',
        imgLink: '/services_3.webp',
        text: 'Виртуальный ИИ-консультант проконсультирует клиента, соберет данные и перенесет их в вашу CRM. Обеспечивает активные продажи и поддержку 24/7, минимизируя ошибки человека.',
        alt: 'ИИ консультант по телефону для бизнеса'
    }
];


const ServiceCard = ({ title, imgLink, text, onOpenModal, alt }) => {
    return (
        <article className="services__card">
            <img
                src={imgLink}
                alt={alt}
                loading="lazy"
                width={400}
                height={300}
            />
            <div className="services__card-content">
                <h3 className="services__card-title">{title}</h3>
                <p className="services__card-text">{text}</p>
            </div>
            <div className="services__card-button">
                <Button onClick={onOpenModal} label="Хочу подробности" isLink={false}/>
            </div>
        </article>
    );
};

export const Services = ({ className = '' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="services" className={`services ${className}`}>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="services__container container">
                <header className="services__header">
                    <h2 className="services__title">
                        Наши услуги по ИИ автоматизации бизнеса
                    </h2>
                    <p className="services__subtitle">
                        Экономьте время и ресурсы с помощью комплексных решений AIMARKET: автопостинг в Telegram, ИИ бизнес-ассистент и ИИ-консультант по телефону.
                    </p>
                </header>

                <div className="services__grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            onOpenModal={() => setIsModalOpen(true)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
