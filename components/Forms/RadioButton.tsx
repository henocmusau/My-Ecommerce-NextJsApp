import React from 'react'

type Props = {
    name: string
    value: string
    label: string
}
export default function RadioButton({ name, value, label }: Props) {
    return (
        <div className='flex'>
            <input
                type="radio"
                name={name}
                value={value}
                id={value}
            />
            <label
                htmlFor={value}
                className='ml-1'
            >
                {label}
            </label>
        </div>
    )
}
