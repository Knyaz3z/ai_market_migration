import {Geist, Geist_Mono} from 'next/font/google';
import './styles/null.scss'
import './styles/global.scss'
import {Header} from '@/layouts/Header/Header';
import Footer from '@/layouts/Footer/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "AIMARKET | ИИ автоматизация и комплексные решения для бизнеса",
    description: "AIMARKET помогает бизнесу автоматизировать процессы: автопостинг в Telegram, ИИ бизнес-ассистент, создание сайтов и настройка рекламы под ключ. Снижаем нагрузку на команду и увеличиваем эффективность проектов.",
    keywords: [
        "ИИ автоматизация бизнеса",
        "автопостинг Telegram",
        "ИИ бизнес-ассистент",
        "создание сайтов под ключ",
        "настройка рекламы для бизнеса",
        "автоматизация бизнес-процессов",
        "виртуальный ассистент для бизнеса",
        "AI консультант"
    ],
    openGraph: {
        title: "AIMARKET | ИИ автоматизация и комплексные решения для бизнеса",
        description: "С AIMARKET вы автоматизируете бизнес-процессы: автопостинг в Telegram, ИИ бизнес-ассистент, создание сайтов и настройка рекламы. Освободите время для новых проектов!",
        url: "https://aimarket.ru",
        siteName: "AIMARKET",
        images: [
            {
                url: "https://aimarket.ru/og-image.png",
                width: 1200,
                height: 630,
                alt: "AIMARKET — ИИ автоматизация для бизнеса"
            }
        ],
        locale: "ru_RU",
        type: "website"
    },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
