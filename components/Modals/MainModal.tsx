'use client'

import React from 'react'
import ModalContent from './ModalContent'
import useMainModal from '@/hooks/useMainModal'
import MainModalAction from './MainModalAction'
import { AiOutlineBank } from 'react-icons/ai'
import ModalButton from '../Buttons/ModalButton'

export default function MainModal() {
    const { isOpen, openMainModal, closeMainModal } = useMainModal()

    return (
        <>
            <ModalButton openModal={openMainModal} />
            <ModalContent isOpen={isOpen} closeModal={closeMainModal} id='main' >

                <MainModalAction
                    openActionModal={() => { }}
                    title='Nouveau paiement'
                    icon={AiOutlineBank}
                >
                    Enregistrer un nouveau paiement
                </MainModalAction>

            </ModalContent>
        </>
    )
}
