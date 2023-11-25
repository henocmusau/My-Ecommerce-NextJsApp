'use client'
import React, { Suspense, useRef, useState } from 'react'

import { toast } from 'sonner'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Toast from '../Toasts/Toast'
import { createNewProduct } from '@/serverActions/products'

import FormInput from './FormInput'
import SubmitButton from '../Buttons/SubmitButton'
import useFetch from '@/hooks/useFetch'

type Props = {
    closeForm: () => void
}

export default function FormProduct({ closeForm }: Props) {
    const { data, isLoading } = useFetch('/api')
    const { data: types } = useFetch('/api/productstype')
    const formRef = useRef()

    const currencyList: CurrencyType[] = data?.datas
    const productsTypeList: ProductType[] = types?.datas

    async function onCreate(formData: FormData) {
        const title = formData.get('title')?.toString().trim()
        const description = formData.get('description')?.toString().trim()
        const p = formData?.get('price')?.toString().trim()
        const price = p ? parseInt(p, 10) : 0
        const type = formData.get('type[_id]')?.toString().trim()
        const currency = formData.get('currency[_id]')?.toString().trim()
        const image = formData.get('image') as Blob | null

        if (
            !title
            || title.length < 4
            || price < 10
            || !type
            || !currency
            || !image
            || image.size > 4096000
        ) {
            toast(<Toast type='warning' text={'Données incomplètes. Veuillez remplir les champs obligatoires.'} />)
            return
        }

        const datas = await createNewProduct(formData)

        if (datas && datas.error) {
            toast(<Toast type='error' text={datas.error?.message.toString()} />)
            return
        }
        closeForm()
        toast(<Toast type='success' text='Enregistrement réussi !' />)
    }

    return (
        <Suspense fallback='Loading...'>
            <form action={onCreate}>
                <FormInput label='Titre' name='title' />
                <FormInput label='Description' name='description' />

                {productsTypeList ? <ProductsTypeOptions productsTypeList={productsTypeList} /> : null}

                {currencyList ? <CurrencyOptions currencyList={currencyList} /> : null}
                <FormInput label='Prix' name='price' />
                <input type='file' accept='.jpg, .png, .jpeg, .webp' name='image' className='border-2 mt-3 border-slate-400 w-full rounded-lg' />

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

export function CurrencyOptions({ currencyList }: { currencyList: any }) {
    const [selectedOptions, setSelectedOptions] = useState(currencyList[0])

    return (
        <div className='relative items-center w-full flex inputField inputBorder'>
            <Listbox
                value={selectedOptions}
                onChange={setSelectedOptions}
                name='currency'
            >
                <Listbox.Button className='w-full relative text-left hover:text-slate-500 dark:hover:text-secondaryDark duration-150'>
                    {selectedOptions?.label}
                    <AiOutlineArrowDown className='absolute right-0 top-0' />
                </Listbox.Button>
                <Listbox.Options
                    className='absolute w-full rounded-lg
                     top-12 left-0 px-2 py-3 shadow-2xl border border-slate-800 bg-white backdrop-blur-md dark:bg-primaryDark'
                >
                    {currencyList.map((c: CurrencyType, i: number) => (
                        <Listbox.Option
                            className='px-3 rounded-lg py-2 w-full hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-secondaryDark duration-200'
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

interface ProductType {
    id: string
    slug: string
    label: string
}

export function ProductsTypeOptions({ productsTypeList }: { productsTypeList: ProductType[] }) {
    const [selectedOptions, setSelectedOptions] = useState(productsTypeList[0])

    return (
        <div className='relative items-center w-full flex inputField inputBorder z-40'>
            <Listbox
                value={selectedOptions}
                onChange={setSelectedOptions}
                name='type'
            >
                <Listbox.Button className='w-full z-50 relative text-left hover:text-slate-500 dark:hover:text-secondaryDark duration-150'>
                    {selectedOptions?.label}
                    <AiOutlineArrowDown className='absolute right-0 top-0' />
                </Listbox.Button>
                <Listbox.Options
                    className='absolute w-full rounded-lg
                     top-12 left-0 px-2 py-3 shadow-2xl border border-slate-800 bg-white backdrop-blur-md dark:bg-primaryDark'
                >
                    {productsTypeList.map((p, i) => (
                        <Listbox.Option
                            className='px-3 rounded-lg py-2 w-full hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-secondaryDark duration-200'
                            key={i}
                            value={p}
                        >
                            {p.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}