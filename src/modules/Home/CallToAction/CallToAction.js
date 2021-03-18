import Link from 'next/link'

import {
    CallToActionButton,
    CallToActionContainer,
    CallToActionRoot,
    CallToActionTitle,
    CallToActionWrapper,
} from './CallToAction.styles'

export const CallToAction = () => {
    return (
        <CallToActionContainer>
            <CallToActionRoot>
                <CallToActionWrapper>
                    <CallToActionTitle>
                        Mogu pomoći i vama
                    </CallToActionTitle>
                    <Link
                        href="/kontakt"
                        passHref={true}
                    >
                        <CallToActionButton>
                            Kontakt
                        </CallToActionButton>
                    </Link>
                </CallToActionWrapper>
            </CallToActionRoot>
        </CallToActionContainer>
    )
}
