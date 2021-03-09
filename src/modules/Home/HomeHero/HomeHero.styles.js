import styled from 'styled-components'

export const HomeHeroRoot = styled.div`
    height: 600px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-image:linear-gradient(#00000085, #00000085),url("/images/hero.jpg");
`

export const HomeHeroTitle = styled.h1`
    color: #ffffff;
    font-size: 60px;
    margin-bottom: 20px;
    font-family: 'Karla';
`

export const HomeHeroDescription = styled.p`
    font-size: 22px;
    color: #ffffff;
    font-family: "Karla-Extra-Light";
    font-weight: 200;
`
