import Image from 'next/image'
import Link from 'next/link'

import {
    CardButton,
    HomeCardDescription,
    HomeCardRoot,
    HomeCardTitle,
} from './HomeCard.styles'

export const HomeCard = (props) => {
    const { description, imageName, linkDescription, linkPage, title } = props

    return (
        <HomeCardRoot
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            <Image
                height={300}
                src={`/icons/${imageName}.svg`}
                width={300}
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
                <CardButton>
                    {linkDescription}
                </CardButton>
            </Link>
        </HomeCardRoot>
    )
}