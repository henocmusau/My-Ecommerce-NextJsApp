import React from 'react'
import { AiFillWarning, AiOutlineCheckCircle } from 'react-icons/ai'
import { BiSolidErrorCircle } from 'react-icons/bi'

AiFillWarning

type Props = {
    text: string
    type?: string
}

const iconClassName = 'w-8 h-8 mr-2'

export default function Toast({ text, type = 'success' }: Props) {
    const style = () => {
        const defaultStyle = 'flex items-center justify-center '
        switch (type) {
            case 'error':
                return defaultStyle + 'text-red-400'

            case 'info':
                return defaultStyle + 'text-sky-500'

            case 'warning':
                return defaultStyle + 'text-orange-500'


            default:
                return defaultStyle + 'text-green-500'
        }
    }
    return (
        <p className={style()}>
            {type == 'success' ? <AiOutlineCheckCircle className={iconClassName} /> : null}
            {type == 'error' ? <BiSolidErrorCircle className={iconClassName} /> : null}
            {type == 'warning' ? <AiFillWarning className={iconClassName} /> : null}
            {text}
        </p>
    )
}
