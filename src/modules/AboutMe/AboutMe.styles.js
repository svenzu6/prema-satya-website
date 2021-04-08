import styled from 'styled-components'

export const AboutMeContainer = styled.div`
    background: #Ffffff;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 5px 12px;
`

export const AboutMeTitle = styled.h1`
    color: #000000;
    font-family: "Karla";
    font-size: 50px;   
    padding-bottom: 30px; 
`

export const AboutMeText = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: #000000;
    font-family: "Karla-Extra-Light";
    font-weight: 200;
    padding-bottom: 40px;
`
export const AboutMeContentRight = styled.div`
    padding: 20px 8%;
`