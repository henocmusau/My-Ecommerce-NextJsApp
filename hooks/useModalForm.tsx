'use client'
import React, { useCallback, useState } from 'react'
import useMainModal from './useMainModal'

export default function useModalForm() {
    const { isOpen, openMainModal, closeMainModal } = useMainModal()
    const [activeForm, setActiveForm] = useState('')

    function closeForm() {
        setActiveForm('')
    }

    const switchForm = useCallback((formLabel: string) => {
        if (formLabel === activeForm) {
            closeMainModal()
            return
        }
        closeMainModal()
        setActiveForm(formLabel)
    }, [activeForm])

    const back = () => {
        if (activeForm == '') return
        closeForm()
        openMainModal()
    }

    return {
        isOpen,
        openMainModal,
        closeMainModal,
        closeForm,
        switchForm,
        activeForm,
        back
    }
}
