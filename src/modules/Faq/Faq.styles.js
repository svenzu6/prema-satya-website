import styled from 'styled-components'

export const FaqContainer = styled.div`
    background: #ffffff; 
`

export const FaqContent = styled.div`
    padding: 50px 5%;
`

export const FaqTitle = styled.h1`
    color: #000000;
    font-family: "Karla";
    font-size: 30px;   
`

export const FaqDescription = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    color: #000000;
    font-family: "Karla-Extra-Light";
    font-weight: 200;
`

export const FaqGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 50px;
    justify-content: space-around;
    row-gap: 30px;
    padding-top: 60px;
`

export const FaqSubTitle = styled.h1`
    color: #000000;
    font-family: "Karla";
    font-size: 30px;   
    text-align: left;
`

export const FaqText = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #000000;
    font-family: "Karla-Extra-Light";
    font-weight: 200;
    text-align: left;
    padding-left: 2px;
    padding-top: 20px;
`
