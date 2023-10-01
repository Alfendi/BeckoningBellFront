'use client'

import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'
import { List, Spinner } from '@/components/common'

export default function Page() {
    const { data: user, isLoading, isFetching } = useRetrieveUserQuery()

    const config = [
        {
            label: 'First Name',
            value: user?.first_name

        },
        {
            label: 'Last Name',
            value: user?.first_name

        },
        {
            label: 'Email',
            value: user?.email

        }
    ]

    if (isLoading || isFetching ) {
        return (
            <div className='flex justify-center my-8'>
                <Spinner large />
            </div>
        )
    }

    return (
        <>
            <header className='bg-white shadow'>
                <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                        Dashboard
                    </h1>
                </div>
            </header>
            <main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8'>List
                <List config={config} />
            </main>
        </>
    )
}

// <> </> React shortcut for Fragment component. All components should be wrapped in a parent element.
// We want the access token to be sent along with the request, gives a 401, then when we hit a 401, then the RTK Query reauth logic will kick in,
// hit the refresh endpoint, then give us a new access token, then retry the verify and log the user in.