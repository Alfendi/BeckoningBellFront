import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { useVerifyMutation } from '@/redux/features/authApiSlice'
import { setAuth, finishInitialLoad } from '@/redux/features/authSlice'

export default function useVerify() {
    const dispatch = useAppDispatch()

    const [verify] = useVerifyMutation()

    useEffect(() => { // When component mounts, call verify.
        verify(undefined)
            .unwrap()
            .then(() => {
                dispatch(setAuth())
            })
            .finally(() => {
                dispatch(finishInitialLoad())
            })
    }, [])
}