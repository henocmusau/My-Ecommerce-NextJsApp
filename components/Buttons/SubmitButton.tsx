'use client'

import { useFormStatus } from 'react-dom'

type Props = {
  text?: string
}

export default function SubmitButton({ text = 'Enregistrer' }: Props) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      disabled={pending}
      className='actionButton w-full mt-8'
    >
      {text}
    </button>
  )
}
