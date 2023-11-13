'use client'
import { useState } from 'react'

function useMainModal(initialValue?: boolean) {
    const [isOpen, setIsOpen] = useState(() => initialValue ? initialValue : false)

    function closeMainModal() {
        setIsOpen(false)
    }

    function openMainModal() {
        if (isOpen) return
        setIsOpen(true)
    }

    return {
        isOpen,
        openMainModal,
        closeMainModal,
    }
}

export default useMainModal