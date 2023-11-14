'use client'

import React from 'react'
import ModalContent from './ModalContent'
import MainModalAction from './MainModalAction'
import { AiOutlineBank, AiOutlineUserAdd } from 'react-icons/ai'
import { BiCartAdd } from 'react-icons/bi'
import ModalButton from '../Buttons/ModalButton'
import FormModalWrapper from '../Forms/FormModalWrapper'
import useModalForm from '@/hooks/useModalForm'

export default function MainModal() {
    const { isOpen, back, openMainModal, closeMainModal, activeForm, closeForm, switchForm } = useModalForm()

    return (
        <>
            <ModalButton openModal={openMainModal} />

            <ModalContent isOpen={isOpen} closeModal={closeMainModal} id='main' >
                <MainModalAction
                    id='PRODUCT'
                    key='PRODUCT'
                    openActionModal={switchForm}
                    title='Nouveau produit'
                    icon={BiCartAdd}
                    description='Enregistrer un nouveau produit/article'
                />

                <MainModalAction
                    id='CREATOR'
                    key='CREATOR'
                    openActionModal={switchForm}
                    title='Nouveau créateur'
                    icon={AiOutlineUserAdd}
                    description='Enregistrer un nouveau créateur'
                />

                <MainModalAction
                    id='DEVISE'
                    key='DEVISE'
                    openActionModal={switchForm}
                    title='Nouvelle dévise'
                    icon={AiOutlineBank}
                    description='Enregistrer une nouvelle dévise'
                />
            </ModalContent>

            <FormModalWrapper back={back} activeForm={activeForm} closeForm={closeForm} />
        </>
    )
}
