import { useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { setAuth } from '@/redux/features/authSlice'
import { toast } from 'react-toastify'

export default function useSocialAuth(authenticate: any, provider: string) {// Connects with the SocialAuthenticate hook in Redux/authApiSpice. 
    const dispatch = useAppDispatch()
    const router = useRouter()
    const searchParams = useSearchParams()

    const effectRan = useRef(false) // Makes sure code runs only once.

    useEffect(() => { // If login succeeds, send to home page. Otherwise, redirect to login page.
        const state = searchParams.get('state')
        const code = searchParams.get('code')

        if (state && code && !effectRan.current) {
            authenticate({ provider, state, code })
                .unwrap()
                .then(() => {
                    dispatch(setAuth())
                    toast.success('Logged in!')
                    router.push('/home')
                })
                .catch(() => {
                    toast.error('Failed to login. Please try again.')
                    router.push('/auth/login')
                })
        }

        return () => {
            effectRan.current = true
        }
    }, [authenticate, provider])
}