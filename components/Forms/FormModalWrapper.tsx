'use client'
import React from 'react'
import ModalContent from '../Modals/ModalContent'
import FormDevise from './FormDevise'
import FormProduct from './FormProduct'
import FormCreator from './FormCreator'

type Props = {
    activeForm: string
    closeForm: () => void
    back: () => void
}

export default function FormModalWrapper({ activeForm, closeForm, back }: Props) {
    const isCreatorActive = activeForm === 'CREATOR'
    const isProductActive = activeForm === 'PRODUCT'
    const isDeviseActive = activeForm === 'DEVISE'

    return (
        <>
            <ModalContent back={back} isForm={true} isOpen={isDeviseActive} closeModal={closeForm} id='creatorForm' >
                <FormDevise closeForm={closeForm} />
            </ModalContent>

            <ModalContent back={back} isForm={true} isOpen={isProductActive} closeModal={closeForm} id='creatorForm' >
                <FormProduct closeForm={closeForm} />
            </ModalContent>

            <ModalContent back={back} isForm={true} isOpen={isCreatorActive} closeModal={closeForm} id='creatorForm' >
                <FormCreator closeForm={closeForm} />
            </ModalContent>
        </>
    )
}
