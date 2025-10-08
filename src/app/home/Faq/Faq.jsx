'use client'
import {useState} from 'react'
import './Faq.scss'

const faqArr = [
    {
        id: 1,
        title: 'Сколько стоит ИИ автоматизация бизнес-процессов?',
        desc: 'Стоимость услуг AIMARKET зависит от сложности проекта. Базовые решения по автоматизации начинаются от 15 000 рублей, комплексная автоматизация бизнес-процессов — от 50 000 рублей. Точный расчет выполняется после анализа ваших потребностей.',
    },
    {
        id: 2,
        title: 'Сроки внедрения ИИ решений для бизнеса',
        desc: 'Внедрение ИИ и автоматизация бизнес-процессов занимает от 3 до 14 рабочих дней. Простые интеграции — 3-5 дней, комплексные решения — 7-14 дней. Точные сроки определяются после технического аудита.',
    },
    {
        id: 3,
        title: 'Какие гарантии предоставляет AIMARKET?',
        desc: 'Мы предоставляем 30-дневную гарантию на все работы по ИИ автоматизации. Исправляем любые недочеты бесплатно и обеспечиваем техническую поддержку. Также проводим обучение сотрудников для эффективного использования решений.',
    },
    {
        id: 4,
        title: 'Как AIMARKET помогает с продвижением бизнеса?',
        desc: 'Мы создаем ИИ-контент для автопостинга Telegram, настраиваем чат-ботов и голосовых ассистентов для обработки звонков, разрабатываем персонализированные маркетинговые стратегии на основе анализа данных. Все решения направлены на повышение продаж и автоматизацию процессов.',
    },
    {
        id: 5,
        title: 'Нужны ли специальные навыки для работы с ИИ решениями?',
        desc: 'Нет, наши решения разработаны для простоты использования. Предоставляем подробные инструкции, обучение сотрудников и круглосуточную поддержку. Работа с ИИ бизнес-ассистентом и автопостингом доступна даже без технического образования.',
    },
    {
        id: 6,
        title: 'Как проходит процесс внедрения автоматизации с ИИ?',
        desc: 'Процесс внедрения включает: 1) Консультацию и анализ потребностей, 2) Разработку прототипа, 3) Внедрение и тестирование, 4) Обучение сотрудников, 5) Техническую поддержку. Все этапы согласовываются с вами и оптимизируются под бизнес-процессы.',
    }
]

export const Faq = ({ className = '' }) => {
    const [openItems, setOpenItems] = useState([])

    const toggleItem = (id) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    return (
        <section className={`faq ${className}`}>
            <div className="faq__container container">
                <header className="faq__header">
                    <h2 className="faq__title">Часто задаваемые вопросы о ИИ автоматизации бизнеса</h2>
                    <p className="faq__subtitle">Ответы на популярные вопросы о наших услугах и автоматизации бизнес-процессов</p>
                </header>

                <div className="faq__content">
                    {faqArr.map((item) => (
                        <div
                            key={item.id}
                            className={`faq__item ${openItems.includes(item.id) ? 'faq__item--active' : ''}`}
                        >
                            <button
                                className="faq__question"
                                onClick={() => toggleItem(item.id)}
                                aria-expanded={openItems.includes(item.id)}
                            >
                                <span className="faq__question-text">{item.title}</span>
                                <span className="faq__icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                            </button>

                            <div className="faq__answer">
                                <div className="faq__answer-content">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq
