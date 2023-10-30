'use client'
import React from 'react'
import { ProductsList as Props } from '@/types/Article'
import ProductItem from './ProductItem'
import FilterButton from '../Buttons/FilterButton'

const filters = [
    {
        id: 1,
        label: 'Telephones',
    },
    {
        id: 2,
        label: 'Ordinateurs',
    },
    {
        id: 3,
        label: 'Ecouteurs',
    },
]

export default function ProductsList({ products }: { products: Props }) {
    const handleFilterChange = () => { }
    return (
        <>
            <section className=''>
                <ul className='filters'>
                    <FilterButton handleClick={handleFilterChange} id={0} label='Tous' />
                    {
                        filters.map((filter) => (
                            <>
                                <FilterButton key={filter.id} {...filter} handleClick={handleFilterChange} />
                            </>
                        ))
                    }
                </ul>
            </section>
            <section className='productsList'>
                {
                    products ? products.map((product, i) => (
                        <>
                            <ProductItem key={i} {...product} />
                        </>
                    )) : null
                }
            </section>
        </>
    )
}
