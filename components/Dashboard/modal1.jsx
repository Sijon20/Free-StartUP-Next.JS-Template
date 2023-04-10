import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/components/supabase'

export default function Modal1({ modal}) {
    const [key, setkey] = useState(1)
    useEffect(() => {
        if(passdata.tittle !== '' && passdata.password !== ''){
        async function addpass() {
            let user = await JSON.parse(localStorage.getItem('sb-mmrvpvmywvxmxyotictf-auth-token'))
            const { data, error } = await supabase
                .from('allpassword')
                .insert([
                    { user_id: user.user.id,
                        tittle: passdata.tittle,
                        desc: passdata.description,
                        password: passdata.password,
                     },
                ])
        }
        addpass()
    }
    },[key])
const onchandleChange = (e) => {
    const { name, value } = e.target
    setpassdata({ ...passdata, [name]: value })
}
const [passdata, setpassdata] = useState({
    tittle: '',
    password: '',
    description: '',
})
const [open, setOpen] = useState(modal)
const cancelButtonRef = useRef(null)

return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 dark:bg-black pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        {/* <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" /> */}
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            Add a new Password
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div className="relative flex flex-col mb-4">
                                                <label for="tittle" className="leading-7 mr-2 text-sm text-gray-600">Tittle :</label>
                                                <input type="text" value={passdata.tittle} onChange={onchandleChange} id="tittle" name="tittle" className="w-full bg-white dark:bg-dark rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                            <div className="relative flex flex-col mb-4">
                                                <label for="desdescriptionc" className="leading-7 mr-2 text-sm text-gray-600">Description :</label>
                                                <textarea type="text" value={passdata.description} onChange={onchandleChange} id="description" name="description" className="w-full bg-white dark:bg-dark rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                            <div className="relative flex flex-col mb-4">
                                                <label for="password" className="leading-7 mr-2 text-sm text-gray-600">Password :</label>
                                                <input type="password" value={passdata.password} onChange={onchandleChange} id="password" name="password" className="w-full bg-white dark:bg-dark rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    onClick={() =>{ setOpen(modal => !modal)
                                    let key = Math.random()
                                    setkey(key)
                                    }}
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 dark:bg-black inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    onClick={() => setOpen(modal => !modal)}
                                    ref={cancelButtonRef}
                                >
                                    Cancel
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition.Root>
)
}
