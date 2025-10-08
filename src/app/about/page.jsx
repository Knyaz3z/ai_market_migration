'use client'
import {useState} from 'react';
import './About.scss';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';


const team = [
    {
        name: "Анна Иванова",
        role: "CEO & Founder",
        photo: "/images/team-anna.jpg",
    },
    {
        name: "Максим Петров",
        role: "Frontend Developer",
        photo: "/images/team-max.jpg",
    },
    {
        name: "Елена Сидорова",
        role: "UI/UX Designer",
        photo: "/images/team-elena.jpg",
    },
];

const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="about">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Hero */}
            <section className="about__hero">
                <h1>О нас</h1>
                <p>
                    Мы создаём современные цифровые решения для бизнеса, совмещая
                    технологичность и удобство.
                </p>
            </section>

            {/* Описание */}
            <section className="about__description container">
                <div className="about__text">
                    <h2>Наша история</h2>
                    <p>
                        Мы начали с небольшой команды энтузиастов, объединённых идеей делать
                        интернет понятным и красивым. Сегодня мы помогаем компаниям любого
                        размера создавать сайты, которые работают на их бизнес.
                    </p>
                    <p>
                        Наши ценности — прозрачность, качество и забота о клиенте. Мы верим,
                        что цифровые продукты должны быть удобными, современными и доступными.
                    </p>
                </div>
                <div className="about__image">
                    <img src="/images/about-office.jpg" alt="Наша команда" />
                </div>
            </section>

            {/* Команда */}
            <section className="about__team container">
                <h2>Наша команда</h2>
                <div className="about__team-grid">
                    {team.map((member, index) => (
                        <div className="about__team-card" key={index}>
                            <img src={member.photo} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ценности */}
            <section className="about__values container">
                <h2>Наши ценности</h2>
                <div className="about__values-grid">
                    <div className="about__values-card">
                        <span className="icon">🚀</span>
                        <h3>Инновации</h3>
                        <p>Мы используем самые современные технологии, чтобы ваши проекты всегда были на шаг впереди.</p>
                    </div>
                    <div className="about__values-card">
                        <span className="icon">🤝</span>
                        <h3>Партнёрство</h3>
                        <p>Строим честные и прозрачные отношения, где клиент — главный участник процесса.</p>
                    </div>
                    <div className="about__values-card">
                        <span className="icon">✨</span>
                        <h3>Качество</h3>
                        <p>Уделяем внимание каждой детали, чтобы результат всегда был выше ожиданий.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about__cta">
                <h2>Хотите работать с нами?</h2>
                <p>Свяжитесь с нами и давайте создадим что-то великое вместе.</p>
                <Button
                    label="Связаться"
                    isLink={false}
                    onClick={() => setIsModalOpen(true)}
                />
            </section>
        </div>
    );
};

export default About;
