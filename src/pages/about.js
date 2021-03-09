import Head from 'next/head'
import styled from 'styled-components'

export default function About() {
    return (
        <>
            <Head>
                <title>
                    O meni
                </title>
            </Head>
            <AboutContainer>
                <AboutText>
                    O meni
                </AboutText>
            </AboutContainer>
        </>
    )
}

const AboutContainer = styled.div`
    background: #FBF3EB;
    height: 100%;
    width: 100%;
`
const AboutText = styled.h1`
    color:#000000;
`