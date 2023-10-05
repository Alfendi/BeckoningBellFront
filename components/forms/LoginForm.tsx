'use client'

import { Form } from '@/components/forms'
import { useLogin } from '@/hooks'

export default function LoginForm(){
    const {
        username,
        password, 
        isLoading,
        onChange,
        onSubmit
    } = useLogin()

    const config = [
        {
            labelText: 'Username',
            labelId: 'username',
            type: 'username',
            value: username,
            required: true
        },
        {
            labelText: 'Password',
            labelId: 'password',
            type: 'password',
            value: password,
            link: {
                linkText: 'Forgot password?',
                linkUrl: '/password-reset'
            },
            required: true
        } 
    ]

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Login'
            onChange={onChange}
            onSubmit={onSubmit}/>
    )

}