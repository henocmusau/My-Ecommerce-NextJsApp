import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
    isOpen: boolean
    closeModal: () => void
    children: React.ReactNode
    id?: string
    title?: string
}

export default function ModalContent({ isOpen, closeModal, children, id, title }: Props) {
    return (
        <Transition appear show={isOpen} as={Fragment} key={id ? id : '0'}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-primaryDark/90" />
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-secondaryDark  p-6 mt-16 text-left align-middle shadow-xl transition-all">

                                <button
                                    onClick={closeModal}
                                    className='absolute right-0 top-0 p-2 hover:bg-sky-100 dark:hover:bg-sky-100/20 transition duration-200 text-lg'
                                >
                                    <AiOutlineClose />
                                </button>
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg mb-8 mt-4 p-2 font-medium bg-sky-100 dark:bg-sky-100/20 text-center rounded-lg"
                                >
                                    {title ? title : 'Sélectionnez une action'}
                                </Dialog.Title>

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
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
