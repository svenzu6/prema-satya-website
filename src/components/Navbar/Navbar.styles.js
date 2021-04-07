import styled from 'styled-components'

export const NavRoot = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    column-gap: 600px;
    text-align: center; 
    min-height: 60px;
    position: sticky;
    color: #000000;
    box-shadow: none;
    z-index: 800; 
    justify-items: center;
    align-items: center;
    top: 0;
    box-shadow: none;
    background: #ffffff; 
`

export const NavbarRightSide = styled.div`
    font-family: "Karla-Extra-Light";
    column-gap: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 20px;
`

export const NavbarLeftSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const NavTitle = styled.a`
    font-size: 25px;
    font-family: "Karla-Extra-Light";
    text-align: center;
`