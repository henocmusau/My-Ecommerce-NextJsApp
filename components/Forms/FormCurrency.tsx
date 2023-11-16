'use client'
import React from 'react'
import { toast } from 'sonner'

import FormInput from './FormInput'
import SubmitButton from '../Buttons/SubmitButton'
import { createNewCurrency } from '@/serverActions/currency'
import Toast from '../Toasts/Toast'

export default function FormCurrency({ closeForm }: { closeForm: () => void }) {

    async function onCreate(formData: FormData) {
        const label = formData.get('label')?.toString().trim()
        const symbol = formData.get('symbol')?.toString().trim()

        if (!label || label.length < 1 || !symbol || symbol.length < 1) return toast(<Toast type='error' text={'Données incomplètes. Veuillez remplir les champs obligatoires.'} />)

        const datas = await createNewCurrency(formData)

        if (datas.error) {
            toast(<Toast type='error' text={datas.error.message.toString()} />)
            return
        }
        closeForm()
        toast(<Toast type='success' text='Enregistrement réussi !' />)
    }

    return (
        <>
            <form action={onCreate}>
                <FormInput label='Label' name='label' />
                <FormInput label='Symbole' name='symbol' />
                <SubmitButton />
            </form>
        </>
    )
}
