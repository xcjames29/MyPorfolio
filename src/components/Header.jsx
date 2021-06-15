import styled from "styled-components"
import logoImg from "../static/images/logo.png"

const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    background-color: #201f1e;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
`;

const MenuList = styled.a`
    color: #bdbdbd;
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5vw;
    &:hover{
        color: white;
    }
`;

const MenuContainer = styled.div`
    display: flex;
    height: 100%;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    height: 100%;
`;

const NameTitle = styled.p`
    font-size: 2vw;
    color: #c21e5d;
`;

export default function Header(){

    return(
        <HeaderContainer>
            <MenuContainer>
               <Logo src={logoImg} />
               <NameTitle>Clark Evangelista</NameTitle>
            </MenuContainer>
            <MenuContainer>
                <MenuList href="/">Home</MenuList>
                <MenuList href="/about">About</MenuList>
                <MenuList>Portfolio</MenuList>
                <MenuList>Contact</MenuList>
            </MenuContainer>
        </HeaderContainer>
    )
}