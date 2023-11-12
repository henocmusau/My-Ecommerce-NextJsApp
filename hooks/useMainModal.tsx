'use client'
import { useState } from 'react'

function useMainModal() {
    const [isOpen, setIsOpen] = useState(false)

    function closeMainModal() {
        if (!isOpen) return
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