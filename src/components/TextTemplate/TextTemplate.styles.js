import styled from 'styled-components'

export const TextTemplateRoot = styled.div`
    background: #ffffff;
 `

export const HeroImage = styled.div`
    max-height: 100px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;   
    background-image: linear-gradient(#00000085, #00000085),
        url("/images/${(props) => props.imageName}.jpg");
    background-position: center; 
    margin-bottom: 10px;
`

export const TextTemplateTitle = styled.h1`
    color: #ffffff; 
    font-family: "Rubik";
`

export const ParagraphStyle = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: #000000;
    font-family: "Karla-Extra-Light";
    font-weight: 200;
`
