import React from 'react'

type Props = {
    label?: string,
    handleClick: (id: number | 'reset') => void,
    id: number | 'reset',
    f: number[]
}

const normal = 'rounded-lg px-4 py-1 border border-indigo-400 dark:border-none dark:text-inherit dark:bg-red-700 bg-opacity-75 dark:bg-opacity-40 flex items-center justify-start'
const ALL = 'rounded-lg px-4 py-1 border border-red-400 dark:border-none dark:text-inherit bg-sky-200 dark:bg-slate-700 bg-opacity-75 dark:bg-opacity-40 flex items-center justify-start'
const checked = 'rounded-lg px-4 py-1 border border-sky-400 dark:border-none dark:text-inherit dark:bg-indigo-700 bg-opacity-75 dark:bg-opacity-40 flex items-center justify-start'

export default function FilterButton({ label, handleClick, id, f }: Props) {
    const all = f.length < 1 && id === 'reset'

    const isChecked = () => {
        if (typeof (id) == 'number') return f.includes(id)
        return false
    }

    const stylize = () => {
        if (all) return ALL
        if (isChecked()) return checked
        return normal
    }

    return (
        <button
            onClick={() => handleClick(id)}
            className={stylize() + 'duration-150'}
        >
            {label}
        </button>
    )
}
