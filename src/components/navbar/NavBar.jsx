import React from 'react';
import { useState } from 'react';
import {StyledNavLink, StyledNavList, StyledNavLinkReg, StyledNavLinkLog, BtnBurgerMenu } from './StyledNavBar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
        <StyledNavList>
            <StyledNavLink to="/"> Home </StyledNavLink>
            <StyledNavLink to="/about"> About us </StyledNavLink>
            <StyledNavLink to="/projects"> Projects </StyledNavLink>
            <StyledNavLinkReg to="/register"> Sign up </StyledNavLinkReg>
            <StyledNavLinkLog to="/login"> Sign in </StyledNavLinkLog>
            {isModalOpen ? <BurgerMenu onClose={toggleModal} /> : <BtnBurgerMenu onClick={toggleModal} type='button'>=</BtnBurgerMenu>}
        </StyledNavList>
  )
}
