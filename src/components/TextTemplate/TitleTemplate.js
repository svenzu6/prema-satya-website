import { TextTemplateTitle } from './TextTemplate.styles'

const TitleTemplate = (props) => {
    const { children } = props

    return (
        <TextTemplateTitle>
            {children}
        </TextTemplateTitle>
    )
}

export default TitleTemplate