import { useState, ChangeEvent, FormEvent } from 'react'
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { toast } from 'react-toastify'


export default function useResetPassword() {
    const [resetPassword, { isLoading }] = useResetPasswordMutation()

    const [email, setEmail] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        resetPassword(email)  // Passed directly instead of an object because it's how useResetPasswordMutation is setup.
            .unwrap()
            .then(() => { // If successful.
                toast.success('Please check your email for a reset link.')
            })
            .catch(() => { // If not successful.
                toast.error('Failed to send email. Please try again.')
            })
    }

    return {
        email, 
        isLoading,
        onChange,
        onSubmit
    }
}