import React from 'react'

export default function SectionTitle({ title }: { title: string }) {
  return (
    <header className='mb-2 mt-10 px-5 lg:px-0 col-span-full'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
    </header>
  )
}
