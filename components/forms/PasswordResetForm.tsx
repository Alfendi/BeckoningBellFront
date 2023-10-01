'use client' // Because we're using RTK Query.

import { Form } from '@/components/forms'
import { useResetPassword } from '@/hooks'

export default function PasswordResetForm(){
    const {
        email, 
        isLoading,
        onChange,
        onSubmit
    } = useResetPassword()

    const config = [
        {
            labelText: 'Email',
            labelId: 'email',
            type: 'email',
            value: email,
            required: true
        }
    ]

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Reset Password'
            onChange={onChange}
            onSubmit={onSubmit}/>
    )

}