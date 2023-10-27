'use client'

import useTheme from '@/hooks/useTheme';
import { createContext, useContext } from 'react';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('app_theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    return 'light' // light theme as the default;
};

export const ThemeContext = createContext(null as any);

export function useThemeContext() {
    return useContext(ThemeContext)
}


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, toggleTheme] = useTheme(getInitialTheme)

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
