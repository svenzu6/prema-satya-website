import styled from 'styled-components'

export const HomeHeroRoot = styled.div`
    height: 600px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;   
    background-image: linear-gradient(#00000085, #00000085),url("/images/hero.jpg");  
    padding: 20px;
`

export const HomeHeroTitle = styled.h1`
    color: #ffffff;
    font-size: 60px;
    margin-bottom: 20px;
    font-family: 'Karla';
    text-align: center;
`

export const HomeHeroDescription = styled.p`
    font-size: 22px;
    color: #ffffff;
    font-family: "Karla-Extra-Light";
    font-weight: 200;
    text-align: center;
`

export const HomeHeroButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-row-gap: 30px;
    grid-column-gap: 40px;
    justify-content: space-around;
    padding-top: 60px;  
    min-width: 100px;
    max-width: 500px;
`

export const HomeHeroButtonLeft = styled.button`
    background-color: #9aa37b;
    border-radius: 6.25rem;
    color: #ffffff;
    font-family: "Karla-Extra-Light";  
    padding: 1.125rem 2.5rem;
    border: 0.125rem solid #9aa37b;
    font-size: 18px;
    transition: color 0.4s ease 0s, background-color 0.4s ease 0s;
    &:hover {
        color: black; background-color: white;
        };
    cursor: pointer;
`

export const HomeHeroButtonRight = styled.button`
    background-color: #9aa37b;
    border-radius: 6.25rem;
    color: #ffffff;
    font-family: "Karla-Extra-Light";
    padding: 1.125rem 2.5rem;
    border: 0.125rem solid #9aa37b;
    font-size:18px;
    transition: color 0.4s ease 0s, background-color 0.4s ease 0s;
    &:hover {
        color: black; background-color: white;
        };
    cursor: pointer;
`
