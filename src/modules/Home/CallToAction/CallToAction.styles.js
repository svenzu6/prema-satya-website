import styled from 'styled-components'

export const CallToActionContainer = styled.div`
    background: #ffffff;
    padding-bottom: 40px;
`

export const CallToActionRoot = styled.div`
    height: 110px;
    min-height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;   
    background-image: linear-gradient(#00000085, #00000085),url("/images/hero.jpg");  
`

export const CallToActionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 450px;
    justify-content: center;
    align-items: center;
    text-align: center; 
`

export const CallToActionTitle = styled.h1`
    color: #ffffff;
    font-family: "Karla-Extra-Light";
    font-size: 35px;     
`

export const CallToActionButton = styled.button`
    background-color: #9aa37b;
    border-radius: 30px;
    color: #ffffff;
    font-family: "Karla-Extra-Light";  
    border: 0.125rem solid #9aa37b;
    font-size: 18px;
    width: 200px;
    height: 60px;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: color 0.4s ease 0s, background-color 0.4s ease 0s;
    &:hover {
        color: black; background-color: white;
        };
    cursor: pointer;
`