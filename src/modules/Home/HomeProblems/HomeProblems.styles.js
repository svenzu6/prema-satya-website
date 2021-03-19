import styled from 'styled-components'

export const HomeProblemsRoot = styled.div`
    padding: 0px 40px;
`

export const HomeProblemsTitleWrapper = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 200px;
    width: 400px;
    margin-bottom: 40px; 
    background-size: cover;   
    background-image: url("/icons/blob.svg"); 
`

export const HomeProblemsTitle = styled.h1`
    color: #000000;
    font-family: "Karla";
    font-size: 40px;    
    text-decoration: overline;
`

export const HomeProblemsTitleFill = styled.h1`
    color: #000000;
    font-family: "Karla";
    font-size: 40px;   
    margin-bottom: 20px;    
`

export const HomeProblemsDescription = styled.h1`
    color: #000000;
    font-family: "Karla-Extra-Light";
    font-size: 18px;       
    margin-bottom: 30px;
`

export const HomeProblemsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    grid-column-gap: 50px;
    justify-content: center;
    align-items: center;
    text-align: center; 
    padding-left: 250px;
    padding-right: 250px;
    margin-bottom: 100px;
`

export const HomeProblemsText = styled.p`
    font-family: "Karla-Extra-Light";  
    font-size: 19px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
    text-align: center; 
`