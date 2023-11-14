'use client'

import React, { useEffect, useState } from 'react'
import ModalContent from './ModalContent'
import { IoSearch } from 'react-icons/io5'
import FormInput from '../Forms/FormInput'

export default function SearchModal() {
    const [openSearch, setOpenSearch] = useState(false)
    const closeModal = () => setOpenSearch(false)
    const openModal = () => setOpenSearch(true)

    return (
        <>
            <button onClick={openModal}>
                <IoSearch className='button' />
            </button>

            <ModalContent isSearch={true} isOpen={openSearch} closeModal={closeModal} id='searchModal' >
                <FormInput type='search' name='search' label='Recherche...' />
                <section>
                    <p className='my-6'>Les résultats de la recherche s'afficheront ici.</p>
                </section>
            </ModalContent>
        </>
    )
}
