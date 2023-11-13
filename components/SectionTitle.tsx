import React from 'react'

export default function SectionTitle({ title }: { title: string }) {
  return (
    <header className='mx-2 lg:mx-0 mt-10 px-3 py-3 rounded-lg col-span-full border-l-8 bg-indigo-400/10 border-super'>
      <h2 className='text-2xl font-semibold'>{title}</h2>
    </header>
  )
}
