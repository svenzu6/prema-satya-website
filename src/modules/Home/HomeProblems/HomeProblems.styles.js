import styled from 'styled-components'

export const HomeProblemsRoot = styled.div`
    padding: 100px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`

export const HomeProblemsTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-size: cover; 
    background-image: url("/icons/blob.svg"); 
`

export const HomeProblemsTitle = styled.h1`
    color: #000000;
    font-family: "Karla";
    font-size: 40px;    
    padding: 15px 0;
    border-top: 5px solid black;
`

export const HomeProblemsDescription = styled.h1`
    color: #000000;
    font-family: "Karla-Extra-Light";
    font-size: 18px;       
`
