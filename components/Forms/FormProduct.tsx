'use client'
import React, { useState } from 'react'
import ModalContent from '../Modals/ModalContent'

export default function FormProduct({ isOpen }: { isOpen: boolean }) {
    // const [active, setActive] = useState(isOpen)

    // const { isOpen, openMainModal, closeMainModal } = useMainModal(initialValue)

    // if (isOpen) console.log('Form Devise')

    return (
        <ModalContent isOpen={isOpen} closeModal={() => { }} id='creatorForm' >
            <div className='h-52 bg-primaryDark text-white'>
                PRODUCT FORM
            </div>
        </ModalContent>
    )
}
