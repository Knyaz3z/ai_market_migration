'use client';

import {useEffect} from 'react';
import {usePathname, useRouter} from 'next/navigation';

/**
 * Хук для плавного скролла к секции по id
 * Работает в Next.js App Router (с "use client")
 */
export const useScrollToSection = () => {
    const pathname = usePathname();
    const router = useRouter();

    const scrollToEl = (id, behavior = 'smooth') => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior, block: 'start' });
    };

    const goTo = (id, opts = {}) => {
        const hash = `#${id}`;
        const url = `/${hash}`;

        // Если не на главной — перейти на неё с hash
        if (pathname !== '/') {
            router.push(url);
            return;
        }

        // Обновляем hash без перезагрузки страницы
        if (window.location.hash !== hash) {
            const method = opts.replace ? 'replaceState' : 'pushState';
            window.history[method](null, '', url);
        }

        // Прокрутка к элементу
        scrollToEl(id, opts.behavior ?? 'smooth');
    };

    // Прокрутка при открытии страницы с hash (например /#faq)
    useEffect(() => {
        if (pathname === '/' && window.location.hash) {
            const id = window.location.hash.slice(1);
            requestAnimationFrame(() => scrollToEl(id, 'auto'));
        }
    }, [pathname]);

    // Поддержка кнопок "Назад"/"Вперёд"
    useEffect(() => {
        const onPop = () => {
            const id = window.location.hash.replace('#', '');
            if (id) scrollToEl(id, 'auto');
            else window.scrollTo({ top: 0, behavior: 'auto' });
        };
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    return goTo;
};
