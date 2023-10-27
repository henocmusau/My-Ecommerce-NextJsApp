'use client'
import { useThemeContext } from '@/utils/context/theme'
import React from 'react'

export default function Header() {
    const { toggleTheme } = useThemeContext()

    return (
        <header className='header'>
            <div className='headerWrapper'>
                Header
                <button
                    onClick={toggleTheme}
                    className='flex grow items-center justify-center font-semibold p-3 rounded-lg bg-indigo-700 dark:bg-black hover:bg-opacity-80 duration-200 text-primaryDark'
                >Change theme
                </button>
            </div>
        </header>
    )
}
