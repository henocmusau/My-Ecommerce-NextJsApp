'use client'
import { useState, useEffect } from 'react'

export default function useStorage(id: string, initialValue: () => string | string, appName: string) {
    const prefix = appName + id
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const data = window.localStorage.getItem(prefix)

            if (data !== null && data.length > 0) return JSON.parse(data)

            if (typeof initialValue === 'function') {
                return initialValue()
            } else { return initialValue }
        } else { return null }
    })

    console.log(value)

    useEffect(() => {
        window.localStorage.setItem(prefix, JSON.stringify(value))
    }, [prefix, value])

    return [value, setValue]
}
