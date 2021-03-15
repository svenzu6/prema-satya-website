import styled from 'styled-components'

export const HomeIlnessRoot = styled.div`
    height: 600px;
    min-height: 600px;
    `
export const HomeIlnessWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 3fr);
    grid-column-gap: 50px;
    justify-content:center;
    align-items:center;
    text-align:center; 
    margin-bottom:20px;
    border:1px solid lightgray;
    `

export const HomeIlnessText = styled.p`
    font-family:"Karla-Extra-Light";  
    padding: 10px 20px;
    font-size:19px;
    margin-bottom:20px;
    `

export const HomeIlnessTitle = styled.h1`
    color:#000000;
    font-family:"Karla";
    font-size:30px;     
    margin-bottom: 50px;   
`
export const HomeIlnessIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 50px;
    justify-content:center;
    align-items:center;
    background-color:white;
    `
