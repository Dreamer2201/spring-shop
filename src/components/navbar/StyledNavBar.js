import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavList = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
    @media (max-width: 767px) {
        display: none;
    }
    
    @media (min-width: 768px) {
        text-decoration: none;
        font-size: 18px;
        color: #fff;

        &.active {
            color: red;
        };
    }
`;
const StyledNavLinkReg = styled(NavLink)`
    text-decoration: none;
    font-size: 18px;
    color: #fff;
`
const StyledNavLinkLog = styled(NavLink)`
    text-decoration: none;
    font-size: 18px;
    color: #fff;
`
const BtnBurgerMenu = styled.button`
@media (max-width: 767px) {
    display: block;
    width: 50px;
    height: 50px;
}
@media (min-width: 768px) {
    display: none;
}
`

export {StyledNavLink, StyledNavList, StyledNavLinkReg, StyledNavLinkLog, BtnBurgerMenu };