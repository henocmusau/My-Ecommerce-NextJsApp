import Link from 'next/link'
import React from 'react'
import type { IconType } from "react-icons";

type Props = {
    title: string
    link?: string
    children: React.ReactNode
    openActionModal: () => void
    icon: IconType
}

export default function Action({ title, icon: Icon, children, openActionModal }: Props) {
    return (
        <button onClick={openActionModal} className='actionLink'>
            <span className='h-full text-3xl font-thin opacity-60 mr-3'>
                <Icon className='' />
            </span>
            <div>
                <h2 className='font-semibold text-lg'>{title}</h2>
                <p className='text-sm text-secondary'>{children} </p>
            </div>
        </button>
    )
}
