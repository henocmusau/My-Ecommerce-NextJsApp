'use client'

import Link from 'next/link'
import React from 'react'
import type { IconType } from "react-icons";

type Props = {
    title: string
    link?: string
    description: string
    openActionModal: (id: string) => void
    icon: IconType
    id: string
}

export default function Action({ title, icon: Icon, description, openActionModal, id }: Props) {
    return (
        <button onClick={() => openActionModal(id)} className='actionLink'>
            <span className='h-full text-3xl font-thin opacity-60 mr-3'>
                <Icon className='w-10 h-10' />
            </span>
            <div className='text-left'>
                <h2 className='font-semibold text-lg'>{title}</h2>
                <p className='text-md text-secondary'>{description} </p>
            </div>
        </button>
    )
}
