import React from 'react';
import './Footer.scss';
import Script from 'next/script';

const Footer = () => {
    const year = new Date().getFullYear();
    const companyName = "AIMARKET";

    const linksCompany = [
        { id: 1, title: "О нас", url: "#about" },
        { id: 2, title: "Услуги ИИ", url: "#services" },
        { id: 3, title: "Кейсы", url: "#cases" }
    ];

    const linksResources = [
        { id: 4, title: "Блог о ИИ", url: "#blog" },
        { id: 5, title: "FAQ", url: "#faq" },
        { id: 6, title: "Документы", url: "#docs" }
    ];

    const contacts = [
        { type: "Email", value: "test@yandex.ru", url: "mailto:test@yandex.ru" },
        { type: "Телефон", value: "+7 (917) 303-85-85", url: "tel:+79173038585" }
    ];

    const socialLinks = [
        { name: "Telegram", url: "https://t.me/testBot22", icon: "📱" },
        { name: "WhatsApp", url: "https://wa.me/79173038585", icon: "💬" }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": companyName,
        "url": "https://aimarket.example",
        "logo": "https://aimarket.example/logo.png",
        "contactPoint": contacts.map(contact => ({
            "@type": "ContactPoint",
            "contactType": contact.type,
            "email": contact.type === "Email" ? contact.value : undefined,
            "telephone": contact.type === "Телефон" ? contact.value : undefined,
            "availableLanguage": ["ru", "en"]
        })),
        "sameAs": socialLinks.map(s => s.url)
    };

    return (
        <footer className="footer">
            <Script
                id="footer-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="footer-container">
                {/* Верхняя часть футера */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3 className="footer-company-name">{companyName}</h3>
                        <p className="footer-tagline">Инновационные ИИ-решения для бизнеса</p>
                    </div>

                    <div className="footer-links-section">
                        <div className="footer-links-group">
                            <h4 className="footer-links-title">Компания</h4>
                            <ul className="footer-links">
                                {linksCompany.map(link => (
                                    <li key={link.id}>
                                        <a href={link.url} className="footer-link">{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4 className="footer-links-title">Ресурсы</h4>
                            <ul className="footer-links">
                                {linksResources.map(link => (
                                    <li key={link.id}>
                                        <a href={link.url} className="footer-link">{link.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4 className="footer-links-title">Контакты</h4>
                            <div className="footer-contacts">
                                {contacts.map(contact => (
                                    <a key={contact.type} href={contact.url} className="footer-contact-link">
                                        {contact.type === "Email" ? "✉️" : "📞"} {contact.value}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Разделительная линия */}
                <div className="footer-divider"></div>

                {/* Нижняя часть футера */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>© {year} {companyName}. Все права защищены.</p>
                    </div>

                    <div className="footer-social">
                        {socialLinks.map(s => (
                            <a key={s.name} href={s.url} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                                <span className="social-icon">{s.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
