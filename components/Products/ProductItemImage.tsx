'use client'
import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

type Props = {
    imageUrl: string
    altText: string
    productLink: string
}


const myLoader = ({ src, width, quality }: { src: any, width: any, quality?: any }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

export default function ProductItemImage({ imageUrl, altText, productLink }: Props) {
    return (
        <Link href={productLink} className='overflow-hidden md:rounded-t-xl w-full'>
            <Image
                loader={myLoader}
                className='h-60 md:h-72 lg:h-60 object-cover w-full group-hover:scale-125 duration-150'
                src={imageUrl}
                alt={altText}
                placeholder='blur'
                blurDataURL={`data:image/svg+xml;base64,${imageUrl}`}
                height={240}
                width={200}
            />
        </Link>
    )
}
