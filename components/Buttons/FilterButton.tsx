import React from 'react'

import { RiCheckFill } from "react-icons/ri";

type Props = {
    label?: string,
    handleClick: (id: number | 'reset') => void,
    id: number | 'reset',
    f: number[]
}

const normal = 'duration-150 rounded-lg px-4 py-1 bg-sky-200 dark:text-inherit dark:bg-slate-600 bg-opacity-75 dark:bg-opacity-40 flex items-center justify-start'
const ALL = 'duration-150 rounded-lg px-4 py-1 dark:border-none dark:text-inherit bg-sky-400 dark:bg-indigo-700/40 bg-opacity-75 flex items-center justify-start'
const checked = 'rounded-lg px-4 py-1 border border-sky-400 dark:border-none dark:text-inherit dark:bg-indigo-700 bg-opacity-75 dark:bg-opacity-40 flex items-center justify-start'

export default function FilterButton({ label, handleClick, id, f }: Props) {
    const all = f.length < 1 && id === 'reset'

    const isChecked = () => {
        if (typeof (id) == 'number') return f.includes(id)
        return false
    }

    const stylize = () => {
        if (all || isChecked()) return ALL
        // if (isChecked()) return checked
        return normal
    }

    return (
        <button
            onClick={() => handleClick(id)}
            className={stylize()}
        >
            {isChecked() || all ? <RiCheckFill className='mr-2 duration-150' /> : null}
            {label}
        </button>
    )
}
