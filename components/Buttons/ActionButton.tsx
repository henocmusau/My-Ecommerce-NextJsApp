import React from 'react'

type Props = {
    title: string,
    type: 'button' | 'submit',
    icon?: React.ReactNode
}

export default function ActionButton({ title, type = 'button', icon }: Props) {
    return (
        <button
            className='actionButton'
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
