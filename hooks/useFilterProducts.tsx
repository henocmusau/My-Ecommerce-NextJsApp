'use client'
import { useState } from 'react'
import { ProductsList } from '@/types/Article';

export default function useFilterProducts(products: ProductsList) {
    const [filter, setFilter] = useState<number[]>([])

    const changeFilter = (id: number | 'reset') => {
        if (id === 'reset') return setFilter([])
        if (filter && filter.includes(id)) {
            return setFilter(() => filter.filter((f: number) => f !== id))
        }
        setFilter([...filter, id])
    }

    const filterProducts = (): ProductsList => {
        if (filter.length < 1) return products
        return products.filter(p => filter.includes(p.type))
    }

    const filteredProducts = filterProducts()

    return { filteredProducts, changeFilter, filter }
}
