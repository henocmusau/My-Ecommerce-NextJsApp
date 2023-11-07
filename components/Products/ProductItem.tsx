import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

import ActionButton from '../Buttons/ActionButton';

import { ProductItem } from "@/types/Article";

import { GiShoppingBag } from "react-icons/gi";
import { BsCartPlus } from "react-icons/bs";


export default function ProductItem({ title, description, image, price, devise }: ProductItem) {

    return (
        <article
            className='md:rounded-xl flex flex-col bg-white/80 md:shadow-md group dark:bg-primaryDark dark:text-secondaryDark'
        >
            <Link href={'/'} className='overflow-hidden md:rounded-t-xl w-full'>
                <Image
                    className='h-60 md:h-72 lg:h-60 object-cover w-full group-hover:scale-125 duration-150'
                    src={image}
                    alt={title}
                    placeholder='blur'
                />
            </Link>
            <h2 className='text-xl font-semibold pt-1 md:pt-3 px-5'>
                <Link href={'/'}>
                    {title}
                </Link>
            </h2>
            <p
                className='text-secondary grow font-semibold text-xl px-5 py-1'
            >
                {`${price} ${devise.label}`}
            </p>

            <p className='px-5 pb-5 text-secondary'>
                {description ? description.substr(0, 120) + '...  ' : null}
                <Link className='underline text-indigo-400' href={'/'}>Voir les détails</Link>
            </p>

            <div className='px-5 pb-5 flex gap-3 justify-self-end'>
                <ActionButton type='button' title='Acheter maintenant' icon={<GiShoppingBag className='z-0' />} />
                <button className=' bg-yellow-600 font-semibold hover:bg-opacity-80 duration-200 p-3 rounded-md'>
                    <BsCartPlus className='mr-2 text-xl w-full text-primaryDark text-center' />
                </button>
            </div>
        </article>
    )
}
