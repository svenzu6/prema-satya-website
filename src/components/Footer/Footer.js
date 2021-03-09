import React from 'react'

import { FooterSection } from './FooterStyle'

const Footer = () => {
    return (
        <FooterSection>
            <p>
                Copyright (&copy;)
                {new Date().getFullYear()}
                , svenzu
            </p>
        </FooterSection>
    )
}
export default Footer
