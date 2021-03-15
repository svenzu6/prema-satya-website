import Image from 'next/image'
import Link from 'next/link'

import {
    HomeCardBlob,
    HomeCardDescription,
    HomeCardIcon,
    HomeCardRoot,
    HomeCardTitle,
} from './HomeCard.styles'

export const HomeCard = (props) => {
    const { description, iconName, imageName, isDisabled, linkDescription, linkPage, title } = props

    return (
        <HomeCardRoot
            isDisabled={isDisabled}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            <Image
                height={100}
                src={`/icons/${imageName}.svg`}
                width={100}
            />
            <HomeCardTitle>
                {title}
            </HomeCardTitle>
            <HomeCardDescription>
                {description}
            </HomeCardDescription>
            <Link
                href={`/${linkPage}`}
                passHref={true}
            >
                <a>
                    {linkDescription}
                </a>
            </Link>
        </HomeCardRoot>
    )
}