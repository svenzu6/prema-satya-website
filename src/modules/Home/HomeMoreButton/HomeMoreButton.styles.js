import styled from 'styled-components'

export const HomeMoreRouter = styled.button`
    background-color: #9aa37b;
    border-radius: 30px;
    color: #ffffff;
    font-family: "Karla-Extra-Light";  
    border: 0.125rem solid #9aa37b;
    font-size: 18px;
    width: 160px;
    height: 55px;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: color 0.4s ease 0s, background-color 0.4s ease 0s;
    &:hover {
        color: black; background-color: white;
        };
    cursor: pointer;
`

export const HomeMoreRoot = styled.div`
    background: #ffffff;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding:0 12%;
    padding-top: 100px;
`