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
export const HomeHeroButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 60px;
    justify-content: space-around;
    padding:60px;  
`
export const HomeHeroButtonLeft = styled.button`
    background-color: rgb(241, 87, 75);
    border-radius: 6.25rem;
    color: #ffffff;
    font-family: "Karla-Extra-Light";  
    padding: 1.125rem 2.5rem;
    border: 0.125rem solid rgb(241, 87, 75);
    font-size:15px;
    `
export const HomeHeroButtonRight = styled.button`
    background-color: rgb(241, 87, 75);
    border-radius: 6.25rem;
    color: #ffffff;
    font-family: "Karla-Extra-Light";
    padding: 1.125rem 2.5rem;
    border: 0.125rem solid rgb(241, 87, 75);
    font-size:15px;
    `