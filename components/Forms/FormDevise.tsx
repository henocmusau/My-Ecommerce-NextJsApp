'use client'
import React from 'react'
import { toast } from 'sonner'

import FormInput from './FormInput'
import SubmitButton from '../Buttons/SubmitButton'
import { createNewDevise } from '@/serverActions/devise'
import ToastError from '../Toasts/Toast'

export default function FormDevise({ closeForm }: { closeForm: () => void }) {

    async function onCreate(formData: FormData) {
        const label = formData.get('label')?.toString().trim()
        const symbol = formData.get('symbol')?.toString().trim()
        if ((label && label.length < 1) || (symbol && symbol.length < 1)) return

        const datas = await createNewDevise(formData)
        // if (datas.error.message == 'ValidationError') {
        //     console.log('Les données fournis sont incorrectes.')
        //     return
        // }
        if (datas.error) {
            toast(<ToastError type='error' text={datas.error.message.toString()} />)
            return
        }
        closeForm()
        toast(<ToastError type='success' text='Enregistrement réussi !' />)
        // console.log(datas)
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
