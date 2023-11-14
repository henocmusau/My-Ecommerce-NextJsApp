'use client'
import React from 'react'
import ModalContent from '../Modals/ModalContent'
import FormCurrency from './FormCurrency'
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
    const isCurrencyActive = activeForm === 'DEVISE'

    return (
        <>
            <ModalContent title="Création d'une dévise" back={back} isForm={true} isOpen={isCurrencyActive} closeModal={closeForm} id='creatorForm' >
                <FormCurrency closeForm={closeForm} />
            </ModalContent>

            <ModalContent title="Création d'un produit" back={back} isForm={true} isOpen={isProductActive} closeModal={closeForm} id='creatorForm' >
                <FormProduct closeForm={closeForm} />
            </ModalContent>

            <ModalContent title="Enregistrement d'un Créateur" back={back} isForm={true} isOpen={isCreatorActive} closeModal={closeForm} id='creatorForm' >
                <FormCreator closeForm={closeForm} />
            </ModalContent>
        </>
    )
}
