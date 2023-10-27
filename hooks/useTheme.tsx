'use client'
import { useEffect } from 'react'
import useStorage from './useStorage';

export default function useTheme(getInitialTheme: () => string, initialTheme?: string) {
    const [theme, setTheme] = useStorage('theme', getInitialTheme, 'app_');

    const rawSetTheme = (rawTheme: string) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        setTheme(rawTheme)
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }
    const toggleTheme = () => theme === 'light' ? rawSetTheme('dark') : rawSetTheme('light')

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);


    return [
        theme, toggleTheme
    ]
}
