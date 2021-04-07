import styled from 'styled-components'

export const HomeIssuesRoot = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    column-gap: 200px;
    justify-content: center;
    align-items: center;
    text-align: center; 
    padding: 0 10%;
`

export const HomeProblemsText = styled.div`
    font-family: "Karla-Extra-Light";  
    font-size: 19px;
    display: grid;
    grid-template-columns: 40px 1fr;
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
    text-align: center; 
    column-gap: 60px;
`