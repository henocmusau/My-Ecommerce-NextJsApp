'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useThemeContext } from '@/utils/context/theme'

import { AiOutlineMenu } from 'react-icons/ai'
import { BiSun, BiSolidSun } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import { TfiClose } from 'react-icons/tfi'

const links = [
    {
        label: 'Accueil',
        link: '/',
    },
    {
        label: 'Electroniques',
        link: '/electronics',
    },
    {
        label: 'Vêtements',
        link: '/clothes',
    },
    {
        label: 'Phones',
        link: '/phones',
    },
    {
        label: 'Ordinateurs',
        link: '/computers',
    },
    {
        label: 'Autres',
        link: '/others',
    },
]

const style = '-top-4 left-0 lg:top-0 absolute h-screen lg:w-auto lg:translate-x-0 lg:h-auto duration-150 lg:block lg:relative'
const close = '-translate-x-[600px] ' + style
const open = 'translate-x-0 z-10 w-full backdrop-blur-md dark:bg-primaryDark/90 bg-slate-200/90 ' + style

export default function Header() {
    const { theme, toggleTheme } = useThemeContext()
    const [activeNav, setActiveNav] = useState(false)

    return (
        <header className='header'>
            <div className='headerWrapper'>
                <div className='flex items-center h-full'>
                    {/* Hamburger Button */}
                    <button className='lg:hidden' onClick={() => setActiveNav(true)}>
                        <AiOutlineMenu className='button mr-2' />
                    </button>

                    {/* LOGO */}
                    <Link
                        href={'/'}
                        className='text-3xl tracking-wider font-bold first-letter:text-super dark:first-letter:text-indigo-400'
                    >
                        BlacX
                    </Link>
                </div>
                <nav className={activeNav ? open : close}>
                    <ul className='h-full flex flex-col pt-20 lg:pt-0 px-5 lg:px-0 lg:flex-row gap-x-1 items-center'>
                        <button
                            className='lg:hidden dark:text-primaryDark absolute top-5 right-3 text-2xl'
                            onClick={() => setActiveNav(false)}
                        >
                            <TfiClose className='button' />
                        </button>
                        {
                            links.map((l) => (
                                <li key={l.link} className='w-full text-center py-5 lg:py-0 lg:w-auto border-b-2 border-b-slate-300 dark:border-b-slate-600 last:border-none lg:border-none'>
                                    <Link
                                        className='px-4 py-2 w-full uppercase lg:normal-case rounded-lg dark:text-secondaryDark hover:bg-indigo-100 dark:hover:bg-transparent md:dark:hover:bg-indigo-800/20 duration-150'
                                        href={l.link}
                                        onClick={() => setActiveNav(false)}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className='flex items-center h-full gap-x-2'>
                    <button>
                        <IoSearch className='button' />
                    </button>
                    <button
                        onClick={toggleTheme}>
                        {theme === 'light' ?
                            <BiSolidSun className='button' />
                            : <BiSun className='button' />
                        }
                    </button>
                    <button>
                        <FiShoppingCart className='button' />
                    </button>
                </div>
            </div>
        </header>
    )
}
