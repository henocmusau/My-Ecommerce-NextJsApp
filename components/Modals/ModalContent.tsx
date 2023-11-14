import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'

type Props = {
    isOpen: boolean
    isForm?: boolean
    closeModal: () => void
    back?: () => void
    children: React.ReactNode
    id?: string
    title?: string
    isSearch?: boolean
}

export default function ModalContent({ isOpen, isSearch, back, isForm, closeModal, children, id, title }: Props) {
    return (
        <Transition appear show={isOpen} as={Fragment} key={id ? id : '0'}>
            <Dialog as="section" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-primaryDark/90 dark:bg-primaryDark/60" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex relative justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md inset-y-0 transform overflow-hidden rounded-2xl bg-white dark:bg-secondaryDark max-h-screen overflow-y-auto p-6 text-left align-middle shadow-xl transition-all">

                                {isForm || isSearch ? <button
                                    onClick={closeModal}
                                    className='absolute right-0 top-0 py-2 px-4 rounded-bl-2xl rounded-tr-2xl hover:bg-indigo-200 dark:hover:bg-indigo-900/30 transition duration-200 text-lg'
                                >
                                    <AiOutlineClose className='w-6 h-6' />
                                </button> : null}

                                {isForm ? <button
                                    onClick={back}
                                    className='absolute left-0 border-4 dark:border-[#18181a] border-white top-0 py-2 px-4 rounded-br-2xl rounded-tl-2xl hover:bg-indigo-200 dark:hover:bg-indigo-900/30 transition duration-200 text-lg'
                                >
                                    <BsArrowLeft className='w-6 h-6' />
                                </button> : null}
                                {!isSearch ? <Dialog.Title
                                    as="h2"
                                    className="text-xl mb-8 mt-8 p-4 border-l-8 border-super font-semibold"
                                >
                                    {title ? title : 'Choisissez une action :'}
                                </Dialog.Title> : null}

                                <div>
                                    {children}
                                </div>

                                {/* 

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={closeModal}
                                    > 
                                        Got it, thanks!
                                    </button>
                                </div> */}

                                {/* BOUTON DE FERMETURE DU MODAL */}
                                {(!isForm && !isSearch) ? <button
                                    className='actionButton w-full mt-4'
                                    onClick={closeModal}
                                >
                                    Fermer
                                </button> : null}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
