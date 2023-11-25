'use client'
import { useState } from 'react'
import { ProductItem2 } from '@/types/Article';

export default function useFilterProducts(products: ProductItem2[]) {
    const [filter, setFilter] = useState<string[]>([])

    const changeFilter = (id: string | 'reset') => {
        if (id === 'reset') return setFilter([])
        if (filter && filter.includes(id)) {
            return setFilter(() => filter.filter((f: string) => f !== id))
        }
        setFilter([...filter, id])
    }

    const filterProducts = (): ProductItem2[] => {
        if (filter.length < 1) return products
        return products.filter(p => filter.includes(p.productsType._id))
    }

    const filteredProducts = filterProducts()

    return { filteredProducts, changeFilter, filter }
}
