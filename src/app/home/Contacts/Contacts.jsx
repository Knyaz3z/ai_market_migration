'use client'
import './Contacts.scss';
import Script from 'next/script';

export const Contacts = ({
                             title = "Контакты AIMARKET: связь с нами",
                             subtitle = "Свяжитесь с нашей командой для внедрения ИИ-автоматизации и оптимизации бизнес-процессов"
                         }) => {
    const contacts = [
        {
            id: 1,
            type: "Телефон",
            value: "+7 (917) 303-85-85",
            icon: "contacts_phone.svg",
            url: "tel:+79173038585"
        },
        {
            id: 2,
            type: "Email",
            value: "test@yandex.ru",
            icon: "contacts_mail.svg",
            url: "mailto:test@yandex.ru"
        },
        {
            id: 3,
            type: "Telegram",
            value: "@demetr_matvey",
            icon: "social_tg.svg",
            url: "https://t.me/demetr_matvey"
        }
    ];

    const handleContactClick = (contact) => {
        window.open(contact.url, '_blank', 'noopener,noreferrer');
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AIMARKET",
        "url": "https://aimarket.example", // заменить на ваш домен
        "logo": "https://aimarket.example/logo.png",
        "contactPoint": contacts.map(contact => ({
            "@type": "ContactPoint",
            "contactType": contact.type,
            "telephone": contact.type === "Телефон" ? contact.value : undefined,
            "email": contact.type === "Email" ? contact.value : undefined,
            "url": contact.type === "Telegram" ? contact.url : undefined,
            "availableLanguage": ["ru", "en"]
        })),
        "sameAs": [
            "https://t.me/demetr_matvey"
        ]
    };

    return (
        <section className="contacts-block">
            <Script
                id="contacts-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="contacts-container">
                <header id="contacts" className="contacts__header header">
                    <h2 className="contacts-title title">{title}</h2>
                    <p className="contacts-subtitle subtitle">{subtitle}</p>
                </header>

                <div className="contacts-grid">
                    {contacts.map(contact => (
                        <div
                            key={contact.id}
                            className="contact-card clickable"
                            onClick={() => handleContactClick(contact)}
                        >
                            <img className="contact-icon" src={contact.icon} alt={`${contact.type} AIMARKET`} />
                            <h3 className="contact-title">{contact.type}</h3>
                            <p className="contact-info">{contact.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contacts;
