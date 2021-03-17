import styled from 'styled-components'

export const NavRoot = styled.div`
    height: 60px;
    min-height: 60px;
    background: #ffffff; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
	position: sticky;
	top: 0;
    color: #000000;
    box-shadow: none;
    z-index: 800;
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
    margin-left: 15px;
    font-family: "Karla-Extra-Light";
`