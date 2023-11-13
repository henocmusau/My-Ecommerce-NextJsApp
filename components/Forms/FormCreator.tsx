'use client'
import React, { useState } from 'react'
import ModalContent from '../Modals/ModalContent'

export default function FormCreator({ isOpen }: { isOpen: boolean }) {
    const [active, setActive] = useState(isOpen)

    // const { isOpen, openMainModal, closeMainModal } = useMainModal(initialValue)

    // if (isOpen) console.log('Form Devise')

    return (
        <ModalContent isOpen={active} closeModal={() => setActive(false)} id='creatorForm' >
            <div className='h-52 bg-primaryDark text-white'>
                CREATOR
            </div>
        </ModalContent>
    )
}