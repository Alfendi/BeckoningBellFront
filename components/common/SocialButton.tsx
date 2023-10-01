import cn from 'classnames'

interface Props {
    provider: 'google'
    // provider: 'google | github'
    [rest: string]: any // I can have the rest of the props with this, like an OnClick.
    children: React.ReactNode
}


export default function SocialButton({ provider, children, ...rest }: Props) {
    const className = cn(
        'flex-1 text-white rounded-md px-3 mt-3 py-2 font-medium',
        {
            'bg-red-500 hover:bg-red-400': provider === 'google'
            // '': provider === 'github'
        }
    )

    return (
        <button className={className} {...rest}>
            <span className='flex justify-start items-center'>
                {children}
            </span>
        </button>
    )
}

// Sub-component of SocialButton.tsx