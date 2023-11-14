import React from 'react'

type Props = {
    type?: string
    name: string
    label: string
    // placeholder?: string
    additionalStyle?: string
}

export default function FormInput({ type = 'text', name, label, additionalStyle }: Props) {
    return (
        <>
            {/* <div className='mt-4 grow'> */}
            {/* <label htmlFor={name} className='mb-2 ml-4 dark:text-secondaryDark'>{label} </label> */}
            <input
                type={type}
                placeholder={label}
                className={`${additionalStyle} inputBorder inputField `}
                name={name}
                id={name}
                autoComplete='off'
            />
        </>
    )
}