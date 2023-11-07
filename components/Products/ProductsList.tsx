'use client'
import React from 'react'
import { ProductsList as List, ProductItem as Item } from '@/types/Article'
import ProductItem from './ProductItem'
import FilterButton from '../Buttons/FilterButton'
import useFilterProducts from '@/hooks/useFilterProducts'

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

export default function ProductsList({ products }: { products: List }) {
    const { filteredProducts, changeFilter, filter } = useFilterProducts(products)

    return (
        <>
            <section className='filters'>
                <FilterButton handleClick={changeFilter} f={filter} id='reset' label='Tous' />
                {
                    filters.map((f, i) => (
                        <FilterButton key={i} {...f} handleClick={changeFilter} f={filter} />
                    ))
                }
            </section>
            <section className='productsList'>
                {
                    filteredProducts ? filteredProducts.map((product, i) => (
                        <ProductItem key={i} {...product} />
                    )) : null
                }
            </section>
        </>
    )
}
