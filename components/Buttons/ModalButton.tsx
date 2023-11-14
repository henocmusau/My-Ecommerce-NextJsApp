'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AiOutlinePlus } from "react-icons/ai";

export default function ModalButton({ openModal }: { openModal: () => void }) {
    const [isMounted, setisMounted] = useState(false)

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setisMounted(true)
        }
    }, [])

    if (!isMounted) return null

    return (
        <>
            {createPortal(
                <button onClick={openModal} className='fixed align-middle text-4xl bottom-12 right-16 w-16 h-16 rounded-full mainButton'>
                    +
                </button>,
                document.body
            )}
        </>
    )
}
