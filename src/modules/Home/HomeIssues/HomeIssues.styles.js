import styled from 'styled-components'

export const HomeProblemsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-column-gap: 50px;
    justify-content: center;
    align-items: center;
    text-align: center; 
    padding: 70px 250px 100px 250px;
`

export const HomeProblemsText = styled.div`
    font-family: "Karla-Extra-Light";  
    font-size: 19px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
    text-align: center; 
`