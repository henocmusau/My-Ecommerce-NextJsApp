'use client'
import React from 'react'
import { toast } from 'sonner'

import FormInput from './FormInput'
import SubmitButton from '../Buttons/SubmitButton'
import { createNewProductType } from '@/serverActions/productType'
import Toast from '../Toasts/Toast'

export default function FormProductType({ closeForm }: { closeForm: () => void }) {

    async function onCreate(formData: FormData) {
        const type = formData.get('type')?.toString().trim()
        const slug = formData.get('slug')?.toString().trim()

        if (!type
            || type.length < 2
            || !slug
            || slug.length < 2)
            return toast(<Toast type='warning' text={'Données incomplètes. Veuillez remplir les champs obligatoires.'} />)

        const datas = await createNewProductType(formData)

        if (!datas || datas.error) {
            toast(<Toast type='error' text={datas?.error?.message.toString() || 'Données manquants'} />)
            return
        }
        closeForm()
        toast(<Toast type='success' text='Enregistrement réussi !' />)
    }

    return (
        <>
            <form action={onCreate}>
                <FormInput label='Nom du type' name='type' />
                <FormInput label='Slug du type' name='slug' />
                <SubmitButton />
            </form>
        </>
    )
}
