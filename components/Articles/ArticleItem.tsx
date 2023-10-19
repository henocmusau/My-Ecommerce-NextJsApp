import React from 'react'

import { ArticleItem } from "@/types/Article";
import Link from 'next/link';
import Image from 'next/image';

export default function ArticleItem({ title, description, image }: ArticleItem) {

    return (
        <Link
            href={'/'}
            className='rounded-xl flex flex-col bg-white/60 shadow-md group'
        >
            <div className='overflow-hidden rounded-t-xl w-full'>
                <Image
                    className='h-60 object-cover w-full group-hover:scale-125 duration-150'
                    src={image}
                    alt={title}
                />
            </div>
            <h1 className='text-xl font-semibold py-3 px-5'>{title}</h1>
            <p className='px-5 pb-5 text-secondary'>{description}</p>
        </Link>
    )
}
