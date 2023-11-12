'use client'

import React, { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ModalButton({ openModal }: { openModal: () => void }) {
    const [isMounted, setisMounted] = useState(false)

    useEffect(() => {
        if (typeof document !== 'undefined') {
            setisMounted(true)
        }

    }, [])

    if (isMounted) {
        return (
            <>
                {createPortal(
                    <button onClick={openModal} className='fixed bottom-12 right-16 w-16 h-16 rounded-full mainButton'>
                        <p className='text-3xl text-white'>
                            +
                        </p>
                    </button>,
                    document.body)
                }
            </>
        )
    } else {
        return null
    }
}
