'use client'
import React, { useState } from 'react'

import ModalContent from '../Modals/ModalContent'
import FormInput from './FormInput'
import SubmitButton from '../Buttons/SubmitButton'

type Props = {
    closeForm: () => void
}

export default function FormProduct({ closeForm }: Props) {

    function onCreate(formData: FormData) {
        console.log(formData)
        return
    }

    return (
        <form action={onCreate}>
            <FormInput label='Titre' name='title' />
            <FormInput label='Description' name='description' />
            <FormInput label='Type de produit' name='type' />
            <DeviseOptions />
            <FormInput label='Prix' name='price' />
            <SubmitButton />
        </form>
    )
}

type Devise = {
    id: string
    symbol: string
    label: string
}

const devisesList: Devise[] = [
    {
        id: '65521013d9261dc908d1b073',
        symbol: "$",
        label: "Dollars Américains",
    },
    {
        id: '65521324d9261dc908d1b07f',
        symbol: "CDF",
        label: "Francs Congolais",
    },
    {
        id: '655224b8d9261dc908d1b090',
        symbol: "EUR",
        label: "Euro",
    },
]

import { Listbox } from '@headlessui/react'

export function DeviseOptions() {
    const [query, setQuery] = useState('')
    const [selectedOptions, setSelectedOptions] = useState(devisesList[0])

    // console.log(selectedOptions)

    // const filteredDevises =
    //     query === ''
    //         ? devisesList
    //         : devisesList.filter((devise) => {
    //             return devise.label.toLowerCase().includes(query.toLowerCase())
    //         })

    return (
        <div
            className='relative items-center flex inputField inputBorder'
        >
            <Listbox
                value={selectedOptions}
                onChange={setSelectedOptions}
                name='devise'
            >
                <Listbox.Button>{selectedOptions.label} </Listbox.Button>
                <Listbox.Options
                    className='absolute w-full border border-super
                     top-0 left-0 px-2 py-3 shadow-xl bg-white backdrop-blur-md dark:bg-primaryDark'
                >
                    {devisesList.map((devise) => (
                        <Listbox.Option
                            className='odd:bg-super/20 px-3 rounded-lg py-2'
                            key={devise.id}
                            value={devise}
                        >
                            {devise.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}

