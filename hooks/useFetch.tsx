import React, { useState, useEffect } from "react";

export default function useFetch(url: string) {
    const [data, setData] = useState<any | null>([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then(setData)
            .catch(setError)
        setIsLoading(false)
    }, []);

    return { data, isLoading, error }
};