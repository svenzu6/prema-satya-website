import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
    background: #C5DBBB;
    color: #fff;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    
    
`

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
