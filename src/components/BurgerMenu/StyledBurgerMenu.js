import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const OverlayModal = styled.div`
    width: 75%;
    height: 100%;
    background-color: grey;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 99;
    background: rgb(239,239,246);
    background: linear-gradient(90deg, rgba(239,239,246,1) 0%, rgba(123,114,112,1) 100%);
`;

const Modal = styled.div`
justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 25px;
    max-width: 100%;
    position: relative;
`
const WellcomeModal = styled.p`
    font-family: "Roboto Condensed";
    font-size: 28px;
    text-decoration: none;
    text-shadow: #FFF 1px 0 4px;
    color: #21130d;
`;
const ItemNavLinkBurger = styled.li`
    margin: 0; 
    padding: 0; 
    margin-bottom: 25px;
`
const BtnUserMenuModal = styled.button`
    position: fixed;
    top: 10px;
    right: 10px;
    color: red;
    font-size: 16px;
    cursor: pointer;
`

const WrapperModalNavMenu = styled.ul`
    @media (max-width: 767px) {
        margin: 0; 
        padding: 0; 
        list-style-type: none;
    }
`;


const NavBurgerLink = styled(NavLink)`
    text-decoration: none;
    text-shadow: #FFF 1px 0 1px;
    font-family: "Roboto Condensed";
    font-size: 28px;
    color: #21130d;
    &.active {
        padding: 5px;
        background-color: rgba(72, 102, 157, .6);
        border-radius: 10px;
      }
`;

const BtnLogOutModal = styled.button`
        padding: 5px 5px;
        text-align: center;
        text-decoration: none;
        text-shadow: #FFF 1px 0 5px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
        font-family: "Roboto Condensed";
        font-size: 28px;
        color: #21130d;
        border: transparent;
        background-color: rgba(230, 230, 250, 0.2);
        &hover,
        &focus {
            background-color: rgba(72, 102, 157, .6);
            color: #2c5777;
}
`;

export {OverlayModal, Modal, BtnUserMenuModal, WrapperModalNavMenu, ItemNavLinkBurger, NavBurgerLink, WellcomeModal, BtnLogOutModal};