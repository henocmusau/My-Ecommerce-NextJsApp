'use client'
import React from 'react'
import { ProductsList as Props, ProductItem as Item } from '@/types/Article'
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

export default function ProductsList({ products }: { products: Props }) {
    const { filteredProducts, changeFilter, filter } = useFilterProducts(products)

    return (
        <>
            <section className='filters'>
                <FilterButton handleClick={changeFilter} id={0} label='Tous' />
                {
                    filters.map((filter, i) => (
                        <FilterButton key={i} {...filter} handleClick={changeFilter} />
                    ))
                }
                <p>{JSON.stringify(filter)} </p>
            </section>
            <section className='productsList'>
                {
                    filteredProducts ? Object.values(filteredProducts).map((product, i) => (
                        <ProductItem key={i} {...product} />
                    )) : null
                }
            </section>
        </>
    )
}
