import styled from 'styled-components'

export const HomeHomeopathyRoot = styled.div`
    height: 400px;
    min-height: 400px;
    padding: 50px 40px;
`
export const HomeHomeopathyTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const HomeHomeopathyTitle = styled.h1`
    color: #000000;
    font-family: "Karla";
    font-size: 46px;     
    margin-bottom: 20px;  
    font-weight: 100; 
`

export const HomeHomeopathySubTitle = styled.h1`
    color: #9aa37b;
    font-family: "Karla";
    font-size: 20px;     
    margin-bottom: 20px;   
`

export const HomeHomeopathyDescription = styled.h1`
    color: #000000;
    font-family: "Karla-Extra-Light";
    font-size: 20px;     
    margin-bottom: 20px;   
    padding-left: 30%;
    padding-right: 30%;
`

export const HomeHomeopathyButton = styled.button`
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