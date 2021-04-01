import { HeroImage } from './TextTemplate.styles'

const HeroTemplate = (props) => {
    const { children, imageName } = props

    return (
        <HeroImage imageName={imageName}>
            {children}
        </HeroImage>
    )
}

export default HeroTemplate