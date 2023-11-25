import React from 'react'

import { RiCheckFill } from "react-icons/ri";

type Props = {
    label?: string,
    handleClick: (id: string | 'reset') => void,
    id: string | 'reset',
    f: string[]
}

const normal = 'duration-150 rounded-lg px-4 py-1 bg-sky-200 dark:text-inherit dark:bg-slate-600 bg-opacity-75 dark:bg-opacity-40 flex items-center justify-start'
const ALL = 'duration-150 rounded-lg px-4 py-1 dark:border-none dark:text-inherit bg-sky-400 dark:bg-super/40 bg-opacity-75 flex items-center justify-start'
const checked = 'rounded-lg px-4 py-1 border border-sky-400 dark:border-none dark:text-inherit dark:bg-super bg-opacity-75 dark:bg-opacity-40 flex items-center justify-start'

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
