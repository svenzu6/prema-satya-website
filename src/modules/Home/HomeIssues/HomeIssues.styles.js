import styled from 'styled-components'

export const HomeIssuesRoot = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    column-gap: 50px;
    justify-content: center;
    align-items: center;
    text-align: center; 
    padding: 120px 250px ;
`

export const HomeProblemsText = styled.div`
    font-family: "Karla-Extra-Light";  
    font-size: 19px;
    display: grid;
    grid-template-columns: 30px 1fr;
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
    text-align: center; 
    column-gap: 10px;
`