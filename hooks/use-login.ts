import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useLoginMutation } from '@/redux/features/authApiSlice'
import { setAuth } from '@/redux/features/authSlice'
import { toast } from 'react-toastify'


export default function useLogin() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [login, { isLoading }] = useLoginMutation()

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const { username, password } = formData // Destructuring the fields because each input field will need a value and an onChange handler.

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        login({ username, password })  // Passed as one argument as object.
            .unwrap()
            .then(() => { // If successful, dispatch setAuth.
                dispatch(setAuth())
                toast.success('Logged in.')
                router.push('/home')
            })
            .catch(() => { // If not successful.
                toast.error('Failed to login. Please try again.')
            })
    }

    return {
        username, 
        password, 
        isLoading,
        onChange,
        onSubmit
    }
}