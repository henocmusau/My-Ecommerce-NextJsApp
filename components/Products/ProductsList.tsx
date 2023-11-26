'use client'
import React from 'react'
import { ProductItem2 as Item } from '@/types/Article'
import ProductItem from './ProductItem'
import FilterButton from '../Buttons/FilterButton'
import useFilterProducts from '@/hooks/useFilterProducts'
import { createPortal } from 'react-dom'
import useFetch from '@/hooks/useFetch'

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

interface ProductType {
    _id: string
    slug: string
    label: string
}

export default function ProductsList({ products }: { products: Item[] }) {
    const { data: types } = useFetch('/api/productstype')
    const productsTypeList: ProductType[] = types?.datas

    const { filteredProducts, changeFilter, filter } = useFilterProducts(products)

    return (
        <>
            <section className='filters'>
                <FilterButton handleClick={changeFilter} f={filter} _id='reset' label='Tous' />
                {
                    productsTypeList ? productsTypeList.map((f, i) => (
                        <FilterButton key={i} {...f} handleClick={changeFilter} f={filter} />
                    )) : null
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
