import React from 'react'

type Props = {
    label: string,
    handleClick: (id: number) => void,
    id: number
}

export default function FilterButton({ label, handleClick, id }: Props) {
    return (
        <button
            onClick={() => handleClick(id)}
            className='rounded-lg px-4 py-1 border border-indigo-400 dark:border-none dark:text-inherit dark:bg-indigo-700 bg-opacity-75 dark:bg-opacity-40 flex items-center justify-start'
        >
            {label}
        </button>
    )
}
