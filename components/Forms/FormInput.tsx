import React from 'react'

type Props = {
    type?: string
    name: string
    label: string
}

export default function FormInput({ type = 'text', name, label }: Props) {
    return (
        <>
            <label htmlFor={name} className='mt-4 mb-2 dark:text-secondaryDark'>{label} </label>
            <input
                type={type}
                className="border-2 w-full border-gray-300 dark:border-secondary bg-transparent h-10 px-4 py-2 rounded-lg text-medium focus:outline-none"
                name={name}
                autoComplete='off'
            />
        </>
    )
}