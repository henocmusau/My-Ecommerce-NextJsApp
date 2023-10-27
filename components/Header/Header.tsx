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
                    className='flex grow items-center justify-center font-semibold p-3 rounded-lg dark:bg-black bg-indigo-700 hover:bg-opacity-80 duration-200 text-primaryDark'
                >Change theme
                </button>
            </div>
        </header>
    )
}
