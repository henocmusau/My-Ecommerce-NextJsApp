import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

import ActionButton from '../Buttons/ActionButton';

import { ProductItem2 } from "@/types/Article";

import { GiShoppingBag } from "react-icons/gi";
import { BsCartPlus } from "react-icons/bs";
import ProductItemImage from './ProductItemImage';


export default function ProductItem({ _id, productsType, creator, title, description, image, price, currency }: ProductItem2) {
    const productLink = '/' + _id

    return (
        <article
            className='md:rounded-xl flex flex-col bg-white/80 md:shadow-md group dark:bg-primaryDark dark:text-secondaryDark'
        >

            <ProductItemImage productLink={productLink} imageUrl={image} altText={title} />
            <h2 className='text-xl font-semibold pt-1 md:pt-3 px-5'>
                <Link href={productLink}>
                    {title}
                </Link>
            </h2>
            <p
                className='text-indigo-500 dark:text-yellow-600 grow font-bold text-2xl px-5 py-1'
            >
                {`${price} ${currency.symbol}`}
            </p>

            <p className='px-5 pb-5 text-secondary'>
                {description ? description.substr(0, 120) + '...  ' : null}
                <Link className='underline text-indigo-400' href={productLink}>Voir les détails</Link>
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
