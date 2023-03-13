import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Submenu from './Submenu';
import {StyledNavLink, StyledNavList, StyledNavLinkReg, StyledNavLinkLog, BtnBurgerMenu, IconSubMenuProjects, ProjectsWrapper } from './StyledNavBar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubMenuShow, setisSubMenuShow] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  const toggleSubMenu = () => {
    setisSubMenuShow(!isSubMenuShow);
  }

  return (
        <StyledNavList>
            <StyledNavLink to="/"> Home </StyledNavLink>
            <StyledNavLink to="/about"> About us </StyledNavLink>
            <ProjectsWrapper>
                <StyledNavLink to="/projects" onClick={toggleSubMenu}  > Projects 
                <IconSubMenuProjects />
                </StyledNavLink>
                {isSubMenuShow ? <Submenu onClose={toggleSubMenu} /> : <></>}
            </ProjectsWrapper>
            <StyledNavLink to="/news"> News </StyledNavLink>
            <StyledNavLinkReg to="/register"> Sign up </StyledNavLinkReg>
            <StyledNavLinkLog to="/login"> Sign in </StyledNavLinkLog>
            {isModalOpen ? <BurgerMenu onClose={toggleModal} /> : <BtnBurgerMenu onClick={toggleModal} type='button'>=</BtnBurgerMenu>}
        </StyledNavList>
  )
}
