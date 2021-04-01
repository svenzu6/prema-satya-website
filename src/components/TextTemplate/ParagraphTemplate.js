import { ParagraphStyle } from './TextTemplate.styles'

const ParagraphTemplate = (props) => {
    const { children } = props

    return (
        <ParagraphStyle>
            {children}
        </ParagraphStyle>
    )
}

export default ParagraphTemplate