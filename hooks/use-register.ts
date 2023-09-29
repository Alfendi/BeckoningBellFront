import { useRouter } from 'next/navigation'
import { useState, ChangeEvent, FormEvent } from 'react'
import { useRegisterMutation } from '@/redux/features/authApiSlice'
import { toast } from 'react-toastify'


export default function useRegister() {
    
    const router = useRouter()
    const [register, { isLoading }] = useRegisterMutation()

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
    })

    const { first_name, last_name, email, password, re_password } = formData // Destructuring the fields because each input field will need a value and an onChange handler.

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        register({ first_name, last_name, email, password, re_password })  // Passed as one argument as an object.
            .unwrap()
            .then(() => { // If successful.
                toast.success('Please check your email to activate account.')
                router.push('/auth/login')
            })
            .catch(() => { // If not successful.
                toast.error('Failed to register account.')
            })
    }

    return {
        first_name, 
        last_name, 
        email, 
        password, 
        re_password,
        isLoading,
        onChange,
        onSubmit
    }
}