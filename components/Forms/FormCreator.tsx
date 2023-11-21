'use client'
import React from 'react'
import { toast } from 'sonner'

import FormInput from './FormInput'
import SubmitButton from '../Buttons/SubmitButton'
import Toast from '../Toasts/Toast'
import RadioButton from './RadioButton'
import { createNewCreator } from '@/serverActions/creator'

export default function FormCreator({ closeForm }: { closeForm: () => void }) {

    async function onCreate(formData: FormData) {
        const firstName = formData.get('firstName')?.toString().trim()
        const image = formData.get('image')
        const lastName = formData.get('lastName')?.toString().trim()
        const gender = formData.get('gender')?.toString().trim()
        const phoneNumber = formData.get('phoneNumber')?.toString().trim()
        const idCardNumber = formData.get('idCardNumber')?.toString().trim()
        const city = formData.get('city')?.toString().trim()
        const street = formData.get('street')?.toString().trim()
        // console.log(image)

        /*if (
            !firstName
            || firstName.length < 2
            || !lastName
            || lastName.length < 2
            || !gender
            || !phoneNumber
            || phoneNumber.length < 5
            || !idCardNumber
            || idCardNumber.length < 3
            || !city
            || city.length < 3
            || !street
            || street.length < 3
        ) {
            toast(<Toast type='error' text={'Données incomplètes. Veuillez remplir les champs obligatoires.'} />)
            return
        } */

        const datas = await createNewCreator(formData)

        if (datas.error) {
            toast(<Toast type='error' text={datas.error?.message.toString()} />)
            return
        }
        closeForm()
        toast(<Toast type='success' text='Enregistrement réussi !' />)
    }

    return (
        <>
            <form action={onCreate}>
                <FormInput label='Prenom' name='firstName' />
                <FormInput label='Nom' name='lastName' />
                <label className='block mt-4 text-lg'>Genre :</label>
                <div className='flex gap-x-5'>
                    <RadioButton name='gender' value='M' label='Homme' />
                    <RadioButton name='gender' value='F' label='Femme' />
                    <RadioButton name='gender' value='O' label='Autre' />
                </div>
                <FormInput label='Téléphone' name='phoneNumber' />
                <FormInput label='E-mail' name='email' />
                <input type='file' accept='.jpg, .png, .jpeg, .webp' name='image' className='border-2 border-slate-400 w-full rounded-lg' />
                <FormInput label='Ville' name='city' />
                <FormInput label='Adresse' name='street' />
                <FormInput label="N°Carte d'identité" name='idCardNumber' />
                <SubmitButton />
            </form>
        </>
    )
}