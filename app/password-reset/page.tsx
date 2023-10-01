import { Metadata } from 'next'
import { PasswordResetForm } from '@/components/forms'

export const metadata: Metadata = {
    title: 'Beckoning Bell | Password Reset',
    description: 'Beckoning Bell password reset.',
}

export default function Page() {
    return (
        <div className='flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <img
                    className='mx-auto h-10 w-auto'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                    alt='Your Company'
                />
                <h2 className='mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                    Reset Password
                </h2>
            </div>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]'>
                <div className='bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12'>
                    <PasswordResetForm />
                </div>
            </div>
        </div>
    )
}