import React from 'react'

import { ArticleItem } from "@/types/Article";
import Link from 'next/link';
import Image from 'next/image';

export default function ArticleItem({ title, description, image, price, devise }: ArticleItem) {

    return (
        <article
            className='md:rounded-xl flex flex-col bg-white/60 shadow-md group'
        >
            <Link href={'/'} className='overflow-hidden md:rounded-t-xl w-full'>
                <Image
                    className='h-60 md:h-72 lg:h-60 object-cover w-full group-hover:scale-125 duration-150'
                    src={image}
                    alt={title}
                />
            </Link>
            <h2 className='text-xl font-semibold pt-3 px-5'>
                <Link href={'/'}>
                    {title}
                </Link>
            </h2>
            <p
                className='text-secondary font-semibold text-xl px-5 py-1'
            >
                {`${price} ${devise.label}`}
            </p>
            {
                description ?
                    <p className='px-5 pb-5 text-secondary'>{description.substr(0, 120) + '...'}
                        <Link className='underline pl-2' href={'/'}>Voir plus</Link>
                    </p>
                    : null
            }

        </article>
    )
}
