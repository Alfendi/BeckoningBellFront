'use client'

import { ImGoogle } from "react-icons/im"
import { SocialButton } from "@/components/common"
import { continueGoogleAuth } from "@/utils"

export default function SocialButtons() {
    return (
        <div className='flex justify-between items-center gap-2 mt-5'>
            <SocialButton provider='google' onClick={continueGoogleAuth}>
                <ImGoogle className='mr-3'/> Google Login
            </SocialButton>
            {/* <SocialButton provider='github'>
            </SocialButton> */}
        </div>
    )
}