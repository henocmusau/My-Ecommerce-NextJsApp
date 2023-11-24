'use client'
import React, { Suspense, useState } from 'react'

import FormInput from './FormInput'
import SubmitButton from '../Buttons/SubmitButton'
import useFetch from '@/hooks/useFetch'
import { Currency } from '@/models/mongo'
import { getAllCurrencies } from '@/serverActions/currency'

type Props = {
    closeForm: () => void
}

export default function FormProduct({ closeForm }: Props) {
    // const currencyList: any = getAllCurrencies()
    const { data, isLoading } = useFetch('/api')
    const currencyList: CurrencyType[] = data?.datas

    function onCreate(formData: FormData) {
        console.log(formData)
        return
    }

    return (
        <Suspense fallback='Loading...'>
            <form action={onCreate}>
                <FormInput label='Titre' name='title' />
                <FormInput label='Description' name='description' />
                <FormInput label='Type de produit' name='type' />

                {currencyList ? <CurrencyOptions currencyList={currencyList} /> : null}
                <FormInput label='Prix' name='price' />
                <SubmitButton />
            </form>
        </Suspense>
    )
}

interface CurrencyType {
    id: string
    symbol: string
    label: string
}


import { Listbox } from '@headlessui/react'
import { AiOutlineArrowDown } from 'react-icons/ai'

export function CurrencyOptions({ currencyList }: { currencyList: any }) {
    const [selectedOptions, setSelectedOptions] = useState(currencyList[0])

    return (
        <div className='relative items-center w-full flex inputField inputBorder'>
            <Listbox
                value={selectedOptions}
                onChange={setSelectedOptions}
                name='currency'
            >
                <Listbox.Button className='w-full relative text-left hover:text-secondaryDark duration-150'>
                    {selectedOptions?.label}
                    <AiOutlineArrowDown className='absolute right-0 top-0' />
                </Listbox.Button>
                <Listbox.Options
                    className='absolute w-full rounded-lg
                     top-12 left-0 px-2 py-3 shadow-2xl border border-slate-800 bg-white backdrop-blur-md dark:bg-primaryDark'
                >
                    {currencyList.map((c: CurrencyType, i: number) => (
                        <Listbox.Option
                            className='px-3 rounded-lg py-2 w-full dark:text-slate-400 hover:bg-secondaryDark duration-200'
                            key={i}
                            value={c}
                        >
                            {c.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}
