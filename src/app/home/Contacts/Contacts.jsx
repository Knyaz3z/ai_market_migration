'use client'
import './Contacts.scss';


export const Contacts= ({
                                                title = "Свяжитесь с нами",
                                                subtitle = "Мы всегда на связи в удобном для вас мессенджере"
                                            }) => {
    // Функция для определения типа контакта и соответствующего действия
    const contacts = [
        {
            id: 1,
            title: "Телефон",
            inner: "+7 (917) 303-85-85",
            icon: "contacts_phone.svg"
        },
        {
            id: 2,
            title: "Email",
            inner: "test@yandex.ru",
            icon: "contacts_mail.svg"
        },
        {
            id: 3,
            title: "Telegram",
            inner: "@demetr_matvey",
            icon: "social_tg.svg"
        }
    ];
    const handleContactClick = (contact) => {
        if (contact.title.toLowerCase().includes('телефон')) {
            window.location.href = `tel:${contact.inner}`;
        } else if (contact.title.toLowerCase().includes('email') || contact.title.toLowerCase().includes('почта')) {
            window.location.href = `mailto:${contact.inner}`;
        } else if (contact.title.toLowerCase().includes('whatsapp')) {
            window.open(`https://wa.me/${contact.inner.replace(/\D/g, '')}`, '_blank');
        } else if (contact.title.toLowerCase().includes('telegram')) {
            window.open(`https://t.me/${contact.inner.replace('@', '')}`, '_blank');
        }
    };

    return (
        <section className="contacts-block">
            <div className="contacts-container">
                <header id={'contacts'} className={'contacts__header header'}>
                    <h2 className="contacts-title title">{title}</h2>
                    <p className="contacts-subtitle subtitle">{subtitle}</p>
                </header>

                <div className="contacts-grid">
                    {contacts.map(contact => {
                        const isClickable = contact.title.toLowerCase().includes('телефон') ||
                            contact.title.toLowerCase().includes('email') ||
                            contact.title.toLowerCase().includes('почта') ||
                            contact.title.toLowerCase().includes('whatsapp') ||
                            contact.title.toLowerCase().includes('telegram');

                        return (
                            <div
                                key={contact.id}
                                className={`contact-card ${isClickable ? 'clickable' : ''}`}
                                onClick={() => isClickable && handleContactClick(contact)}
                            >
                                <img className={'contact-icon'} src={contact.icon}/>
                                <h3 className="contact-title">{contact.title}</h3>
                                <p className="contact-info">{contact.inner}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Contacts