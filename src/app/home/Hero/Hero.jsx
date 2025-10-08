'use client'

import './Hero.scss'
import {useState} from 'react';
import Modal from '@/components/Modal/Modal';
import Button from '@/components/Button/Button';

function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="hero">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="hero__content container">
                <div className="hero__text">
                    <h1 className="hero__title">
                        AIMARKET — ИИ автоматизация бизнес-процессов
                    </h1>
                    <p className="hero__subtitle">
                        Автоматизируйте рутинные задачи и ускорьте работу команды с помощью искусственного интеллекта
                    </p>
                    <Button onClick={() => setIsModalOpen(true)} label="Проконсультируйтесь с ИИ" isLink={false} />
                </div>

                <div className="hero__features">
                    <div className="hero__feature">
                        <img src="/check-circle.svg" alt="Экономия времени с ИИ" width={40} height={40} />
                        <h4>Экономия времени</h4>
                        <p>
                            AIMARKET освобождает до 8 часов работы вашей команды ежедневно. ИИ выполняет задачи быстрее и эффективнее, чем человек.
                        </p>
                    </div>
                    <div className="hero__feature">
                        <img src="/check-circle.svg" alt="Повышение эффективности бизнеса" width={40} height={40} />
                        <h4>Повышение эффективности</h4>
                        <p>
                            Автоматизация процессов с помощью ИИ позволяет сосредоточиться на стратегических задачах и развивать бизнес.
                        </p>
                    </div>
                    <div className="hero__feature">
                        <img src="/check-circle.svg" alt="Снижение ошибок в работе" width={40} height={40} />
                        <h4>Снижение ошибок</h4>
                        <p>
                            Искусственный интеллект минимизирует человеческий фактор и снижает ошибки при выполнении рутинных операций.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
