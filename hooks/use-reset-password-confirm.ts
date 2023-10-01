import { useRouter } from 'next/navigation' // useParams for extracting the UID/Token.
import { useState, ChangeEvent, FormEvent } from 'react'
import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";
import { toast } from 'react-toastify'


export default function useResetPasswordConfirm(uid: string, token: string) { // Grab arguments from component and pass it here.
    const router = useRouter()

    const [resetPasswordConfirm, { isLoading }] = useResetPasswordConfirmMutation()

    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    })

    const onChange = (event: ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target
        
        setFormData({ ...formData, [name]: value })
    }

    const { new_password, re_new_password } = formData

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        resetPasswordConfirm({ uid, token, new_password, re_new_password })  // Passed directly instead of an object because it's how useResetPasswordMutation is setup.
            .unwrap()
            .then(() => { // If successful.
                toast.success('Your password has been reset.')
                router.push('/auth/login')
            })
            .catch(() => { // If not successful.
                toast.error('Password reset failed. Please try again.')
            })
    }

    return {
        new_password,
        re_new_password,
        isLoading,
        onChange,
        onSubmit
    }
}