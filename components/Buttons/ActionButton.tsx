import React from 'react'

type Props = {
    title: string,
    type: ButtonHTMLAttributes<HTMLButtonElement>,
    icon?: React.ReactNode
}

export default function ActionButton({ title, type = 'button', icon }: Props) {
    return (
        <button
            className='flex grow items-center p-3 rounded-md bg-blue-700 text-primaryDark'
            type={type}
        >
            <span className='mr-2 text-xl animate-bounce'>
                {icon}
            </span>
            <span className='w-full text-center'>
                {title}
            </span>
        </button>
    )
}
