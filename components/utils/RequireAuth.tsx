'use client'

import { redirect } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
import { Spinner } from "@/components/common"

interface Props{
    children: React.ReactNode
}

export default function RequireAuth({ children }: Props) { // If true, render out whatever this is wrapping.
    const { isLoading, isAuthenticated } = useAppSelector(state => state.auth) // By default, if we directly go to the dashboard (URL). If we are, then spinner.

    if (isLoading) {
        return (
            <div className='flex justify-center my-8'>
                <Spinner large />
            </div>
        )
    }

    if (!isAuthenticated) {
            redirect('/auth/login')
    }

    return <>{children}</>
}