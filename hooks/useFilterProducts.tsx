import { useState, useRef } from 'react'
import { ProductsList } from '@/types/Article';

export default function useFilterProducts(products: ProductsList) {
    const [filter, setFilter] = useState([0])

    const changeFilter = (id: number) => {
        if (id === 0) return setFilter([0])
        if (filter.includes(id)) {
            return setFilter(() => filter.filter(f => f !== id))
        }
        setFilter([...filter, id])
    }

    const filteredProducts = (): ProductsList => {

        if (JSON.stringify(filter) !== JSON.stringify([0])) {
            return products.filter(p => filter.indexOf(p.type))
            console.log(products)
        }
        console.log(products)
        return products
    }

    const filterProducts = filteredProducts()

    return { filteredProducts, changeFilter, filter }
}
