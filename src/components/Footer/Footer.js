import React from 'react'

import { FooterSection } from './Footer.styles.js'

const Footer = () => {
    return (
        <FooterSection>
            <p>
                Copyright (&copy;)
                {new Date().getFullYear()}
            </p>
        </FooterSection>
    )
}

export default Footer
