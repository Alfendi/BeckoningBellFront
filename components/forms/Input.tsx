import { ChangeEvent } from 'react'
import Link from 'next/link'

interface Props {
    labelId: string
    type: string
    value: string
    required?: boolean
    children: React.ReactNode
    link?: {
        linkText: string
        linkUrl: string
    }
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ 
    labelId, 
    type, 
    value, 
    required = false, 
    children,
    link,
    onChange 
}: Props){
    return (
        <div>
            <div className='flex justify-between align-center'>
                <label 
                    htmlFor={labelId}
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    {children}
                </label>
            </div>

            <div className='mt-2 mb-2'>
                <input
                    id={labelId}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    name={labelId}
                    type={type}
                    onChange={onChange}
                    value={value}
                    required={required}
                />
            </div>
                {link && (
                    <div className='text-xs text-right'>
                        <Link 
                            className='font-semibold text-indigo-600 hover:text-indigo-500' 
                            href={link.linkUrl}>
                                {link.linkText}
                        </Link>
                    </div>
                )}
        </div>
    )
}