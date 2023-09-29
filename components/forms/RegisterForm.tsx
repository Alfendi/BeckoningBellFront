'use client'

import { Form } from '@/components/forms'
import { useRegister } from '@/hooks'

export default function RegisterForm(){
    const {
        first_name, 
        last_name, 
        email, 
        password, 
        re_password,
        isLoading,
        onChange,
        onSubmit
    } = useRegister()

    const config = [
        {
            labelText: 'First Name',
            labelId: 'first_name',
            type: 'text',
            value: first_name,
            required: true
        },
        {
            labelText: 'Last Name',
            labelId: 'last_name',
            type: 'text',
            value: last_name,
            required: true
        },
        {
            labelText: 'Email',
            labelId: 'email',
            type: 'email',
            value: email,
            required: true
        },
        {
            labelText: 'Password',
            labelId: 'password',
            type: 'password',
            value: password,
            required: true
        },
        {
            labelText: 'Confirm Password',
            labelId: 're_password',
            type: 'password',
            value: re_password,
            required: true
        }        
    ]

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Register'
            onChange={onChange}
            onSubmit={onSubmit}/>
    )
}