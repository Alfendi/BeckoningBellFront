import Link from 'next/link'
import cn from 'classnames'

interface Props {
    isSelected?: boolean
    isMobile?: boolean
    isBanner?: boolean
    href?: string
    children: React.ReactNode
    [rest: string]: any
}

export default function Navlink({
    isSelected,
    isMobile,
    isBanner,
    href,
    children,
    ...rest // Spread operator here for additional props such as className or an onClick.
}: Props) {

    const className = cn( // Additional styling based on the props.
        rest.className,
        'text-white rounded-md px-3 py-2 font-medium',
        {
            'bg-gray-900': isSelected,
            'text-gray-300 hover:bg-gray-700 hover:text-white': !isSelected && !isBanner, // If not selected and if it is not a banner.
            'block text-base': isMobile,
            'text-sm': !isMobile,
            'text-gray-300': isBanner
        }
    )

    if (!href) { // Checking if it is logout.
		return (
			<span className={className} role='button' onClick={rest.onClick}>
				{children}
			</span>
		)
	}



    return (
		<Link className={className} href={href}>
			{children}
		</Link>
    )
}

