import styled from 'styled-components'

import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <LayoutRoot>
            <Navbar />
            {children}
            <Footer />
        </LayoutRoot>
    )
}

export const LayoutRoot = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
`