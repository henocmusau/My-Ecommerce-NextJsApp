'use client'
import React, { useState } from 'react'
import ModalContent from '../Modals/ModalContent'
import useMainModal from '@/hooks/useMainModal'
import FormDevise from './FormDevise'

type Props = {
    activeForm: string
    closeForm: () => void
}

export default function FormModalWrapper({ activeForm, closeForm }: Props) {
    const isCreatorActive = activeForm === 'CREATOR'
    const isProductActive = activeForm === 'PRODUCT'
    const isDeviseActive = activeForm === 'DEVISE'

    return (
        <>
            <ModalContent isForm={true} isOpen={isDeviseActive} closeModal={closeForm} id='creatorForm' >
                <FormDevise closeForm={closeForm} />
            </ModalContent>

            <ModalContent isForm={true} isOpen={isProductActive} closeModal={closeForm} id='creatorForm' >
                <div className='h-52 bg-primaryDark text-white'>
                    {/* {children} */}
                    PRODUCT FORM
                </div>
            </ModalContent>

            <ModalContent isForm={true} isOpen={isCreatorActive} closeModal={closeForm} id='creatorForm' >
                <div className='h-52 bg-primaryDark text-white'>
                    {/* {children} */}
                    CREATOR FORM
                </div>
            </ModalContent>

        </>
    )
}
