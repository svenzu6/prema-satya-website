import {
    HomeCardDescription,
    HomeCardRoot,
    HomeCardTitle,
} from './HomeCard.styles'

export const HomeCard = (props) => {
    const { description, title } = props

    return (
        <HomeCardRoot
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
        >
            <HomeCardTitle>
                {title}
            </HomeCardTitle>
            <HomeCardDescription>
                {description}
            </HomeCardDescription>
        </HomeCardRoot>
    )
}