'use client'

import { usePathname } from 'next/navigation'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAppSelector, useAppDispatch } from '@/redux/hooks' // Logic for authentication.
import { useLogoutMutation } from '@/redux/features/authApiSlice'
import { logout as setLogout } from '@/redux/features/authSlice'
import { Navlink } from '@/components/common'

export default function Navbar() {
    const pathname = usePathname() // Check current path.
    const dispatch = useAppDispatch()

    const [logout] = useLogoutMutation()

    const { isAuthenticated } = useAppSelector(state => state.auth)

    const handleLogout = () => {
        logout(undefined) // Logout does not take any parameters, put "undefined" or else TS will complain.
            .unwrap()
            .then(() => {
                dispatch(setLogout())
            })
    }

    const isSelected = (path: string) => (pathname === path ? true : false)

    const authLinks = (isMobile: boolean) => ( // Expect guestLinks to receive a parameter.
        <>
            <Navlink
                isSelected={isSelected('/home')}
                isMobile={isMobile}
                href='/home'>
                Home
            </Navlink>
            <Navlink
                isMobile={isMobile}
                onClick={handleLogout}>
                Logout
            </Navlink>
        </>
    )

    // Check the current path to see if it's equal to the login path. If it's equal '/auth/login', return true. Otherwise, false.
    const guestLinks = (isMobile: boolean) => ( // Expect guestLinks to receive a parameter.
        <>
            <Navlink
                isSelected={isSelected('/auth/login')}
                isMobile={isMobile}
                href='/auth/login'>
                Login
            </Navlink>
            <Navlink
                isSelected={isSelected('/auth/register')}
                isMobile={isMobile}
                href='/auth/register'>
                Register
            </Navlink>
        </>
    )

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Navlink
                                        href='/'
                                        isBanner>
                                        Beckoning Bell
                                    </Navlink>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {isAuthenticated ? authLinks(false) : guestLinks(false)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {isAuthenticated ? authLinks(true) : guestLinks(true)}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

// If authenticated, have authLinks. Otherwise, guestLinks.
// Line 102 confirms mobile status.