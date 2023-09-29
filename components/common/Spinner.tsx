import cn from 'classnames'
import { ImSpinner2 } from 'react-icons/im'

interface Props {
    small?: boolean
    med?: boolean
    large?: boolean
}

export default function Spinner( { small, med, large }: Props) {
    const className = cn('animate-spin text-white-300 fill-white-300 mr-2', { // Pass in styling based on conditions.
        'w-4 h-4': small,
        'w-6 h-6': med,
        'w-8 h-8': large,
    })

    return ( // Span is the backup.
        <div role='status'>
            <ImSpinner2 className={className} />
            <span className='sr-only'>Loading...</span>
        </div>
    )
}