import React from 'react'

type Props = {
    title: string,
    type: 'button' | 'submit',
    icon?: React.ReactNode
}

export default function ActionButton({ title, type = 'button', icon }: Props) {
    return (
        <button
            className='flex grow items-center justify-center font-semibold p-3 rounded-lg bg-indigo-700 hover:bg-opacity-80 duration-200 text-primaryDark'
            type={type}
        >
            <span className='mr-2 text-xl animate-bounce'>
                {icon}
            </span>
            <span className=''>
                {title}
            </span>
        </button>
    )
}
